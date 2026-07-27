# ScaleFront Design System

> Source: ScaleFront — Premium Shopify Agency Homepage  
> Design system id: `user:scalefront-premium-shopify-agency-homepage-design-system`  
> Surface: web · Desktop-first with responsive breakpoints at 1024px and 640px  
> Source file: `scalefront-homepage.html` (802 lines, all CSS inline)

## 0. Product Context

ScaleFront is a premium Shopify development agency that builds high-performance storefronts for DTC brands doing $5M+ in annual GMV. The source homepage is a complete, self-contained marketing page with 12 sections: sticky navbar, hero, stats strip, services grid, why-us comparison, case studies, tech stack logo cloud, testimonials, process flow, FAQ accordion, final CTA, and footer.

**Core surfaces served by this system:**
- Agency marketing pages and landing pages
- Service showcase grids and card layouts
- Trust-building sections (stats, testimonials, case studies)
- Conversion-focused CTAs and form entry points

**What the source code tells us:** Every token, dimension, and component in this system traces to concrete CSS rules in `scalefront-homepage.html`. The source has no external dependencies beyond Google Fonts (Inter). All SVG illustrations are inline. No design files, brand specs, or asset files were provided — the HTML is the sole source of truth, and every extraction is cross-referenced against source line numbers.

**Source line references:**
- `:root` tokens: lines 11-24
- Button system: lines 87-102
- Card variants: lines 139-195
- Navbar: lines 38-71
- Hero: lines 105-122
- Process flow: lines 235-258
- FAQ accordion: lines 260-285
- Responsive breakpoints: lines 312-356
- All section layouts: lines 359-769 (markup)

## 1. Visual Theme & Atmosphere

ScaleFront is a premium Shopify development agency targeting DTC brands doing $5M+ in GMV. The visual language conveys engineering rigor, confidence, and modern SaaS polish — think Linear.app meets Vercel.com.

The system is light, clean, and high-contrast. No dark backgrounds except the final CTA section. Generous whitespace, rounded corners everywhere, and colored drop shadows on interactive cards signal precision and approachability. The accent color (blue) is used sparingly — a single signal per screen, never as a large wash.

## 2. Color

### Brand Palette

| Token | Value | OKLCH | Usage |
|-------|-------|-------|-------|
| `--bg` | `#ffffff` | `oklch(100% 0 0)` | Page background |
| `--surface` | `#f7f8fa` | `oklch(97.3% 0.001 253)` | Card/section alternates, hover surfaces |
| `--fg` | `#111111` | `oklch(13.2% 0 0)` | Primary text, dark backgrounds, primary buttons |
| `--muted` | `#6b7280` | `oklch(53.5% 0.02 276)` | Secondary text, labels, footer |
| `--border` | `#d9dee7` | `oklch(88.5% 0.015 268)` | Borders, dividers, strokes |
| `--accent` | `#1677ff` | `oklch(56% 0.22 258)` | Links, highlights, accent buttons, metric numbers |

### Semantic Roles

- **Primary buttons**: `--fg` background with white text; hover shifts toward `--accent` via `color-mix()`
- **Accent buttons**: `--accent` background; used for the primary CTA on the page
- **Outline buttons**: Transparent with `--border` stroke
- **Links**: `--fg` by default, `--accent` on hover
- **Metric text**: `--accent` for case study numbers
- **Section labels**: `--accent`, uppercase, small
- **Dark section (Final CTA)**: `--fg` background; white text; `--muted` for body; semi-transparent white borders

### Accent-derived values

- `--accent-shadow-sm`: `0 4px 16px color-mix(in srgb, var(--accent) 12%, transparent)`
- `--accent-shadow`: `0 8px 32px color-mix(in srgb, var(--accent) 14%, transparent)`
- `--accent-shadow-lg`: `0 12px 40px color-mix(in srgb, var(--accent) 18%, transparent)`
- Accent tint (10%): `color-mix(in srgb, var(--accent) 10%, transparent)` — icon backgrounds
- Accent tint (12%): `color-mix(in srgb, var(--accent) 12%, transparent)` — numbered badge backgrounds
- Accent tint (15%): `color-mix(in srgb, var(--accent) 15%, transparent)` — avatar backgrounds

### State Colors

- **Success**: green (`oklch(62% 0.18 142)`)
- **Warning**: amber (`oklch(72% 0.16 78)`)
- **Error**: red (`oklch(55% 0.2 22)`)

Derived from brand palette — not present in the homepage source, added for completeness.

## 3. Typography

### Font Stack

- **Display**: `'Inter', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif`
- **Body**: `'Inter', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif`

