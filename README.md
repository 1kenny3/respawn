# RESPAWN

Магазин внутриигровой валюты с каталогом, калькулятором, корзиной и подготовленной интеграцией Т-Кассы.

- Витрина: `public/index.html`, `public/style.css`, `public/app.js`.
- Оформление: `public/checkout.js`.
- Каталог для расчётов сервера: `public/products.json`.
- Серверная оплата: `server/payments.mjs`, `app/api/payments/`.
- Заказы: D1, схема `db/schema.ts`, миграции `drizzle/`.
- Подключение терминала и ограничения запуска: [PAYMENT-SETUP.md](PAYMENT-SETUP.md).

`npm run dev` — локальная разработка. `node tests/calculator.cjs` и `node tests/payments.mjs` — проверки.

До подключения терминала реальная оплата отключена. Данные карты сайт не собирает.
