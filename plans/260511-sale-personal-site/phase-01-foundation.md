# Phase 01 Foundation

## Overview

Create the base project and prepare it for design-heavy frontend work.

## Requirements

- initialize Vite React TypeScript app
- add Tailwind CSS
- define app structure for single-page site
- prepare base design tokens and global styles

## Architecture

Suggested structure:

```text
src/
  app/
  components/
  sections/
  lib/
  data/
  styles/
```

## Implementation Steps

1. Scaffold Vite React TypeScript project.
2. Install and configure Tailwind.
3. Clean starter files and create app shell.
4. Add global CSS variables for colors, glow, spacing, radius, shadows.
5. Create placeholder sections: hero, intro, products, footer CTA.

## Acceptance Criteria

- project runs locally
- base layout renders one page
- design token system exists
- no demo boilerplate remains

## Risks

- spending too long on setup instead of design
- choosing too many abstractions too early

## Todo Checklist

- [x] scaffold app
- [x] install styling stack
- [x] create page skeleton
- [x] create global theme tokens
- [x] verify local build
