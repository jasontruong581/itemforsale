# Phase 03 Core UI

## Overview

Build the main sections and a strong product card system.

## Requirements

- hero looks premium
- intro explains trust and purpose quickly
- product cards are visually consistent
- price and CTA are obvious

## Architecture

Primary components:
- `HeroSection`
- `IntroSection`
- `ProductGrid`
- `ProductCard`
- `FilterTabs`
- `FooterCta`

## Implementation Steps

1. Build hero with rich background layers and clear headline.
2. Build intro/trust block.
3. Build responsive grid.
4. Build product card with image, title, price, note, status, actions.
5. Style sold state separately from available state.
6. Add mobile-friendly button sizing and spacing.

## Acceptance Criteria

- design feels intentional and premium
- cards remain readable at all breakpoints
- price is the strongest text element
- CTA button is easy to tap on mobile

## Risks

- too much glass/glow hurts readability
- inconsistent image ratios weaken the layout

## Todo Checklist

- [x] build hero
- [x] build intro
- [x] build card component
- [x] build grid and filter
- [x] build footer CTA
- [x] verify mobile spacing
