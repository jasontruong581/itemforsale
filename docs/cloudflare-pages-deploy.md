# Cloudflare Pages Deploy

## Build Settings

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

## Environment

Add `VITE_GOOGLE_SHEET_CSV_URL` only when you are ready to switch from mock data to the live Google Sheet feed.

## Deployment Flow

1. Push the repo to GitHub.
2. Create a new Cloudflare Pages project.
3. Connect the repo.
4. Use the build settings above.
5. Deploy.

## Notes

- the site works immediately with mock sample data
- if the Google Sheet feed is unreachable, the site still falls back to the sample dataset
