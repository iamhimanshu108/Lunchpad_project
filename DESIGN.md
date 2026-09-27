# Orbital Glass Design System
**Project:** LaunchPad (`projects/5276008350380712070`)  
**Design Theme:** Orbital Glass (Dark Mode)  
**Target Platform:** Desktop / Web Application  
**Primary Aesthetic:** Deep-space infrastructure engineering meets cutting-edge optical glassmorphism.

---

## 1. Design Philosophy & Vision

The **Orbital Glass** design system blends high-density aerospace telemetry interfaces with refined optical glassmorphism. It is built for aerospace software engineers, orbital mission operators, payload specialists, and technical founders requiring real-time situational awareness and high-throughput cloud controls.

- **Atmospheric Depth:** Layered translucent glass panels anchored in deep void neutrals.
- **Radiant Propulsion:** High-intensity electric violet and neon purple accents for critical states and active nodes.
- **Instrumental Rigor:** Tight geometric alignment, zero extraneous visual noise, and razor-sharp typographic hierarchy.

---

## 2. Color Palette & Tokens

### 2.1 Core Brand & Ion Gradients
| Token | Hex / Value | Role / Usage |
| :--- | :--- | :--- |
| `primary` | `#ddb7ff` | Primary interactive elements, high-contrast highlights |
| `on-primary` | `#490080` | Text/icon color on primary fill |
| `primary-container` | `#b76dff` | Elevated primary surfaces and prominent badges |
| `on-primary-container` | `#400071` | Text on primary containers |
| `secondary` | `#c0c1ff` | Complementary buttons, supporting interactive elements |
| `on-secondary` | `#1000a9` | Text/icon color on secondary fill |
| `secondary-container` | `#3131c0` | Subdued secondary containers, HUD badges |
| `on-secondary-container` | `#b0b2ff` | Secondary container contrast text |
| `tertiary` | `#ddb8ff` | Accent highlights, radar and trajectory indicators |
| `on-tertiary` | `#490081` | Text on tertiary fill |
| `tertiary-container` | `#b175ec` | High-aperture highlight panels |

### 2.2 Surface & Void Canvas (Dark Mode)
| Token | Hex Value | Application |
| :--- | :--- | :--- |
| `background` / `surface` | `#0f131d` | Canvas backdrop, deep orbital void |
| `surface-dim` | `#0f131d` | Dimmed baseline surface |
| `surface-bright` | `#353944` | Highlighted surface card / active element |
| `surface-container-lowest` | `#0a0e18` | Recessed backgrounds, terminal console trays |
| `surface-container-low` | `#171b26` | Low-elevation cards, secondary content wells |
| `surface-container` | `#1c1f2a` | Default elevated card and panel surface |
| `surface-container-high` | `#262a35` | Modals, flyout menus, focused hover states |
| `surface-container-highest` | `#313540` | Topmost overlay dialogs, tooltip containers |
| `outline` | `#988d9f` | Standard UI boundaries and dividing rules |
| `outline-variant` | `#4d4354` | Subdued grid lines and hairline borders |

### 2.3 Status & Telemetry Indicators
| Telemetry State | Hex Value | Description |
| :--- | :--- | :--- |
| **Orbit Normal / Nominal** | `#10b981` | Emerald beacon for healthy system telemetry |
| **Guidance Warning** | `#f59e0b` | Solar amber for threshold cautions and warnings |
| **Critical Apogee Alert / Error** | `#ef4444` / `#ffb4ab` | High-priority alert red / atmospheric drag error |
| `error-container` | `#93000a` | Background container for critical alerts |
| `on-error-container` | `#ffdad6` | Foreground alert text |

### 2.4 Glassmorphism & Optical HUD Overlays
- **Base Panel Glass:** `rgba(15, 23, 42, 0.65)` with `16px` backdrop-filter blur
- **Mid-Tier Card Glass:** `rgba(15, 23, 42, 0.82)` with `20px` backdrop-filter blur
- **Modal Glass:** `rgba(15, 23, 42, 0.94)` with `24px` backdrop-filter blur
- **Glass Border Stroke (Idle):** `1px solid rgba(192, 132, 252, 0.15)`
- **Glass Border Stroke (Active / Focus):** `1px solid rgba(168, 85, 247, 0.45)`
- **Core Action Gradient:** `linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #6366F1 100%)`
- **Specular Top Highlight:** `inset 0 1px 0 0 rgba(255, 255, 255, 0.15)`
- **Active Glow:** `0 0 16px rgba(168, 85, 247, 0.4)` to `0 0 24px rgba(192, 132, 252, 0.6)`

---

## 3. Typography Hierarchy

### 3.1 Typefaces
1. **Primary & Body Font:** `Plus Jakarta Sans`  
   Clean geometry, high legibility under dense data layouts, and contemporary aerospace aesthetic.
2. **Technical & Telemetry Font:** `JetBrains Mono`  
   Applied to technical readouts, coordinates, telemetry arrays, vector angles, code blocks, IDs, and timestamps. Monospaced tabular figures guarantee column stability during high-frequency live streams.

