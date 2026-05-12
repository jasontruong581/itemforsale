# Sale Personal Site Technical Design

## Overview

Single-page website to sell a small list of curated personal items.
Primary goals:
- eye-catching design
- clear product cards
- prominent pricing
- easy CTA to contact or buy

Non-goals:
- no auth
- no cart
- no checkout
- no admin panel
- no realtime sync
- no category system

## Product Scope

The site has one public page with four sections:
- hero
- short introduction
- product grid
- contact / CTA footer

Expected dataset:
- up to 50 items
- manually updated by owner
- low traffic

## Recommended Stack

- `Vite + React + TypeScript`
- `Tailwind CSS`
- `Cloudflare Pages` for hosting
- `Google Sheets` as manual data source

Why this stack:
- fast to build
- easy visual iteration
- static deployment fits free hosting
- React helps map sheet rows into cards cleanly
- Tailwind speeds up custom visual design work

## Data Architecture

Source of truth is one Google Sheet.
The sheet is published for read access only.
The frontend fetches sheet data on page load and transforms rows into products.

Recommended columns:

| Column | Purpose |
| --- | --- |
| `id` | stable key |
| `name` | product title |
| `price` | sale price shown prominently |
| `image_url` | main product image |
| `reference_url` | external reference / original listing |
| `status` | `available` or `sold` |
| `note` | short supporting text |
| `contact_url` | CTA destination, optional per item |

Rules:
- keep column names fixed
- avoid formulas unless necessary
- use full `https://` URLs
- keep one row per item

## UI Direction

Visual inspiration comes from `vividkit.dev`, but adapted for product browsing instead of SaaS marketing.

Design principles:
- atmospheric background with gradient, glow, soft noise, blur
- product area must remain high-contrast and easy to scan
- price is the strongest visual element on each card
- CTA button must be obvious on desktop and mobile
- motion should support focus, not distract

Recommended page composition:

1. Hero
- strong headline
- short trust-building subtext
- primary CTA scrolls to products

2. Intro block
- explain what kind of products these are
- emphasize transparent pricing and real reference links

3. Product grid
- responsive cards
- image first
- title second
- price third
- supporting note
- two actions: reference link and contact CTA

4. Footer CTA
- one simple way to contact you
- optional social links

## Card Design Requirements

Each card should include:
- fixed image ratio for visual consistency
- clear product name
- large price text
- status badge
- compact note
- reference link
- primary CTA button

Visual hierarchy:
- `price > image > name > CTA > note`

## Interaction Design

- soft entrance animation on hero
- stagger reveal on product cards
- hover elevation / glow on cards
- subtle button motion
- sold items remain visible but visually muted

Do not add:
- heavy parallax
- autoplay video background
- excessive blur over content
- complex filtering UI for MVP

## Performance Strategy

- keep app mostly static
- load one lightweight sheet feed
- optimize images by using stable hosted URLs
- lazy-load below-the-fold images if needed
- minimize JS used only for decoration

## Deployment Architecture

- repo hosted normally
- deploy to `Cloudflare Pages`
- production branch auto-deploy
- optional custom domain later

No backend is required for MVP.

## Risks

### Public sheet exposure

If the sheet feed is public, product data is publicly accessible.
This is acceptable for MVP because the data is intentionally public.

### Feed fragility

If the sheet column order changes, parsing can break.
Mitigation: lock schema and document it.

### External image issues

Hotlinked images may fail or load slowly.
Mitigation: prefer stable image hosting under your control.

### Overdesigned UI

Too much visual treatment can reduce readability and conversion.
Mitigation: treat design as background atmosphere; keep cards simple.

## Acceptance Criteria

- one single page
- loads product data from Google Sheet
- displays up to 50 items cleanly
- mobile layout remains readable
- prices stand out immediately
- CTA is obvious and easy to tap
- deploys successfully to Cloudflare Pages

## Build Guidance

When implementation starts, use `ck:cook` against the implementation plan in:

`plans/260511-sale-personal-site/plan.md`
