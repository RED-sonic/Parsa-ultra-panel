# CACTUS-Panel-Ai — کاکتوس پنل (Bilingual README)

این شاخه برای برندینگ و scaffold اولیه «کاکتوس پنل» ایجاد شده است.

English summary
This branch contains initial branding and a minimal Node.js scaffold to run the project locally and to prepare for OAuth/Stripe integrations.

What's included (initial)
- Rename/branding to "کاکتوس پنل" and color #39FF14
- Temporary cactus SVG logo (assets/logo.svg)
- Minimal Node.js Express server (server.js) as a development scaffold
- i18n skeleton (src/i18n/fa.json and en.json)
- .env.example listing required secrets
- Dockerfile and docker-compose.yml for local runs
- GitHub Actions workflow to run CI and optionally deploy to Render when secrets are provided

How to run locally
1. Copy .env.example to .env and fill required values.
2. npm install
3. npm start

Deployment
A Render deployment step is included in .github/workflows/ci.yml which will run if you add the following repository secrets:
- RENDER_API_KEY
- RENDER_SERVICE_ID

Or deploy anywhere you like; instructions are in this README.

---

فارسی — توضیحات کوتاه
این شاخه شامل اسکلت اولیه‌ی سرور Node.js، ترجمه‌های پایه، لوگوی موقتی و فایل‌های docker است تا بتوانید سریعاً اپ را محلی اجرا کنید و سپس با قرار دادن مقادیر در Secrets سرویس‌هایی مانند OAuth و Stripe را فعال کنید.

فایل‌های مهم
- .env.example — متغیرهای مورد نیاز (OAuth, SMTP, Stripe)
- Dockerfile / docker-compose.yml — برای اجرا در محیط محلی یا کانتینر
- src/server.js — اسکلت ساده‌ی سرور که مسیرهای placeholder برای OAuth و webhook دارد
- public/ — صفحات استاتیک اولیه

Contributing / Next steps
- Add real OAuth keys and Stripe keys to repository Secrets
- Replace the temporary logo with production logo (assets/logo.svg)
- Review and merge the feature/cactus-panel branch
