# Google Sheet Feed Setup

## Goal

Use a published Google Sheet as the product source without adding a backend.

## Required Columns

Use this exact header row:

| id | name | price | image_url | reference_url | status | note | contact_url |
| --- | --- | --- | --- | --- | --- | --- | --- |

## Steps

1. Create one sheet tab for products.
2. Keep one row per item.
3. Publish the sheet as CSV.
4. Copy the CSV URL into `.env.local`:

```bash
VITE_GOOGLE_SHEET_CSV_URL="https://docs.google.com/spreadsheets/d/e/.../pub?output=csv"
```

## Notes

- `status` should be `available` or `sold`
- `contact_url` can be blank if you want to use the global CTA
- if the feed fails, the site falls back to mock sample data
