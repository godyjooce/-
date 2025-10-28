
import { Section } from '../types';

export const roadmapData: Section[] = [
  {
    id: 's1',
    title: 'Основы Языка',
    level: 'Уровень 1: Новичок',
    color: 'sky',
    topics: [
      { id: 't1_1', title: 'Введение в Python', description: 'Что такое Python, история, философия (The Zen of Python), установка и настройка окружения (Python, VS Code/PyCharm).' },
      { id: 't1_2', title: 'Основы синтаксиса', description: 'Переменные, типы данных (int, float, str, bool, None), ввод/вывод (input, print), комментарии.' },
      { id: 't1_3', title: 'Операторы', description: 'Арифметические (+, -, *, /, //, %, **), сравнения (==, !=, >, <, >=, <=), логические (and, or, not).' },
      { id: 't1_4', title: 'Строки', description: 'Индексы, срезы, f-строки, методы строк (upper, lower, strip, split, join).' },
      { id: 't1_5', title: 'Условные конструкции', description: 'Операторы if, elif, else для управления потоком выполнения программы.' },
      { id: 't1_6', title: 'Списки (Lists)', description: 'Создание, индексация, срезы, методы (append, insert, pop, remove, sort), циклы со списками.' },
      { id: 't1_7', title: 'Циклы', description: 'Циклы for (с range, со списками) и while. Операторы break и continue.' },
      { id: 't1_8', title: 'Словари (Dictionaries)', description: 'Структура ключ-значение, создание, доступ к элементам, методы (keys, values, items, get).' },
      { id: 't1_9', title: 'Кортежи (Tuples) и Множества (Sets)', description: 'Неизменяемые кортежи. Уникальные элементы в множествах, операции над множествами.' },
      { id: 't1_10', title: 'Функции', description: 'Создание функций (def), параметры и аргументы (позиционные, именованные), возвращение значений (return), области видимости.' },
      { id: 't1_11', title: 'Работа с файлами', description: 'Открытие, чтение, запись файлов (open, with). Режимы r, w, a.' },
    ],
  },
  {
    id: 's2',
    title: 'Продвинутые концепции',
    level: 'Уровень 2: Уверенный пользователь',
    color: 'amber',
    topics: [
      { id: 't2_1', title: 'Объектно-ориентированное программирование (ООП)', description: 'Классы, объекты, атрибуты, методы. Магические методы (__init__, __str__). Наследование, инкапсуляция, полиморфизм.' },
      { id: 't2_2', title: 'Модули и пакеты', description: 'Импорт модулей (import), создание собственных модулей. Менеджер пакетов pip, виртуальные окружения (venv).' },
      { id: 't2_3', title: 'Обработка исключений', description: 'Конструкции try, except, else, finally для обработки ошибок. Вызов исключений (raise).' },
      { id: 't2_4', title: 'List, Dict, Set Comprehensions', description: 'Краткий и "пайтонический" способ создания коллекций на основе других.' },
      { id: 't2_5', title: 'Лямбда-функции', description: 'Создание анонимных функций. Использование с map(), filter(), sorted().' },
      { id: 't2_6', title: 'Генераторы и итераторы', description: 'Понимание протокола итерации. Создание генераторов (yield) для эффективной работы с памятью.' },
      { id: 't2_7', title: 'Декораторы', description: 'Функции, которые изменяют поведение других функций. Основы метапрограммирования.' },
      { id: 't2_8', title: 'Работа с датой и временем', description: 'Модули datetime и time для манипуляций с датами, временем, временными зонами.' },
    ],
  },
  {
    id: 's3',
    title: 'Профессиональные инструменты и специализация',
    level: 'Уровень 3: Профессионал',
    color: 'emerald',
    topics: [
      { id: 't3_1', title: 'Тестирование кода', description: 'Основы тестирования. Фреймворки unittest и pytest для написания автоматических тестов.' },
      { id: 't3_2', title: 'Работа с API', description: 'Взаимодействие с веб-сервисами. Библиотека requests. Работа с форматом JSON.' },
      { id: 't3_3', title: 'Базы данных', description: 'Основы SQL. Работа с SQLite через модуль sqlite3. Введение в ORM (SQLAlchemy, Django ORM).' },
      { id: 't3_4', title: 'Асинхронное программирование', description: 'Концепция асинхронности. Ключевые слова async/await. Библиотека asyncio.' },
      { id: 't3_5', title: 'Многопоточность и многопроцессорность', description: 'Модули threading и multiprocessing для параллельного выполнения задач.' },
      { id: 't3_6', title: 'Веб-разработка', description: 'Создание веб-приложений. Обзор фреймворков Django (full-stack) и Flask/FastAPI (microframeworks).' },
      { id: 't3_7', title: 'Анализ данных и Машинное обучение', description: 'Библиотеки NumPy, Pandas для анализа данных. Scikit-learn для ML. Matplotlib/Seaborn для визуализации.' },
      { id: 't3_8', title: 'Алгоритмы и структуры данных', description: 'Углубленное изучение для решения сложных задач и прохождения собеседований.' },
      { id: 't3_9', title: 'DevOps и CI/CD', description: 'Основы Docker, Git. Автоматизация сборки и развертывания (CI/CD) с помощью GitHub Actions/GitLab CI.' },
    ],
  },
];
   