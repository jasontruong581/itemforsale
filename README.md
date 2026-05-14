# Sale Personal Site

Single-page website to showcase and sell a small list of personal items with strong visual design, clear pricing, and a fast CTA.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Data Source

The site reads product data from a published Google Sheet CSV feed.
Create `.env.local` from `.env.example` and set `VITE_GOOGLE_SHEET_CSV_URL` before running or deploying the app.

## Google Sheet Columns

Use these headers exactly:

`id,name,price,image_url,reference_url,status,note,contact_url`

Detailed setup is in [docs/google-sheet-feed-setup.md](docs/google-sheet-feed-setup.md).

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `VITE_GOOGLE_SHEET_CSV_URL`

Detailed deployment notes are in [docs/cloudflare-pages-deploy.md](docs/cloudflare-pages-deploy.md).
