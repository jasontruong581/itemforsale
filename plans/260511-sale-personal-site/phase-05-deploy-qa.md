# Phase 05 Deploy QA

## Overview

Finalize the site, verify behavior, and prepare Cloudflare Pages deployment.

## Requirements

- production build succeeds
- responsive behavior verified
- sheet feed works in deployed environment
- deployment setup is documented simply

## Implementation Steps

1. Test local production build.
2. Verify loading, empty, sold, and error states.
3. Check mobile and desktop layouts.
4. Configure Cloudflare Pages build settings.
5. Add deployment notes and sheet update instructions.
6. Do one final UI pass with real content.

## Acceptance Criteria

- successful deploy to Cloudflare Pages
- no broken layout on common screen sizes
- Google Sheet update flow is understandable
- owner can maintain site without code edits

## Risks

- env/config mismatch on deploy
- sheet URL misconfiguration
- final content less polished than design placeholders

## Todo Checklist

- [x] production build
- [x] state verification
- [x] responsive QA
- [x] deployment config
- [x] maintenance notes
- [x] final content pass
