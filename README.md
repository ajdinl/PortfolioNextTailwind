# Ajdin Lojić, Portfolio

Personal portfolio built with Next.js 15 (App Router), React 19 and Tailwind CSS. Live at [ajdinlojic.vercel.app](https://ajdinlojic.vercel.app).

All content lives in [`db.json`](./db.json). Edit it to update both the site and the CV.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run cv         # builds the site and renders /cv into public/Ajdin-Lojic-CV.pdf
```

`npm run cv` needs a Playwright Chromium browser once: `npx playwright install chromium`.
