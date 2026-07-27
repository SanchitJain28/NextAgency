# ScaleFront UI Kit

## Reuse Guide

This README documents the applied kit structure, component files, usage workflow, design notes, and source basis so future agents can reuse this kit like a Claude Design package.

### Kit structure

ui_kits/app/
├── README.md
├── index.html
├── button.html
├── card.html
└── navigation.html

Each component file is self-contained. Open it directly in a browser to inspect live variants with hover states. Copy the style block and markup. All colors flow through var(--*) from ../../colors_and_type.css. Change token values to re-theme.

### Component files

- **button.html** — 6 variants (Primary, Accent, Outline, Light, Dark Outline, Nav CTA) from scalefront-homepage.html CSS lines 87-102
- **card.html** — 3 variants (Service, Case Study, Testimonial) from CSS lines 139-157, 176-195, 212-233
- **navigation.html** — Sticky navbar and footer from CSS lines 38-71, 298-306

### Usage workflow

1. Open index.html to browse components
2. Click into component pages to inspect live variants
3. Copy the style block and HTML markup from any page
4. Change :root tokens in ../../colors_and_type.css to re-theme

### Design notes

- **Buttons**: 8px radius, 0.2s transitions, -1px hover lift. Primary uses --fg; accent uses --accent. Dark variants for Final CTA section.
- **Cards**: 32px padding, 1px --border, 8px radius. Hover: --accent-shadow + -4px lift over 0.3s/0.2s.
- **Navbar**: Sticky, 64px, glassmorphism (backdrop-filter: blur(20px), color-mix translucent bg). Logo: 32x32px accent square.
- **Footer**: Flex row, 1px top border, 13px --muted text.
- **Tokens**: All values use var(--*) from ../../colors_and_type.css. No raw hex in component pages.

### Source basis

Every component traces to scalefront-homepage.html at project root:

| Component | CSS | Markup |
|-----------|-----|--------|
| Button variants | Lines 87-102 | Lines 374, 385-388, 506, 677, 753-755 |
| Service Card | Lines 139-157 | Lines 441-503 |
| Case Study Card | Lines 176-195 | Lines 577-594 |
| Testimonial Card | Lines 212-233 | Lines 624-675 |
| Navbar | Lines 38-71 | Lines 362-376 |
| Footer | Lines 298-306 | Lines 760-769 |
