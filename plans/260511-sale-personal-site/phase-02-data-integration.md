# Phase 02 Data Integration

## Overview

Wire the frontend to a Google Sheet feed and normalize rows into product objects.

## Requirements

- define product type
- fetch rows from Google Sheet
- map rows safely into UI-ready data
- handle empty or malformed rows gracefully

## Architecture

Create:
- a lightweight data loader in `src/lib`
- a product type in `src/data` or `src/lib`
- one transform layer between sheet row data and UI

## Implementation Steps

1. Finalize sheet column order.
2. Add config for sheet URL / feed endpoint.
3. Implement fetch utility.
4. Implement row-to-product transformer.
5. Add loading, empty, and error states.
6. Add optional status filter for `all`, `available`, `sold`.

## Acceptance Criteria

- products render from sheet data
- missing optional fields do not crash UI
- unavailable rows can be marked sold
- broken feed shows a clean fallback state

## Risks

- column order changes
- published sheet caching delays
- image links from unstable hosts

## Todo Checklist

- [x] define product schema
- [x] document sheet columns
- [x] implement fetch + transform
- [x] render live data
- [x] add fallback states
- [x] test with sample rows
