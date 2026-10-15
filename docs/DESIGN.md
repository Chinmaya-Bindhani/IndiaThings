---
name: Cartwell Precision Minimal
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c9c6c5'
  secondary: '#2e5bb3'
  on-secondary: '#ffffff'
  secondary-container: '#79a1fe'
  on-secondary-container: '#003581'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d1b1a'
  on-tertiary-container: '#868381'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#b0c6ff'
  on-secondary-fixed: '#001945'
  on-secondary-fixed-variant: '#06429a'
  tertiary-fixed: '#e6e1df'
  tertiary-fixed-dim: '#cac6c3'
  on-tertiary-fixed: '#1d1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 4.5rem
    fontWeight: '400'
    lineHeight: '1.05'
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 2.75rem
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 2.75rem
    fontWeight: '400'
    lineHeight: '1.15'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 2rem
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Geist
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: '1.35'
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Geist
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: '1.65'
    letterSpacing: '0'
  body-sm:
    fontFamily: Geist
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-code-lg:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.14em
  label-code-md:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.12em
  label-code-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.1em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 2rem
  space-xl: 4rem
  space-2xl: 8rem
---

## Brand & Style

Cartwell represents the intersection of precision industrial design and quiet digital luxury. Built for discerning audiophiles, designers, and tech purists, the interface evokes stillness, discipline, and uncompromising clarity. Rather than competing with the curated industrial objects on display, the interface acts as an architectural gallery: neutral, structured, and silent.

The aesthetic fuses Scandinavian functionalism with technical editorial rigor. It utilizes razor-sharp geometries, unyielding grid alignment, expansive negative space, and disciplined typographic hierarchy. Physical metaphors, skeuomorphism, rounded geometries, and theatrical drop-shadows are strictly rejected in favor of hairline structural dividers, monolithic color surfaces, and technical monospace notations.

## Colors

The palette is engineered around high optical contrast and subtle tonal shift:

- **Primary (`#0A0A0A`):** The foundational ink. Applied to primary CTAs, main headlines, and critical active states.
- **Pure Canvas (`#FFFFFF`):** The primary view layer providing clinical clarity and maximum image separation.
- **Surface Soft (`#F5F5F5`):** Monolithic structural background fills used to demarcate alternating content bands and image container backdrops.
- **Hairline Border (`#EDEDED`):** 1px structural gridlines that define boundaries without optical visual weight.
- **Muted Neutral (`#A3A3A3`):** Secondary metadata, inactive indicators, and technical dimension markers.
- **Dark Neutral (`#525252`):** Body editorial text and secondary descriptive copy to ensure legibility without starkness.
- **Accent Blue (`#7AA2FF`):** Reserved strictly for interactive micro-moments: input focus borders, subtle selection indicators, and interactive hover underlines. Never used for loud decorative shapes or full-bleed button fills.

## Typography

The typography system relies on a structural dual-type engine:

1. **Geist (Headings & Body):** Clean, neo-grotesque proportioning that conveys unembellished clarity. Headlines lean towards light/regular weights with tight negative tracking, avoiding commercial aggression. Body text maintains comfortable reading metrics with ample line-height.
2. **JetBrains Mono (Technical Accent):** A high-performance monospaced typeface employed exclusively in uppercase format with deliberate character tracking (`0.1em` to `0.14em`). This typeface handles UI operations: price figures, SKU tags, category headers, navigation nodes, and button directives. It infuses product specs with engineering precision.

## Layout & Spacing

Layouts are anchored to a 12-column structural grid system on desktop (max width 1600px) and a 4-column fluid system on mobile devices.

- **Generous Voids:** Spacing scale relies on radical, deliberate gaps (`space-xl` and `space-2xl`) between merchandising moments. Sections are distinguished by full-bleed structural panels of `#F5F5F5` rather than stacked border frames.
- **Rhythm & Alignments:** Strict horizontal baseline adherence. Grid gaps utilize hairline `#EDEDED` borders as structural guides when needed.
- **Breakpoints:**
  - `Mobile` (< 768px): Margin resets to `1.25rem`, 4-column layout, stacked technical spec tables.
  - `Tablet` (768px - 1024px): Margin expands to `2.5rem`, 8-column layout.
  - `Desktop` (> 1024px): Standard margin `4rem`, 12-column layout with asymmetrical negative space reservations.

