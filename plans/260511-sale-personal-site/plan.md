---
status: completed
project: sale-personal-site
created: 2026-05-11
source: brainstorm-approved
implementation_tool: ck:cook
completed: 2026-05-12
---

# Sale Personal Site Plan

## Overview

Build a single-page product showcase website for selling personal items with:
- strong visual design
- Google Sheets as manual data source
- static deployment on Cloudflare Pages

## Success Criteria

- the page looks polished and distinct, not boilerplate
- product cards are easy to scan
- prices are visually dominant
- CTA is clear on desktop and mobile
- owner can update product rows through Google Sheets only
- site deploys on Cloudflare Pages without backend complexity

## Constraints

- max 50 items
- no category system
- one page only
- no realtime
- no auth
- no checkout flow
- free-friendly hosting

## Technical Decisions

- frontend: `Vite + React + TypeScript`
- styling: `Tailwind CSS`
- data source: published Google Sheet feed
- hosting: `Cloudflare Pages`
- MVP filter: `all / available / sold`

## Phase Summary

1. Foundation and project setup
2. Data model and Google Sheets integration
3. Core layout and product grid
4. Visual polish and interaction design
5. Deployment, QA, and handoff

## Dependencies

- final copy text for hero / intro
- preferred contact destination
- sample Google Sheet with agreed columns
- a few real product images for visual tuning

## How To Execute

Recommended execution command when ready to build:

```text
/ck:cook plans/260511-sale-personal-site/plan.md --interactive
```

Fastest version if scope stays unchanged:

```text
/ck:cook plans/260511-sale-personal-site/plan.md --fast
```

## Delivery Notes

- implemented as a single-page React + TypeScript + Vite site
- includes polished mock/sample product data out of the box
- supports optional Google Sheet CSV feed through `VITE_GOOGLE_SHEET_CSV_URL`
- verified with `npm run lint`, `npm run test`, and `npm run build`
