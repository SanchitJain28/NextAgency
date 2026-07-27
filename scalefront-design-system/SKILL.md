---
name: scalefront-premium-shopify-agency-homepage-design-system
description: ScaleFront design system — premium Shopify agency with clean SaaS aesthetic (Linear.app / Vercel.com style), Inter typeface, blue accent, light theme, engineering-forward tone. Extracted from the ScaleFront homepage.
user-invocable: true
---

# Skill: ScaleFront Design System

## What is inside

A complete design-system package extracted from the ScaleFront premium Shopify agency homepage. Includes:
- **DESIGN.md**: Full design system documentation — color, type, spacing, layout, components, motion, voice, anti-patterns
- **colors_and_type.css**: Reusable CSS custom properties with all tokens, type scale, spacing, and derived tints
- **preview/**: 11 focused review cards covering colors, typography, spacing, radii/shadows, components, brand assets, and applied UI surfaces
- **ui_kits/app/**: Applied interface kit with standalone component pages (buttons, cards, navigation) built against the design tokens
- **assets/**: Extracted SVG assets — logo mark, hero illustration, service icons
- **scalefront-homepage.html**: Original source artifact preserved as reference (802 lines)

## Source context

This design system was extracted on 2026-07-26 from Open Design project `9c453434-17e0-433e-9be6-b33577d54f39` ("ScaleFront — Premium Shopify Agency Homepage"). The source is a single self-contained HTML file (`scalefront-homepage.html`, 802 lines) with all CSS and JS inline — no external dependencies beyond Google Fonts (Inter weights 400/500/600). All visual evidence comes from this one file; every token, dimension, and component rule can be traced to a specific source line range.

See `context/provenance.md` for the full extraction record.

## When to use

- The user requests the ScaleFront brand or aesthetic
- The project brief matches premium SaaS / agency marketing pages
- The user asks for "Linear.app style" or "Vercel.com aesthetic" on a light theme
- Building a landing page, service grid, or agency site with confident, engineering-forward tone

## How to use

1. Include `colors_and_type.css` in your `:root` block
2. Import Inter from Google Fonts (weights 400, 500, 600)
3. Reference `DESIGN.md` sections 6-8 for component specs, motion rules, and voice guidelines
4. Copy component markup and classes from `ui_kits/app/` files for buttons, cards, and navigation
5. Use `color-mix()` for all accent-derived values (tints, shadows, borders)

## Design-system highlights

### Palette (6 tokens, all from source `:root`, line 11-18)
`--bg` #ffffff · `--surface` #f7f8fa · `--fg` #111111 · `--muted` #6b7280 · `--border` #d9dee7 · `--accent` #1677ff

### Typography (Inter only, weights 400/500/600)
Hero H1 64px/600 · Section H2 40px/600 · Card H3 18px/600 · Body 15px/400 · Labels 13px/600

### Key components
- **Button**: 6 variants (Primary, Accent, Outline, Light, Dark Outline, Nav CTA) — all 8px radius, 0.2s transitions, -1px hover lift
- **Card**: 3 variants (Service, Case Study, Testimonial) — 32px padding, accent shadow + -4px hover lift
- **Navigation**: Sticky glassmorphism navbar with backdrop-filter blur, logo mark + wordmark
- **FAQ**: Native `<details>`/`<summary>` accordion with +/- indicator
- **Process Flow**: 4-step horizontal with `::after` connector lines

### Visual rules
- Light theme only — dark backgrounds reserved for the Final CTA section
- Accent used sparingly: one instance per screen section max
- No stock photography (custom SVG illustrations)
- No purple gradients, no emoji icons, no left-border accent cards
- Generous whitespace: 120px section padding, 1280px max content width

### Responsive
Breakpoints at 1024px (tablet: 3→2 col grids, hero stacks) and 640px (mobile: 2→1 col, reduced padding, nav links hidden)