## Elevation & Depth

This system operates without synthetic drop-shadows or elevated Z-axis blur effects. Spatial relationships are defined through pure two-dimensional architecture:

- **Surface Tiers:** Layering is achieved via surface alternation: `#FFFFFF` (Base Canvas) and `#F5F5F5` (Container Surface).
- **Hairline Dividers:** 1px solid borders in `#EDEDED` delineate structural sections, table rows, and grid intersections.
- **Overlay Panels & Drawers:** Slide-in cart drawers and contextual overlays appear with a sharp 1px `#EDEDED` left border, backed by `#FFFFFF` and a flat 20% opacity black backdrop mask (`rgba(10, 10, 10, 0.20)`). Ambient blurs and rounded drop-shadows are forbidden.

## Shapes

The geometric rule across the interface is absolute: **`0px border-radius`**. 

No radius is permitted on primary buttons, interactive tags, thumbnail containers, input fields, modals, or toasts. This uncompromising sharp-edge discipline reinforces the physical tactile quality of machined metal, aluminum hardware, and precision engineering found in the catalog.

## Components

### Buttons
- **Primary:** Solid `#0A0A0A` background, pure `#FFFFFF` label rendered in `label-code-md` (JetBrains Mono, uppercase, wide tracking). Rectangular geometry (`0px` radius). Height: 48px. Hover state: background transitions to `#1E1E1E` with an absolute, sharp, 1px bottom accent border in `#7AA2FF`.
- **Secondary (Text Link):** Minimalist link format. Rendered in `label-code-sm` or `body-md` in `#0A0A0A`. Includes a persistent 1px hairline underline spaced 4px below text. Hover state: underline color shifts from `#EDEDED` to `#0A0A0A` or `#7AA2FF`.
- **Outline (Tertiary):** 1px border `#0A0A0A`, transparent background, `#0A0A0A` monospace text.

### Product Cards
- **Card Container:** Borderless or demarcated with a 1px `#EDEDED` border. `0px` radius. Padding: `space-md`. Background: `#FFFFFF`.
- **Image Frame:** Fixed aspect ratio (1:1 or 4:5), `#F5F5F5` solid neutral backdrop. Clean product cutout photography centered with generous internal padding.
- **Metadata Block:** Category label in `label-code-sm` (`#A3A3A3`). Product title in `headline-sm` (`#0A0A0A`). Monospace price tag aligned flush right or directly beneath title.
- **Interaction:** On hover, product imagery scales by 1.02x within an overflow-hidden bounding box; no elevation shadows appear.

### Inputs & Form Controls
- **Text Fields:** Flat `#FFFFFF` or `#F5F5F5` fill, bounded by a 1px border `#EDEDED`. Height: 48px. Text is set in `body-md`. Field labels use `label-code-sm` floating above the input in `#525252`.
- **Focus State:** 1px border turns `#0A0A0A` or `#7AA2FF` without dynamic glow or focus rings.
- **Checkboxes & Radios:** Sharp square geometries (16px x 16px, `0px` radius) with 1px hairline borders. Checked state features a solid `#0A0A0A` fill containing a pure white technical tick, or a solid black inner square (for radios).

### Chips & Tags
- **Status/Inventory Badges:** Enclosed by a 1px `#EDEDED` outline. `0px` radius. Padding: 4px 8px. Text set in `label-code-sm` uppercase. Solid `#F5F5F5` background for standard tags; solid `#0A0A0A` with white text for exclusive release identifiers.

### Data & Spec Tables
- **Grid Lists:** Horizontal rows partitioned with 1px `#EDEDED` hairlines. Left column contains spec parameters in `label-code-sm` (`#A3A3A3`); right column details values in `body-sm` (`#0A0A0A`). Zero vertical borders for an open, editorial rhythm.