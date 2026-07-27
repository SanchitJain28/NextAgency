# Provenance

## Source Project

- **Name**: ScaleFront — Premium Shopify Agency Homepage
- **Project ID**: `9c453434-17e0-433e-9be6-b33577d54f39`
- **Kind**: other
- **Created by**: agent (Open Design)

## Extraction

This design system was extracted on 2026-07-26 from the source project's sole artifact: `scalefront-homepage.html` (802 lines). The homepage is a complete, self-contained HTML document with embedded CSS and JavaScript — no external dependencies beyond Google Fonts (Inter).

## What was preserved

- **scalefront-homepage.html**: The original source artifact, kept intact at the project root as reference
- **CSS tokens**: All `:root` custom properties extracted verbatim from lines 11–24 of the source
- **Type scale**: Full hierarchy mapped from actual CSS rules (hero H1, section H2, card H3, body, labels, stats)
- **Component CSS**: Every component class preserved in DESIGN.md's component section with exact dimensions, transitions, and hover states
- **Layout grid**: All grid definitions, breakpoints, and responsive overrides documented
- **Copy tone**: Descriptive analysis of headline patterns, terminology, and trust-signal usage
- **SVG illustrations**: Both hero and "Why Us" SVG illustrations preserved inline in the source file

## What was inferred

- **OKLCH equivalents**: Derived from hex values using perceptual conversion
- **State colors**: Green/amber/red — standard semantic set, not present in the source homepage
- **Mono font stack**: Not used in the source; added as a sensible default for code snippets
- **Spacing scale tokens**: The source uses raw px values; `colors_and_type.css` formalizes them into named `--space-*` tokens
- **Motion preferences**: `prefers-reduced-motion` not in source; noted as a gap in DESIGN.md

## Design System ID

`user:scalefront-premium-shopify-agency-homepage-design-system`

## Processing notes

The source project had no active design system, no brand spec, and no uploaded assets. All visual evidence came from a single HTML file. The extraction is faithful: every token, dimension, transition, and layout rule in the DESIGN.md can be traced to a specific line range in `scalefront-homepage.html`.