### 3.2 Typography Scale
| Style | Font Family | Size | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `display-xl` | Plus Jakarta Sans | 56px | 800 (Extrabold) | 64px | -0.03em |
| `headline-lg` | Plus Jakarta Sans | 40px | 700 (Bold) | 48px | -0.025em |
| `headline-lg-mobile`| Plus Jakarta Sans | 30px | 700 (Bold) | 38px | -0.02em |
| `headline-md` | Plus Jakarta Sans | 28px | 600 (Semibold) | 36px | -0.02em |
| `headline-sm` | Plus Jakarta Sans | 20px | 600 (Semibold) | 28px | -0.015em |
| `body-lg` | Plus Jakarta Sans | 18px | 400 (Regular) | 28px | -0.01em |
| `body-md` | Plus Jakarta Sans | 15px | 400 (Regular) | 24px | -0.005em |
| `body-sm` | Plus Jakarta Sans | 13px | 400 (Regular) | 20px | 0em |
| `label-lg` | JetBrains Mono | 14px | 500 (Medium) | 20px | +0.02em |
| `label-md` | JetBrains Mono | 12px | 500 (Medium) | 16px | +0.04em |
| `label-sm` | JetBrains Mono | 11px | 600 (Semibold) | 14px | +0.06em |

---

## 4. Spacing & Shape Geometry

### 4.1 Spacing Scale
Follows a strict 4px/8px incremental base rhythm:
- `space-xs`: `0.25rem` (4px)
- `space-sm`: `0.5rem` (8px)
- `space-md`: `1.0rem` (16px)
- `space-lg`: `1.5rem` (24px)
- `space-xl`: `2.5rem` (40px)
- `gutter-sm`: `0.75rem` (12px)
- `gutter`: `1.5rem` (24px)
- `gutter-lg`: `2.0rem` (32px)
- `margin-mobile`: `1.0rem` (16px)
- `margin`: `2.0rem` (32px)
- `margin-desktop`: `3.0rem` (48px)

### 4.2 Border Radii
- `sm`: `0.25rem` (4px) — Micro chips, sub-badges
- `DEFAULT` / `roundness: 2`: `0.5rem` (8px) — Buttons, form inputs, segmented controls
- `md`: `0.75rem` (12px) — Inner sub-containers
- `lg`: `1.0rem` (16px) — Telemetry cards, data panels
- `xl`: `1.5rem` (24px) — Modals, launch consoles, flyouts
- `full`: `9999px` — Telemetry status pills, active ping nodes

---

## 5. Elevation & Layering System

1. **Level 0 (Base Ground):** Deep void (`#0f131d` / `#0b0f19`) with optional ambient radial mesh gradients (`rgba(124, 58, 237, 0.08)` blur `120px`).
2. **Level 1 (Data Grids & HUD Panels):** `rgba(15, 23, 42, 0.65)`, backdrop blur `16px`, border `1px solid rgba(255, 255, 255, 0.08)`. Shadow: `0 4px 20px -2px rgba(0, 0, 0, 0.5)`.
3. **Level 2 (Cards & Menus):** `rgba(15, 23, 42, 0.82)`, backdrop blur `20px`, border `1px solid rgba(192, 132, 252, 0.22)`. Shadow: `0 8px 32px -4px rgba(0, 0, 0, 0.65)`, top highlight `inset 0 1px 0 0 rgba(255, 255, 255, 0.15)`.
4. **Level 3 (Modals & Overlays):** `rgba(15, 23, 42, 0.94)`, backdrop blur `24px`, border `1px solid rgba(168, 85, 247, 0.4)`. Outer aura: `0 0 40px -10px rgba(168, 85, 247, 0.25), 0 20px 48px -8px rgba(0, 0, 0, 0.8)`.

---

## 6. CSS Custom Properties Reference

```css
:root {
  /* Fonts */
  --font-display: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Void & Surfaces */
  --bg-void: #0f131d;
  --surface-base: #0f131d;
  --surface-lowest: #0a0e18;
  --surface-low: #171b26;
  --surface-card: #1c1f2a;
  --surface-high: #262a35;
  --surface-highest: #313540;
  --surface-bright: #353944;

  /* Content & Contrast */
  --text-primary: #dfe2f1;
  --text-secondary: #94a3b8;
  --text-subdued: #64748b;
  --text-high-contrast: #f8fafc;
  --outline: #988d9f;
  --outline-variant: #4d4354;

  /* Primary Brand & Accents */
  --primary: #ddb7ff;
  --primary-glow: #a855f7;
  --primary-deep: #7c3aed;
  --primary-container: #b76dff;
  --on-primary: #490080;
  --secondary: #c0c1ff;
  --secondary-container: #3131c0;
  --tertiary: #ddb8ff;
  --tertiary-container: #b175ec;

  /* Telemetry Status */
  --status-nominal: #10b981;
  --status-warning: #f59e0b;
  --status-critical: #ef4444;

  /* Radii */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-full: 9999px;

  /* Glass Effects */
  --glass-bg: rgba(15, 23, 42, 0.65);
  --glass-border: rgba(192, 132, 252, 0.15);
  --glass-border-focus: rgba(168, 85, 247, 0.45);
  --glass-blur: 16px;
  --gradient-action: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #6366f1 100%);
}
```