Inter is the sole type family. Both display and body share the same stack — appropriate for a utilitarian, data-dense SaaS brand where consistency trumps decorative display faces.

### Scale

| Role | Size | Weight | Letter-spacing | Line-height |
|------|------|--------|----------------|-------------|
| Hero H1 | 64px | 600 | -0.03em | 1.05 |
| Section H2 | 40px | 600 | -0.025em | 1.1 |
| Card H3 | 17–18px | 600 | -0.01em | 1.3 |
| Body | 15px | 400 | — | 1.55 |
| Body large (hero sub) | 20px | 400 | — | 1.55 |
| Section sub | 18px | 400 | — | 1.55 |
| Labels | 13px | 600 | 0.08em | — |
| Stat numbers | 36px | 600 | -0.02em | — |
| Nav links | 15px | 500 | 0.01em | — |
| Button | 14–15px | 600 | 0.02em | — |
| Footer | 13px | 400 | 0.01em | — |

### Responsive adjustments

- ≤1024px: hero H1 scales down naturally
- ≤640px: hero H1 → 40px, section H2 → 30px, Final CTA H2 → 34px

### Weight usage

Only weights 400, 500, and 600 are loaded from Google Fonts. No light or bold weights.

## 4. Spacing

### Scale

- **Base grid**: 8px
- **Section padding**: 120px vertical, 40px horizontal
- **Section gaps**: 48px between section header and content grid
- **Card padding**: 32px internal
- **Button height**: 40px (nav CTA) / 48px (primary buttons)
- **Button padding**: 0 20px (nav) / 0 28px (buttons)
- **Navbar height**: 64px
- **Hero padding**: 100px top, 120px bottom
- **Grid gaps**: 24px (3-col grids), 80px (2-col split layout), 32px (nav links)
- **Content max-width**: 1280px, centered
- **Card-to-card gap**: 24px
- **Stat divider**: 1px borders between cells

### Border Radius

- Default: `8px` (cards, buttons, inputs, nav logo mark)
- Pills: `100px` (hero badges)

### Responsive spacing

- ≤640px: section padding → 80px/20px, hero padding → 60px/20px/80px, nav padding → 0 20px

## 5. Layout & Composition

### Page Structure (top to bottom)

1. **Sticky Navbar** — glassmorphism background, logo left, nav links center-right, CTA button right
2. **Hero** — 2-column grid (text left, SVG illustration right); 80px gap; stacks on mobile
3. **Stats Strip** — 5-column equal grid in a surface-colored container, 1px dividers
4. **Services** — centered label + heading + sub + 3-column card grid + inline CTA
5. **Why Us** — surface background section, 2-column split (numbered list + illustration)
6. **Case Studies** — 3-column metric cards
7. **Tech Stack** — bordered grid logo cloud (5×2), surface background
8. **Testimonials** — 3-column review cards with stars, avatars, inline CTA
9. **Process** — 4-step horizontal flow with connecting lines, surface background
10. **FAQ** — 2-column accordion grid
11. **Final CTA** — full-width dark section, centered
12. **Footer** — divider-top, copyright left, social links right

### Grid System

- **Base**: 1280px max-width, 40px side padding, auto-centered
- **3-column**: `repeat(3, 1fr)` with 24px gap
- **2-column split**: `repeat(2, 1fr)` with 80px gap
- **5-column stats**: `repeat(5, 1fr)`, no gap, 1px dividers
- **4-column process**: `repeat(4, 1fr)`, no gap, connecting lines

### Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| >1024px | Full desktop layout |
| ≤1024px | 3-col → 2-col grids; hero stacks; 5-col → 3-col stats; process skips connectors |
| ≤640px | 2-col → 1-col grids; reduced padding; nav links hidden; buttons stack vertically |

## 6. Components

### Button
Four variants extracted from source:
- **Primary**: `--fg` bg, white text, 48px tall, 15px/600 text
- **Accent**: `--accent` bg, white text, same metrics
- **Outline**: transparent bg, `--border` stroke, `--fg` text
- **Light**: white bg (for dark sections), `--fg` text
- **Dark Outline**: transparent bg, semi-transparent white border (for dark sections)

All buttons: 8px radius, `transition: all 0.2s`, `translateY(-1px)` on hover, 0 28px horizontal padding.

### Card
Three card variants share a common structure:
- Background: `--bg`
- Border: 1px `--border`
- Radius: 8px
- Padding: 32px
- Hover: `--accent-shadow` + `translateY(-4px)`
- Transition: box-shadow 0.3s, transform 0.2s

Variants:
- **Service Card**: icon square (44px, accent-tinted bg) → title → description
- **Case Study Card**: large accent metric → uppercase label → title → description
- **Testimonial Card**: star row → blockquote → author row (avatar circle + name + role)

