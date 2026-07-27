# ScaleFront Design System

Premium Shopify agency design system — clean, confident, engineering-forward. Extracted from the ScaleFront homepage (Linear.app / Vercel.com aesthetic, light theme, Inter typeface, blue accent).

## Product Overview

ScaleFront is a premium Shopify development agency targeting DTC brands doing $5M+ in annual GMV. The source homepage is a complete, self-contained marketing page with 12 sections covering the full agency pitch: hero with trust badges, stats strip, 9-service card grid, why-us comparison, 3 case studies, tech stack logo cloud, 3 testimonials, 4-step process flow, 2-column FAQ, and a final CTA on a dark background.

This design system captures the complete visual language — every color token, type size, spacing value, and component interaction is traceable to a specific CSS rule in the source `scalefront-homepage.html` (802 lines). The system is designed for reuse across any ScaleFront-branded surface: marketing pages, service landing pages, case study templates, and email designs.

## Package Contents

### Source & Context
- `context/source-context.md` — Original project handoff metadata
- `context/provenance.md` — Full extraction record with source line references
- `scalefront-homepage.html` — Preserved source artifact (802 lines)

### Design Documentation
- `DESIGN.md` — Complete design system: visual theme, color, type, spacing, layout, components, motion, voice, anti-patterns
- `SKILL.md` — Claude-style skill package with frontmatter, source context, and reuse instructions

### Tokens & Styles
- `colors_and_type.css` — CSS custom properties: palette, type scale, spacing scale, shadows, accent tints, transitions

## Preview Manifest

```json
{
  "cards": [
    { "id": "colors", "file": "preview/colors.html", "label": "Colors", "description": "Full palette swatches, tints, shadows" },
    { "id": "colors-primary", "file": "preview/colors-primary.html", "label": "Colors (Primary)", "description": "Primary palette only" },
    { "id": "typography", "file": "preview/typography.html", "label": "Typography", "description": "Type scale with specimens" },
    { "id": "typography-specimens", "file": "preview/typography-specimens.html", "label": "Type Specimens", "description": "Type scale specimens only" },
    { "id": "spacing", "file": "preview/spacing.html", "label": "Spacing", "description": "Spacing scale, section rhythm, layout" },
    { "id": "spacing-tokens", "file": "preview/spacing-tokens.html", "label": "Spacing Tokens", "description": "Spacing tokens only" },
    { "id": "radius-shadows", "file": "preview/radius-shadows.html", "label": "Radii & Shadows", "description": "Radius variants and shadow tokens" },
    { "id": "components", "file": "preview/components.html", "label": "Components", "description": "Button, card, nav, FAQ gallery" },
    { "id": "components-buttons", "file": "preview/components-buttons.html", "label": "Buttons", "description": "Button variants only" },
    { "id": "brand-assets", "file": "preview/brand-assets.html", "label": "Brand Assets", "description": "Logo, icons, SVG illustrations" },
    { "id": "applied-ui", "file": "preview/applied-ui.html", "label": "Applied UI", "description": "Section compositions from source" }
  ]
}
```

This manifest mirrors `preview/manifest.json`.
| Card | File | What it shows |
|------|------|---------------|
| Colors | `preview/colors.html` | Full palette swatches, tints, shadows, semantic roles |
| Colors (primary) | `preview/colors-primary.html` | Primary palette only |
| Typography | `preview/typography.html` | Type scale with specimens |
| Type specimens | `preview/typography-specimens.html` | Type scale focused |
| Spacing | `preview/spacing.html` | Spacing scale, section rhythm, layout width |
| Spacing tokens | `preview/spacing-tokens.html` | Spacing tokens focused |
| Radii & Shadows | `preview/radius-shadows.html` | Border radius variants, shadow tokens, hover demo |
| Components | `preview/components.html` | Gallery: buttons, cards, stats, process, FAQ, badges |
| Buttons | `preview/components-buttons.html` | Button variants only |
| Brand Assets | `preview/brand-assets.html` | Logo mark, wordmark, service icons, SVG illustrations |
| Applied UI | `preview/applied-ui.html` | Section compositions: hero, services, case studies, process, CTA |

### UI Kit
- `ui_kits/app/` — Applied interface kit with standalone component pages
  - `index.html` — Component overview grid
  - `button.html` — 6 button variants with specs table
  - `card.html` — 3 card variants (service, case study, testimonial)
  - `navigation.html` — Sticky glassmorphism navbar + footer

### Preserved Assets
- `assets/logo-mark.svg` — "S" logo mark (32×32px, accent background)
- `assets/hero-illustration.svg` — Abstract dashboard illustration
- `assets/icon-theme.svg` — Theme service icon
- `assets/icon-headless.svg` — Headless commerce icon
- `assets/icon-performance.svg` — Performance optimization icon

### Design System ID
`user:scalefront-premium-shopify-agency-homepage-design-system`

## Quick Start

```css
@import url('colors_and_type.css');
```

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600&display=swap" rel="stylesheet">
```

Paste the `:root` block from `colors_and_type.css`, include Inter, and refer to `DESIGN.md` for component specs and layout patterns.

## Review Workflow

1. **Start with the preview cards** — Open `preview/colors.html` and `preview/typography.html` to audit tokens
2. **Check applied surfaces** — Open `preview/applied-ui.html` to see component compositions
3. **Review component specs** — Read `DESIGN.md` sections 6-8 for full component, motion, and voice documentation
4. **Browse the UI kit** — Open `ui_kits/app/index.html` for standalone, copy-ready component pages
5. **Reference the source** — Open `scalefront-homepage.html` for the original, unmodified source artifact

## For AI Agents

When generating from this design system:
- Always load `colors_and_type.css :root` tokens verbatim
- Use `color-mix()` for all accent-derived values
- Respect the anti-patterns: no dark backgrounds (except Final CTA), no purple gradients, no emoji icons
- Follow the voice: confident, metric-backed, active-verb engineering language
- Reference source line numbers in `DESIGN.md` section 0 when verifying extractions
