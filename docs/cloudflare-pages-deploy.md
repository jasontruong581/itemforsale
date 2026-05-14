# Cloudflare Pages Deploy

## Build Settings

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

## Environment

Add `VITE_GOOGLE_SHEET_CSV_URL` in Cloudflare Pages for both `Production` and `Preview`.

## Deployment Flow

1. Push the repo to GitHub.
2. Create a new Cloudflare Pages project.
3. Connect the repo.
4. Use the build settings above.
5. Add `VITE_GOOGLE_SHEET_CSV_URL` in project settings.
6. Deploy.

## Notes

- the deployment depends on a public Google Sheet CSV URL
- if the feed is unreachable, the UI shows an error instead of falling back to sample data
