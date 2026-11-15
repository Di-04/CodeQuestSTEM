import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 3000);
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

const hintsBank = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'hints_bank.json'), 'utf-8')
);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
};

// Simple per-IP rate limiter: 20 requests per 60s
const rateBuckets = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateBuckets.get(ip) || { count: 0, resetAt: now + 60_000 };
  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + 60_000;
  }
  entry.count += 1;
  rateBuckets.set(ip, entry);
  return entry.count > 20;
}

const BYPASS_RE =
  /(игнорируй|ignore\s+(all|previous|rules)|готов(ый|ое)\s+(код|ответ|решени)|выведи\s+решени|по\s+частям|переведи\s+готовый|full\s+code|give\s+me\s+the\s+answer|скрыт(ые|ый)\s+тест|hidden\s+test|шешімді\s+бер|дайын\s+код)/i;

function pickLocalFallbackHint(topic, stage, level) {
  const candidates = Object.entries(hintsBank).filter(
    ([id, h]) =>
      id !== 'H_REFUSE_SPOILER' &&
      (h.topic === topic || h.topic === 'general') &&
      (!stage || h.stage === stage || h.topic === 'general')
  );
  const exact =
    candidates.find(([, h]) => h.topic === topic && h.level === Number(level)) ||
    candidates.find(([, h]) => h.topic === topic) ||
    ['H_GEN_1', hintsBank.H_GEN_1];
  return exact[0];
}

async function selectHintWithGemini({ lang, topic, stage, level, question, attempt }) {
  if (!GEMINI_API_KEY) {
    return { hintId: pickLocalFallbackHint(topic, stage, level), mode: 'local_no_key' };
  }

  const allowedIds = Object.entries(hintsBank)
    .filter(([id, h]) => id !== 'H_REFUSE_SPOILER' && (h.topic === topic || h.topic === 'general'))
    .map(([id, h]) => ({ id, stage: h.stage, level: h.level, summary: h.en }));

  const systemPrompt =
    'You are an educational hint-ID router for CodeQuest STEM. ' +
    'Select the single best hintId from the allowed list. ' +
    'NEVER output solutions, code, or free-form text. Output ONLY JSON: {"hintId":"<ID>"}.';

  const userPayload = JSON.stringify({
    lang,
    topic,
    stage,
    requestedLevel: level,
    question: String(question || '').slice(0, 400),
    attemptSnippet: String(attempt || '').slice(0, 300),
    allowedHints: allowedIds,
  });

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(
    GEMINI_MODEL
  )}:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt }] },
        contents: [{ role: 'user', parts: [{ text: userPayload }] }],
        generationConfig: {
          temperature: 0.1,
          maxOutputTokens: 64,
          responseMimeType: 'application/json',
        },
      }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
    const parsed = JSON.parse(raw);
    const chosen = parsed.hintId;
    const isAllowed = allowedIds.some((a) => a.id === chosen) && hintsBank[chosen];
    if (!isAllowed) {
      return { hintId: pickLocalFallbackHint(topic, stage, level), mode: 'local_validated_fallback' };
    }
    return { hintId: chosen, mode: 'gemini' };
  } catch {
    return { hintId: pickLocalFallbackHint(topic, stage, level), mode: 'local_error_fallback' };
  } finally {
    clearTimeout(timer);
  }
}

const server = http.createServer(async (req, res) => {
  const urlPath = (req.url || '/').split('?')[0];

  if (req.method === 'POST' && urlPath === '/hint') {
    const ip = req.socket.remoteAddress || 'unknown';
    if (isRateLimited(ip)) {
      res.writeHead(429, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ ok: false, error: 'rate_limited' }));
    }

    let body = '';
    for await (const chunk of req) {
      body += chunk;
      if (body.length > 8192) {
        res.writeHead(413, { 'Content-Type': 'application/json; charset=utf-8' });
        return res.end(JSON.stringify({ ok: false, error: 'payload_too_large' }));
      }
    }

    let payload = {};
    try {
      payload = JSON.parse(body || '{}');
    } catch {
      res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ ok: false, error: 'invalid_json' }));
    }

    const lang = ['kk', 'ru', 'en'].includes(payload.lang) ? payload.lang : 'ru';
    const topic = String(payload.topic || 'general').slice(0, 40);
    const stage = String(payload.stage || '').slice(0, 40);
    const level = Math.min(3, Math.max(1, Number(payload.level || 1)));
    const question = String(payload.question || '').trim().slice(0, 400);
    const attempt = String(payload.attempt || '').trim().slice(0, 300);

    if (BYPASS_RE.test(question)) {
      const h = hintsBank.H_REFUSE_SPOILER;
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(
        JSON.stringify({
          ok: true,
          mode: 'policy_guard',
          hintId: 'H_REFUSE_SPOILER',
          level: 1,
          text: h[lang] || h.ru,
        })
      );
    }

    const { hintId, mode } = await selectHintWithGemini({
      lang,
      topic,
      stage,
      level,
      question,
      attempt,
    });
    const entry = hintsBank[hintId] || hintsBank.H_GEN_1;
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    return res.end(
      JSON.stringify({
        ok: true,
        mode,
        hintId,
        level: entry.level,
        text: entry[lang] || entry.ru,
      })
    );
  }

  // Static file serving
  const safePath = path.normalize(urlPath === '/' ? '/index.html' : urlPath).replace(/^(\.\.[/\\])+/, '');
  const fullPath = path.join(__dirname, safePath);
  if (!fullPath.startsWith(__dirname) || !fs.existsSync(fullPath) || fs.statSync(fullPath).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Not found');
  }
  const ext = path.extname(fullPath);
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
  fs.createReadStream(fullPath).pipe(res);
});

server.listen(PORT, () => {
  console.log(`CodeQuest STEM server running at http://localhost:${PORT}`);
  console.log(`Gemini mode: ${GEMINI_API_KEY ? `enabled (${GEMINI_MODEL})` : 'local fallback (no GEMINI_API_KEY)'}`);
});
