---
name: Soft Cyberpunk SaaS
colors:
  surface: '#0e1323'
  surface-dim: '#0e1323'
  surface-bright: '#34394a'
  surface-container-lowest: '#080d1d'
  surface-container-low: '#161b2b'
  surface-container: '#1a1f30'
  surface-container-high: '#25293a'
  surface-container-highest: '#2f3446'
  on-surface: '#dee1f9'
  on-surface-variant: '#c3c5d7'
  inverse-surface: '#dee1f9'
  inverse-on-surface: '#2b3041'
  outline: '#8d90a0'
  outline-variant: '#434654'
  surface-tint: '#b5c4ff'
  primary: '#b5c4ff'
  on-primary: '#00297b'
  primary-container: '#648aff'
  on-primary-container: '#00236d'
  inverse-primary: '#1a53d6'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#4ae176'
  on-tertiary: '#003915'
  tertiary-container: '#00a74b'
  on-tertiary-container: '#003111'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00164d'
  on-primary-fixed-variant: '#003cad'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#6bff8f'
  tertiary-fixed-dim: '#4ae176'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005321'
  background: '#0e1323'
  on-background: '#dee1f9'
  surface-variant: '#2f3446'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding-mobile: 16px
  container-padding-desktop: 40px
  gutter: 24px
  card-gap: 20px
---

## Brand & Style

This design system establishes a "Soft Cyberpunk" aesthetic—a refined, high-fidelity interpretation of futuristic tech interfaces. It blends the grit of cyberpunk neon with the polished, functional clarity of a modern SaaS startup. 

The visual language is characterized by deep, atmospheric backgrounds contrasted against vibrant, luminous accents. It aims to evoke a sense of focused productivity, technical sophistication, and high-performance engineering. The atmosphere is nocturnal yet clean, utilizing "light-leaks" and glassmorphism to create a 4K visual depth that feels both immersive and professional.

## Colors

The palette is anchored by a deep midnight foundation, allowing neon accents to pop without causing visual fatigue.

*   **Primary (#4F7CFF):** A vivid "Neon Blue" used for primary actions, focus states, and brand identifiers.
*   **Secondary (#8B5CF6):** A "Neon Purple" used for highlights, secondary categories, and data visualization.
*   **Success (#22C55E):** "Progress Green," specifically calibrated for high legibility against dark backgrounds to signal habit completion.
*   **Background (#0B1020):** The true dark base of the application.
*   **Surface (#151A2E):** A slightly lighter, translucent navy used for cards and containers to create structural hierarchy.

## Typography

The typography strategy uses a three-tier font system to balance character and utility. 

**Sora** provides geometric, futuristic headlines that command attention. **Geist** handles the core body content with its clean, developer-centric proportions, ensuring high readability during long sessions. **JetBrains Mono** is utilized sparingly for labels, metadata, and status indicators to reinforce the "coding/technical" DNA of the habit tracker. Use uppercase for labels with increased letter spacing to enhance the technical aesthetic.

## Layout & Spacing

This design system utilizes a **12-column fluid grid** for desktop and a **single-column stack** for mobile. The layout philosophy emphasizes "breathing room" to offset the high-density color palette. 

Margins are generous (40px on desktop) to allow the glassmorphic cards to feel like they are floating in a 3D space. Content should be grouped into cards with a consistent 20px gap, creating a modular, "dashboard" feel. Internal card padding should follow a strict 24px or 32px rule to maintain a premium SaaS look.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and **Soft Neon Glows** rather than traditional black shadows.

1.  **Surfaces:** Cards use the `#151A2E` surface color at 80% opacity with a `20px` background blur.
2.  **Borders:** Each card features a 1px solid border at 10% white opacity to define edges against the dark background.
3.  **Glows:** Active elements (like the current day's habit) should emit a subtle outer glow (0px 4px 20px) using a 30% opacity version of the Primary or Secondary color.
4.  **Z-Axis:** Higher elevation levels are indicated by increased transparency (making them appear "closer" to the glass) and brighter border-top strokes.

## Shapes

The shape language is "Modern Rounded." While the overall aesthetic is technical, the corners remain approachable. 

*   **Standard UI Elements:** (Buttons, Inputs) use a `0.5rem` (8px) radius.
*   **Containers:** (Cards, Modals) use a `1rem` (16px) radius.
*   **Progress Indicators:** These should remain pill-shaped (fully rounded) to contrast against the more geometric grid containers.

## Components

### Buttons
Primary buttons feature a solid Primary Blue fill. On hover, the button should trigger a "Neon Flare"—a subtle increase in saturation and a soft drop shadow of the same color. Ghost buttons use a 1px primary-colored border with no fill.

### Cards
Cards are the heart of the interface. They must use the glassmorphic effect defined in the Elevation section. For "Habit Cards," use a subtle gradient border (Primary to Secondary) for the active state to make them feel high-energy.

### Input Fields
Inputs are minimalist: a 1px border on the bottom only, or a very subtle ghost-outline. When focused, the bottom border glows in the Primary Blue. Use JetBrains Mono for placeholder text to maintain the tech vibe.

### Habit Trackers (Checkboxes/Chips)
Instead of standard checkboxes, use "Habit Nodes." When a habit is completed, the node fills with the Success Green and emits a brief "pulse" animation.

### Progress Bars
Progress bars should be thin (4px to 8px) with a glowing "head" on the progress line, making it look like a laser-cut indicator.