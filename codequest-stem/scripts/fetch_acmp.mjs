import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_FILE = path.join(__dirname, '..', 'acmp_tasks.json');

// Fetches all 20 pages (1000 tasks) from acmp.ru when run locally with internet access.
async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = await res.arrayBuffer();
  return new TextDecoder('windows-1251').decode(buf);
}

async function main() {
  const tasks = new Map();
  for (let page = 0; page < 20; page++) {
    const html = await fetchText(`https://acmp.ru/index.asp?main=tasks&str=%20&page=${page}&id_type=0`);
    const rowRe = /id_task=(\d+)[^>]*>([^<]+)<\/a>[\s\S]*?(\d+)%/g;
    let m;
    while ((m = rowRe.exec(html)) !== null) {
      const id = Number(m[1]);
      tasks.set(id, {
        id,
        code: String(id).padStart(4, '0'),
        title: m[2].trim(),
        difficulty: Number(m[3]),
        theme: 'Разное',
        url: `https://acmp.ru/index.asp?main=task&id_task=${id}`,
      });
    }
    console.log(`Page ${page + 1}/20 synced (${tasks.size} tasks)`);
  }

  const sorted = [...tasks.values()].sort((a, b) => a.id - b.id);
  fs.writeFileSync(OUT_FILE, JSON.stringify({ syncedAt: new Date().toISOString(), count: sorted.length, tasks: sorted }, null, 2));
  console.log(`Saved ${sorted.length} tasks to ${OUT_FILE}`);
}

main().catch((err) => {
  console.error('Sync failed:', err.message);
  process.exit(1);
});
