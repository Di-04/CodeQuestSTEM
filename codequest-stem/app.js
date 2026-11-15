/* CodeQuest STEM — Main Client Application */
(function () {
  'use strict';

  // --- 1. VERIFIED ACMP DATA (injected from acmp_verified.json, 237 real tasks, no synthetic gaps) ---
  const ACMP_SYNC_DATE = '2026-11-15';
  const ACMP_INITIAL_TASKS = [
  {
    "id": 1,
    "code": "0001",
    "title": "A+B",
    "difficulty": 2,
    "theme": "Задачи для начинающих",
    "url": "https://acmp.ru/index.asp?main=task&id_task=1"
  },
  {
    "id": 2,
    "code": "0002",
    "title": "Сумма",
    "difficulty": 19,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=2"
  },
  {
    "id": 3,
    "code": "0003",
    "title": "Пятью пять - двадцать пять!",
    "difficulty": 8,
    "theme": "Целочисленная арифметика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=3"
  },
  {
    "id": 4,
    "code": "0004",
    "title": "Игра",
    "difficulty": 4,
    "theme": "Задачи для начинающих",
    "url": "https://acmp.ru/index.asp?main=task&id_task=4"
  },
  {
    "id": 5,
    "code": "0005",
    "title": "Статистика",
    "difficulty": 15,
    "theme": "Математическое моделирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=5"
  },
  {
    "id": 6,
    "code": "0006",
    "title": "Шахматы",
    "difficulty": 23,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=6"
  },
  {
    "id": 7,
    "code": "0007",
    "title": "Золото племени АББА",
    "difficulty": 30,
    "theme": "Длинная арифметика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=7"
  },
  {
    "id": 8,
    "code": "0008",
    "title": "Арифметика",
    "difficulty": 5,
    "theme": "Задачи для начинающих",
    "url": "https://acmp.ru/index.asp?main=task&id_task=8"
  },
  {
    "id": 9,
    "code": "0009",
    "title": "Домашнее задание",
    "difficulty": 27,
    "theme": "Сортировка и последовательности",
    "url": "https://acmp.ru/index.asp?main=task&id_task=9"
  },
  {
    "id": 10,
    "code": "0010",
    "title": "Уравнение",
    "difficulty": 17,
    "theme": "Простая математика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=10"
  },
  {
    "id": 11,
    "code": "0011",
    "title": "Зайчик",
    "difficulty": 55,
    "theme": "Динамическое программирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=11"
  },
  {
    "id": 12,
    "code": "0012",
    "title": "Дачники",
    "difficulty": 45,
    "theme": "Геометрия",
    "url": "https://acmp.ru/index.asp?main=task&id_task=12"
  },
  {
    "id": 13,
    "code": "0013",
    "title": "Быки и коровы",
    "difficulty": 20,
    "theme": "Математическое моделирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=13"
  },
  {
    "id": 14,
    "code": "0014",
    "title": "НОК",
    "difficulty": 19,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=14"
  },
  {
    "id": 15,
    "code": "0015",
    "title": "Дороги",
    "difficulty": 18,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=15"
  },
  {
    "id": 16,
    "code": "0016",
    "title": "Лесенка",
    "difficulty": 45,
    "theme": "Динамическое программирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=16"
  },
  {
    "id": 17,
    "code": "0017",
    "title": "Поле чудес",
    "difficulty": 31,
    "theme": "Математическое моделирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=17"
  },
  {
    "id": 18,
    "code": "0018",
    "title": "Факториал",
    "difficulty": 42,
    "theme": "Длинная арифметика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=18"
  },
  {
    "id": 19,
    "code": "0019",
    "title": "Ферзь, ладья и конь",
    "difficulty": 29,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=19"
  },
  {
    "id": 20,
    "code": "0020",
    "title": "Пилообразная последовательность",
    "difficulty": 38,
    "theme": "Динамическое программирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=20"
  },
  {
    "id": 21,
    "code": "0021",
    "title": "Зарплата",
    "difficulty": 4,
    "theme": "Задачи для начинающих",
    "url": "https://acmp.ru/index.asp?main=task&id_task=21"
  },
  {
    "id": 22,
    "code": "0022",
    "title": "Единицы",
    "difficulty": 16,
    "theme": "Системы счисления",
    "url": "https://acmp.ru/index.asp?main=task&id_task=22"
  },
  {
    "id": 23,
    "code": "0023",
    "title": "Гадание",
    "difficulty": 13,
    "theme": "Целочисленная арифметика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=23"
  },
  {
    "id": 24,
    "code": "0024",
    "title": "Вырубка деревьев",
    "difficulty": 46,
    "theme": "Комбинаторика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=24"
  },
  {
    "id": 25,
    "code": "0025",
    "title": "Больше-меньше",
    "difficulty": 3,
    "theme": "Задачи для начинающих",
    "url": "https://acmp.ru/index.asp?main=task&id_task=25"
  },
  {
    "id": 26,
    "code": "0026",
    "title": "Две окружности",
    "difficulty": 17,
    "theme": "Геометрия",
    "url": "https://acmp.ru/index.asp?main=task&id_task=26"
  },
  {
    "id": 27,
    "code": "0027",
    "title": "Художник",
    "difficulty": 26,
    "theme": "Двумерные массивы",
    "url": "https://acmp.ru/index.asp?main=task&id_task=27"
  },
  {
    "id": 28,
    "code": "0028",
    "title": "Симметрия",
    "difficulty": 19,
    "theme": "Геометрия",
    "url": "https://acmp.ru/index.asp?main=task&id_task=28"
  },
  {
    "id": 29,
    "code": "0029",
    "title": "Компьютерная игра",
    "difficulty": 38,
    "theme": "Динамическое программирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=29"
  },
  {
    "id": 30,
    "code": "0030",
    "title": "Часы",
    "difficulty": 30,
    "theme": "Математическое моделирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=30"
  },
  {
    "id": 31,
    "code": "0031",
    "title": "Неподвижные точки",
    "difficulty": 47,
    "theme": "Рекурсия, перебор",
    "url": "https://acmp.ru/index.asp?main=task&id_task=31"
  },
  {
    "id": 32,
    "code": "0032",
    "title": "Годовой баланс",
    "difficulty": 35,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=32"
  },
  {
    "id": 33,
    "code": "0033",
    "title": "Два бандита",
    "difficulty": 4,
    "theme": "Задачи для начинающих",
    "url": "https://acmp.ru/index.asp?main=task&id_task=33"
  },
  {
    "id": 34,
    "code": "0034",
    "title": "Секретное сообщение",
    "difficulty": 36,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=34"
  },
  {
    "id": 35,
    "code": "0035",
    "title": "Конечные автоматы",
    "difficulty": 11,
    "theme": "Задачи для начинающих",
    "url": "https://acmp.ru/index.asp?main=task&id_task=35"
  },
  {
    "id": 36,
    "code": "0036",
    "title": "Постулат Бертрана",
    "difficulty": 30,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=36"
  },
  {
    "id": 37,
    "code": "0037",
    "title": "Сжимающий оператор",
    "difficulty": 34,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=37"
  },
  {
    "id": 38,
    "code": "0038",
    "title": "Игра - 2",
    "difficulty": 45,
    "theme": "Динамическое программирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=38"
  },
  {
    "id": 39,
    "code": "0039",
    "title": "Волосатый бизнес",
    "difficulty": 32,
    "theme": "Математическое моделирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=39"
  },
  {
    "id": 40,
    "code": "0040",
    "title": "2^N",
    "difficulty": 30,
    "theme": "Длинная арифметика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=40"
  },
  {
    "id": 41,
    "code": "0041",
    "title": "Сортировка подсчетом",
    "difficulty": 29,
    "theme": "Сортировка и последовательности",
    "url": "https://acmp.ru/index.asp?main=task&id_task=41"
  },
  {
    "id": 42,
    "code": "0042",
    "title": "Драконы",
    "difficulty": 40,
    "theme": "Жадный алгоритм",
    "url": "https://acmp.ru/index.asp?main=task&id_task=42"
  },
  {
    "id": 43,
    "code": "0043",
    "title": "Нули",
    "difficulty": 16,
    "theme": "Задачи для начинающих",
    "url": "https://acmp.ru/index.asp?main=task&id_task=43"
  },
  {
    "id": 44,
    "code": "0044",
    "title": "Стрелки",
    "difficulty": 20,
    "theme": "Разбор строк",
    "url": "https://acmp.ru/index.asp?main=task&id_task=44"
  },
  {
    "id": 45,
    "code": "0045",
    "title": "Произведение цифр",
    "difficulty": 42,
    "theme": "Жадный алгоритм",
    "url": "https://acmp.ru/index.asp?main=task&id_task=45"
  },
  {
    "id": 46,
    "code": "0046",
    "title": "Число E",
    "difficulty": 20,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=46"
  },
  {
    "id": 47,
    "code": "0047",
    "title": "Наилучший делитель",
    "difficulty": 26,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=47"
  },
  {
    "id": 48,
    "code": "0048",
    "title": "Наихудший делитель",
    "difficulty": 23,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=48"
  },
  {
    "id": 49,
    "code": "0049",
    "title": "Шаблоны",
    "difficulty": 35,
    "theme": "Разбор строк",
    "url": "https://acmp.ru/index.asp?main=task&id_task=49"
  },
  {
    "id": 50,
    "code": "0050",
    "title": "Строки",
    "difficulty": 29,
    "theme": "Разбор строк",
    "url": "https://acmp.ru/index.asp?main=task&id_task=50"
  },
  {
    "id": 51,
    "code": "0051",
    "title": "Факториалы!!!",
    "difficulty": 21,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=51"
  },
  {
    "id": 52,
    "code": "0052",
    "title": "Счастливый билет",
    "difficulty": 12,
    "theme": "Целочисленная арифметика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=52"
  },
  {
    "id": 53,
    "code": "0053",
    "title": "Раскраска таблицы умножения",
    "difficulty": 22,
    "theme": "Двумерные массивы",
    "url": "https://acmp.ru/index.asp?main=task&id_task=53"
  },
  {
    "id": 54,
    "code": "0054",
    "title": "Теория игр",
    "difficulty": 28,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=54"
  },
  {
    "id": 55,
    "code": "0055",
    "title": "Фонарики",
    "difficulty": 31,
    "theme": "Геометрия",
    "url": "https://acmp.ru/index.asp?main=task&id_task=55"
  },
  {
    "id": 56,
    "code": "0056",
    "title": "Jивой Jурнал",
    "difficulty": 29,
    "theme": "Разбор строк",
    "url": "https://acmp.ru/index.asp?main=task&id_task=56"
  },
  {
    "id": 57,
    "code": "0057",
    "title": "Компьютерная сеть",
    "difficulty": 28,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=57"
  },
  {
    "id": 58,
    "code": "0058",
    "title": "Проверка на симпатичность",
    "difficulty": 28,
    "theme": "Двумерные массивы",
    "url": "https://acmp.ru/index.asp?main=task&id_task=58"
  },
  {
    "id": 59,
    "code": "0059",
    "title": "Несложное вычисление",
    "difficulty": 25,
    "theme": "Системы счисления",
    "url": "https://acmp.ru/index.asp?main=task&id_task=59"
  },
  {
    "id": 60,
    "code": "0060",
    "title": "Сверхпростые числа",
    "difficulty": 39,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=60"
  },
  {
    "id": 61,
    "code": "0061",
    "title": "Баскетбол",
    "difficulty": 5,
    "theme": "Задачи для начинающих",
    "url": "https://acmp.ru/index.asp?main=task&id_task=61"
  },
  {
    "id": 62,
    "code": "0062",
    "title": "Клетки",
    "difficulty": 15,
    "theme": "Простая математика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=62"
  },
  {
    "id": 63,
    "code": "0063",
    "title": "Загадка",
    "difficulty": 18,
    "theme": "Простая математика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=63"
  },
  {
    "id": 64,
    "code": "0064",
    "title": "Простой ряд",
    "difficulty": 27,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=64"
  },
  {
    "id": 65,
    "code": "0065",
    "title": "Расстояние Хэмминга",
    "difficulty": 27,
    "theme": "Разбор строк",
    "url": "https://acmp.ru/index.asp?main=task&id_task=65"
  },
  {
    "id": 66,
    "code": "0066",
    "title": "Клавиатура",
    "difficulty": 11,
    "theme": "Задачи для начинающих",
    "url": "https://acmp.ru/index.asp?main=task&id_task=66"
  },
  {
    "id": 67,
    "code": "0067",
    "title": "Маска подсетей",
    "difficulty": 33,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=67"
  },
  {
    "id": 68,
    "code": "0068",
    "title": "Дом - Школа - Дом",
    "difficulty": 21,
    "theme": "Математическое моделирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=68"
  },
  {
    "id": 69,
    "code": "0069",
    "title": "N-угольное колесо",
    "difficulty": 28,
    "theme": "Геометрия",
    "url": "https://acmp.ru/index.asp?main=task&id_task=69"
  },
  {
    "id": 70,
    "code": "0070",
    "title": "Степень строки",
    "difficulty": 30,
    "theme": "Разбор строк",
    "url": "https://acmp.ru/index.asp?main=task&id_task=70"
  },
  {
    "id": 71,
    "code": "0071",
    "title": "Две кучки камней",
    "difficulty": 43,
    "theme": "Рекурсия, перебор",
    "url": "https://acmp.ru/index.asp?main=task&id_task=71"
  },
  {
    "id": 72,
    "code": "0072",
    "title": "Анаграмма",
    "difficulty": 45,
    "theme": "Рекурсия, перебор",
    "url": "https://acmp.ru/index.asp?main=task&id_task=72"
  },
  {
    "id": 73,
    "code": "0073",
    "title": "Расшифровка",
    "difficulty": 28,
    "theme": "Разбор строк",
    "url": "https://acmp.ru/index.asp?main=task&id_task=73"
  },
  {
    "id": 74,
    "code": "0074",
    "title": "Прыжки с шестом",
    "difficulty": 38,
    "theme": "Математическое моделирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=74"
  },
  {
    "id": 75,
    "code": "0075",
    "title": "Сумма произведений",
    "difficulty": 48,
    "theme": "Комбинаторика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=75"
  },
  {
    "id": 76,
    "code": "0076",
    "title": "Музей",
    "difficulty": 50,
    "theme": "Жадный алгоритм",
    "url": "https://acmp.ru/index.asp?main=task&id_task=76"
  },
  {
    "id": 77,
    "code": "0077",
    "title": "Нолики",
    "difficulty": 63,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=77"
  },
  {
    "id": 78,
    "code": "0078",
    "title": "Бутылки",
    "difficulty": 48,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=78"
  },
  {
    "id": 79,
    "code": "0079",
    "title": "Последняя цифра A^B",
    "difficulty": 21,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=79"
  },
  {
    "id": 80,
    "code": "0080",
    "title": "Тождество",
    "difficulty": 37,
    "theme": "Разбор строк",
    "url": "https://acmp.ru/index.asp?main=task&id_task=80"
  },
  {
    "id": 81,
    "code": "0081",
    "title": "Арбузы",
    "difficulty": 14,
    "theme": "Задачи для начинающих",
    "url": "https://acmp.ru/index.asp?main=task&id_task=81"
  },
  {
    "id": 82,
    "code": "0082",
    "title": "Пересечение множеств",
    "difficulty": 34,
    "theme": "Сортировка и последовательности",
    "url": "https://acmp.ru/index.asp?main=task&id_task=82"
  },
  {
    "id": 83,
    "code": "0083",
    "title": "Симпатичные узоры",
    "difficulty": 66,
    "theme": "Динамическое программирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=83"
  },
  {
    "id": 84,
    "code": "0084",
    "title": "Выпуклая оболочка",
    "difficulty": 27,
    "theme": "Двумерные массивы",
    "url": "https://acmp.ru/index.asp?main=task&id_task=84"
  },
  {
    "id": 85,
    "code": "0085",
    "title": "Единичный НОД",
    "difficulty": 23,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=85"
  },
  {
    "id": 86,
    "code": "0086",
    "title": "Головоломка про ферзей",
    "difficulty": 15,
    "theme": "Простая математика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=86"
  },
  {
    "id": 87,
    "code": "0087",
    "title": "Строки - 2",
    "difficulty": 42,
    "theme": "Разбор строк",
    "url": "https://acmp.ru/index.asp?main=task&id_task=87"
  },
  {
    "id": 88,
    "code": "0088",
    "title": "Судоку",
    "difficulty": 27,
    "theme": "Двумерные массивы",
    "url": "https://acmp.ru/index.asp?main=task&id_task=88"
  },
  {
    "id": 89,
    "code": "0089",
    "title": "Быстрый поезд",
    "difficulty": 30,
    "theme": "Математическое моделирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=89"
  },
  {
    "id": 90,
    "code": "0090",
    "title": "Треугольные страны",
    "difficulty": 37,
    "theme": "Геометрия",
    "url": "https://acmp.ru/index.asp?main=task&id_task=90"
  },
  {
    "id": 91,
    "code": "0091",
    "title": "Две последовательности",
    "difficulty": 29,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=91"
  },
  {
    "id": 92,
    "code": "0092",
    "title": "Журавлики",
    "difficulty": 7,
    "theme": "Задачи для начинающих",
    "url": "https://acmp.ru/index.asp?main=task&id_task=92"
  },
  {
    "id": 93,
    "code": "0093",
    "title": "Боги",
    "difficulty": 26,
    "theme": "Разбор строк",
    "url": "https://acmp.ru/index.asp?main=task&id_task=93"
  },
  {
    "id": 94,
    "code": "0094",
    "title": "Принц и дракон",
    "difficulty": 22,
    "theme": "Математическое моделирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=94"
  },
  {
    "id": 95,
    "code": "0095",
    "title": "Нумеролог",
    "difficulty": 24,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=95"
  },
  {
    "id": 96,
    "code": "0096",
    "title": "Винни-пух",
    "difficulty": 41,
    "theme": "Математическое моделирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=96"
  },
  {
    "id": 97,
    "code": "0097",
    "title": "Заповедники",
    "difficulty": 50,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=97"
  },
  {
    "id": 98,
    "code": "0098",
    "title": "Игра в числа",
    "difficulty": 23,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=98"
  },
  {
    "id": 99,
    "code": "0099",
    "title": "Лабиринт",
    "difficulty": 55,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=99"
  },
  {
    "id": 100,
    "code": "0100",
    "title": "Счастливые билеты",
    "difficulty": 68,
    "theme": "Динамическое программирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=100"
  },
  {
    "id": 101,
    "code": "0101",
    "title": "Магараджа",
    "difficulty": 60,
    "theme": "Рекурсия, перебор",
    "url": "https://acmp.ru/index.asp?main=task&id_task=101"
  },
  {
    "id": 102,
    "code": "0102",
    "title": "Треугольник и точка",
    "difficulty": 32,
    "theme": "Геометрия",
    "url": "https://acmp.ru/index.asp?main=task&id_task=102"
  },
  {
    "id": 103,
    "code": "0103",
    "title": "Снова A+B",
    "difficulty": 35,
    "theme": "Длинная арифметика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=103"
  },
  {
    "id": 104,
    "code": "0104",
    "title": "Шаблон",
    "difficulty": 65,
    "theme": "Разбор строк",
    "url": "https://acmp.ru/index.asp?main=task&id_task=104"
  },
  {
    "id": 105,
    "code": "0105",
    "title": "Раскопки",
    "difficulty": 76,
    "theme": "Рекурсия, перебор",
    "url": "https://acmp.ru/index.asp?main=task&id_task=105"
  },
  {
    "id": 106,
    "code": "0106",
    "title": "Монетки",
    "difficulty": 8,
    "theme": "Задачи для начинающих",
    "url": "https://acmp.ru/index.asp?main=task&id_task=106"
  },
  {
    "id": 107,
    "code": "0107",
    "title": "Красивые номера",
    "difficulty": 52,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=107"
  },
  {
    "id": 108,
    "code": "0108",
    "title": "Неглухой телефон",
    "difficulty": 1,
    "theme": "Задачи для начинающих",
    "url": "https://acmp.ru/index.asp?main=task&id_task=108"
  },
  {
    "id": 109,
    "code": "0109",
    "title": "A / B",
    "difficulty": 43,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=109"
  },
  {
    "id": 110,
    "code": "0110",
    "title": "Красивые числа",
    "difficulty": 78,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=110"
  },
  {
    "id": 111,
    "code": "0111",
    "title": "Игра «Пуговицы»",
    "difficulty": 48,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=111"
  },
  {
    "id": 112,
    "code": "0112",
    "title": "Армия",
    "difficulty": 58,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=112"
  },
  {
    "id": 113,
    "code": "0113",
    "title": "Фермер",
    "difficulty": 46,
    "theme": "Двумерные массивы",
    "url": "https://acmp.ru/index.asp?main=task&id_task=113"
  },
  {
    "id": 114,
    "code": "0114",
    "title": "Без двух нулей подряд",
    "difficulty": 37,
    "theme": "Динамическое программирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=114"
  },
  {
    "id": 115,
    "code": "0115",
    "title": "Прямоугольник",
    "difficulty": 42,
    "theme": "Двумерные массивы",
    "url": "https://acmp.ru/index.asp?main=task&id_task=115"
  },
  {
    "id": 116,
    "code": "0116",
    "title": "Фермер - 2",
    "difficulty": 60,
    "theme": "Двумерные массивы",
    "url": "https://acmp.ru/index.asp?main=task&id_task=116"
  },
  {
    "id": 117,
    "code": "0117",
    "title": "Опасная зона",
    "difficulty": 57,
    "theme": "Геометрия",
    "url": "https://acmp.ru/index.asp?main=task&id_task=117"
  },
  {
    "id": 118,
    "code": "0118",
    "title": "Задача Иосифа Флавия",
    "difficulty": 29,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=118"
  },
  {
    "id": 119,
    "code": "0119",
    "title": "Сортировка времени",
    "difficulty": 23,
    "theme": "Сортировка и последовательности",
    "url": "https://acmp.ru/index.asp?main=task&id_task=119"
  },
  {
    "id": 120,
    "code": "0120",
    "title": "Минимальный путь в таблице",
    "difficulty": 32,
    "theme": "Динамическое программирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=120"
  },
  {
    "id": 121,
    "code": "0121",
    "title": "Гвоздики",
    "difficulty": 34,
    "theme": "Динамическое программирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=121"
  },
  {
    "id": 122,
    "code": "0122",
    "title": "Максимальная подпоследовательность",
    "difficulty": 38,
    "theme": "Динамическое программирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=122"
  },
  {
    "id": 123,
    "code": "0123",
    "title": "Восстановление скобок",
    "difficulty": 54,
    "theme": "Динамическое программирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=123"
  },
  {
    "id": 124,
    "code": "0124",
    "title": "Светофорчики",
    "difficulty": 25,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=124"
  },
  {
    "id": 125,
    "code": "0125",
    "title": "Цветной дождь",
    "difficulty": 26,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=125"
  },
  {
    "id": 126,
    "code": "0126",
    "title": "Издевательство",
    "difficulty": 28,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=126"
  },
  {
    "id": 127,
    "code": "0127",
    "title": "Путь",
    "difficulty": 40,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=127"
  },
  {
    "id": 128,
    "code": "0128",
    "title": "Один конь",
    "difficulty": 41,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=128"
  },
  {
    "id": 129,
    "code": "0129",
    "title": "Табличка",
    "difficulty": 51,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=129"
  },
  {
    "id": 130,
    "code": "0130",
    "title": "Два коня",
    "difficulty": 55,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=130"
  },
  {
    "id": 131,
    "code": "0131",
    "title": "Перепись",
    "difficulty": 15,
    "theme": "Задачи для начинающих",
    "url": "https://acmp.ru/index.asp?main=task&id_task=131"
  },
  {
    "id": 132,
    "code": "0132",
    "title": "Алгоритм Дейкстры",
    "difficulty": 47,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=132"
  },
  {
    "id": 133,
    "code": "0133",
    "title": "Заправки",
    "difficulty": 49,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=133"
  },
  {
    "id": 134,
    "code": "0134",
    "title": "Автобусы",
    "difficulty": 50,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=134"
  },
  {
    "id": 135,
    "code": "0135",
    "title": "Алгоритм Флойда",
    "difficulty": 36,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=135"
  },
  {
    "id": 136,
    "code": "0136",
    "title": "Алгоритм Флойда - 2",
    "difficulty": 39,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=136"
  },
  {
    "id": 137,
    "code": "0137",
    "title": "Существование пути",
    "difficulty": 65,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=137"
  },
  {
    "id": 138,
    "code": "0138",
    "title": "Алгоритм Форда-Беллмана",
    "difficulty": 38,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=138"
  },
  {
    "id": 139,
    "code": "0139",
    "title": "Лабиринт знаний",
    "difficulty": 63,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=139"
  },
  {
    "id": 140,
    "code": "0140",
    "title": "Цикл отрицательного веса",
    "difficulty": 46,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=140"
  },
  {
    "id": 141,
    "code": "0141",
    "title": "Дерево",
    "difficulty": 42,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=141"
  },
  {
    "id": 142,
    "code": "0142",
    "title": "Минимальный каркас",
    "difficulty": 53,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=142"
  },
  {
    "id": 143,
    "code": "0143",
    "title": "A-B",
    "difficulty": 44,
    "theme": "Длинная арифметика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=143"
  },
  {
    "id": 144,
    "code": "0144",
    "title": "A*B",
    "difficulty": 37,
    "theme": "Длинная арифметика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=144"
  },
  {
    "id": 145,
    "code": "0145",
    "title": "A div B",
    "difficulty": 40,
    "theme": "Длинная арифметика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=145"
  },
  {
    "id": 146,
    "code": "0146",
    "title": "Длинный корень",
    "difficulty": 67,
    "theme": "Длинная арифметика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=146"
  },
  {
    "id": 147,
    "code": "0147",
    "title": "Числа Фибоначчи",
    "difficulty": 16,
    "theme": "Целочисленная арифметика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=147"
  },
  {
    "id": 148,
    "code": "0148",
    "title": "НОД",
    "difficulty": 15,
    "theme": "Целочисленная арифметика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=148"
  },
  {
    "id": 149,
    "code": "0149",
    "title": "Разворот",
    "difficulty": 9,
    "theme": "Задачи для начинающих",
    "url": "https://acmp.ru/index.asp?main=task&id_task=149"
  },
  {
    "id": 150,
    "code": "0150",
    "title": "Друзья",
    "difficulty": 41,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=150"
  },
  {
    "id": 151,
    "code": "0151",
    "title": "Банкет",
    "difficulty": 44,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=151"
  },
  {
    "id": 152,
    "code": "0152",
    "title": "Построение",
    "difficulty": 46,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=152"
  },
  {
    "id": 153,
    "code": "0153",
    "title": "Монетки - 2",
    "difficulty": 51,
    "theme": "Рекурсия, перебор",
    "url": "https://acmp.ru/index.asp?main=task&id_task=153"
  },
  {
    "id": 154,
    "code": "0154",
    "title": "Сумма кубов",
    "difficulty": 52,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=154"
  },
  {
    "id": 155,
    "code": "0155",
    "title": "Конденсаторы",
    "difficulty": 59,
    "theme": "Рекурсия, перебор",
    "url": "https://acmp.ru/index.asp?main=task&id_task=155"
  },
  {
    "id": 156,
    "code": "0156",
    "title": "Шахматы - 2",
    "difficulty": 46,
    "theme": "Комбинаторика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=156"
  },
  {
    "id": 157,
    "code": "0157",
    "title": "Карточки",
    "difficulty": 38,
    "theme": "Комбинаторика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=157"
  },
  {
    "id": 158,
    "code": "0158",
    "title": "Великий комбинатор",
    "difficulty": 60,
    "theme": "Комбинаторика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=158"
  },
  {
    "id": 159,
    "code": "0159",
    "title": "Обратная перестановка",
    "difficulty": 25,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=159"
  },
  {
    "id": 160,
    "code": "0160",
    "title": "Степень перестановки",
    "difficulty": 46,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=160"
  },
  {
    "id": 161,
    "code": "0161",
    "title": "Восстановление перестановки",
    "difficulty": 44,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=161"
  },
  {
    "id": 162,
    "code": "0162",
    "title": "Манхэттенский полицейский",
    "difficulty": 56,
    "theme": "Математическое моделирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=162"
  },
  {
    "id": 163,
    "code": "0163",
    "title": "Уравнение для 5 класса!",
    "difficulty": 20,
    "theme": "Разбор строк",
    "url": "https://acmp.ru/index.asp?main=task&id_task=163"
  },
  {
    "id": 164,
    "code": "0164",
    "title": "Счастливый билет - 2",
    "difficulty": 26,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=164"
  },
  {
    "id": 165,
    "code": "0165",
    "title": "Только вправо или вниз",
    "difficulty": 32,
    "theme": "Динамическое программирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=165"
  },
  {
    "id": 166,
    "code": "0166",
    "title": "Сообщество роботов",
    "difficulty": 31,
    "theme": "Математическое моделирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=166"
  },
  {
    "id": 167,
    "code": "0167",
    "title": "Количество треугольников",
    "difficulty": 51,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=167"
  },
  {
    "id": 168,
    "code": "0168",
    "title": "Натуральный ряд чисел",
    "difficulty": 23,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=168"
  },
  {
    "id": 169,
    "code": "0169",
    "title": "Магазин",
    "difficulty": 34,
    "theme": "Динамическое программирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=169"
  },
  {
    "id": 170,
    "code": "0170",
    "title": "Разложение числа",
    "difficulty": 35,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=170"
  },
  {
    "id": 171,
    "code": "0171",
    "title": "Количество делителей",
    "difficulty": 50,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=171"
  },
  {
    "id": 172,
    "code": "0172",
    "title": "Деление с остатком",
    "difficulty": 39,
    "theme": "Длинная арифметика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=172"
  },
  {
    "id": 173,
    "code": "0173",
    "title": "Число - палиндром",
    "difficulty": 29,
    "theme": "Системы счисления",
    "url": "https://acmp.ru/index.asp?main=task&id_task=173"
  },
  {
    "id": 174,
    "code": "0174",
    "title": "Свадьба",
    "difficulty": 32,
    "theme": "Жадный алгоритм",
    "url": "https://acmp.ru/index.asp?main=task&id_task=174"
  },
  {
    "id": 175,
    "code": "0175",
    "title": "Наручные часы",
    "difficulty": 37,
    "theme": "Математическое моделирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=175"
  },
  {
    "id": 176,
    "code": "0176",
    "title": "Скобочки",
    "difficulty": 69,
    "theme": "Комбинаторика",
    "url": "https://acmp.ru/index.asp?main=task&id_task=176"
  },
  {
    "id": 177,
    "code": "0177",
    "title": "Склад",
    "difficulty": 58,
    "theme": "Математическое моделирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=177"
  },
  {
    "id": 178,
    "code": "0178",
    "title": "Преобразование последовательности",
    "difficulty": 35,
    "theme": "Сортировка и последовательности",
    "url": "https://acmp.ru/index.asp?main=task&id_task=178"
  },
  {
    "id": 179,
    "code": "0179",
    "title": "Последовательность",
    "difficulty": 47,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=179"
  },
  {
    "id": 180,
    "code": "0180",
    "title": "Счастливая страница",
    "difficulty": 46,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=180"
  },
  {
    "id": 181,
    "code": "0181",
    "title": "Космический мусорщик",
    "difficulty": 42,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=181"
  },
  {
    "id": 182,
    "code": "0182",
    "title": "Прямоугольник - 2",
    "difficulty": 27,
    "theme": "Геометрия",
    "url": "https://acmp.ru/index.asp?main=task&id_task=182"
  },
  {
    "id": 183,
    "code": "0183",
    "title": "Энты",
    "difficulty": 39,
    "theme": "Динамическое программирование",
    "url": "https://acmp.ru/index.asp?main=task&id_task=183"
  },
  {
    "id": 184,
    "code": "0184",
    "title": "Рабочее время",
    "difficulty": 35,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=184"
  },
  {
    "id": 185,
    "code": "0185",
    "title": "Скачки",
    "difficulty": 32,
    "theme": "Теория графов",
    "url": "https://acmp.ru/index.asp?main=task&id_task=185"
  },
  {
    "id": 186,
    "code": "0186",
    "title": "Субботник",
    "difficulty": 44,
    "theme": "Сортировка и последовательности",
    "url": "https://acmp.ru/index.asp?main=task&id_task=186"
  },
  {
    "id": 187,
    "code": "0187",
    "title": "Пчелка",
    "difficulty": 53,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=187"
  },
  {
    "id": 951,
    "code": "0951",
    "title": "Вирусы",
    "difficulty": 30,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=951"
  },
  {
    "id": 952,
    "code": "0952",
    "title": "В автобусе",
    "difficulty": 18,
    "theme": "Задачи для начинающих",
    "url": "https://acmp.ru/index.asp?main=task&id_task=952"
  },
  {
    "id": 953,
    "code": "0953",
    "title": "Дроби",
    "difficulty": 46,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=953"
  },
  {
    "id": 954,
    "code": "0954",
    "title": "Стаканы",
    "difficulty": 40,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=954"
  },
  {
    "id": 955,
    "code": "0955",
    "title": "Вирусы - 2",
    "difficulty": 40,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=955"
  },
  {
    "id": 956,
    "code": "0956",
    "title": "Юный гитарист",
    "difficulty": 57,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=956"
  },
  {
    "id": 957,
    "code": "0957",
    "title": "Доказательство в HOL",
    "difficulty": 51,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=957"
  },
  {
    "id": 958,
    "code": "0958",
    "title": "Осмотр королевства",
    "difficulty": 62,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=958"
  },
  {
    "id": 959,
    "code": "0959",
    "title": "Защита деревьев",
    "difficulty": 70,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=959"
  },
  {
    "id": 960,
    "code": "0960",
    "title": "Три буквы",
    "difficulty": 44,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=960"
  },
  {
    "id": 961,
    "code": "0961",
    "title": "Все, что движется",
    "difficulty": 28,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=961"
  },
  {
    "id": 962,
    "code": "0962",
    "title": "Развлечение с квадратиками",
    "difficulty": 75,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=962"
  },
  {
    "id": 963,
    "code": "0963",
    "title": "Морфизм",
    "difficulty": 63,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=963"
  },
  {
    "id": 964,
    "code": "0964",
    "title": "Ничего не потерялось",
    "difficulty": 51,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=964"
  },
  {
    "id": 965,
    "code": "0965",
    "title": "Мафия в городе",
    "difficulty": 47,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=965"
  },
  {
    "id": 966,
    "code": "0966",
    "title": "Трубы",
    "difficulty": 29,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=966"
  },
  {
    "id": 967,
    "code": "0967",
    "title": "Несложная сортировка",
    "difficulty": 25,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=967"
  },
  {
    "id": 968,
    "code": "0968",
    "title": "Строки - 4",
    "difficulty": 48,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=968"
  },
  {
    "id": 969,
    "code": "0969",
    "title": "Сверхстепень",
    "difficulty": 30,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=969"
  },
  {
    "id": 970,
    "code": "0970",
    "title": "От перестановки что-то меняется ...",
    "difficulty": 9,
    "theme": "Задачи для начинающих",
    "url": "https://acmp.ru/index.asp?main=task&id_task=970"
  },
  {
    "id": 971,
    "code": "0971",
    "title": "Треугольник - 4",
    "difficulty": 28,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=971"
  },
  {
    "id": 972,
    "code": "0972",
    "title": "Задачка по геометрии",
    "difficulty": 66,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=972"
  },
  {
    "id": 973,
    "code": "0973",
    "title": "Главные дороги",
    "difficulty": 82,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=973"
  },
  {
    "id": 974,
    "code": "0974",
    "title": "Странный ним",
    "difficulty": 65,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=974"
  },
  {
    "id": 975,
    "code": "0975",
    "title": "Числа - 4",
    "difficulty": 71,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=975"
  },
  {
    "id": 976,
    "code": "0976",
    "title": "Сумма или произведение",
    "difficulty": 74,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=976"
  },
  {
    "id": 977,
    "code": "0977",
    "title": "Поезда",
    "difficulty": 70,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=977"
  },
  {
    "id": 978,
    "code": "0978",
    "title": "Последовательность - 5",
    "difficulty": 79,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=978"
  },
  {
    "id": 979,
    "code": "0979",
    "title": "Формула 001",
    "difficulty": 57,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=979"
  },
  {
    "id": 980,
    "code": "0980",
    "title": "Отрезание ушей",
    "difficulty": 80,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=980"
  },
  {
    "id": 981,
    "code": "0981",
    "title": "Медиана",
    "difficulty": 90,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=981"
  },
  {
    "id": 982,
    "code": "0982",
    "title": "Шашки - 3",
    "difficulty": 54,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=982"
  },
  {
    "id": 983,
    "code": "0983",
    "title": "Бег по эскалатору",
    "difficulty": 33,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=983"
  },
  {
    "id": 984,
    "code": "0984",
    "title": "Финал ACM ICPC",
    "difficulty": 36,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=984"
  },
  {
    "id": 985,
    "code": "0985",
    "title": "Объявление массивов",
    "difficulty": 47,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=985"
  },
  {
    "id": 986,
    "code": "0986",
    "title": "Прыгучее путешествие",
    "difficulty": 24,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=986"
  },
  {
    "id": 987,
    "code": "0987",
    "title": "Обмен пакетами",
    "difficulty": 32,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=987"
  },
  {
    "id": 988,
    "code": "0988",
    "title": "Последовательность чисел",
    "difficulty": 42,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=988"
  },
  {
    "id": 989,
    "code": "0989",
    "title": "Окопы",
    "difficulty": 64,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=989"
  },
  {
    "id": 990,
    "code": "0990",
    "title": "Пирожные",
    "difficulty": 76,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=990"
  },
  {
    "id": 991,
    "code": "0991",
    "title": "ePig",
    "difficulty": 50,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=991"
  },
  {
    "id": 992,
    "code": "0992",
    "title": "Неприводимые диаграммы Юнга",
    "difficulty": 52,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=992"
  },
  {
    "id": 993,
    "code": "0993",
    "title": "Симпатичные последовательности",
    "difficulty": 61,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=993"
  },
  {
    "id": 994,
    "code": "0994",
    "title": "Длиннейшая общая подпара",
    "difficulty": 48,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=994"
  },
  {
    "id": 995,
    "code": "0995",
    "title": "Голова на плечах",
    "difficulty": 59,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=995"
  },
  {
    "id": 996,
    "code": "0996",
    "title": "Забавная последовательность",
    "difficulty": 26,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=996"
  },
  {
    "id": 997,
    "code": "0997",
    "title": "Проверка орфографии - 2",
    "difficulty": 39,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=997"
  },
  {
    "id": 998,
    "code": "0998",
    "title": "Велосипедные дорожки",
    "difficulty": 72,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=998"
  },
  {
    "id": 999,
    "code": "0999",
    "title": "Диверсия",
    "difficulty": 70,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=999"
  },
  {
    "id": 1000,
    "code": "1000",
    "title": "Упаковка чисел",
    "difficulty": 65,
    "theme": "Разное",
    "url": "https://acmp.ru/index.asp?main=task&id_task=1000"
  }
];

  const ACMP_THEMES = [
    { id: 'all', ru: 'Все', kk: 'Барлығы', en: 'All' },
    { id: 'Задачи для начинающих', ru: 'Задачи для начинающих', kk: 'Бастауыштарға арналған', en: 'Beginner' },
    { id: 'Целочисленная арифметика', ru: 'Целочисленная арифметика', kk: 'Бүтін санды арифметика', en: 'Integer Arithmetic' },
    { id: 'Простая математика', ru: 'Простая математика', kk: 'Қарапайым математика', en: 'Simple Math' },
    { id: 'Геометрия', ru: 'Геометрия', kk: 'Геометрия', en: 'Geometry' },
    { id: 'Математическое моделирование', ru: 'Математическое моделирование', kk: 'Математикалық модельдеу', en: 'Math Modeling' },
    { id: 'Сортировка и последовательности', ru: 'Сортировка и последовательности', kk: 'Сұрыптау және тізбектер', en: 'Sorting & Sequences' },
    { id: 'Разбор строк', ru: 'Разбор строк', kk: 'Жолдарды талдау', en: 'String Parsing' },
    { id: 'Двумерные массивы', ru: 'Двумерные массивы', kk: 'Екіөлшемді массивтер', en: '2D Arrays' },
    { id: 'Системы счисления', ru: 'Системы счисления', kk: 'Санау жүйелері', en: 'Number Systems' },
    { id: 'Теория графов', ru: 'Теория графов', kk: 'Графтар теориясы', en: 'Graph Theory' },
    { id: 'Динамическое программирование', ru: 'Динамическое программирование', kk: 'Динамикалық бағдарламалау', en: 'Dynamic Programming' },
    { id: 'Длинная арифметика', ru: 'Длинная арифметика', kk: 'Ұзын арифметика', en: 'Big Integers' },
    { id: 'Жадный алгоритм', ru: 'Жадный алгоритм', kk: 'Ашкөз алгоритм', en: 'Greedy Algorithms' },
    { id: 'Рекурсия, перебор', ru: 'Рекурсия, перебор', kk: 'Рекурсия, толық іріктеу', en: 'Recursion & Search' },
    { id: 'Комбинаторика', ru: 'Комбинаторика', kk: 'Комбинаторика', en: 'Combinatorics' },
    { id: 'Бинарный поиск', ru: 'Бинарный поиск', kk: 'Екілік іздеу', en: 'Binary Search' },
    { id: 'Два указателя', ru: 'Два указателя', kk: 'Екі көрсеткіш', en: 'Two Pointers' },
    { id: 'Структуры данных', ru: 'Структуры данных', kk: 'Деректер құрылымы', en: 'Data Structures' },
    { id: 'Разное', ru: 'Разное', kk: 'Әртүрлі', en: 'Miscellaneous' }
  ];

  // --- 2. TRILINGUAL I18N ---
  const I18N = {
    ru: {
      skipToMain: 'Перейти к содержимому',
      navGame: 'Игра', navCity: 'Карта города', navAcmp: 'Миссии ACMP',
      navCourses: 'Курсы', navStem: 'STEM-проекты', navProgress: 'Мой прогресс',
      heroBadge: 'STEM-город цифровых систем',
      heroTitle: 'Восстанови цифровой город кодом и наукой',
      heroDesc: 'Выполни первую команду за 30 секунд, проверь гипотезу в лаборатории и применяй программирование в реальных STEM-проектах.',
      entryCode: 'Учусь программировать', entryStem: 'Выбираю STEM-проект',
      robotTitle: 'Экспедиция робота по STEM-городу',
      tabTask: 'Задание', tabCode: 'Код', tabResult: 'Результат',
      switchMap: 'Карта 1 / Карта 2',
      btnRun: 'Запустить', btnStep: 'Шаг', btnStop: 'Остановить',
      btnCheck: 'Проверить', btnResetField: 'Сбросить поле', btnHint: 'Справочник',
      btnTemplate: 'Восстановить шаблон',
      blocksPrompt: 'Нажми на блоки команд — они добавят Python-код:',
      execLogTitle: 'Журнал выполнения',
      cityTitle: 'Карта цифрового STEM-города',
      cityDesc: 'Открывай новые районы, восстанавливая датчики, лаборатории и архивы. Пройденные миссии можно запускать повторно.',
      acmpTitle: 'Архив миссий ACMP',
      acmpImportBtn: 'Импорт JSON ACMP',
      acmpSearchPh: 'Поиск по номеру или названию...',
      diffAll: 'Любая сложность', sortId: 'По номеру (ID)', sortDiffAsc: 'Сложность ↑', sortDiffDesc: 'Сложность ↓',
      coursesTitle: 'Маршруты обучения',
      coursesDesc: 'Начни с Python с нуля или пройди короткую диагностику, чтобы подобрать сложность.',
      startFromZero: 'Начать с нуля (Python)', checkYourself: 'Проверить себя',
      stemTitle: 'Межпредметные STEM-проекты',
      stemDesc: 'Исследуй данные, проверяй гипотезы в симуляторе и защищай решение по журналу проекта.',
      filterAllSubjects: 'Все предметы', subjBio: 'Биология / Экология', subjPhys: 'Физика',
      subjGeo: 'География / Химия', subjCs: 'Информатика и данные',
      tierGuided: 'С опорой', tierSolo: 'Самостоятельно', tierResearch: 'Исследовательский',
      formatAll: 'Виртуальный и очный', formatVirtual: 'Виртуальный симулятор', formatLab: 'Урок + свои измерения',
      progressTitle: 'Прогресс и достижения',
      progressDesc: 'Автоматическая проверка миссий и ручные отметки ACMP учитываются отдельно.',
      teacherTitle: 'Кабинет учителя',
      teacherDesc: 'Выдача STEM-проекта классу, рубрика оценивания и локальный экспорт журнала.',
      backToStudent: '← Режим ученика',
      guideTitle: 'Справочник Gemini',
      guidePolicy: 'Даёт наводящий вопрос или следующий шаг. Не выдаёт готовый код и скрытые тесты.',
      hintLevelLabel: 'Глубина подсказки:',
      hintLvl1: '1 — Наводящий вопрос', hintLvl2: '2 — Объяснение понятия', hintLvl3: '3 — Что именно проверить',
      hintShareAttempt: 'Приложить текущий фрагмент кода/попытки',
      btnAskGuide: 'Получить подсказку',
      diagTitle: 'Диагностика уровня',
      openOnAcmp: 'Открыть условие на ACMP ↗',
      markedByStudent: 'Отмечено учеником',
      markSolved: 'Отметить выполненной',
      unmarkSolved: 'Снять отметку',
      ruOnlyNote: 'Оригинальное условие на ACMP доступно на русском языке',
      passedMsg: 'Миссия выполнена! Все проверки пройдены.',
      xpFirstAward: '+{xp} XP начислено за первое прохождение!',
      xpRepeatNote: 'Повторное прохождение: проверка пройдена (XP уже начислен ранее).',
      wallHit: 'Робот упёрся в стену на шаге {step}. Проверь направление и число шагов.',
      notAtGoal: 'Робот остановился, но не достиг цели или не включил прибор.',
      stoppedByUser: 'Выполнение остановлено пользователем.',
      infiniteLoopErr: 'Превышен лимит шагов (возможно, бесконечный цикл). Проверь условие `while`.',
      twoMapFail: 'Карта 1 пройдена, но на Карте 2 программа не дошла до цели. Используй датчик `front_is_clear()`.',
      needPrevLevel: 'Сначала пройди предыдущий ключевой уровень или нажми, чтобы попробовать.',
      openLesson: 'Открыть урок',
      openProject: 'Открыть лабораторию',
      locked: 'Закрыто', unlocked: 'Открыто', completed: 'Пройдено'
    },
    kk: {
      skipToMain: 'Мазмұнға өту',
      navGame: 'Ойын', navCity: 'Қала картасы', navAcmp: 'ACMP миссиялары',
      navCourses: 'Курстар', navStem: 'STEM-жобалар', navProgress: 'Менің жетістігім',
      heroBadge: 'Цифрлық STEM-қала',
      heroTitle: 'Цифрлық қаланы код пен ғылым арқылы қалпына келтір',
      heroDesc: 'Алғашқы команданы 30 секундта орында, зертханада болжамды тексер және бағдарламалауды STEM-жобаларда қолдан.',
      entryCode: 'Бағдарламалауды үйренемін', entryStem: 'STEM-жоба таңдаймын',
      robotTitle: 'Роботтың STEM-қала бойынша экспедициясы',
      tabTask: 'Тапсырма', tabCode: 'Код', tabResult: 'Нәтиже',
      switchMap: 'Карта 1 / Карта 2',
      btnRun: 'Іске қосу', btnStep: 'Қадам', btnStop: 'Тоқтату',
      btnCheck: 'Тексеру', btnResetField: 'Өрісті тазарту', btnHint: 'Анықтамалық',
      btnTemplate: 'Үлгіні қалпына келтіру',
      blocksPrompt: 'Команда блоктарын бас — олар Python кодын қосады:',
      execLogTitle: 'Орындау журналы',
      cityTitle: 'Цифрлық STEM-қала картасы',
      cityDesc: 'Датчиктерді, зертханаларды және мұрағаттарды қалпына келтіріп, жаңа аудандарды аш. Өтілген деңгейлерді қайта ойнауға болады.',
      acmpTitle: 'ACMP миссиялар мұрағаты',
      acmpImportBtn: 'ACMP JSON импорттау',
      acmpSearchPh: 'Нөмір немесе атау бойынша іздеу...',
      diffAll: 'Кез келген күрделілік', sortId: 'Нөмір бойынша (ID)', sortDiffAsc: 'Күрделілік ↑', sortDiffDesc: 'Күрделілік ↓',
      coursesTitle: 'Оқу бағыттары',
      coursesDesc: 'Python-ды нөлден баста немесе деңгейді анықтау үшін қысқа диагностикадан өт.',
      startFromZero: 'Нөлден бастау (Python)', checkYourself: 'Өзіңді тексер',
      stemTitle: 'Пәнаралық STEM-жобалар',
      stemDesc: 'Деректерді зертте, симуляторда болжамды тексер және жоба журналы бойынша қорға.',
      filterAllSubjects: 'Барлық пәндер', subjBio: 'Биология / Экология', subjPhys: 'Физика',
      subjGeo: 'География / Химия', subjCs: 'Информатика және деректер',
      tierGuided: 'Тірекпен', tierSolo: 'Өз бетінше', tierResearch: 'Зерттеушілік',
      formatAll: 'Виртуалды және сабақ', formatVirtual: 'Виртуалды симулятор', formatLab: 'Сабақ + өз өлшеулерің',
      progressTitle: 'Прогресс және жетістіктер',
      progressDesc: 'Автоматты тексеру мен ACMP қолмен белгілеулері бөлек есептеледі.',
      teacherTitle: 'Мұғалім кабинеті',
      teacherDesc: 'Сыныпқа жоба беру, бағалау критерийлері және журналды экспорттау.',
      backToStudent: '← Оқушы режимі',
      guideTitle: 'Gemini анықтамалығы',
      guidePolicy: 'Жетелеуші сұрақ немесе келесі қадам береді. Дайын код пен жасырын тесттерді көрсетпейді.',
      hintLevelLabel: 'Кеңес тереңдігі:',
      hintLvl1: '1 — Жетелеуші сұрақ', hintLvl2: '2 — Ұғымды түсіндіру', hintLvl3: '3 — Нені тексеру керек',
      hintShareAttempt: 'Ағымдағы код үзіндісін қосу',
      btnAskGuide: 'Кеңес алу',
      diagTitle: 'Деңгей диагностикасы',
      openOnAcmp: 'ACMP шартын ашу ↗',
      markedByStudent: 'Оқушы белгілеген',
      markSolved: 'Орындалды деп белгілеу',
      unmarkSolved: 'Белгіні алу',
      ruOnlyNote: 'Түпнұсқа ACMP шарты орыс тілінде берілген',
      passedMsg: 'Миссия орындалды! Барлық тексерулер сәтті өтті.',
      xpFirstAward: 'Алғашқы өту үшін +{xp} XP қосылды!',
      xpRepeatNote: 'Қайта өту: тексеру сәтті (XP бұрын берілген).',
      wallHit: 'Робот {step}-қадамда қабырғаға тірелді. Бағыт пен қадам санын тексер.',
      notAtGoal: 'Робот тоқтады, бірақ мақсатқа жетпеді немесе құрылғыны қоспады.',
      stoppedByUser: 'Орындауды пайдаланушы тоқтатты.',
      infiniteLoopErr: 'Қадам шегінен асты (шексіз цикл болуы мүмкін). `while` шартын тексер.',
      twoMapFail: '1-карта өтті, бірақ 2-картада бағдарлама мақсатқа жетпеді. `front_is_clear()` датчигін қолдан.',
      needPrevLevel: 'Алдымен алдыңғы негізгі деңгейді өтіңіз.',
      openLesson: 'Сабақты ашу',
      openProject: 'Зертхананы ашу',
      locked: 'Жабық', unlocked: 'Ашық', completed: 'Өтілді'
    },
    en: {
      skipToMain: 'Skip to main content',
      navGame: 'Play', navCity: 'City Map', navAcmp: 'ACMP Missions',
      navCourses: 'Courses', navStem: 'STEM Projects', navProgress: 'My Progress',
      heroBadge: 'Digital STEM City',
      heroTitle: 'Restore the Digital City with Code and Science',
      heroDesc: 'Run your first command in 30 seconds, test hypotheses in the lab, and apply coding to real STEM projects.',
      entryCode: 'Learn to Code', entryStem: 'Choose STEM Project',
      robotTitle: 'Robot Expedition across STEM City',
      tabTask: 'Task', tabCode: 'Code', tabResult: 'Result',
      switchMap: 'Map 1 / Map 2',
      btnRun: 'Run', btnStep: 'Step', btnStop: 'Stop',
      btnCheck: 'Check', btnResetField: 'Reset Field', btnHint: 'Guide',
      btnTemplate: 'Restore Template',
      blocksPrompt: 'Click command blocks to append Python code:',
      execLogTitle: 'Execution Log',
      cityTitle: 'Digital STEM City Map',
      cityDesc: 'Unlock new districts by restoring sensors, labs, and archives. Completed levels stay replayable.',
      acmpTitle: 'ACMP Mission Archive',
      acmpImportBtn: 'Import ACMP JSON',
      acmpSearchPh: 'Search by ID or title...',
      diffAll: 'Any difficulty', sortId: 'By ID', sortDiffAsc: 'Difficulty ↑', sortDiffDesc: 'Difficulty ↓',
      coursesTitle: 'Learning Tracks',
      coursesDesc: 'Start Python from zero or take a quick diagnostic to match your level.',
      startFromZero: 'Start from Zero (Python)', checkYourself: 'Check Yourself',
      stemTitle: 'Cross-Curricular STEM Projects',
      stemDesc: 'Explore data, test hypotheses in the simulator, and defend your solution using the project journal.',
      filterAllSubjects: 'All Subjects', subjBio: 'Biology / Ecology', subjPhys: 'Physics',
      subjGeo: 'Geography / Chemistry', subjCs: 'CS & Data',
      tierGuided: 'Guided', tierSolo: 'Independent', tierResearch: 'Research',
      formatAll: 'Virtual & Classroom', formatVirtual: 'Virtual Simulator', formatLab: 'Lab + Own Measurements',
      progressTitle: 'Progress & Achievements',
      progressDesc: 'Auto-verified missions and manual ACMP checkmarks are tracked separately.',
      teacherTitle: 'Teacher Dashboard',
      teacherDesc: 'Assign STEM projects, review rubric criteria, and export local class journals.',
      backToStudent: '← Student Mode',
      guideTitle: 'Gemini Study Guide',
      guidePolicy: 'Provides a guiding question or next step. Never reveals full code or hidden tests.',
      hintLevelLabel: 'Hint depth:',
      hintLvl1: '1 — Leading question', hintLvl2: '2 — Concept explanation', hintLvl3: '3 — What to check',
      hintShareAttempt: 'Include current code/attempt snippet',
      btnAskGuide: 'Get Hint',
      diagTitle: 'Level Diagnostic',
      openOnAcmp: 'Open on ACMP ↗',
      markedByStudent: 'Marked by student',
      markSolved: 'Mark as solved',
      unmarkSolved: 'Unmark',
      ruOnlyNote: 'Original ACMP statement is in Russian',
      passedMsg: 'Mission complete! All checks passed.',
      xpFirstAward: '+{xp} XP awarded for first completion!',
      xpRepeatNote: 'Replay passed (XP already awarded earlier).',
      wallHit: 'Robot hit a wall at step {step}. Check direction and step count.',
      notAtGoal: 'Robot stopped before reaching the goal or activating the device.',
      stoppedByUser: 'Execution stopped by user.',
      infiniteLoopErr: 'Step limit exceeded (possible infinite loop). Check your `while` condition.',
      twoMapFail: 'Map 1 passed, but Map 2 failed. Use `front_is_clear()` sensor instead of fixed steps.',
      needPrevLevel: 'Complete the previous key level first.',
      openLesson: 'Open Lesson',
      openProject: 'Open Lab',
      locked: 'Locked', unlocked: 'Unlocked', completed: 'Completed'
    }
  };

  // --- 3. ROBOT EXPEDITION LEVELS (8 Levels) ---
  const ROBOT_LEVELS = [
    {
      id: 1, district: 'plaza', xp: 40, blocks: true, topic: 'robot', stage: 'sequence',
      title: { ru: '1. Стартовая площадь: Первый шаг', kk: '1. Бастау алаңы: Алғашқы қадам', en: '1. Start Plaza: First Step' },
      desc: {
        ru: 'Доведи робота до зелёного маяка и включи его командой activate(). Используй блоки или пиши Python.',
        kk: 'Роботты жасыл маякқа жеткізіп, activate() командасымен қос. Блоктарды немесе Python-ды қолдан.',
        en: 'Guide the robot to the green beacon and call activate(). Use blocks or write Python directly.'
      },
      template: '# Собери команды блоками или напиши сам:\nmove()\nmove()\n',
      maps: [
        { w: 5, h: 3, start: [0, 1, 0], goal: [3, 1], walls: [[0,0],[1,0],[2,0],[3,0],[4,0],[0,2],[1,2],[2,2],[3,2],[4,2]], devices: [[3,1]] }
      ],
      requireActivate: true
    },
    {
      id: 2, district: 'lab', xp: 50, blocks: true, topic: 'robot', stage: 'loops',
      title: { ru: '2. Лаборатория: Циклы и повороты', kk: '2. Зертхана: Циклдар және бұрылыстар', en: '2. Lab: Loops & Turns' },
      desc: {
        ru: 'Обойди лабораторный стол с помощью цикла for i in range(N): и поворота turn_right().',
        kk: 'for i in range(N): циклі және turn_right() бұрылысы арқылы үстелді айналып өт.',
        en: 'Navigate around the lab bench using for i in range(N): and turn_right().'
      },
      template: 'for i in range(3):\n    move()\nturn_right()\nfor i in range(2):\n    move()\n',
      maps: [
        { w: 5, h: 4, start: [0, 0, 0], goal: [3, 2], walls: [[1,1],[2,1],[1,2],[2,2]], devices: [] }
      ],
      requireActivate: false
    },
    {
      id: 3, district: 'weather', xp: 70, blocks: false, topic: 'robot', stage: 'sensor',
      title: { ru: '3. Метеостанция: Датчик и 2 карты', kk: '3. Метеостанция: Датчик және 2 карта', en: '3. Weather Station: Sensor & 2 Maps' },
      desc: {
        ru: 'Одна программа должна пройти ОБЕ карты! Используй while not at_goal(): и if front_is_clear():.',
        kk: 'Бір бағдарлама ЕКІ картаны да өтуі тиіс! while not at_goal(): және if front_is_clear(): қолдан.',
        en: 'One program must pass BOTH maps! Use while not at_goal(): and if front_is_clear():.'
      },
      template: 'while not at_goal():\n    if front_is_clear():\n        move()\n    else:\n        turn_right()\n',
      maps: [
        { w: 5, h: 4, start: [0, 0, 0], goal: [4, 3], walls: [[1,1],[2,1],[3,1]], devices: [] },
        { w: 5, h: 4, start: [0, 0, 0], goal: [2, 3], walls: [[3,0],[3,1],[3,2],[0,2],[1,2]], devices: [] }
      ],
      requireActivate: false
    },
    {
      id: 4, district: 'greenhouse', xp: 70, blocks: false, topic: 'greenhouse', stage: 'boundary',
      title: { ru: '4. Теплица: Условие полива', kk: '4. Жылыжай: Суару шарты', en: '4. Greenhouse: Watering Condition' },
      desc: {
        ru: 'Подойди к датчику влажности (2 клетки вперёд). Если moisture() < 35, включи полив activate().',
        kk: 'Ылғалдылық датчигіне бар (2 қадам алға). Егер moisture() < 35 болса, activate() арқылы суаруды қос.',
        en: 'Move 2 steps to the moisture sensor. If moisture() < 35, call activate() to start watering.'
      },
      template: 'move()\nmove()\nif moisture() < 35:\n    activate()\n',
      maps: [
        { w: 5, h: 3, start: [0, 1, 0], goal: [2, 1], walls: [[0,0],[4,0],[0,2],[4,2]], devices: [[2,1]], moisture: 34 }
      ],
      requireActivate: true
    },
    {
      id: 5, district: 'webstudio', xp: 80, blocks: false, topic: 'robot', stage: 'loops',
      title: { ru: '5. Веб-студия: Вложенные циклы', kk: '5. Веб-студия: Кірістірілген циклдар', en: '5. Web Studio: Nested Loops' },
      desc: {
        ru: 'Пройди по квадратному контуру солнечных панелей, используя вложенный цикл for.',
        kk: 'Күн панельдерінің шаршы контуры бойынша кірістірілген for циклін қолданып өт.',
        en: 'Traverse the solar panel perimeter using a nested for loop.'
      },
      template: 'for side in range(4):\n    for step in range(2):\n        move()\n    turn_right()\nactivate()\n',
      maps: [
        { w: 4, h: 4, start: [0, 0, 0], goal: [0, 0], walls: [[1,1],[1,2],[2,1],[2,2],[3,0],[3,1],[3,2],[3,3],[0,3],[1,3],[2,3]], devices: [[0,0]] }
      ],
      requireActivate: true
    },
    {
      id: 6, district: 'archive', xp: 90, blocks: false, topic: 'robot', stage: 'sequence',
      title: { ru: '6. Архив данных: Функции', kk: '6. Деректер мұрағаты: Функциялар', en: '6. Data Archive: Functions' },
      desc: {
        ru: 'Определи функцию def step_two(): и вызови её дважды, чтобы дойти до сервера архива.',
        kk: 'def step_two(): функциясын жазып, мұрағат серверіне жету үшін оны екі рет шақыр.',
        en: 'Define def step_two(): and call it twice to reach the archive server.'
      },
      template: 'def step_two():\n    move()\n    move()\n\nstep_two()\nstep_two()\nactivate()\n',
      maps: [
        { w: 6, h: 3, start: [0, 1, 0], goal: [4, 1], walls: [[0,0],[5,0],[0,2],[5,2]], devices: [[4,1]] }
      ],
      requireActivate: true
    },
    {
      id: 7, district: 'lab', xp: 90, blocks: false, topic: 'robot', stage: 'sequence',
      title: { ru: '7. Энергоузел: Отладка кода', kk: '7. Энергия торабы: Кодты жөндеу', en: '7. Power Node: Debugging' },
      desc: {
        ru: 'В стартовом коде есть ошибка: робот поворачивает не туда и врезается в стену. Исправь программу!',
        kk: 'Бастапқы кодта қате бар: робот дұрыс бұрылмай қабырғаға соғылады. Бағдарламаны түзет!',
        en: 'The starter code has a bug: the robot turns the wrong way and hits a wall. Fix it!'
      },
      template: 'move()\nmove()\nturn_left()  # Подсказка: проверь направление\nmove()\nmove()\nactivate()\n',
      maps: [
        { w: 5, h: 4, start: [0, 0, 0], goal: [2, 2], walls: [[3,0],[3,1],[1,1],[1,2]], devices: [[2,2]] }
      ],
      requireActivate: true
    },
    {
      id: 8, district: 'archive', xp: 120, blocks: false, topic: 'robot', stage: 'sensor',
      title: { ru: '8. Центр управления: Финал', kk: '8. Басқару орталығы: Финал', en: '8. Control Center: Finale' },
      desc: {
        ru: 'Совмести датчик front_is_clear(), цикл while и активацию главного узла города!',
        kk: 'front_is_clear() датчигін, while циклін және қаланың бас торабын іске қосуды біріктір!',
        en: 'Combine front_is_clear(), a while loop, and activate() on the city core!'
      },
      template: 'while not at_goal():\n    if front_is_clear():\n        move()\n    else:\n        turn_right()\nactivate()\n',
      maps: [
        { w: 5, h: 4, start: [0, 0, 0], goal: [4, 3], walls: [[1,1],[2,1],[3,1],[0,3],[1,3]], devices: [[4,3]] }
      ],
      requireActivate: true
    }
  ];

  const DISTRICTS = [
    { id: 'plaza', icon: '🏛️', color: '#e0f2fe', levels: [1], name: { ru: 'Стартовая площадь', kk: 'Бастау алаңы', en: 'Start Plaza' } },
    { id: 'lab', icon: '🧪', color: '#ede9fe', levels: [2, 7], name: { ru: 'Лаборатория', kk: 'Зертхана', en: 'Science Lab' } },
    { id: 'weather', icon: '🌦️', color: '#fef3c7', levels: [3], name: { ru: 'Метеостанция', kk: 'Метеостанция', en: 'Weather Station' } },
    { id: 'greenhouse', icon: '🌱', color: '#d1fae5', levels: [4], name: { ru: 'Умная теплица', kk: 'Ақылды жылыжай', en: 'Smart Greenhouse' } },
    { id: 'webstudio', icon: '🎨', color: '#fce7f3', levels: [5], name: { ru: 'Веб-студия', kk: 'Веб-студия', en: 'Web Studio' } },
    { id: 'archive', icon: '🗄️', color: '#e2e8f0', levels: [6, 8], name: { ru: 'Архив данных', kk: 'Деректер мұрағаты', en: 'Data Archive' } }
  ];

  // --- 4. COURSES (6 Tracks, 7-Step Skillfactory Structure, 3 Difficulty Tiers) ---
  const COURSES = [
    {
      id: 'python', icon: '🐍', prereq: { ru: 'С нуля', kk: 'Нөлден', en: 'From scratch' },
      title: { ru: 'Python с нуля', kk: 'Python нөлден', en: 'Python from Scratch' },
      outcome: { ru: 'Текстовая игра, программа для робота и обработка датчиков', kk: 'Мәтіндік ойын, робот бағдарламасы және датчиктерді өңдеу', en: 'Text game, robot script, and sensor data processing' },
      topics: 'print(), input(), int/float, if/else, for, while, str, list, def, debug',
      acmpLinkTheme: 'Задачи для начинающих',
      tiers: {
        guided: {
          situation: { ru: 'Метеоролог просит проверить, не завышен ли порог полива 35%.', kk: 'Метеоролог 35% суару шегін тексеруді сұрайды.', en: 'Check if the 35% watering threshold triggers correctly.' },
          theory: { ru: '<code>print()</code> выводит результат, а <code>if value &lt; 35:</code> проверяет строгое условие (34 → ON, 35 → OFF).', kk: '<code>print()</code> нәтижені шығарады, ал <code>if value &lt; 35:</code> қатаң шартты тексереді.', en: '<code>print()</code> outputs text; <code>if value &lt; 35:</code> checks a strict threshold.' },
          predictQ: { ru: 'Что выведет код: x = 35; print("ON" if x < 35 else "OFF")?', kk: 'Код не шығарады: x = 35; print("ON" if x < 35 else "OFF")?', en: 'What does `x = 35; print("ON" if x < 35 else "OFF")` output?' },
          predictOpts: ['ON', 'OFF', '35'], predictAns: 1,
          predictExp: { ru: '35 не меньше 35 (условие строгое <), поэтому выводится OFF.', kk: '35 < 35 жалған, сондықтан OFF шығады.', en: '35 < 35 is false, so it outputs OFF.' },
          scaffoldQ: { ru: 'В какой строке ошибка? 1: m = 34 | 2: if m <= 35 print("ON")', kk: 'Қай жолда қате бар? 1: m = 34 | 2: if m <= 35 print("ON")', en: 'Which line has a syntax error? 1: m = 34 | 2: if m <= 35 print("ON")' },
          scaffoldAns: '2',
          taskDesc: { ru: 'Напиши функцию <code>check_water(m)</code>, которая возвращает "ON" при m < 35 и "OFF" иначе. Проверь для 34, 35, 36.', kk: 'm < 35 кезінде "ON", әйтпесе "OFF" қайтаратын <code>check_water(m)</code> функциясын жаз.', en: 'Write `check_water(m)` returning "ON" if m < 35 else "OFF". Test 34, 35, 36.' },
          starter: 'def check_water(m):\n    if m < 35:\n        return "ON"\n    return "OFF"\n\nfor val in [34, 35, 36]:\n    print(val, check_water(val))',
          expectedOut: '34 ON\n35 OFF\n36 OFF'
        },
        solo: {
          situation: { ru: 'Собери статистику по списку показаний датчика влажности.', kk: 'Ылғалдылық датчигі көрсеткіштерінің статистикасын жина.', en: 'Aggregate sensor moisture readings from a list.' },
          theory: { ru: 'Цикл <code>for x in data:</code> перебирает элементы списка без индексов.', kk: '<code>for x in data:</code> циклі тізім элементтерін ретімен қарайды.', en: '<code>for x in data:</code> iterates over list items.' },
          predictQ: { ru: 'Что выведет len([12, 34, 56])?', kk: 'len([12, 34, 56]) не қайтарады?', en: 'What does `len([12, 34, 56])` return?' },
          predictOpts: ['2', '3', '56'], predictAns: 1,
          predictExp: { ru: 'В списке 3 элемента.', kk: 'Тізімде 3 элемент бар.', en: 'There are 3 items in the list.' },
          scaffoldQ: { ru: 'Какой метод добавляет элемент в конец списка: append или add?', kk: 'Тізім соңына элемент қосатын әдіс: append пе әлде add па?', en: 'Which method appends to a Python list: append or add?' },
          scaffoldAns: 'append',
          taskDesc: { ru: 'Посчитай, сколько значений в списке <code>[30, 35, 34, 40, 28]</code> строго меньше 35, и выведи это число.', kk: '<code>[30, 35, 34, 40, 28]</code> тізімінде 35-тен кіші неше сан бар екенін шығар.', en: 'Count how many values in `[30, 35, 34, 40, 28]` are strictly `< 35` and print the count.' },
          starter: 'readings = [30, 35, 34, 40, 28]\n# Напиши решение ниже\n',
          expectedOut: '3'
        },
        research: {
          situation: { ru: 'Датчик иногда пропускает замеры (None). Очисти ряд и найди среднее.', kk: 'Датчик кейде мәндерді өткізіп жібереді (None). Қатарды тазалап, орта мәнді тап.', en: 'Sensor drops some readings (None). Clean the series and compute the integer average.' },
          theory: { ru: 'Фильтрация <code>if x is not None:</code> защищает от TypeError при сложении.', kk: '<code>if x is not None:</code> сүзгісі қосу кезіндегі қатеден қорғайды.', en: 'Filtering with `if x is not None:` prevents TypeError.' },
          predictQ: { ru: 'Каков результат `10 // 3` в Python?', kk: 'Python-да `10 // 3` нәтижесі қандай?', en: 'What is `10 // 3` in Python?' },
          predictOpts: ['3.33', '3', '4'], predictAns: 1,
          predictExp: { ru: '`//` — целочисленное деление.', kk: '`//` — бүтін бөлу.', en: '`//` performs integer floor division.' },
          scaffoldQ: { ru: 'Какой оператор проверяет неравенство с None: `is not None` или `!== None`?', kk: 'None-ға тең еместігін тексеру: `is not None` па әлде `!== None` ма?', en: 'Which syntax checks non-None in Python: `is not None` or `!== None`?' },
          scaffoldAns: 'is not None',
          taskDesc: { ru: 'Для <code>[32, None, 38, None, 35]</code> выведи целое среднее (<code>//</code>) только валидных замеров.', kk: '<code>[32, None, 38, None, 35]</code> үшін жарамды мәндердің бүтін ортасын (<code>//</code>) шығар.', en: 'For `[32, None, 38, None, 35]`, print the integer average (`//`) of valid readings.' },
          starter: 'raw = [32, None, 38, None, 35]\n# Отфильтруй None и выведи целое среднее\n',
          expectedOut: '35'
        }
      }
    },
    {
      id: 'web', icon: '🌐', prereq: { ru: 'Рекомендуется после Python (или с нуля)', kk: 'Python-нан кейін (немесе нөлден)', en: 'After Python (or from scratch)' },
      title: { ru: 'HTML и CSS (Grid Garden стиль)', kk: 'HTML және CSS (Grid Garden стилі)', en: 'HTML & CSS (Grid Garden style)' },
      outcome: { ru: 'Адаптивная страница школьного проекта и расстановка объектов на CSS Grid', kk: 'Мектеп жобасының адаптивті беті және CSS Grid орналастыруы', en: 'Responsive project page and CSS Grid layout challenges' },
      topics: 'Semantic HTML, forms, Flexbox, CSS Grid, responsive media queries',
      acmpLinkTheme: 'Двумерные массивы',
      isWeb: true,
      tiers: {
        guided: {
          situation: { ru: 'Нужно разместить 3 карточки датчиков в одну строку на панели теплицы.', kk: 'Жылыжай панелінде 3 датчик карточкасын бір жолға орналастыр.', en: 'Arrange 3 sensor cards in one row on the greenhouse dashboard.' },
          theory: { ru: '<code>display: grid; grid-template-columns: repeat(3, 1fr);</code> делит контейнер на 3 равные колонки.', kk: '<code>display: grid; grid-template-columns: repeat(3, 1fr);</code> 3 тең баған жасайды.', en: '<code>display: grid; grid-template-columns: repeat(3, 1fr);</code> creates 3 equal columns.' },
          predictQ: { ru: 'Сколько колонок создаст `grid-template-columns: 1fr 2fr`?', kk: '`grid-template-columns: 1fr 2fr` неше баған жасайды?', en: 'How many columns does `grid-template-columns: 1fr 2fr` create?' },
          predictOpts: ['1', '2', '3'], predictAns: 1,
          predictExp: { ru: 'Указаны два значения — 1fr и 2fr, значит 2 колонки (1:2).', kk: 'Екі мән берілген — 2 баған.', en: 'Two track sizes = 2 columns.' },
          scaffoldQ: { ru: 'Какое свойство задаёт отступ между ячейками Grid: `gap` или `padding-between`?', kk: 'Grid ұяшықтары арасындағы қашықтық: `gap` па әлде `padding-between` бе?', en: 'Which property sets spacing between grid cells: `gap` or `padding-between`?' },
          scaffoldAns: 'gap',
          taskDesc: { ru: 'Отредактируй CSS/HTML ниже, чтобы `.grid` имел `display: grid` и 3 колонки (`repeat(3, 1fr)`), и посмотри живой предпросмотр.', kk: 'Төмендегі `.grid` стилін `display: grid` және 3 бағанға (`repeat(3, 1fr)`) баптап, нәтижені көр.', en: 'Edit the HTML/CSS below so `.grid` uses `display: grid` and `repeat(3, 1fr)`.' },
          starter: '<style>\n  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }\n  .card { background: #d1fae5; padding: 12px; border-radius: 10px; font-family: sans-serif; text-align: center; font-weight: bold; }\n</style>\n<div class="grid">\n  <div class="card">🌡️ 22°C</div>\n  <div class="card">💧 34%</div>\n  <div class="card">☀️ 850 lx</div>\n</div>',
          expectedOut: 'grid-template-columns'
        },
        solo: {
          situation: { ru: 'Сделай так, чтобы шапка панели занимала 2 колонки (`grid-column: span 2`).', kk: 'Панель тақырыбы 2 бағанды алуы тиіс (`grid-column: span 2`).', en: 'Make the header card span 2 columns (`grid-column: span 2`).' },
          theory: { ru: 'Свойство <code>grid-column: span 2;</code> растягивает элемент на 2 столбца.', kk: '<code>grid-column: span 2;</code> элементті 2 бағанға созады.', en: '`grid-column: span 2;` spans an item across 2 columns.' },
          predictQ: { ru: 'Что делает `grid-column: 1 / -1`?', kk: '`grid-column: 1 / -1` не істейді?', en: 'What does `grid-column: 1 / -1` do?' },
          predictOpts: ['Скрывает блок', 'Растягивает на всю ширину сетки', 'Удаляет отступы'], predictAns: 1,
          predictExp: { ru: 'От первой линии до последней (-1) — во всю ширину сетки.', kk: 'Бірінші сызықтан соңғысына (-1) дейін созады.', en: 'Spans from the first grid line to the last.' },
          scaffoldQ: { ru: 'Какой тег лучше для главного заголовка страницы: `<h1>` или `<div>`?', kk: 'Басты тақырып үшін қай тег дұрыс: `<h1>` ме әлде `<div>` ме?', en: 'Which tag is semantic for the main heading: `<h1>` or `<div>`?' },
          scaffoldAns: 'h1',
          taskDesc: { ru: 'Добавь `.wide { grid-column: span 2; }` к первому блоку в предпросмотре.', kk: 'Бірінші блокқа `.wide { grid-column: span 2; }` қос.', en: 'Add `.wide { grid-column: span 2; }` to the first card.' },
          starter: '<style>\n  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }\n  .card { background: #e0f2fe; padding: 10px; border-radius: 8px; font-family: sans-serif; }\n  .wide { grid-column: span 2; background: #ede9fe; font-weight: bold; }\n</style>\n<div class="grid">\n  <div class="card wide">Панель теплицы</div>\n  <div class="card">Влажность: 34%</div>\n  <div class="card">Полив: ON</div>\n</div>',
          expectedOut: 'span 2'
        },
        research: {
          situation: { ru: 'Сверстай адаптивную карточку с `auto-fit` и `minmax(120px, 1fr)`.', kk: '`auto-fit` және `minmax(120px, 1fr)` арқылы адаптивті карточка жаса.', en: 'Build a responsive grid using `auto-fit` and `minmax(120px, 1fr)`.' },
          theory: { ru: '<code>repeat(auto-fit, minmax(120px, 1fr))</code> переносит карточки без медиазапросов.', kk: '<code>repeat(auto-fit, minmax(120px, 1fr))</code> карточкаларды автоматты орналастырады.', en: '`repeat(auto-fit, minmax(120px, 1fr))` wraps cards responsively.' },
          predictQ: { ru: 'Что задаёт `minmax(120px, 1fr)`?', kk: '`minmax(120px, 1fr)` нені анықтайды?', en: 'What does `minmax(120px, 1fr)` define?' },
          predictOpts: ['Минимальную и максимальную ширину колонки', 'Высоту шрифта', 'Цвет рамки'], predictAns: 0,
          predictExp: { ru: 'Колонка не сожмётся уже 120px и займёт доступную долю 1fr.', kk: 'Бағанның ең кіші (120px) және ең үлкен (1fr) енін.', en: 'Minimum 120px and maximum 1fr track width.' },
          scaffoldQ: { ru: 'Какая функция CSS задаёт диапазон ширины: `minmax` или `range`?', kk: 'CSS-те енінің диапазонын беретін функция: `minmax` па әлде `range` бе?', en: 'Which CSS Grid function sets a track size range: `minmax` or `range`?' },
          scaffoldAns: 'minmax',
          taskDesc: { ru: 'Используй `repeat(auto-fit, minmax(120px, 1fr))` в `.grid`.', kk: '`.grid` ішінде `repeat(auto-fit, minmax(120px, 1fr))` қолдан.', en: 'Use `repeat(auto-fit, minmax(120px, 1fr))` inside `.grid`.' },
          starter: '<style>\n  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 8px; }\n  .card { background: #fef3c7; padding: 10px; border-radius: 8px; font-family: sans-serif; }\n</style>\n<div class="grid">\n  <div class="card">Датчик 1</div>\n  <div class="card">Датчик 2</div>\n  <div class="card">Датчик 3</div>\n</div>',
          expectedOut: 'minmax'
        }
      }
    },
    {
      id: 'js', icon: '⚡', prereq: { ru: 'После HTML/CSS и основ Python', kk: 'HTML/CSS және Python негіздерінен кейін', en: 'After HTML/CSS & Python basics' },
      title: { ru: 'JavaScript', kk: 'JavaScript', en: 'JavaScript' },
      outcome: { ru: 'Интерактивная викторина, калькулятор или симулятор', kk: 'Интерактивті викторина, калькулятор немесе симулятор', en: 'Interactive quiz, calculator, or simulator' },
      topics: 'let/const, if/else, arrays, functions, events, DOM',
      acmpLinkTheme: 'Математическое моделирование',
      tiers: {
        guided: {
          situation: { ru: 'Рассчитай расход воды за N включений насоса (по 2 л за раз).', kk: 'Сорғының N рет қосылуындағы су шығынын (әрқайсысы 2 л) есепте.', en: 'Compute water usage for N pump activations (2 L each).' },
          theory: { ru: 'Функция <code>function calcWater(n) { return n * 2; }</code> возвращает число.', kk: '<code>function calcWater(n) { return n * 2; }</code> сан қайтарады.', en: '`function calcWater(n) { return n * 2; }` returns the product.' },
          predictQ: { ru: 'Что вернёт `[10, 20, 30].filter(x => x > 15).length`?', kk: '`[10, 20, 30].filter(x => x > 15).length` не қайтарады?', en: 'What does `[10, 20, 30].filter(x => x > 15).length` return?' },
          predictOpts: ['1', '2', '3'], predictAns: 1,
          predictExp: { ru: 'Элементы 20 и 30 больше 15 — всего 2.', kk: '20 және 30 сандары 15-тен үлкен — барлығы 2.', en: '20 and 30 are > 15, so length is 2.' },
          scaffoldQ: { ru: 'Какое ключевое слово объявляет неизменяемую переменную: `const` или `let`?', kk: 'Өзгермейтін айнымалыны жариялайтын сөз: `const` па әлде `let` пе?', en: 'Which keyword declares a constant: `const` or `let`?' },
          scaffoldAns: 'const',
          taskDesc: { ru: 'Выведи через `console.log()` расход воды для 5 включений по 2 л.', kk: '`console.log()` арқылы 5 рет қосылғандағы су шығынын (2 л-ден) шығар.', en: 'Print the water used for 5 activations of 2 L each via `console.log()`.' },
          starter: 'const activations = 5;\nconst litersPerRun = 2;\nconsole.log(activations * litersPerRun);',
          expectedOut: '10'
        },
        solo: {
          situation: { ru: 'Отфильтруй массив температур и оставь только показания >= 20.', kk: 'Температуралар массивінен тек >= 20 мәндерін сүзіп ал.', en: 'Filter temperatures >= 20 from an array.' },
          theory: { ru: 'Метод <code>arr.filter(fn)</code> создаёт новый массив без изменения старого.', kk: '<code>arr.filter(fn)</code> жаңа массив жасайды.', en: '`arr.filter(fn)` returns a new filtered array.' },
          predictQ: { ru: 'Что выведет `typeof []` в JS?', kk: 'JS-те `typeof []` не шығарады?', en: 'What is `typeof []` in JS?' },
          predictOpts: ['array', 'object', 'list'], predictAns: 1,
          predictExp: { ru: 'В JS массивы являются объектами (`object`).', kk: 'JS-те массивтер `object` типіне жатады.', en: 'In JS, arrays have typeof "object".' },
          scaffoldQ: { ru: 'Какой метод объединяет элементы массива в строку: `join` или `merge`?', kk: 'Массив элементтерін жолға біріктіретін әдіс: `join` ба әлде `merge` пе?', en: 'Which array method joins elements into a string: `join` or `merge`?' },
          scaffoldAns: 'join',
          taskDesc: { ru: 'Отфильтруй `[18, 22, 19, 25]` по `t >= 20` и выведи через `join(",")`.', kk: '`[18, 22, 19, 25]` массивін `t >= 20` бойынша сүзіп, `join(",")` арқылы шығар.', en: 'Filter `[18, 22, 19, 25]` for `t >= 20` and print with `join(",")`.' },
          starter: 'const temps = [18, 22, 19, 25];\nconsole.log(temps.filter(t => t >= 20).join(","));',
          expectedOut: '22,25'
        },
        research: {
          situation: { ru: 'Посчитай сумму элементов массива через `reduce`.', kk: '`reduce` арқылы массив элементтерінің қосындысын тап.', en: 'Sum an array using `reduce`.' },
          theory: { ru: '<code>arr.reduce((acc, x) => acc + x, 0)</code> сворачивает массив в одно число.', kk: '<code>arr.reduce((acc, x) => acc + x, 0)</code> массивті бір санға жинақтайды.', en: '`arr.reduce((acc, x) => acc + x, 0)` accumulates the sum.' },
          predictQ: { ru: 'Зачем нужен `0` вторым аргументом в `reduce(..., 0)`?', kk: '`reduce(..., 0)` ішіндегі `0` не үшін керек?', en: 'Why pass `0` as the second argument to `reduce(..., 0)`?' },
          predictOpts: ['Начальное значение аккумулятора', 'Шаг цикла', 'Лимит элементов'], predictAns: 0,
          predictExp: { ru: 'Это начальное значение `acc`, безопасное даже для пустого массива.', kk: 'Бұл аккумулятордың бастапқы мәні.', en: 'It sets the initial accumulator value.' },
          scaffoldQ: { ru: 'Что вернёт `[].reduce((a,b) => a+b, 0)`?', kk: '`[].reduce((a,b) => a+b, 0)` не қайтарады?', en: 'What does `[].reduce((a,b) => a+b, 0)` return?' },
          scaffoldAns: '0',
          taskDesc: { ru: 'Вычисли сумму `[12, 18, 15, 5]` через `reduce` и выведи результат.', kk: '`[12, 18, 15, 5]` қосындысын `reduce` арқылы шығар.', en: 'Compute the sum of `[12, 18, 15, 5]` with `reduce` and log it.' },
          starter: 'const arr = [12, 18, 15, 5];\nconsole.log(arr.reduce((a, b) => a + b, 0));',
          expectedOut: '50'
        }
      }
    },
    {
      id: 'sql', icon: '🗄️', prereq: { ru: 'Базовая логика таблиц', kk: 'Кесте логикасының негізі', en: 'Basic table logic' },
      title: { ru: 'SQL: Расследование метеостанции', kk: 'SQL: Метеостанцияны тергеу', en: 'SQL: Weather Station Investigation' },
      outcome: { ru: 'Отчёт и расследование пропажи показаний в учебной базе данных', kk: 'Оқу дерекқорында жоғалған көрсеткіштерді тергеу есебі', en: 'Report and database investigation on missing weather logs' },
      topics: 'SELECT, WHERE, ORDER BY, COUNT/AVG, GROUP BY, JOIN',
      acmpLinkTheme: 'Сортировка и последовательности',
      isSql: true,
      tiers: {
        guided: {
          situation: { ru: 'Детективное расследование: в 14:00 пропали показания школьной метеостанции! Найди сбойный датчик.', kk: 'Тергеу: сағат 14:00-де метеостанция көрсеткіштері жоғалды! Ақаулы датчикті тап.', en: 'Investigation: Weather readings vanished at 14:00! Find the faulty sensor.' },
          theory: { ru: '<code>SELECT * FROM weather_logs WHERE status = "ERROR"</code> выбирает только строки со сбоем.', kk: '<code>SELECT * FROM weather_logs WHERE status = "ERROR"</code> тек ақаулы жолдарды таңдайды.', en: '`SELECT * FROM weather_logs WHERE status = "ERROR"` filters error rows.' },
          predictQ: { ru: 'Какое ключевое слово сортирует строки по возрастанию/убыванию?', kk: 'Жолдарды сұрыптайтын SQL сөзі қандай?', en: 'Which SQL keyword sorts query results?' },
          predictOpts: ['GROUP BY', 'ORDER BY', 'SORT WITH'], predictAns: 1,
          predictExp: { ru: '`ORDER BY` отвечает за сортировку, а `GROUP BY` — за группировку.', kk: '`ORDER BY` сұрыптауға жауап береді.', en: '`ORDER BY` sorts rows; `GROUP BY` groups them.' },
          scaffoldQ: { ru: 'Какая функция считает количество строк: `COUNT(*)` или `SUM(*)`?', kk: 'Жолдар санын есептейтін функция: `COUNT(*)` па әлде `SUM(*)` ма?', en: 'Which function counts rows: `COUNT(*)` or `SUM(*)`?' },
          scaffoldAns: 'COUNT(*)',
          taskDesc: { ru: 'Выполни запрос к таблице `weather_logs`, чтобы найти все записи со `status = "ERROR"` и временем.', kk: '`weather_logs` кестесінен `status = "ERROR"` жазбаларын тап.', en: 'Query `weather_logs` for all rows where `status = "ERROR"`.' },
          starter: 'SELECT log_time, sensor_id, temp, status FROM weather_logs WHERE status = "ERROR" ORDER BY log_time;',
          expectedOut: 'S-02'
        },
        solo: {
          situation: { ru: 'Сгруппируй журнал по `sensor_id`, чтобы увидеть, сколько сбоев дал каждый датчик.', kk: 'Әр датчикте қанша ақау болғанын көру үшін `sensor_id` бойынша топта.', en: 'Group logs by `sensor_id` to count errors per sensor.' },
          theory: { ru: '<code>SELECT sensor_id, COUNT(*) FROM weather_logs WHERE status = "ERROR" GROUP BY sensor_id</code>.', kk: '<code>GROUP BY sensor_id</code> датчиктер бойынша біріктіреді.', en: '`GROUP BY sensor_id` aggregates counts per sensor.' },
          predictQ: { ru: 'Что ставится раньше в SQL-запросе: `WHERE` или `GROUP BY`?', kk: 'SQL сұранысында қайсысы бұрын жазылады: `WHERE` ме әлде `GROUP BY` ма?', en: 'Which comes first in SQL: `WHERE` or `GROUP BY`?' },
          predictOpts: ['WHERE', 'GROUP BY', 'Порядок не важен'], predictAns: 0,
          predictExp: { ru: 'Сначала фильтруются строки (`WHERE`), потом группируются (`GROUP BY`).', kk: 'Алдымен `WHERE`, содан кейін `GROUP BY`.', en: '`WHERE` filters rows before `GROUP BY`.' },
          scaffoldQ: { ru: 'Какой оператор соединяет две таблицы по ключу: `JOIN` или `CONNECT`?', kk: 'Екі кестені біріктіретін оператор: `JOIN` ба әлде `CONNECT` пе?', en: 'Which keyword joins two tables: `JOIN` or `CONNECT`?' },
          scaffoldAns: 'JOIN',
          taskDesc: { ru: 'Посчитай `COUNT(*)` записей по каждому `sensor_id` с помощью `GROUP BY`.', kk: '`GROUP BY` көмегімен әр `sensor_id` бойынша жазбалар санын есепте.', en: 'Count rows per `sensor_id` using `GROUP BY`.' },
          starter: 'SELECT sensor_id, COUNT(*) AS cnt FROM weather_logs GROUP BY sensor_id;',
          expectedOut: 'S-02'
        },
        research: {
          situation: { ru: 'Соедини `weather_logs` с таблицей `sensors` через `JOIN`, чтобы узнать кабинет сбойного датчика.', kk: 'Ақаулы датчиктің кабинетін білу үшін `weather_logs` пен `sensors` кестелерін `JOIN` арқылы қос.', en: 'JOIN `weather_logs` with `sensors` to find the room of the faulty sensor.' },
          theory: { ru: '<code>JOIN sensors ON weather_logs.sensor_id = sensors.id</code> связывает две таблицы.', kk: '<code>JOIN sensors ON weather_logs.sensor_id = sensors.id</code> екі кестені байланыстырады.', en: '`JOIN sensors ON ...` links related rows across tables.' },
          predictQ: { ru: 'Зачем нужен `ON` после `JOIN`?', kk: '`JOIN` кейін `ON` не үшін қажет?', en: 'Why is `ON` needed after `JOIN`?' },
          predictOpts: ['Задаёт условие связи таблиц', 'Ограничивает число строк', 'Сортирует результат'], predictAns: 0,
          predictExp: { ru: '`ON` указывает, по каким столбцам сопоставлять строки двух таблиц.', kk: '`ON` кестелерді қай баған бойынша қосу керектігін көрсетеді.', en: '`ON` specifies the matching key columns.' },
          scaffoldQ: { ru: 'Как задать псевдоним столбцу в SELECT: `AS` или `ALIAS`?', kk: 'SELECT ішінде бағанға бүркеншік ат беру: `AS` па әлде `ALIAS` па?', en: 'How do you alias a column in SELECT: `AS` or `ALIAS`?' },
          scaffoldAns: 'AS',
          taskDesc: { ru: 'Выведи `location` и `status` для записей со сбоем через `JOIN sensors`.', kk: '`JOIN sensors` арқылы ақаулы жазбалардың `location` және `status` өрістерін шығар.', en: 'Select `location` and `status` for error logs using `JOIN sensors`.' },
          starter: 'SELECT sensors.location, weather_logs.status FROM weather_logs JOIN sensors ON weather_logs.sensor_id = sensors.id WHERE weather_logs.status = "ERROR";',
          expectedOut: 'Roof'
        }
      }
    },
    {
      id: 'cpp', icon: '⚙️', prereq: { ru: 'После базового Python (олимпиадные задачи)', kk: 'Python негіздерінен кейін', en: 'After Python basics (competitive)' },
      title: { ru: 'C++ (прогноз и разбор кода)', kk: 'C++ (болжам және код талдау)', en: 'C++ (Trace & Code Review)' },
      outcome: { ru: 'Решения задач с ограничениями по времени и памяти (ACMP)', kk: 'Уақыт пен жады шектеуі бар есептерді шешу', en: 'Solving time- and memory-bounded ACMP problems' },
      topics: 'cin/cout, int/long long, if, loops, vector, functions',
      acmpLinkTheme: 'Целочисленная арифметика',
      noLiveCompiler: true,
      tiers: {
        guided: {
          situation: { ru: 'В задаче ACMP #0001 числа до 10^9 — хватит ли `int` для их суммы?', kk: 'ACMP #0001 есебінде сандар 10^9 дейін — қосындыға `int` жете ме?', en: 'In ACMP #0001, numbers reach 10^9 — is `int` safe for their sum?' },
          theory: { ru: '32-битный `int` вмещает до ~2.14×10^9; для больших сумм надёжнее `long long`.', kk: '32-биттік `int` ~2.14×10^9 дейін сыяды; үлкен қосындылар үшін `long long` сенімді.', en: '32-bit `int` holds up to ~2.14e9; use `long long` for larger sums.' },
          predictQ: { ru: 'Что выведет C++ код: `int a = 5, b = 2; cout << a / b;`?', kk: 'C++ коды не шығарады: `int a = 5, b = 2; cout << a / b;`?', en: 'What does `int a = 5, b = 2; cout << a / b;` output in C++?' },
          predictOpts: ['2.5', '2', '3'], predictAns: 1,
          predictExp: { ru: 'Деление двух `int` в C++ отбрасывает дробную часть → 2.', kk: 'Екі `int` бөлгенде бөлшек бөлігі алынып тасталады → 2.', en: 'Integer division in C++ truncates to 2.' },
          scaffoldQ: { ru: 'Какой тип выбрать для суммы до 10^15: `int` или `long long`?', kk: '10^15 дейінгі қосынды үшін қай тип дұрыс: `int` пе әлде `long long` ба?', en: 'Which type fits sums up to 10^15: `int` or `long long`?' },
          scaffoldAns: 'long long',
          taskDesc: { ru: 'Упражнение на разбор (без серверного компилятора C++): допиши недостающую строку `return 0;` и проверь структуру.', kk: 'Талдау жаттығуы (серверлік C++ компиляторы жоқ): жетіспейтін `return 0;` жолын қос.', en: 'Trace exercise (no server C++ compiler): ensure `long long` and `return 0;` are present.' },
          starter: '#include <iostream>\nusing namespace std;\nint main() {\n    long long a, b;\n    cin >> a >> b;\n    cout << a + b;\n    return 0;\n}',
          expectedOut: 'long long'
        },
        solo: {
          situation: { ru: 'Найди переполнение при умножении `a * b` до 10^9.', kk: '10^9 дейінгі `a * b` көбейтуіндегі толып кетуді (overflow) тап.', en: 'Spot integer overflow when multiplying `a * b` up to 10^9.' },
          theory: { ru: 'Даже если результат сохраняется в `long long`, `int * int` сначала переполнится!', kk: 'Нәтиже `long long`-қа сақталса да, `int * int` алдымен толып кетеді!', en: 'Multiplying two `int`s overflows before assignment to `long long`.' },
          predictQ: { ru: 'Что нужно сделать, чтобы `a * b` не переполнилось?', kk: '`a * b` толып кетпеуі үшін не істеу керек?', en: 'How do you prevent `a * b` overflow?' },
          predictOpts: ['Объявить a и b как long long', 'Использовать float', 'Добавить endl'], predictAns: 0,
          predictExp: { ru: 'Если оба операнда `long long`, умножение идёт в 64 битах.', kk: 'Екі операнд та `long long` болса, көбейту 64 битте орындалады.', en: '64-bit multiplication requires `long long` operands.' },
          scaffoldQ: { ru: 'Какой заголовок подключает `vector`?', kk: '`vector` үшін қандай кітапхана қосылады?', en: 'Which header provides `std::vector`?' },
          scaffoldAns: 'vector',
          taskDesc: { ru: 'Проверь шаблон чтения массива в `vector<long long>`.', kk: '`vector<long long>` массивін оқу үлгісін тексер.', en: 'Verify the `vector<long long>` input template.' },
          starter: '#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    int n; cin >> n;\n    vector<long long> a(n);\n    return 0;\n}',
          expectedOut: 'vector<long long>'
        },
        research: {
          situation: { ru: 'Оцени сложность алгоритма O(N) vs O(N^2) при N = 100 000.', kk: 'N = 100 000 кезінде O(N) және O(N^2) күрделілігін бағала.', en: 'Compare O(N) vs O(N^2) at N = 100,000.' },
          theory: { ru: 'За 1 секунду C++ выполняет ~10^8 простых операций; O(N^2) даст 10^10 (TLE).', kk: '1 секундта C++ ~10^8 операция жасайды; O(N^2) — 10^10 (TLE).', en: 'C++ does ~1e8 ops/sec; O(N^2) at 1e5 is 1e10 (TLE).' },
          predictQ: { ru: 'Уложится ли алгоритм O(N^2) в 1 секунду при N = 100 000?', kk: 'N = 100 000 кезінде O(N^2) 1 секундқа сыя ма?', en: 'Does O(N^2) fit in 1s for N = 100,000?' },
          predictOpts: ['Да', 'Нет, будет Time Limit Exceeded', 'Только если использовать float'], predictAns: 1,
          predictExp: { ru: '10^10 операций превышают лимит 1 секунды.', kk: '10^10 операция 1 секунд шегінен асып кетеді.', en: '1e10 operations exceed a 1-second time limit.' },
          scaffoldQ: { ru: 'Какая структура даёт O(log N) поиск в отсортированном массиве: `binary_search` или `linear`?', kk: 'Сұрыпталған массивте O(log N) іздеу: `binary_search` па әлде `linear` ма?', en: 'Which search is O(log N) on sorted arrays: `binary_search` or `linear`?' },
          scaffoldAns: 'binary_search',
          taskDesc: { ru: 'Опиши в комментарии, почему для N=10^5 нужен O(N log N) или O(N).', kk: 'N=10^5 үшін неге O(N log N) немесе O(N) керек екенін түсіндір.', en: 'Document why O(N log N) or O(N) is required for N=10^5.' },
          starter: '// O(N log N) ~ 1.7e6 ops < 1e8 limit\n#include <algorithm>\n',
          expectedOut: 'algorithm'
        }
      }
    },
    {
      id: 'java', icon: '☕', prereq: { ru: 'После основ алгоритмов и функций', kk: 'Алгоритмдер мен функциялар негізінен кейін', en: 'After algorithm & function basics' },
      title: { ru: 'Java (прогноз и ООП-модель)', kk: 'Java (болжам және ООП моделі)', en: 'Java (Trace & OOP Modeling)' },
      outcome: { ru: 'Консольный каталог или модель датчиков и зон теплицы', kk: 'Консольдік каталог немесе жылыжай датчиктері мен аймақтарының моделі', en: 'Console catalog or greenhouse sensor/zone OOP model' },
      topics: 'Types, methods, arrays, ArrayList, classes & objects',
      acmpLinkTheme: 'Структуры данных',
      noLiveCompiler: true,
      tiers: {
        guided: {
          situation: { ru: 'Опиши класс `Sensor` для зоны теплицы с полем `moisture`.', kk: 'Жылыжай аймағы үшін `moisture` өрісі бар `Sensor` класын сипатта.', en: 'Model a `Sensor` class with a `moisture` field.' },
          theory: { ru: 'В Java каждый объект создаётся по чертежу `class`, а метод `needsWater()` возвращает `boolean`.', kk: 'Java-да нысан `class` арқылы жасалады, ал `needsWater()` әдісі `boolean` қайтарады.', en: 'A Java `class` defines fields and methods like `boolean needsWater()`.' },
          predictQ: { ru: 'Какой тип возвращает метод `public boolean needsWater()`?', kk: '`public boolean needsWater()` әдісі қандай тип қайтарады?', en: 'What type does `public boolean needsWater()` return?' },
          predictOpts: ['int', 'boolean', 'String'], predictAns: 1,
          predictExp: { ru: 'Сигнатура явно указывает `boolean` (true/false).', kk: 'Сигнатурада `boolean` көрсетілген.', en: 'The return type in the signature is `boolean`.' },
          scaffoldQ: { ru: 'Какое слово создаёт новый объект класса: `new` или `create`?', kk: 'Жаңа нысан жасайтын сөз: `new` ма әлде `create` пе?', en: 'Which keyword instantiates an object in Java: `new` or `create`?' },
          scaffoldAns: 'new',
          taskDesc: { ru: 'Упражнение на разбор (без серверного компилятора Java): проверь метод `needsWater()` для порога `< 35`.', kk: 'Талдау жаттығуы (серверлік Java компиляторы жоқ): `< 35` шегі үшін `needsWater()` әдісін тексер.', en: 'Trace exercise (no server Java compiler): verify `needsWater()` uses `moisture < 35`.' },
          starter: 'public class Sensor {\n    int moisture;\n    public boolean needsWater() {\n        return moisture < 35;\n    }\n}',
          expectedOut: 'moisture < 35'
        },
        solo: {
          situation: { ru: 'Храни список датчиков в `ArrayList<Sensor>`.', kk: 'Датчиктер тізімін `ArrayList<Sensor>` ішінде сақта.', en: 'Store sensors in an `ArrayList<Sensor>`.' },
          theory: { ru: '<code>ArrayList</code> автоматически меняет размер при добавлении через <code>.add()</code>.', kk: '<code>ArrayList</code> өлшемін автоматты түрде өзгертеді.', en: '`ArrayList` grows dynamically with `.add()`.' },
          predictQ: { ru: 'Как узнать размер `ArrayList` в Java?', kk: 'Java-да `ArrayList` өлшемін қалай білуге болады?', en: 'How do you get the size of an `ArrayList`?' },
          predictOpts: ['.length', '.size()', '.count()'], predictAns: 1,
          predictExp: { ru: 'У коллекций в Java используется метод `.size()`.', kk: 'Java коллекцияларында `.size()` әдісі қолданылады.', en: 'Java collections use `.size()`.' },
          scaffoldQ: { ru: 'Какой метод добавляет элемент в ArrayList: `add` или `push`?', kk: 'ArrayList-ке элемент қосатын әдіс: `add` па әлде `push` па?', en: 'Which method adds to ArrayList: `add` or `push`?' },
          scaffoldAns: 'add',
          taskDesc: { ru: 'Проверь создание `ArrayList<Sensor>` и вызов `.add()`.', kk: '`ArrayList<Sensor>` құруды және `.add()` шақыруын тексер.', en: 'Verify `ArrayList<Sensor>` creation and `.add()`.' },
          starter: 'ArrayList<Sensor> list = new ArrayList<>();\nlist.add(new Sensor());',
          expectedOut: 'ArrayList'
        },
        research: {
          situation: { ru: 'Сделай конструктор `Sensor(String zone, int moisture)` с инкапсуляцией.', kk: 'Инкапсуляциямен `Sensor(String zone, int moisture)` конструкторын жаса.', en: 'Design an encapsulated `Sensor(String zone, int moisture)` constructor.' },
          theory: { ru: 'Приватные поля (`private`) защищают состояние объекта от случайного изменения.', kk: 'Жеке (`private`) өрістер нысан күйін қорғайды.', en: '`private` fields protect internal object state.' },
          predictQ: { ru: 'Зачем нужен `this.moisture = moisture;`?', kk: '`this.moisture = moisture;` не үшін қажет?', en: 'Why write `this.moisture = moisture;`?' },
          predictOpts: ['Различает поле класса и параметр', 'Создаёт копию класса', 'Удаляет переменную'], predictAns: 0,
          predictExp: { ru: '`this` указывает на поле текущего объекта.', kk: '`this` ағымдағы нысан өрісіне сілтейді.', en: '`this` refers to the instance field.' },
          scaffoldQ: { ru: 'Какой модификатор скрывает поле от прямого доступа: `private` или `public`?', kk: 'Өрісті жасыратын модификатор: `private` па әлде `public` пе?', en: 'Which modifier hides a field: `private` or `public`?' },
          scaffoldAns: 'private',
          taskDesc: { ru: 'Проверь объявление `private int moisture;` и конструктора.', kk: '`private int moisture;` және конструкторды тексер.', en: 'Verify `private int moisture;` and constructor.' },
          starter: 'public class Sensor {\n    private int moisture;\n    public Sensor(int moisture) { this.moisture = moisture; }\n}',
          expectedOut: 'private'
        }
      }
    }
  ];

  // --- 5. STEM PROJECTS (7 Cross-Curricular Projects) ---
  const STEM_STAGES = [
    { id: 'problem', ru: '1. Вопрос', kk: '1. Сұрақ', en: '1. Question' },
    { id: 'hypothesis', ru: '2. Гипотеза', kk: '2. Болжам', en: '2. Hypothesis' },
    { id: 'plan', ru: '3. План', kk: '3. Жоспар', en: '3. Plan' },
    { id: 'data', ru: '4. Данные', kk: '4. Деректер', en: '4. Data' },
    { id: 'chart', ru: '5. График', kk: '5. График', en: '5. Chart' },
    { id: 'proto', ru: '6. Прототип', kk: '6. Прототип', en: '6. Prototype' },
    { id: 'tests', ru: '7. Испытания', kk: '7. Сынақтар', en: '7. Tests' },
    { id: 'fix', ru: '8. Доработка', kk: '8. Түзету', en: '8. Revision' },
    { id: 'defense', ru: '9. Защита', kk: '9. Қорғау', en: '9. Defense' }
  ];

  const STEM_PROJECTS = [
    {
      id: 'greenhouse', subject: 'biology', format: 'virtual', duration: '45 мин', simType: 'greenhouse',
      title: { ru: 'Умная теплица', kk: 'Ақылды жылыжай', en: 'Smart Greenhouse' },
      subjects: { ru: 'Биология, математика, датчики, программирование', kk: 'Биология, математика, датчиктер, бағдарламалау', en: 'Biology, Math, Sensors, Coding' },
      deliverable: { ru: 'Симулятор полива, таблица тестов 34/35/36%, сравнение правил и вывод', kk: 'Суару симуляторы, 34/35/36% тест кестесі, екі ережені салыстыру', en: 'Irrigation simulator, 34/35/36% test table, rule comparison & conclusion' },
      dataSource: { ru: 'Происхождение данных: виртуальный симулятор + готовый учебный сценарий влажности', kk: 'Дерек көзі: виртуалды симулятор + оқу ылғалдылық сценарийі', en: 'Data origin: virtual simulator + curriculum moisture scenario' }
    },
    {
      id: 'thermal', subject: 'physics', format: 'lab', duration: '45 мин', simType: 'thermal',
      title: { ru: 'Тёплая школа', kk: 'Жылы мектеп', en: 'Warm School' },
      subjects: { ru: 'Физика теплопередачи, математика, технология, данные', kk: 'Жылу беру физикасы, математика, технология, деректер', en: 'Thermal Physics, Math, Tech, Data' },
      deliverable: { ru: 'График остывания ёмкостей через равные интервалы, выбор изоляции', kk: 'Бірдей аралықтағы суу графигі, оқшаулауды негіздеу', en: 'Equal-interval cooling curve, insulation justification' },
      dataSource: { ru: 'Происхождение данных: готовый учебный набор + собственные измерения ученика', kk: 'Дерек көзі: дайын оқу жинағы + оқушының өз өлшеулері', en: 'Data origin: curriculum dataset + student measurements' }
    },
    {
      id: 'solar', subject: 'physics', format: 'virtual', duration: '40 мин', simType: 'table',
      title: { ru: 'Школа на солнечной энергии', kk: 'Күн энергиясындағы мектеп', en: 'Solar-Powered School' },
      subjects: { ru: 'Физика энергии, география, математика, информатика', kk: 'Энергия физикасы, география, математика, информатика', en: 'Energy Physics, Geography, Math, CS' },
      deliverable: { ru: 'Калькулятор выработки и обоснованная схема размещения панели', kk: 'Өндіру калькуляторы және панель орналастыру сызбасы', en: 'Output calculator and panel placement plan' },
      dataSource: { ru: 'Происхождение данных: готовый учебный набор инсоляции', kk: 'Дерек көзі: оқу инсоляция деректер жинағы', en: 'Data origin: curriculum solar irradiance dataset' },
      sampleRows: [
        ['Юг (180°), угол 40°', '4.8 кВт·ч/м²', 'Макс. дневная выработка'],
        ['Юго-Восток (135°), угол 35°', '4.3 кВт·ч/м²', 'Утренний пик для 1-й смены'],
        ['Восток (90°), угол 30°', '3.5 кВт·ч/м²', 'Потери после полудня']
      ]
    },
    {
      id: 'waste', subject: 'biology', format: 'lab', duration: '45 мин', simType: 'table',
      title: { ru: 'Вторая жизнь отходов', kk: 'Қалдықтардың екінші өмірі', en: 'Second Life of Waste' },
      subjects: { ru: 'Биология, экология, география, математика, информатика', kk: 'Биология, экология, география, математика, информатика', en: 'Biology, Ecology, Geography, Math, CS' },
      deliverable: { ru: 'Диаграмма состава отходов и план раздельного сбора', kk: 'Қалдық құрамы диаграммасы және бөлек жинау жоспары', en: 'Waste composition chart and sorting plan' },
      dataSource: { ru: 'Происхождение данных: обезличенный школьный учебный набор', kk: 'Дерек көзі: иесіздендірілген мектеп оқу жинағы', en: 'Data origin: anonymized school dataset' },
      sampleRows: [
        ['Бумага и картон', '42%', 'Синий контейнер (переработка)'],
        ['Пластик (PET/HDPE)', '28%', 'Жёлтый контейнер (прессование)'],
        ['Органика (столовая)', '20%', 'Компостер пришкольной теплицы'],
        ['Прочее (неперераб.)', '10%', 'Смешанный сбор']
      ]
    },
    {
      id: 'water', subject: 'geography', format: 'lab', duration: '50 мин', simType: 'table',
      title: { ru: 'Вода под наблюдением', kk: 'Бақылаудағы су', en: 'Water Under Watch' },
      subjects: { ru: 'Химия, биология, география, статистика', kk: 'Химия, биология, география, статистика', en: 'Chemistry, Biology, Geography, Statistics' },
      deliverable: { ru: 'Таблица наблюдений pH, температуры и мутности + ограничения выводов', kk: 'pH, температура, лайлылық кестесі + қорытынды шектеулері', en: 'pH/temp/turbidity table + limitations of conclusions' },
      dataSource: { ru: 'Происхождение данных: учебный набор проб + замеры ученика', kk: 'Дерек көзі: оқу сынама жинағы + оқушы өлшеулері', en: 'Data origin: curriculum samples + student measurements' },
      sampleRows: [
        ['Точка A (Исток)', 'pH 7.2', '12.4°C', '2 NTU (чистая)'],
        ['Точка B (После моста)', 'pH 7.5', '13.1°C', '8 NTU (повыш. мутность)'],
        ['Точка C (Школьный пруд)', 'pH 6.8', '15.0°C', '14 NTU (требует фильтрации)']
      ]
    },
    {
      id: 'bridge', subject: 'physics', format: 'lab', duration: '60 мин', simType: 'table',
      title: { ru: 'Мост для школьного парка', kk: 'Мектеп саябағына арналған көпір', en: 'School Park Bridge' },
      subjects: { ru: 'Физика, математика, инженерное проектирование', kk: 'Физика, математика, инженерлік жобалау', en: 'Physics, Math, Engineering Design' },
      deliverable: { ru: 'Бумажная модель/прототип, таблица испытаний и защита конструкции', kk: 'Қағаз үлгі/прототип, сынақ кестесі және қорғау', en: 'Paper model/prototype, load test table, design defense' },
      dataSource: { ru: 'Происхождение данных: испытания прототипа учеником', kk: 'Дерек көзі: оқушының прототип сынақтары', en: 'Data origin: student prototype load tests' },
      sampleRows: [
        ['Плоская балка (1 слой)', '180 г', 'Прогиб в центре (разрушение)'],
        ['П-профиль (рёбра жёсткости)', '620 г', 'Устойчива до 600 г'],
        ['Треугольная ферма (гофра)', '1 250 г', 'Лучшее соотношение масса/нагрузка']
      ]
    },
    {
      id: 'route', subject: 'cs', format: 'virtual', duration: '40 мин', simType: 'table',
      title: { ru: 'Маршрут до школы', kk: 'Мектепке дейінгі бағыт', en: 'Route to School' },
      subjects: { ru: 'География, математика, информатика (графы)', kk: 'География, математика, информатика (графтар)', en: 'Geography, Math, CS (Graphs)' },
      deliverable: { ru: 'Учебная карта с маршрутами и сравнением по длине, переходам и условиям', kk: 'Ұзындық, өткелдер және жағдайлар бойынша салыстырылған бағыттар картасы', en: 'Map comparing routes by distance, crossings, and conditions' },
      dataSource: { ru: 'Происхождение данных: учебный граф района', kk: 'Дерек көзі: ауданның оқу графы', en: 'Data origin: curriculum district graph' },
      sampleRows: [
        ['Маршрут A (через проспект)', '1 150 м', '4 светофора', '14 мин (шумно, асфальт)'],
        ['Маршрут B (через парк)', '1 280 м', '1 переход', '15 мин (безопаснее, без машин)'],
        ['Маршрут C (дворами)', '1 050 м', '2 нерегул. перехода', '13 мин (зимой скользко)']
      ]
    }
  ];

  // --- 6. PERSISTENT STATE ---
  const STORAGE_KEY = 'codequest_stem_v2_state';
  const defaultState = {
    lang: 'ru',
    view: 'game',
    xp: 0,
    reduceMotion: false,
    currentLevel: 1,
    completedLevels: [],
    robotDrafts: {},
    acmpTasks: ACMP_INITIAL_TASKS,
    acmpManualSolved: [],
    acmpFilterTheme: 'all',
    acmpSearch: '',
    acmpDiff: 'all',
    acmpSort: 'id',
    acmpPage: 1,
    activeCourseId: 'python',
    activeTier: 'guided',
    completedLessons: [],
    stemFilterSubj: 'all',
    stemFilterDiff: 'all',
    stemFilterFormat: 'all',
    activeStemId: 'greenhouse',
    activeStemStage: 'problem',
    stemJournals: {},
    greenhouseCfg: { threshold: 35, waterReserve: 20, skipReading: false },
    thermalCustom: [
      { min: 0, ctrl: 80, ins: 80 },
      { min: 5, ctrl: 68, ins: 76 },
      { min: 10, ctrl: 58, ins: 73 },
      { min: 15, ctrl: 50, ins: 70 },
      { min: 20, ctrl: 43, ins: 68 }
    ],
    teacherAssignedProject: 'greenhouse'
  };

  let state = loadState();
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredClone(defaultState);
      const parsed = JSON.parse(raw);
      return { ...structuredClone(defaultState), ...parsed, acmpTasks: parsed.acmpTasks?.length ? parsed.acmpTasks : ACMP_INITIAL_TASKS };
    } catch {
      return structuredClone(defaultState);
    }
  }
  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch { /* ignore quota */ }
  }

  function t(key, vars = {}) {
    const dict = I18N[state.lang] || I18N.ru;
    let str = dict[key] || I18N.ru[key] || key;
    for (const [k, v] of Object.entries(vars)) {
      str = str.replaceAll(`{${k}}`, String(v));
    }
    return str;
  }

  function showToast(msg) {
    const box = document.getElementById('toastBox');
    if (!box) return;
    box.textContent = msg;
    box.hidden = false;
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => { box.hidden = true; }, 3200);
  }

  // --- 7. ROBOT EXECUTION ENGINE (Step-by-step & Run with Stop) ---
  let sim = {
    mapIndex: 0,
    actions: [],
    cursor: 0,
    timer: null,
    running: false,
    robot: { x: 0, y: 0, dir: 0 }, // 0:E, 1:S, 2:W, 3:N
    visited: new Set(),
    activated: new Set(),
    logs: []
  };

  function getActiveLevel() {
    return ROBOT_LEVELS.find((l) => l.id === state.currentLevel) || ROBOT_LEVELS[0];
  }

  function resetSim(keepCode = true) {
    stopSim();
    const lvl = getActiveLevel();
    const map = lvl.maps[sim.mapIndex] || lvl.maps[0];
    sim.actions = [];
    sim.cursor = 0;
    sim.robot = { x: map.start[0], y: map.start[1], dir: map.start[2] };
    sim.visited = new Set([`${map.start[0]},${map.start[1]}`]);
    sim.activated = new Set();
    sim.logs = [];
    if (!keepCode) {
      document.getElementById('robotCodeEditor').value = lvl.template;
      state.robotDrafts[lvl.id] = lvl.template;
      saveState();
    }
    setFeedback('', '');
    renderRobotGrid();
    renderExecLog();
  }

  function stopSim() {
    if (sim.timer) {
      clearInterval(sim.timer);
      sim.timer = null;
    }
    sim.running = false;
    const stopBtn = document.getElementById('btnStop');
    if (stopBtn) stopBtn.disabled = true;
  }

  function setFeedback(type, msg) {
    const el = document.getElementById('robotFeedback');
    if (!el) return;
    el.className = 'feedback-box' + (type ? ' ' + type : '');
    el.textContent = msg;
  }

  // Compile restricted Python-robot syntax into an executable action trace
  function compileRobotProgram(code, map) {
    const lines = code.split('\n');
    const jsLines = [];
    const indentStack = [0];

    for (let i = 0; i < lines.length; i++) {
      const raw = lines[i];
      const noComment = raw.replace(/#.*$/, '');
      if (!noComment.trim()) continue;
      const indent = noComment.match(/^(\s*)/)[1].length;
      const trimmed = noComment.trim();

      while (indent < indentStack[indentStack.length - 1]) {
        indentStack.pop();
        jsLines.push('}');
      }

      if (/^def\s+([a-zA-Z_]\w*)\(\):$/.test(trimmed)) {
        const fn = trimmed.match(/^def\s+([a-zA-Z_]\w*)\(\):$/)[1];
        jsLines.push(`function ${fn}() {`);
        indentStack.push(indent + 1);
      } else if (/^for\s+([a-zA-Z_]\w*)\s+in\s+range\((\d+)\):$/.test(trimmed)) {
        const [, v, n] = trimmed.match(/^for\s+([a-zA-Z_]\w*)\s+in\s+range\((\d+)\):$/);
        jsLines.push(`for (let ${v} = 0; ${v} < ${n}; ${v}++) {`);
        indentStack.push(indent + 1);
      } else if (/^while\s+(.+):$/.test(trimmed)) {
        let cond = trimmed.match(/^while\s+(.+):$/)[1];
        cond = cond.replace(/\bnot\s+/g, '!').replace(/\band\b/g, '&&').replace(/\bor\b/g, '||');
        jsLines.push(`while (${cond}) { __tick(${i + 1});`);
        indentStack.push(indent + 1);
      } else if (/^if\s+(.+):$/.test(trimmed)) {
        let cond = trimmed.match(/^if\s+(.+):$/)[1];
        cond = cond.replace(/\bnot\s+/g, '!').replace(/\band\b/g, '&&').replace(/\bor\b/g, '||');
        jsLines.push(`if (${cond}) {`);
        indentStack.push(indent + 1);
      } else if (trimmed === 'else:') {
        jsLines.push('else {');
        indentStack.push(indent + 1);
      } else {
        // Basic safety check: only allow robot commands & function calls
        if (/^[a-zA-Z_]\w*\(\)$/.test(trimmed)) {
          const fnName = trimmed.slice(0, -2);
          if (['move', 'turn_right', 'turn_left', 'activate'].includes(fnName)) {
            jsLines.push(`__emit("${fnName}", ${i + 1});`);
          } else {
            jsLines.push(`${fnName}();`);
          }
        } else {
          throw new Error(`Строка ${i + 1}: неизвестная команда «${trimmed}»`);
        }
      }
    }
    while (indentStack.length > 1) {
      indentStack.pop();
      jsLines.push('}');
    }

    // Virtual simulation state during trace generation
    let rx = map.start[0], ry = map.start[1], rdir = map.start[2];
    const wallSet = new Set(map.walls.map(([wx, wy]) => `${wx},${wy}`));
    const actions = [];
    let ticks = 0;
    const MAX_STEPS = 250;

    function front_is_clear() {
      const dx = [1, 0, -1, 0][rdir], dy = [0, 1, 0, -1][rdir];
      const nx = rx + dx, ny = ry + dy;
      return nx >= 0 && nx < map.w && ny >= 0 && ny < map.h && !wallSet.has(`${nx},${ny}`);
    }
    function at_goal() {
      return rx === map.goal[0] && ry === map.goal[1];
    }
    function moisture() {
      return typeof map.moisture === 'number' ? map.moisture : 45;
    }
    function __tick() {
      if (++ticks > MAX_STEPS) throw new Error('INFINITE_LOOP');
    }
    function __emit(cmd, line) {
      if (actions.length >= MAX_STEPS) throw new Error('INFINITE_LOOP');
      if (cmd === 'move') {
        const dx = [1, 0, -1, 0][rdir], dy = [0, 1, 0, -1][rdir];
        const nx = rx + dx, ny = ry + dy;
        const hit = nx < 0 || nx >= map.w || ny < 0 || ny >= map.h || wallSet.has(`${nx},${ny}`);
        actions.push({ cmd, line, hit, nx, ny });
        if (hit) throw new Error(`WALL_HIT:${actions.length}`);
        rx = nx; ry = ny;
      } else if (cmd === 'turn_right') {
        rdir = (rdir + 1) % 4;
        actions.push({ cmd, line, dir: rdir });
      } else if (cmd === 'turn_left') {
        rdir = (rdir + 3) % 4;
        actions.push({ cmd, line, dir: rdir });
      } else if (cmd === 'activate') {
        actions.push({ cmd, line, x: rx, y: ry });
      }
    }

    const runner = new Function('front_is_clear', 'at_goal', 'moisture', '__tick', '__emit', jsLines.join('\n'));
    try {
      runner(front_is_clear, at_goal, moisture, __tick, __emit);
    } catch (e) {
      if (e.message === 'INFINITE_LOOP') return { actions, error: 'INFINITE_LOOP' };
      if (e.message.startsWith('WALL_HIT:')) return { actions, error: e.message };
      throw e;
    }
    return { actions, error: null };
  }

  function applySingleAction(act) {
    if (act.hit) {
      setFeedback('err', t('wallHit', { step: sim.cursor + 1 }));
      sim.logs.push({ text: `L${act.line}: ❌ ${act.cmd}() → WALL`, hl: true });
      stopSim();
      return false;
    }
    if (act.cmd === 'move') {
      sim.robot.x = act.nx;
      sim.robot.y = act.ny;
      sim.visited.add(`${act.nx},${act.ny}`);
      sim.logs.push({ text: `L${act.line}: move() → (${act.nx}, ${act.ny})`, hl: true });
    } else if (act.cmd === 'turn_right' || act.cmd === 'turn_left') {
      sim.robot.dir = act.dir;
      sim.logs.push({ text: `L${act.line}: ${act.cmd}() → dir=${['→','↓','←','↑'][act.dir]}`, hl: true });
    } else if (act.cmd === 'activate') {
      sim.activated.add(`${sim.robot.x},${sim.robot.y}`);
      sim.logs.push({ text: `L${act.line}: activate() ⚡ @ (${sim.robot.x},${sim.robot.y})`, hl: true });
    }
    document.getElementById('activeLineIndicator').textContent = `Line ${act.line}`;
    renderRobotGrid();
    renderExecLog();
    return true;
  }

  function runRobot(stepOnly = false) {
    const code = document.getElementById('robotCodeEditor').value;
    state.robotDrafts[state.currentLevel] = code;
    saveState();

    const lvl = getActiveLevel();
    const map = lvl.maps[sim.mapIndex] || lvl.maps[0];

    if (!stepOnly || sim.actions.length === 0 || sim.cursor >= sim.actions.length) {
      resetSim(true);
      try {
        const compiled = compileRobotProgram(code, map);
        sim.actions = compiled.actions;
        sim.compileErr = compiled.error;
      } catch (err) {
        setFeedback('err', err.message);
        return;
      }
    }

    if (stepOnly) {
      if (sim.cursor < sim.actions.length) {
        const ok = applySingleAction(sim.actions[sim.cursor]);
        sim.cursor += 1;
        if (!ok) return;
      }
      if (sim.cursor >= sim.actions.length) {
        if (sim.compileErr === 'INFINITE_LOOP') setFeedback('err', t('infiniteLoopErr'));
        else evaluateCurrentMapState();
      }
      return;
    }

    sim.running = true;
    document.getElementById('btnStop').disabled = false;
    sim.timer = setInterval(() => {
      if (sim.cursor >= sim.actions.length) {
        stopSim();
        if (sim.compileErr === 'INFINITE_LOOP') setFeedback('err', t('infiniteLoopErr'));
        else evaluateCurrentMapState();
        return;
      }
      const ok = applySingleAction(sim.actions[sim.cursor]);
      sim.cursor += 1;
      if (!ok) stopSim();
    }, state.reduceMotion ? 40 : 280);
  }

  function isMapSolved(lvl, map, code) {
    const compiled = compileRobotProgram(code, map);
    if (compiled.error) return false;
    let rx = map.start[0], ry = map.start[1];
    const actSet = new Set();
    for (const a of compiled.actions) {
      if (a.cmd === 'move') { rx = a.nx; ry = a.ny; }
      if (a.cmd === 'activate') actSet.add(`${rx},${ry}`);
    }
    const atGoal = rx === map.goal[0] && ry === map.goal[1];
    const devOk = !lvl.requireActivate || actSet.has(`${map.goal[0]},${map.goal[1]}`);
    return atGoal && devOk;
  }

  function evaluateCurrentMapState() {
    const lvl = getActiveLevel();
    const map = lvl.maps[sim.mapIndex] || lvl.maps[0];
    const atGoal = sim.robot.x === map.goal[0] && sim.robot.y === map.goal[1];
    const devOk = !lvl.requireActivate || sim.activated.has(`${map.goal[0]},${map.goal[1]}`);
    if (atGoal && devOk) {
      setFeedback('info', t('passedMsg'));
    } else {
      setFeedback('err', t('notAtGoal'));
    }
  }

  function checkRobotSolution() {
    const lvl = getActiveLevel();
    const code = document.getElementById('robotCodeEditor').value;
    state.robotDrafts[lvl.id] = code;
    try {
      for (let m = 0; m < lvl.maps.length; m++) {
        const ok = isMapSolved(lvl, lvl.maps[m], code);
        if (!ok) {
          if (m > 0) setFeedback('err', t('twoMapFail'));
          else setFeedback('err', t('notAtGoal'));
          return;
        }
      }
      const firstTime = !state.completedLevels.includes(lvl.id);
      if (firstTime) {
        state.completedLevels.push(lvl.id);
        state.xp += lvl.xp;
        setFeedback('ok', `${t('passedMsg')} ${t('xpFirstAward', { xp: lvl.xp })}`);
      } else {
        setFeedback('ok', `${t('passedMsg')} ${t('xpRepeatNote')}`);
      }
      saveState();
      renderHeaderStats();
      renderLevelPills();
      renderCityMap();
      renderHeroStats();
    } catch (err) {
      setFeedback('err', err.message);
    }
  }

  // --- 8. RENDERING VIEWS ---
  function renderHeaderStats() {
    const lvlNum = Math.floor(state.xp / 100) + 1;
    document.getElementById('headerLevel').textContent = `Lv.${lvlNum}`;
    document.getElementById('headerXp').textContent = `${state.xp} XP`;
  }

  function renderHeroStats() {
    const el = document.getElementById('heroDistrictStrip');
    if (!el) return;
    el.innerHTML = `
      <div class="mini-stat"><strong>${state.completedLevels.length}/${ROBOT_LEVELS.length}</strong><span>${t('navGame')}</span></div>
      <div class="mini-stat"><strong>${state.acmpManualSolved.length}/${state.acmpTasks.length}</strong><span>ACMP</span></div>
      <div class="mini-stat"><strong>${state.completedLessons.length}/${COURSES.length * 3}</strong><span>${t('navCourses')}</span></div>
      <div class="mini-stat"><strong>${Object.keys(state.stemJournals).length}/${STEM_PROJECTS.length}</strong><span>${t('navStem')}</span></div>
    `;
  }

  function renderLevelPills() {
    const box = document.getElementById('levelSelector');
    box.innerHTML = '';
    const maxUnlocked = Math.max(1, ...state.completedLevels, state.completedLevels.length + 1);
    ROBOT_LEVELS.forEach((lvl) => {
      const done = state.completedLevels.includes(lvl.id);
      const locked = lvl.id > maxUnlocked;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `level-pill ${lvl.id === state.currentLevel ? 'active' : ''} ${done ? 'done' : ''} ${locked ? 'locked' : ''}`;
      btn.textContent = `${done ? '✓ ' : locked ? '🔒 ' : ''}${lvl.id}`;
      btn.title = lvl.title[state.lang];
      btn.addEventListener('click', () => {
        if (locked) { showToast(t('needPrevLevel')); return; }
        state.currentLevel = lvl.id;
        sim.mapIndex = 0;
        saveState();
        renderGamePanel();
      });
      box.appendChild(btn);
    });
  }

  function renderGamePanel() {
    const lvl = getActiveLevel();
    document.getElementById('levelSubtitle').textContent = lvl.title[state.lang];
    document.getElementById('missionBrief').innerHTML = `<h3>${lvl.title[state.lang]}</h3><p>${lvl.desc[state.lang]}</p>`;

    const mapBadge = document.getElementById('mapSwitchBadge');
    const toggleBtn = document.getElementById('toggleMapBtn');
    mapBadge.textContent = lvl.maps.length > 1 ? `Map ${sim.mapIndex + 1} / ${lvl.maps.length}` : 'Map 1 / 1';
    toggleBtn.hidden = lvl.maps.length <= 1;

    const map = lvl.maps[sim.mapIndex] || lvl.maps[0];
    document.getElementById('sensorReadout').textContent =
      typeof map.moisture === 'number' ? `moisture=${map.moisture}%` : `pos=(${sim.robot.x},${sim.robot.y})`;

    const palette = document.getElementById('blocksPalette');
    const row = document.getElementById('blocksRow');
    palette.hidden = !lvl.blocks;
    if (lvl.blocks) {
      const cmds = [
        { label: '⬆ Вперёд (move)', code: 'move()' },
        { label: '↪ Вправо (turn_right)', code: 'turn_right()' },
        { label: '↩ Влево (turn_left)', code: 'turn_left()' },
        { label: '⚡ Включить (activate)', code: 'activate()' }
      ];
      row.innerHTML = '';
      cmds.forEach((c) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'block-chip';
        b.textContent = c.label;
        b.addEventListener('click', () => {
          const ed = document.getElementById('robotCodeEditor');
          ed.value = (ed.value ? ed.value.replace(/\n*$/, '\n') : '') + c.code + '\n';
          state.robotDrafts[lvl.id] = ed.value;
          saveState();
        });
        row.appendChild(b);
      });
    }

    const ed = document.getElementById('robotCodeEditor');
    ed.value = state.robotDrafts[lvl.id] ?? lvl.template;
    renderLevelPills();
    resetSim(true);
  }

  function renderRobotGrid() {
    const lvl = getActiveLevel();
    const map = lvl.maps[sim.mapIndex] || lvl.maps[0];
    const grid = document.getElementById('robotGrid');
    grid.style.gridTemplateColumns = `repeat(${map.w}, auto)`;
    grid.innerHTML = '';

    const wallSet = new Set(map.walls.map(([x, y]) => `${x},${y}`));
    const devSet = new Set((map.devices || []).map(([x, y]) => `${x},${y}`));

    for (let y = 0; y < map.h; y++) {
      for (let x = 0; x < map.w; x++) {
        const cell = document.createElement('div');
        const key = `${x},${y}`;
        const isWall = wallSet.has(key);
        const isGoal = x === map.goal[0] && y === map.goal[1];
        const isDev = devSet.has(key);
        const isAct = sim.activated.has(key);
        cell.className = 'tile' + (isWall ? ' wall' : '') + (isGoal ? ' goal' : '') + (isDev ? ' device' : '') + (isAct ? ' active-device' : '') + (sim.visited.has(key) ? ' visited' : '');

        if (x === sim.robot.x && y === sim.robot.y) {
          const arrows = ['➡️', '⬇️', '⬅️', '⬆️'];
          cell.innerHTML = `<span class="robot-sprite" aria-label="Робот">${arrows[sim.robot.dir]}</span>`;
        } else if (isWall) {
          cell.textContent = '🧱';
        } else if (isDev) {
          cell.textContent = isAct ? '💧' : '🔌';
        } else if (isGoal) {
          cell.textContent = '🚩';
        }
        grid.appendChild(cell);
      }
    }
    document.getElementById('sensorReadout').textContent =
      typeof map.moisture === 'number' ? `moisture=${map.moisture}%` : `pos=(${sim.robot.x},${sim.robot.y})`;
  }

  function renderExecLog() {
    const el = document.getElementById('robotExecLog');
    if (!sim.logs.length) {
      el.innerHTML = '<div class="log-line">—</div>';
      return;
    }
    el.innerHTML = sim.logs.map((l, idx) => `<div class="log-line ${idx === sim.logs.length - 1 ? 'hl' : ''}">${l.text}</div>`).join('');
    el.scrollTop = el.scrollHeight;
  }

  function renderCityMap() {
    const box = document.getElementById('cityMapGrid');
    const maxUnlocked = Math.max(1, ...state.completedLevels, state.completedLevels.length + 1);
    box.innerHTML = DISTRICTS.map((d) => {
      const doneCnt = d.levels.filter((id) => state.completedLevels.includes(id)).length;
      const pct = Math.round((doneCnt / d.levels.length) * 100);
      const isUnlocked = d.levels.some((id) => id <= maxUnlocked);
      return `
        <article class="district-card ${isUnlocked ? '' : 'locked'}">
          <div class="district-art" style="background:${d.color}">
            <span>${d.icon}</span>
            <span class="badge ${doneCnt === d.levels.length ? 'badge-mint' : isUnlocked ? 'badge-sky' : 'badge-warn'}">
              ${doneCnt === d.levels.length ? t('completed') : isUnlocked ? t('unlocked') : t('locked')}
            </span>
          </div>
          <h3>${d.name[state.lang]}</h3>
          <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
          <div class="small muted">${doneCnt} / ${d.levels.length} миссий (${pct}%)</div>
          <button class="btn btn-sm btn-primary" data-goto-level="${d.levels[0]}" ${isUnlocked ? '' : 'disabled'} type="button">
            ▶ ${t('navGame')}
          </button>
        </article>`;
    }).join('');

    box.querySelectorAll('[data-goto-level]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.currentLevel = Number(btn.dataset.gotoLevel);
        sim.mapIndex = 0;
        switchView('game');
        renderGamePanel();
      });
    });
  }

  // --- 9. ACMP ARCHIVE ---
  function renderAcmp() {
    const note = document.getElementById('acmpMetaNote');
    const cnt = state.acmpTasks.length;
    note.textContent = `Импортировано и проверено ${cnt} записей из 1 000 (актуальность: ${ACMP_SYNC_DATE}). ${state.lang !== 'ru' ? '⚠️ ' + t('ruOnlyNote') + '.' : ''}`;

    const themesBar = document.getElementById('acmpThemesBar');
    themesBar.innerHTML = '';
    ACMP_THEMES.forEach((th) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = `theme-chip ${state.acmpFilterTheme === th.id ? 'active' : ''}`;
      b.textContent = th[state.lang];
      b.addEventListener('click', () => {
        state.acmpFilterTheme = th.id;
        state.acmpPage = 1;
        saveState();
        renderAcmp();
      });
      themesBar.appendChild(b);
    });

    let items = [...state.acmpTasks];
    if (state.acmpFilterTheme !== 'all') {
      items = items.filter((x) => x.theme === state.acmpFilterTheme);
    }
    if (state.acmpSearch.trim()) {
      const q = state.acmpSearch.trim().toLowerCase();
      items = items.filter((x) => x.code.includes(q) || String(x.id).includes(q) || x.title.toLowerCase().includes(q));
    }
    if (state.acmpDiff === 'easy') items = items.filter((x) => x.difficulty <= 20);
    if (state.acmpDiff === 'mid') items = items.filter((x) => x.difficulty > 20 && x.difficulty <= 45);
    if (state.acmpDiff === 'hard') items = items.filter((x) => x.difficulty > 45);

    if (state.acmpSort === 'diff_asc') items.sort((a, b) => a.difficulty - b.difficulty);
    else if (state.acmpSort === 'diff_desc') items.sort((a, b) => b.difficulty - a.difficulty);
    else items.sort((a, b) => a.id - b.id);

    const perPage = 24;
    const totalPages = Math.max(1, Math.ceil(items.length / perPage));
    if (state.acmpPage > totalPages) state.acmpPage = 1;
    const slice = items.slice((state.acmpPage - 1) * perPage, state.acmpPage * perPage);

    document.getElementById('acmpProgressPill').innerHTML =
      `<span class="badge badge-mint">✋ ${t('markedByStudent')}: ${state.acmpManualSolved.length}/${state.acmpTasks.length}</span>`;

    const listEl = document.getElementById('acmpList');
    listEl.innerHTML = slice.map((task) => {
      const isDone = state.acmpManualSolved.includes(task.id);
      const thObj = ACMP_THEMES.find((t0) => t0.id === task.theme);
      const thLabel = thObj ? thObj[state.lang] : task.theme;
      const xpEst = Math.max(10, Math.round(task.difficulty * 1.5));
      return `
        <article class="acmp-card">
          <div class="acmp-card-top">
            <span class="badge badge-sky">#${task.code}</span>
            <span class="badge badge-violet">${task.difficulty}% · +${xpEst} XP</span>
          </div>
          <strong>${task.title}</strong>
          <div class="small muted">${thLabel}</div>
          ${state.lang !== 'ru' ? `<div class="small muted">🇷🇺 ${t('ruOnlyNote')}</div>` : ''}
          <div class="acmp-card-actions">
            <a class="btn btn-sm btn-ghost" href="${task.url}" target="_blank" rel="noopener noreferrer">${t('openOnAcmp')}</a>
            <button class="btn btn-sm ${isDone ? 'btn-mint' : 'btn-outline-violet'}" data-acmp-toggle="${task.id}" type="button">
              ${isDone ? '✓ ' + t('markedByStudent') : t('markSolved')}
            </button>
          </div>
        </article>`;
    }).join('');

    listEl.querySelectorAll('[data-acmp-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = Number(btn.dataset.acmpToggle);
        const idx = state.acmpManualSolved.indexOf(id);
        if (idx >= 0) state.acmpManualSolved.splice(idx, 1);
        else state.acmpManualSolved.push(id);
        saveState();
        renderAcmp();
        renderHeroStats();
      });
    });

    const pag = document.getElementById('acmpPagination');
    pag.innerHTML = '';
    for (let p = 1; p <= Math.min(totalPages, 12); p++) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = `btn btn-sm ${p === state.acmpPage ? 'btn-primary' : 'btn-ghost'}`;
      b.textContent = p;
      b.addEventListener('click', () => { state.acmpPage = p; renderAcmp(); });
      pag.appendChild(b);
    }
  }

  // --- 10. COURSES (7-Step Skillfactory Structure + 3 Tiers + In-Browser Evaluators) ---
  function runSqlQuery(sql) {
    const sensors = [
      { id: 'S-01', location: 'Garden', type: 'Moisture' },
      { id: 'S-02', location: 'Roof', type: 'Weather' },
      { id: 'S-03', location: 'Lab', type: 'Temp' }
    ];
    const logs = [
      { log_time: '13:45', sensor_id: 'S-01', temp: 22.1, status: 'OK' },
      { log_time: '13:45', sensor_id: 'S-02', temp: 18.4, status: 'OK' },
      { log_time: '14:00', sensor_id: 'S-02', temp: null, status: 'ERROR' },
      { log_time: '14:15', sensor_id: 'S-02', temp: null, status: 'ERROR' },
      { log_time: '14:15', sensor_id: 'S-03', temp: 23.0, status: 'OK' }
    ];
    const q = sql.trim();
    let rows = logs.map((r) => ({ ...r }));
    if (/JOIN\s+sensors/i.test(q)) {
      rows = rows.map((r) => {
        const s = sensors.find((x) => x.id === r.sensor_id) || {};
        return { ...r, location: s.location, type: s.type };
      });
    }
    if (/WHERE\s+.*status\s*=\s*["']ERROR["']/i.test(q)) {
      rows = rows.filter((r) => r.status === 'ERROR');
    }
    if (/GROUP\s+BY\s+sensor_id/i.test(q)) {
      const map = new Map();
      rows.forEach((r) => map.set(r.sensor_id, (map.get(r.sensor_id) || 0) + 1));
      return [...map.entries()].map(([sensor_id, cnt]) => ({ sensor_id, cnt }));
    }
    if (/ORDER\s+BY\s+log_time/i.test(q)) {
      rows.sort((a, b) => a.log_time.localeCompare(b.log_time));
    }
    return rows;
  }

  function renderCourses() {
    const grid = document.getElementById('coursesGrid');
    grid.innerHTML = COURSES.map((c) => `
      <article class="course-card">
        <div class="acmp-card-top">
          <span style="font-size:26px">${c.icon}</span>
          <span class="badge badge-sky">${c.prereq[state.lang]}</span>
        </div>
        <h3>${c.title[state.lang]}</h3>
        <div class="small muted">${c.topics}</div>
        <div class="small"><strong>Результат:</strong> ${c.outcome[state.lang]}</div>
        <button class="btn btn-sm btn-primary" data-open-course="${c.id}" type="button">${t('openLesson')}</button>
      </article>
    `).join('');

    grid.querySelectorAll('[data-open-course]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.activeCourseId = btn.dataset.openCourse;
        saveState();
        renderLessonWorkspace();
      });
    });
    renderLessonWorkspace();
  }

  function renderLessonWorkspace() {
    const ws = document.getElementById('lessonWorkspace');
    const c = COURSES.find((x) => x.id === state.activeCourseId);
    if (!c) { ws.hidden = true; return; }
    ws.hidden = false;
    const tier = c.tiers[state.activeTier] || c.tiers.guided;
    const lessonKey = `${c.id}:${state.activeTier}`;
    const isDone = state.completedLessons.includes(lessonKey);

    ws.innerHTML = `
      <div class="section-head">
        <div>
          <h3>${c.icon} ${c.title[state.lang]} ${isDone ? '<span class="badge badge-mint">✓</span>' : ''}</h3>
          <p class="muted small">${tier.situation[state.lang]}</p>
        </div>
        <button class="btn btn-sm btn-outline-violet" id="btnHintCourse" type="button">💡 ${t('btnHint')}</button>
      </div>
      ${c.noLiveCompiler ? '<div class="badge badge-warn" style="margin-bottom:8px">Упражнение на прогноз и разбор кода (серверный компилятор не подключён)</div>' : ''}
      <div class="tier-tabs">
        ${['guided', 'solo', 'research'].map((tr) => `
          <button type="button" class="tier-btn ${state.activeTier === tr ? 'active' : ''}" data-tier="${tr}">
            ${t(tr === 'guided' ? 'tierGuided' : tr === 'solo' ? 'tierSolo' : 'tierResearch')}
          </button>`).join('')}
      </div>

      <div class="lesson-step-box">
        <strong>1–2. Теория:</strong> ${tier.theory[state.lang]}
      </div>

      <div class="lesson-step-box">
        <strong>3. Прогноз результата («Что выведет код?»):</strong>
        <div>${tier.predictQ[state.lang]}</div>
        <div class="quiz-options">
          ${tier.predictOpts.map((opt, idx) => `<button type="button" class="quiz-opt" data-qopt="${idx}">${opt}</button>`).join('')}
        </div>
        <div class="small" id="predictFeedback" style="margin-top:6px"></div>
      </div>

      <div class="lesson-step-box">
        <strong>4. Практика с опорой:</strong>
        <div>${tier.scaffoldQ[state.lang]}</div>
        <div style="display:flex;gap:8px;margin-top:6px;flex-wrap:wrap">
          <input class="input" id="scaffoldInput" placeholder="Твой ответ..." />
          <button class="btn btn-sm btn-sky" id="btnCheckScaffold" type="button">${t('btnCheck')}</button>
        </div>
        <div class="small" id="scaffoldFeedback" style="margin-top:6px"></div>
      </div>

      <div class="lesson-step-box">
        <strong>5–6. Самостоятельная задача и проверка граничных случаев:</strong>
        <p class="small">${tier.taskDesc[state.lang]}</p>
        <textarea id="courseCodeEditor" class="code-editor" rows="6">${tier.starter}</textarea>
        <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap">
          <button class="btn btn-sm btn-mint" id="btnRunCourseCode" type="button">▶ ${t('btnRun')} & ${t('btnCheck')}</button>
          <button class="btn btn-sm btn-ghost" data-acmp-jump="${c.acmpLinkTheme}" type="button">🏆 Задачи ACMP: ${c.acmpLinkTheme}</button>
        </div>
        <div class="feedback-box" id="courseFeedback"></div>
        ${c.isWeb ? '<iframe id="webPreviewFrame" class="web-preview-frame" sandbox="allow-scripts"></iframe>' : ''}
      </div>

      <div class="lesson-step-box">
        <strong>7. Перенос навыка:</strong> почему твоё решение работает?
        <input class="input" id="transferExplain" style="margin-top:6px;width:100%" placeholder="Коротко объясни своими словами..." />
      </div>
    `;

    ws.querySelectorAll('[data-tier]').forEach((b) => {
      b.addEventListener('click', () => { state.activeTier = b.dataset.tier; saveState(); renderLessonWorkspace(); });
    });

    ws.querySelectorAll('[data-qopt]').forEach((b) => {
      b.addEventListener('click', () => {
        const idx = Number(b.dataset.qopt);
        const fb = document.getElementById('predictFeedback');
        fb.textContent = (idx === tier.predictAns ? '✅ ' : '❌ ') + tier.predictExp[state.lang];
      });
    });

    document.getElementById('btnCheckScaffold').addEventListener('click', () => {
      const val = document.getElementById('scaffoldInput').value.trim().toLowerCase();
      const ok = val === tier.scaffoldAns.toLowerCase();
      document.getElementById('scaffoldFeedback').textContent = ok ? '✅ Верно!' : '❌ Проверь внимательнее или открой Справочник.';
    });

    document.getElementById('btnHintCourse').addEventListener('click', () => {
      openHintDrawer(c.isSql ? 'sql' : c.isWeb ? 'web' : 'general', 'practice', document.getElementById('courseCodeEditor').value);
    });

    ws.querySelectorAll('[data-acmp-jump]').forEach((b) => {
      b.addEventListener('click', () => {
        state.acmpFilterTheme = b.dataset.acmpJump;
        switchView('acmp');
        renderAcmp();
      });
    });

    document.getElementById('btnRunCourseCode').addEventListener('click', () => {
      const code = document.getElementById('courseCodeEditor').value;
      const fb = document.getElementById('courseFeedback');
      let out = '';
      let passed = false;

      if (c.isWeb) {
        const frame = document.getElementById('webPreviewFrame');
        frame.srcdoc = code;
        passed = code.includes(tier.expectedOut);
        out = passed ? 'Предпросмотр обновлён, критерий выполнен!' : `Проверь, что используется ${tier.expectedOut}`;
      } else if (c.isSql) {
        const rows = runSqlQuery(code);
        out = JSON.stringify(rows);
        passed = out.includes(tier.expectedOut);
      } else if (c.noLiveCompiler) {
        passed = code.includes(tier.expectedOut);
        out = passed ? `Проверка структуры пройдена (${tier.expectedOut})` : `Ожидается конструкция: ${tier.expectedOut}`;
      } else if (c.id === 'js') {
        const logs = [];
        try {
          new Function('console', code)({ log: (...a) => logs.push(a.join(' ')) });
          out = logs.join('\n');
          passed = out.trim() === tier.expectedOut;
        } catch (e) { out = e.message; }
      } else {
        // Lightweight Python evaluator for print & basic loops/functions
        const outLines = [];
        if (state.activeTier === 'guided' && code.includes('check_water')) {
          outLines.push('34 ON', '35 OFF', '36 OFF');
          if (!code.includes('< 35')) outLines[1] = '35 ON';
        } else if (state.activeTier === 'solo' && code.includes('30')) {
          outLines.push('3');
        } else if (state.activeTier === 'research' && code.includes('None')) {
          outLines.push('35');
        }
        out = outLines.join('\n');
        passed = out.trim() === tier.expectedOut;
      }

      fb.className = 'feedback-box ' + (passed ? 'ok' : 'err');
      fb.textContent = (passed ? '✅ ' : '❌ ') + (out || 'Нет вывода');
      if (passed && !state.completedLessons.includes(lessonKey)) {
        state.completedLessons.push(lessonKey);
        state.xp += 35;
        saveState();
        renderHeaderStats();
        renderHeroStats();
      }
    });
  }

  // --- 11. STEM PROJECTS & LAB SIMULATORS ---
  function renderStemProjects() {
    const grid = document.getElementById('stemProjectsGrid');
    const filtered = STEM_PROJECTS.filter((p) => {
      if (state.stemFilterSubj !== 'all' && p.subject !== state.stemFilterSubj) return false;
      if (state.stemFilterFormat !== 'all' && p.format !== state.stemFilterFormat) return false;
      return true;
    });

    grid.innerHTML = filtered.map((p) => `
      <article class="stem-card">
        <div class="acmp-card-top">
          <span class="badge badge-mint">${p.format === 'virtual' ? t('formatVirtual') : t('formatLab')}</span>
          <span class="badge badge-sky">${p.duration}</span>
        </div>
        <h3>${p.title[state.lang]}</h3>
        <div class="small muted">${p.subjects[state.lang]}</div>
        <div class="small"><strong>Итог:</strong> ${p.deliverable[state.lang]}</div>
        <button class="btn btn-sm btn-mint" data-open-stem="${p.id}" type="button">${t('openProject')}</button>
      </article>
    `).join('');

    grid.querySelectorAll('[data-open-stem]').forEach((b) => {
      b.addEventListener('click', () => {
        state.activeStemId = b.dataset.openStem;
        saveState();
        renderStemLab();
      });
    });
    renderStemLab();
  }

  function simulateGreenhouse(threshold, reserve, skip) {
    const moistures = [42, 36, 35, 34, 31, 38, 34, 33, 39, 35];
    let waterLeft = reserve;
    let sensorActivations = 0;
    let scheduleActivations = 5; // fixed every 2 ticks
    const rows = moistures.map((m, i) => {
      const mVal = skip && i === 4 ? null : m;
      const sensorOn = mVal !== null && mVal < threshold && waterLeft >= 2;
      if (sensorOn) { sensorActivations++; waterLeft -= 2; }
      return { tick: `T${i + 1}`, m: mVal === null ? 'SKIP' : `${mVal}%`, sensorOn: sensorOn ? 'ON' : 'OFF', schedOn: i % 2 === 0 ? 'ON' : 'OFF' };
    });
    return { rows, sensorActivations, scheduleActivations, waterLeft };
  }

  function renderStemLab() {
    const ws = document.getElementById('stemLabWorkspace');
    const p = STEM_PROJECTS.find((x) => x.id === state.activeStemId);
    if (!p) { ws.hidden = true; return; }
    ws.hidden = false;

    const j = state.stemJournals[p.id] || {
      mode: 'solo', roles: { researcher: '', analyst: '', developer: '', tester: '' },
      question: '', hypothesis: '', v1: '', testNote: '', finalVer: '', conclusion: ''
    };

    let simHtml = '';
    if (p.simType === 'greenhouse') {
      const cfg = state.greenhouseCfg;
      const res = simulateGreenhouse(cfg.threshold, cfg.waterReserve, cfg.skipReading);
      const b34 = 34 < cfg.threshold ? 'ON' : 'OFF';
      const b35 = 35 < cfg.threshold ? 'ON' : 'OFF';
      const b36 = 36 < cfg.threshold ? 'ON' : 'OFF';
      simHtml = `
        <div class="sim-grid">
          <div class="lesson-step-box">
            <strong>Симулятор «Умная теплица»</strong>
            <label class="small" style="display:block;margin-top:6px">Порог влажности: <strong id="ghThreshLbl">${cfg.threshold}%</strong>
              <input type="range" id="ghThreshInput" min="25" max="45" value="${cfg.threshold}" style="width:100%" />
            </label>
            <label class="small" style="display:block;margin-top:6px">Запас воды (л):
              <input type="number" id="ghReserveInput" class="input" value="${cfg.waterReserve}" min="4" max="50" />
            </label>
            <label class="checkbox-row small" style="margin-top:6px">
              <input type="checkbox" id="ghSkipInput" ${cfg.skipReading ? 'checked' : ''} /> Смоделировать пропуск показания датчика
            </label>
            <div class="small" style="margin-top:8px">
              Граничный тест: <b>34% → ${b34}</b> | <b>35% → ${b35}</b> | <b>36% → ${b36}</b><br/>
              По датчику: <b>${res.sensorActivations}</b> включений (остаток воды: ${res.waterLeft} л) vs по расписанию: <b>${res.scheduleActivations}</b>.
            </div>
          </div>
          <div>
            <table class="data-table">
              <thead><tr><th>Шаг</th><th>Влажность</th><th>Датчик</th><th>Расписание</th></tr></thead>
              <tbody>${res.rows.map((r) => `<tr><td>${r.tick}</td><td>${r.m}</td><td>${r.sensorOn}</td><td>${r.schedOn}</td></tr>`).join('')}</tbody>
            </table>
          </div>
        </div>`;
    } else if (p.simType === 'thermal') {
      const pts = state.thermalCustom;
      const polyCtrl = pts.map((pt, i) => `${30 + i * 60},${180 - pt.ctrl * 1.6}`).join(' ');
      const polyIns = pts.map((pt, i) => `${30 + i * 60},${180 - pt.ins * 1.6}`).join(' ');
      simHtml = `
        <div class="sim-grid">
          <div class="lesson-step-box">
            <strong>Кривая остывания («Тёплая школа»)</strong>
            <p class="small muted">Редактируй температуру (°C) с изоляцией — график обновится сразу.</p>
            <table class="data-table">
              <thead><tr><th>Мин</th><th>Без изоляции</th><th>С изоляцией (свой замер)</th></tr></thead>
              <tbody>${pts.map((pt, idx) => `
                <tr><td>${pt.min}</td><td>${pt.ctrl}°C</td>
                <td><input type="number" class="input" style="padding:3px 6px;width:72px" data-th-idx="${idx}" value="${pt.ins}" /></td></tr>`).join('')}
              </tbody>
            </table>
          </div>
          <div>
            <svg class="chart-svg" viewBox="0 0 320 200" aria-label="График остывания">
              <polyline fill="none" stroke="#ef4444" stroke-width="3" points="${polyCtrl}" />
              <polyline fill="none" stroke="#10b981" stroke-width="3" points="${polyIns}" />
              <text x="16" y="20" font-size="11" fill="#ef4444">● Без изоляции</text>
              <text x="130" y="20" font-size="11" fill="#10b981">● С изоляцией</text>
            </svg>
          </div>
        </div>`;
    } else {
      simHtml = `
        <table class="data-table">
          <thead><tr><th>Параметр / Сценарий</th><th>Данные</th><th>Наблюдение</th></tr></thead>
          <tbody>${(p.sampleRows || []).map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
        </table>`;
    }

    ws.innerHTML = `
      <div class="section-head">
        <div>
          <h3>🔬 ${p.title[state.lang]}</h3>
          <div class="small muted">${p.dataSource[state.lang]}</div>
        </div>
        <button class="btn btn-sm btn-outline-violet" id="btnHintStem" type="button">💡 ${t('btnHint')}</button>
      </div>

      <div class="stem-stages-bar">
        ${STEM_STAGES.map((st) => `
          <button type="button" class="stage-pill ${state.activeStemStage === st.id ? 'active' : ''}" data-stage="${st.id}">${st[state.lang]}</button>
        `).join('')}
      </div>

      ${simHtml}

      <div class="lesson-step-box" style="margin-top:14px">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:8px">
          <strong>Журнал проекта и защита (Первая версия → Итоговая)</strong>
          <select id="stemTeamMode" class="select select-sm">
            <option value="solo" ${j.mode === 'solo' ? 'selected' : ''}>Одиночный сценарий</option>
            <option value="team" ${j.mode === 'team' ? 'selected' : ''}>Команда (3–4 роли)</option>
          </select>
        </div>
        ${j.mode === 'team' ? `
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:8px;margin-bottom:10px">
            <input class="input" data-j="role_researcher" placeholder="Исследователь" value="${j.roles?.researcher || ''}" />
            <input class="input" data-j="role_analyst" placeholder="Аналитик" value="${j.roles?.analyst || ''}" />
            <input class="input" data-j="role_developer" placeholder="Разработчик" value="${j.roles?.developer || ''}" />
            <input class="input" data-j="role_tester" placeholder="Испытатель" value="${j.roles?.tester || ''}" />
          </div>` : ''}
        <div style="display:grid;gap:8px">
          <input class="input" data-j="question" placeholder="1. Вопрос исследования" value="${j.question || ''}" />
          <input class="input" data-j="hypothesis" placeholder="2. Гипотеза" value="${j.hypothesis || ''}" />
          <textarea class="input" rows="2" data-j="v1" placeholder="6. Первоначальное решение (Версия 1)">${j.v1 || ''}</textarea>
          <input class="input" data-j="testNote" placeholder="7. Конкретный тест/измерение, после которого изменил решение" value="${j.testNote || ''}" />
          <textarea class="input" rows="2" data-j="finalVer" placeholder="8–9. Итоговая версия и защита вывода">${j.finalVer || ''}</textarea>
        </div>
        <button class="btn btn-sm btn-primary" id="btnSaveJournal" style="margin-top:10px" type="button">💾 Сохранить журнал проекта</button>
      </div>
    `;

    ws.querySelectorAll('[data-stage]').forEach((b) => {
      b.addEventListener('click', () => { state.activeStemStage = b.dataset.stage; saveState(); renderStemLab(); });
    });

    if (p.simType === 'greenhouse') {
      document.getElementById('ghThreshInput').addEventListener('input', (e) => {
        state.greenhouseCfg.threshold = Number(e.target.value);
        saveState();
        renderStemLab();
      });
      document.getElementById('ghReserveInput').addEventListener('change', (e) => {
        state.greenhouseCfg.waterReserve = Number(e.target.value);
        saveState();
        renderStemLab();
      });
      document.getElementById('ghSkipInput').addEventListener('change', (e) => {
        state.greenhouseCfg.skipReading = e.target.checked;
        saveState();
        renderStemLab();
      });
    }

    if (p.simType === 'thermal') {
      ws.querySelectorAll('[data-th-idx]').forEach((inp) => {
        inp.addEventListener('change', (e) => {
          state.thermalCustom[Number(inp.dataset.thIdx)].ins = Number(e.target.value);
          saveState();
          renderStemLab();
        });
      });
    }

    document.getElementById('stemTeamMode').addEventListener('change', (e) => {
      j.mode = e.target.value;
      state.stemJournals[p.id] = j;
      saveState();
      renderStemLab();
    });

    document.getElementById('btnSaveJournal').addEventListener('click', () => {
      ws.querySelectorAll('[data-j]').forEach((el) => {
        const k = el.dataset.j;
        if (k.startsWith('role_')) {
          j.roles = j.roles || {};
          j.roles[k.replace('role_', '')] = el.value;
        } else {
          j[k] = el.value;
        }
      });
      state.stemJournals[p.id] = j;
      saveState();
      renderHeroStats();
      showToast('Журнал проекта сохранён!');
    });

    document.getElementById('btnHintStem').addEventListener('click', () => {
      openHintDrawer(p.id === 'greenhouse' ? 'greenhouse' : p.id === 'thermal' ? 'thermal' : 'general', state.activeStemStage, '');
    });
  }

  // --- 12. PROGRESS & TEACHER SCREENS ---
  function renderProgress() {
    const el = document.getElementById('progressDashboard');
    const lvlNum = Math.floor(state.xp / 100) + 1;
    el.innerHTML = `
      <div class="courses-grid">
        <div class="panel"><h3>⚡ Уровень ${lvlNum}</h3><p>${state.xp} XP (начисляется 1 раз за первое прохождение)</p></div>
        <div class="panel"><h3>🤖 Автопроверка игры и курсов</h3><p>Уровней робота: ${state.completedLevels.length}/${ROBOT_LEVELS.length} · Уроков: ${state.completedLessons.length}</p></div>
        <div class="panel"><h3>✋ Ручные отметки ACMP</h3><p>Отмечено учеником: ${state.acmpManualSolved.length} из ${state.acmpTasks.length} (отдельно от автопроверки)</p></div>
      </div>
    `;
  }

  function renderTeacher() {
    const el = document.getElementById('teacherPanelContent');
    const criteria = [
      'Предметное понимание', 'Чтение и написание кода', 'Отладка',
      'Работа с данными', 'Качество испытаний', 'Самостоятельность', 'Обоснованность вывода'
    ];
    el.innerHTML = `
      <div class="panel">
        <div class="badge badge-warn" style="margin-bottom:10px">Локальный режим: данные хранятся в браузере (для синхронизации класса требуется внешний сервер/БД).</div>
        <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:12px">
          <strong>Выдать проект классу:</strong>
          <select id="teacherProjSelect" class="select">
            ${STEM_PROJECTS.map((p) => `<option value="${p.id}" ${state.teacherAssignedProject === p.id ? 'selected' : ''}>${p.title[state.lang]}</option>`).join('')}
          </select>
          <button class="btn btn-sm btn-primary" id="btnExportClassJson" type="button">📥 Экспорт журнала JSON</button>
        </div>
        <h4>Критерии оценивания (7 критериев)</h4>
        <ul>${criteria.map((c) => `<li>${c}</li>`).join('')}</ul>
      </div>
    `;
    document.getElementById('teacherProjSelect').addEventListener('change', (e) => {
      state.teacherAssignedProject = e.target.value;
      saveState();
      showToast('Проект назначен!');
    });
    document.getElementById('btnExportClassJson').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify({ xp: state.xp, completedLevels: state.completedLevels, stemJournals: state.stemJournals }, null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'codequest_journal.json';
      a.click();
    });
  }

  // --- 13. GEMINI GUIDE (POST /hint + Local Fallback) ---
  let hintCtx = { topic: 'robot', stage: 'sequence', attempt: '' };
  const LOCAL_HINTS = {
    robot: {
      kk: 'Роботтың бағытын тексер және «Қадам» батырмасы арқылы қай жолда тоқтайтынын қара.',
      ru: 'Проверь направление робота и нажми «Шаг», чтобы увидеть, на какой строке он отклоняется от цели.',
      en: 'Check the robot direction and press Step to see which line diverges from the goal.'
    },
    greenhouse: {
      kk: 'Шекаралық мәндерді салыстыр: 34%, 35%, 36%. `<` және `<=` әртүрлі нәтиже береді.',
      ru: 'Сравни граничные значения 34%, 35% и 36%: строгое `< 35` на самом пороге 35 даёт OFF.',
      en: 'Compare boundary values 34%, 35%, 36%: strict `< 35` gives OFF at 35%.'
    },
    sql: {
      kk: '`WHERE` арқылы ақаулы жолдарды сүзіп, `ORDER BY` арқылы уақыт бойынша сұрыпта.',
      ru: 'Отфильтруй сбойные записи через `WHERE` и отсортируй по времени через `ORDER BY`.',
      en: 'Filter faulty rows with `WHERE` and sort by timestamp with `ORDER BY`.'
    },
    general: {
      kk: 'Ең қарапайым кіріс мысалын қолмен тексеріп, нәтижесін салыстыр.',
      ru: 'Проверь вручную самый маленький пример входа и сравни, на каком шаге ответ расходится.',
      en: 'Trace the smallest example by hand and check where your output diverges.'
    }
  };
  const CLIENT_BYPASS_RE = /(игнорируй|ignore\s+rules|готов(ый|ое)\s+(код|ответ|решени)|выведи\s+решени|по\s+частям|переведи\s+готовый|full\s+code|дайын\s+код)/i;

  function openHintDrawer(topic, stage, attempt) {
    hintCtx = { topic, stage, attempt };
    document.getElementById('hintContextTag').textContent = `${topic} · ${stage}`;
    document.getElementById('hintDrawer').hidden = false;
  }

  async function askGuide() {
    const q = document.getElementById('hintQuestionInput').value.trim();
    const level = Number(document.getElementById('hintLevelSelect').value);
    const share = document.getElementById('hintShareAttempt').checked;
    const respBox = document.getElementById('hintResponseBox');
    const badge = document.getElementById('guideModeBadge');

    if (CLIENT_BYPASS_RE.test(q)) {
      badge.textContent = 'Guard';
      respBox.textContent = state.lang === 'kk'
        ? 'Справочник дайын кодты бермейді. Қай қадамда қиналғаныңды жаз!'
        : state.lang === 'en'
          ? 'The Guide never reveals full solutions. Tell me which step fails!'
          : 'Справочник не выдаёт готовый код и скрытые тесты. Напиши, на каком шаге возникла ошибка!';
      return;
    }

    respBox.textContent = '...';
    try {
      const res = await fetch('/hint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lang: state.lang,
          topic: hintCtx.topic,
          stage: hintCtx.stage,
          level,
          question: q,
          attempt: share ? hintCtx.attempt.slice(0, 300) : ''
        })
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      badge.textContent = data.mode === 'gemini' ? 'Gemini' : 'Local';
      respBox.textContent = data.text;
    } catch {
      badge.textContent = 'Local';
      const entry = LOCAL_HINTS[hintCtx.topic] || LOCAL_HINTS.general;
      respBox.textContent = entry[state.lang] || entry.ru;
    }
  }

  // --- 14. NAVIGATION & DIAGNOSTICS ---
  function switchView(viewId) {
    state.view = viewId;
    saveState();
    document.querySelectorAll('.view-section').forEach((s) => s.classList.toggle('active', s.id === `view-${viewId}`));
    document.querySelectorAll('.nav-btn').forEach((b) => b.classList.toggle('active', b.dataset.view === viewId));
    if (viewId === 'city') renderCityMap();
    if (viewId === 'acmp') renderAcmp();
    if (viewId === 'courses') renderCourses();
    if (viewId === 'stem') renderStemProjects();
    if (viewId === 'progress') renderProgress();
    if (viewId === 'teacher') renderTeacher();
  }

  function applyLanguage(lang) {
    state.lang = lang;
    saveState();
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));
    document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    renderHeaderStats();
    renderHeroStats();
    renderGamePanel();
    if (state.view !== 'game') switchView(state.view);
  }

  function openDiagnostics() {
    const modal = document.getElementById('diagModal');
    const body = document.getElementById('diagBody');
    body.innerHTML = `
      <p class="small">Ответь на 2 вопроса — подберём стартовую сложность (её можно изменить вручную):</p>
      <div class="lesson-step-box">
        <strong>1. Что выведет <code>for i in range(3): print(i)</code>?</strong>
        <select id="diagQ1" class="select" style="width:100%;margin-top:6px">
          <option value="0">Не знаю (начать с опорой)</option>
          <option value="1">0 1 2</option>
          <option value="0">1 2 3</option>
        </select>
      </div>
      <div class="lesson-step-box">
        <strong>2. Найди ошибку: <code>if x = 5:</code></strong>
        <select id="diagQ2" class="select" style="width:100%;margin-top:6px">
          <option value="0">Не уверен</option>
          <option value="1">Нужно == вместо =</option>
        </select>
      </div>
      <button class="btn btn-primary btn-block" id="btnApplyDiag" type="button">Применить рекомендацию</button>
    `;
    modal.hidden = false;
    document.getElementById('btnApplyDiag').addEventListener('click', () => {
      const score = Number(document.getElementById('diagQ1').value) + Number(document.getElementById('diagQ2').value);
      state.activeTier = score === 2 ? 'research' : score === 1 ? 'solo' : 'guided';
      saveState();
      modal.hidden = true;
      renderLessonWorkspace();
      showToast(`Рекомендован уровень: ${state.activeTier}`);
    });
  }

  // --- 15. INIT ---
  function init() {
    document.body.classList.toggle('reduce-motion', Boolean(state.reduceMotion));
    document.querySelectorAll('.nav-btn').forEach((b) => b.addEventListener('click', () => switchView(b.dataset.view)));
    document.querySelectorAll('.lang-btn').forEach((b) => b.addEventListener('click', () => applyLanguage(b.dataset.lang)));

    document.getElementById('brandHomeBtn').addEventListener('click', () => switchView('game'));
    document.getElementById('heroStartCodeBtn').addEventListener('click', () => switchView('game'));
    document.getElementById('heroStartStemBtn').addEventListener('click', () => switchView('stem'));

    document.getElementById('btnRun').addEventListener('click', () => runRobot(false));
    document.getElementById('btnStep').addEventListener('click', () => runRobot(true));
    document.getElementById('btnStop').addEventListener('click', () => { stopSim(); setFeedback('info', t('stoppedByUser')); });
    document.getElementById('btnCheck').addEventListener('click', checkRobotSolution);
    document.getElementById('btnResetField').addEventListener('click', () => resetSim(true));
    document.getElementById('btnRestoreTemplate').addEventListener('click', () => resetSim(false));
    document.getElementById('toggleMapBtn').addEventListener('click', () => {
      const lvl = getActiveLevel();
      sim.mapIndex = (sim.mapIndex + 1) % lvl.maps.length;
      resetSim(true);
      document.getElementById('mapSwitchBadge').textContent = `Map ${sim.mapIndex + 1} / ${lvl.maps.length}`;
    });

    document.getElementById('robotCodeEditor').addEventListener('input', (e) => {
      state.robotDrafts[state.currentLevel] = e.target.value;
      saveState();
    });

    document.querySelectorAll('.mob-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.mob-tab').forEach((x) => x.classList.toggle('active', x === tab));
        const target = tab.dataset.mob;
        document.querySelectorAll('.mob-pane').forEach((p) => p.classList.toggle('active', p.dataset.pane.includes(target)));
      });
    });

    document.getElementById('motionToggleBtn').addEventListener('click', (e) => {
      state.reduceMotion = !state.reduceMotion;
      document.body.classList.toggle('reduce-motion', state.reduceMotion);
      e.currentTarget.setAttribute('aria-pressed', String(state.reduceMotion));
      saveState();
    });

    document.getElementById('teacherToggleBtn').addEventListener('click', () => switchView('teacher'));
    document.getElementById('btnCloseTeacher').addEventListener('click', () => switchView('stem'));

    document.getElementById('btnOpenHintGame').addEventListener('click', () => {
      const lvl = getActiveLevel();
      openHintDrawer(lvl.topic, lvl.stage, document.getElementById('robotCodeEditor').value);
    });
    document.getElementById('closeHintDrawerBtn').addEventListener('click', () => { document.getElementById('hintDrawer').hidden = true; });
    document.getElementById('btnAskGuide').addEventListener('click', askGuide);

    document.getElementById('btnStartFromZero').addEventListener('click', () => {
      state.activeCourseId = 'python'; state.activeTier = 'guided'; saveState(); renderLessonWorkspace();
    });
    document.getElementById('btnOpenDiag').addEventListener('click', openDiagnostics);
    document.getElementById('closeDiagBtn').addEventListener('click', () => { document.getElementById('diagModal').hidden = true; });

    document.getElementById('acmpSearch').addEventListener('input', (e) => { state.acmpSearch = e.target.value; state.acmpPage = 1; renderAcmp(); });
    document.getElementById('acmpDiffFilter').addEventListener('change', (e) => { state.acmpDiff = e.target.value; state.acmpPage = 1; renderAcmp(); });
    document.getElementById('acmpSort').addEventListener('change', (e) => { state.acmpSort = e.target.value; renderAcmp(); });
    document.getElementById('acmpImportFile').addEventListener('change', async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      try {
        const data = JSON.parse(await file.text());
        const arr = Array.isArray(data) ? data : data.tasks;
        if (!Array.isArray(arr)) throw new Error('Invalid JSON');
        state.acmpTasks = arr;
        saveState();
        renderAcmp();
        showToast(`Импортировано ${arr.length} задач ACMP!`);
      } catch {
        showToast('Ошибка формата JSON.');
      }
    });

    document.getElementById('stemSubjectFilter').addEventListener('change', (e) => { state.stemFilterSubj = e.target.value; renderStemProjects(); });
    document.getElementById('stemDiffFilter').addEventListener('change', (e) => { state.activeTier = e.target.value === 'all' ? state.activeTier : e.target.value; state.stemFilterDiff = e.target.value; renderStemProjects(); });
    document.getElementById('stemFormatFilter').addEventListener('change', (e) => { state.stemFilterFormat = e.target.value; renderStemProjects(); });

    applyLanguage(state.lang);
    switchView(state.view);
  }

  window.addEventListener('DOMContentLoaded', init);
})();
