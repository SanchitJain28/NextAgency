---
name: scalefront-design-system
description: Guide and rules for designing, styling, and building UI components and pages on scalefront.io. Use this skill whenever designing or updating frontend components, landing pages, service pages, portfolio pages, typography, colors, layout patterns, buttons, cards, shadows, animations, or styling in Next.js and Tailwind CSS. References the complete design system reference located in next-agency/design-system.
---

# ScaleFront Design System & UI Guidelines

Rules, design tokens, and component patterns for building and maintaining the user interface of **scalefront.io**.

---

## 1. Primary Design System Reference: `next-agency/design-system`

Whenever creating, styling, or refactoring UI components, pages, or sections, **always check and reference the design system folder**:

📁 **Path:** `next-agency/design-system/`

### Key Reference Files
- **[`Scalefront-Design-System.html`](file:///Users/sanchitjain/vscode_files/NextAgency/next-agency/design-system/Scalefront-Design-System.html)** — The comprehensive living showcase of the Scalefront design language: color palette, typography hierarchy, button states, badges, card patterns, grid layouts, form elements, and interactive states.
- **[`Scalefront-Home.html`](file:///Users/sanchitjain/vscode_files/NextAgency/next-agency/design-system/Scalefront-Home.html)** — The full prototype reference illustrating how components and sections compose together in production (hero layout, marquees, service cards, testimonials, pricing, and system showcases).
- **[`extracted_template.html`](file:///Users/sanchitjain/vscode_files/NextAgency/next-agency/design-system/extracted_template.html)** — HTML templates and component markup snippets.

> [!IMPORTANT]
> **Check before you build:** Before building new UI components or writing custom CSS styles, consult `next-agency/design-system` and `src/app/globals.css` to reuse existing tokens, classes, and established design patterns.

---

## 2. Core Aesthetic: Neo-Brutalist Warm Editorial

ScaleFront uses a distinctive **warm neo-brutalist / editorial aesthetic**:
- **High-contrast hard borders:** `2px solid var(--sf-ink)` (`#181310`) on cards, badges, buttons, inputs, and section dividers.
- **Hard offset box shadows (no soft blur):** Solid ink shadows (e.g. `3px 3px 0 #181310` or `5px 5px 0 #181310`).
- **Tactile micro-interactions:** On `:hover` and `:active`, buttons and cards translate diagonally (`translate(2px, 2px)` / `translateY(-4px)`) while adjusting shadow depth to feel tactile and physical.
- **Warm paper backgrounds:** Off-white / cream surfaces (`#FFFFFF` paper, `#F4F0E8` sunken paper) paired with deep espresso `#181310` ink and punchy terracotta clay `#D9481F`.
- **Dynamic motion:** Subtle marquees, floating badges, pulsing status dots, and smooth scroll reveals.

---

## 3. Design Tokens & CSS Variables

All tokens are defined in [`src/app/globals.css`](file:///Users/sanchitjain/vscode_files/NextAgency/next-agency/src/app/globals.css).

### Color Palette

| Token | CSS Variable | Hex Value | Purpose & Usage |
|---|---|---|---|
| **Clay (Primary)** | `--sf-primary` | `#D9481F` | Primary CTAs, key accent highlights, brand mark |
| **Primary Deep** | `--sf-primary-deep` | `#B4370F` | Button hover states |
| **Primary Soft** | `--sf-primary-soft` | `#FBDDD1` | Text selection, badge backgrounds, subtle tints |
| **Espresso (Ink)** | `--sf-ink` | `#181310` | Primary text, 2px borders, hard shadows, dark sections |
| **Ink Soft** | `--sf-ink-soft` | `#4A413A` | Body copy, secondary descriptions |
| **Ink Mute** | `--sf-ink-mute` | `#8A7E72` | Captions, metadata, mono labels, subtitles |
| **Paper (White)** | `--sf-paper` | `#FFFFFF` | Default page & card surface background |
| **Paper Sunken** | `--sf-paper-sunken` | `#F4F0E8` | Alternating section backgrounds, subtle containers |
| **Sage** | `--sf-sage` | `#4C6B49` | Success badges, organic highlights, metrics |
| **Sage Soft** | `--sf-sage-soft` | `#DCE7D5` | Sage tint containers, metric bar backgrounds |
| **Gold** | `--sf-gold` | `#E39A16` | Star ratings, badges ("Most Picked", "CWV A+"), highlights |
| **Gold Soft** | `--sf-gold-soft` | `#F8E6BC` | Underline highlights, warm accent pills |
| **Berry** | `--sf-berry` | `#8B2F45` | Gradient accents, tag highlights |
| **Berry Soft** | `--sf-berry-soft` | `#F2D6DD` | Berry tint containers |

---

## 4. Typography Hierarchy

| Role | Font Family | Weight | Examples & Usage |
|---|---|---|---|
| **Display / Headings** | `'Bricolage Grotesque', sans-serif` | 700 / 800 | H1 hero headlines, H2 section titles, H3 card headers, logo text |
| **Body Text** | `var(--font-sans)` / `'Hanken Grotesk'` / Inter | 400 / 500 / 600 | Paragraphs, descriptions, list items, navigation links |
| **Mono / Meta** | `'JetBrains Mono', monospace` | 400 / 600 | Step numbers (`01 — COLOR`), tags, code, timestamps, stats labels |

### Typography Rules
- **H1 Titles:** High impact, tight line height (`leading-[0.98]` to `leading-[1.05]`), tracking `tracking-[-0.035em]`. Use balanced text wrapping (`text-wrap: balance`).
- **Section Eyebrows / Overlines:** `text-[13px] font-semibold tracking-[0.14em] uppercase text-[var(--sf-primary)]`.
- **Display Accents:** Key words wrapped in terracotta or backed with a gold soft marker span (`bg-[var(--sf-gold-soft)]`).

---

## 5. Shadows & Elevation

Always use hard offset ink shadows. Avoid blurry ambient box shadows.

```css
/* Small UI elements, badges, swatches */
box-shadow: var(--sf-shadow-sm); /* 3px 3px 0 var(--sf-ink) */

/* Standard cards, pricing boxes, buttons */
box-shadow: var(--sf-shadow-md); /* 5px 5px 0 var(--sf-ink) */

/* Lifted cards, floating cards */
box-shadow: var(--sf-shadow-lg); /* 8px 8px 0 var(--sf-ink) */

/* Hover state lift */
box-shadow: var(--sf-shadow-lift); /* 6px 6px 0 var(--sf-ink) */
```

---

## 6. Component Patterns & Rules

### Buttons
- **Primary Action Button:**
  - Background: `var(--sf-primary)` (`#D9481F`), Text: `#FFFFFF`
  - Border: `2px solid var(--sf-ink)`, Shadow: `5px 5px 0 var(--sf-ink)`
  - Hover: `translate(2px, 2px)`, shadow `3px 3px 0 var(--sf-ink)`, bg `var(--sf-primary-deep)`
  - Active: `translate(5px, 5px)`, shadow `0 0 0 var(--sf-ink)`
- **Secondary / Outline Button:**
  - Background: `var(--sf-paper-raised)` (`#FFFFFF`), Text: `var(--sf-ink)`
  - Border: `2px solid var(--sf-ink)`, Shadow: `5px 5px 0 var(--sf-ink)`
  - Hover: `translate(2px, 2px)`, shadow `3px 3px 0 var(--sf-ink)`

### Cards & Containers
- `border: 2px solid var(--sf-ink)`
- Background: `var(--sf-paper-raised)` or `var(--sf-paper-sunken)`
- Shadow: `var(--sf-shadow-sm)` or `var(--sf-shadow-md)`
- Padding: `20px` to `24px`

### Status Badges & Stickers
- Pill shape (`rounded-full`) or sharp badge with `border: 2px solid var(--sf-ink)` and `box-shadow: var(--sf-shadow-sm)`
- Status dots: small `w-2 h-2` circle with pulse animation (`animate-pulse` or `sf-pulse`)

---

## 7. Motion & Animation Standards

- **Marquee:** `animation: sf-marquee 20s linear infinite` for smooth ticker announcements.
- **Floating decorative elements:** `animation: sf-float 7s var(--sf-ease-out) infinite` with slight rotation `--r: -4deg` / `5deg`.
- **Transitions:** Use `var(--sf-ease-out)` (`cubic-bezier(.22,.72,.2,1)`) for snappy, natural UI feel.
- **Accessibility:** Support `prefers-reduced-motion: reduce` (included in `globals.css`).

---

## 8. Summary Checklist Before Finalizing Any UI

1. ✅ Checked `next-agency/design-system` (`Scalefront-Design-System.html` / `Scalefront-Home.html`) for existing reference components and styling.
2. ✅ Used standard tokens from `src/app/globals.css` (`--sf-primary`, `--sf-ink`, `--sf-paper`, `--sf-shadow-*`).
3. ✅ Applied `2px solid var(--sf-ink)` borders and hard offset shadows (`var(--sf-shadow-*)`).
4. ✅ Applied correct typography (`Bricolage Grotesque` for headings, `JetBrains Mono` for metadata/tags, Sans for body).
5. ✅ Added tactile hover/active states to interactive elements (translate + shadow reduction).