### Navigation
- Sticky top navbar with glassmorphism (`color-mix(in srgb, var(--bg) 88%, transparent)`)
- `backdrop-filter: blur(20px)`
- 64px height, 1px bottom border
- Logo: text + 32px accent-colored square with initial
- Nav links: 15px/500, spaced 32px apart
- CTA button: 40px tall, dark background, compact

### Process Flow
- 4 equal columns, horizontal connector lines via `::after` pseudo-element
- Numbered circles: 56px, surface bg, 1px border
- Hover: border and number turn accent, background tints

### FAQ Accordion
- Native `<details>` / `<summary>` elements
- 1px border card style, transitions on open
- Custom +/- indicator via `summary::after` (20px circle, surface bg)
- Open state: border mixes in accent color

### Stats Strip
- 5 equal cells in a surface-colored container
- 1px `--border` right dividers (last child none)
- 36px numbers, 14px muted labels

### Tech Stack Grid
- 5×2 bordered grid, no gaps
- Each cell: 18px/600 text, 36px/24px padding, hover tints accent 4%

### Avatar
- 40px circle, accent-tinted bg (15%), accent-colored initials
- 14px/600 text

### Section Header
- Small uppercase accent label (13px/600, 0.08em tracking)
- Large display heading (40px/600)
- Muted subtext (18px/400, max-width 600px)

### Badge / Pill
- Inline flex, 8px/16px padding, 13px/500 text
- Surface bg, 1px border, 100px radius
- 8px accent-colored dot inside

### Footer
- 1px top border
- Flex row: copyright left, links right
- 13px muted text, links turn `--fg` on hover

## 7. Motion & Interaction

### Transitions
- **Color**: `0.2s` — nav links, footer links, FAQ items, tech stack cells
- **Button hover**: `transform 0.15s`, `background 0.2s` — 1px upward lift
- **Card hover**: `box-shadow 0.3s`, `transform 0.2s` — 4px upward lift + accent shadow
- **FAQ open**: `border-color 0.2s` — border shifts to accent-tinted
- **Navbar scroll**: `background 0.2s` — glassmorphism opacity increases

### Hover Effects
- Buttons lift 1px upward, background shifts toward accent
- Cards lift 4px upward, accent-colored drop shadow appears
- Nav links change color to accent
- Footer links change color to fg
- Tech stack cells tint accent 4%, text goes to fg
- Process step numbers turn accent, background tints

### Scroll Behavior
- `scroll-behavior: smooth` for anchor navigation
- Navbar glassmorphism intensifies after 10px scroll (via JS `requestAnimationFrame`)

### Loading & States
Not explicitly designed in the source. Add `prefers-reduced-motion` support in implementations.

## 8. Voice & Brand

### Tone
Confident, premium, engineering-focused. No marketing fluff. Every claim is specific and metric-backed.

### Copy Patterns
- Headlines use active verbs: "that scales your revenue", "We build", "handle every layer"
- Trust signals are concrete: "60+ stores launched", "$2B+ merchant revenue", "Shopify Plus partners"
- Service descriptions follow a pattern: what it is + benefit, no adjectives
- Testimonials name-drop real technical details (Hydrogen, Recharge, Shopify Markets)
- FAQ answers are honest about constraints ("We typically engage with brands doing $1M+")

### Terminology
- "Storefronts" not "websites"
- "Engineering" not "development"
- "Merchants" / "brands" not "clients" (though "clients" appears in testimonials)
- "Ship" / "launch" / "build" — active verbs

### Capitalization
- Sentence case for headings and body
- Brand names capitalized: Shopify, Hydrogen, Next.js, React, TypeScript

## 9. Anti-patterns

### Do NOT use
- Purple gradient washes or gradients on every background
- Dark backgrounds anywhere except the Final CTA section
- Stock photography — the source uses custom SVG illustrations
- Emoji as feature icons
- Rounded cards with left color-border accents
- Hand-drawn SVG humans or scenery
- Inter, Roboto, Arial, or Fraunces as display faces (Inter is the only face here — that's intentional)
- Invented metrics or filler copy
- Warm beige/cream default canvases
- More than one accent instance per screen section
- Designer/demo controls inside product artifacts
- `scrollIntoView` in embedded previews (the source uses it, but it's a homepage, not an embedded preview)

### Do use
- Custom inline SVG for illustrations and icons
- `color-mix()` for derived accent tints
- Native `<details>` for accordion
- CSS custom properties for all tokens
- Grid layout for all multi-column content
- `backdrop-filter` for glassmorphism
- `requestAnimationFrame` for scroll handlers
