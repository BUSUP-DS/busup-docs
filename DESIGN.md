---
version: alpha
name: BUSUP Design System
description: Reference for engineers building BUSUP products. All values sourced from the Figma NEW-LIBRARY.

colors:
  # Primary
  primary-100: "#d7ffed"
  primary-200: "#b2ffdd"
  primary-300: "#00bf6f"
  primary-400: "#049157"
  primary-500: "#0a5d3d"
  on-primary: "#ffffff"
  # Secondary
  secondary-100: "#fde6e3"
  secondary-200: "#f9b3a8"
  secondary-300: "#ea6753"
  secondary-400: "#b33522"
  secondary-500: "#7c2c20"
  # Neutral
  neutral-0: "#ffffff"
  neutral-50: "#f4f4f4"
  neutral-100: "#dbdbdb"
  neutral-200: "#c4c4c4"
  neutral-300: "#989898"
  neutral-400: "#414141"
  neutral-500: "#212121"
  neutral-1000: "#000000"
  # Feedback
  info: "#29b6f6"
  alert: "#ffa000"
  danger: "#e53935"
  success: "#66bb6a"
  # Surface
  surface-warm: "#fbfaf7"
  surface-cool: "#edf0f4"
  # UI
  side-menu: "#242D31"
  side-menu-active: "#2F3B40"

typography:
  display:
    fontFamily: "Busup Sans"
    fontSize: 50px
    fontWeight: "400"
    lineHeight: 1.2
  header:
    fontFamily: "Busup Sans"
    fontSize: 42px
    fontWeight: "400"
    lineHeight: 1.2
  headline:
    fontFamily: "Busup Sans"
    fontSize: 35px
    fontWeight: "400"
    lineHeight: 1.2
  subheader:
    fontFamily: "Busup Sans"
    fontSize: 29px
    fontWeight: "400"
    lineHeight: 1.2
  subheadline:
    fontFamily: "Busup Sans"
    fontSize: 24px
    fontWeight: "400"
    lineHeight: 1.2
  body-xl:
    fontFamily: "Busup Sans"
    fontSize: 20px
    fontWeight: "400"
    lineHeight: 1.5
  body-lg:
    fontFamily: "Busup Sans"
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 1.5
  body-md:
    fontFamily: "Busup Sans"
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 1.5
  body-sm:
    fontFamily: "Busup Sans"
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 1.5
  body-xs:
    fontFamily: "Busup Sans"
    fontSize: 10px
    fontWeight: "400"
    lineHeight: 1.5
  label-desktop:
    fontFamily: "Busup Sans"
    fontSize: 14px
    fontWeight: "700"
  label-mobile:
    fontFamily: "Busup Sans"
    fontSize: 10px
    fontWeight: "700"

rounded:
  sm: 4px
  md: 8px
  lg: 20px
  full: 50%

spacing:
  base: 4px
  2xs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 28px

components:
  # Buttons (global)
  button-primary:
    backgroundColor: "{colors.primary-300}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-desktop}"
    rounded: "{rounded.lg}"
    height: 31px
    padding: "8px 24px"
  button-primary-mobile:
    typography: "{typography.label-mobile}"
  button-secondary:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.primary-300}"
    typography: "{typography.label-desktop}"
    rounded: "{rounded.lg}"
    height: 31px
    padding: "8px 24px"
  button-tertiary:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.primary-300}"
    typography: "{typography.label-desktop}"
    rounded: "{rounded.lg}"
    height: 31px
    padding: "8px 24px"
  button-disabled:
    backgroundColor: "{colors.neutral-200}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    height: 31px
  # Dashboard layout
  dashboard-side-menu:
    backgroundColor: "{colors.side-menu}"
    textColor: "{colors.on-primary}"
    width: 248px
  dashboard-header:
    backgroundColor: "{colors.primary-300}"
    height: 67px
  dashboard-content-slot:
    backgroundColor: "{colors.neutral-0}"
    rounded: "{rounded.md}"
    padding: 32px
  # Badges
  badge-success:
    backgroundColor: "#e3f5e3"
    textColor: "#358439"
    rounded: "{rounded.sm}"
  badge-warning:
    backgroundColor: "#fff4c5"
    textColor: "#bb5202"
    rounded: "{rounded.sm}"
  badge-danger:
    backgroundColor: "#ffe2e1"
    textColor: "#9d1a17"
    rounded: "{rounded.sm}"
  badge-info:
    backgroundColor: "#e0f2fe"
    textColor: "#085884"
    rounded: "{rounded.sm}"
  badge-neutral:
    backgroundColor: "{colors.neutral-50}"
    textColor: "{colors.neutral-400}"
    rounded: "{rounded.sm}"
  # Avatar
  avatar-sm:
    size: 32px
    rounded: "{rounded.full}"
  avatar-md:
    size: 40px
    rounded: "{rounded.full}"
  avatar-lg:
    size: 56px
    rounded: "{rounded.full}"
  # Form controls
  input-default:
    backgroundColor: "{colors.neutral-0}"
    textColor: "{colors.neutral-400}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    width: 311px
    padding: "12px 16px"
  checkbox:
    backgroundColor: "{colors.primary-300}"
    rounded: "{rounded.sm}"
    size: 24px
  toggle-on:
    backgroundColor: "{colors.primary-300}"
  toggle-off:
    backgroundColor: "{colors.neutral-100}"
  # Tabs
  tab-container:
    backgroundColor: "{colors.neutral-50}"
    rounded: "{rounded.md}"
    height: 34px
  # Modal
  modal-dashboard:
    backgroundColor: "{colors.neutral-0}"
    rounded: "{rounded.md}"
    width: 745px
    padding: "32px 24px"
  # Toast
  toast-success:
    backgroundColor: "rgba(102,187,106,0.2)"
    rounded: "{rounded.sm}"
  toast-alert:
    backgroundColor: "rgba(255,160,0,0.2)"
    rounded: "{rounded.sm}"
  toast-error:
    backgroundColor: "rgba(229,57,53,0.2)"
    rounded: "{rounded.sm}"
  toast-info:
    backgroundColor: "rgba(41,182,246,0.2)"
    rounded: "{rounded.sm}"
---

# BUSUP Design System — DESIGN.md

Reference for engineers building BUSUP products. All values come directly from the Figma library (NEW-LIBRARY).  
Full interactive documentation: https://busup-ds.github.io/busup-docs

---

## Contents

1. [Principles](#principles)
2. [Colors](#colors)
3. [Typography](#typography)
4. [Spacing](#spacing)
5. [Elevation & Shadows](#elevation--shadows)
6. [Border Radius](#border-radius)
7. [Buttons](#buttons)
8. [Layout — Dashboard](#layout--dashboard)
9. [Components — Dashboard](#components--dashboard) — Side Menu · Header · Toast · Modal · Accordion · Data Table · Alert Row · Filters · Service Detail Modal
10. [Components — App User](#components--app-user) — Toast · Navigation Bar · Side Menu · Tabs · Feedback Signs · Feedback Modals · Notification · Text Input · Form Controls · Code Input · Segmented Control · Progress Bar · Badge · Avatar · Cards · Ticket
11. [Components — App Driver](#components--app-driver) — Welcome Header · Route Components · Incidence Modals · Passenger Information · Manual Boarding Control · On Demand Control
12. [Components — Landings](#components--landings) — Navigation Header · Search Bar · Title · Calendar Modal

---

## Principles

Five principles guide every decision in the BUSUP Design System.

| Principle | Summary |
|:---|:---|
| **Adaptive** | Works on any screen, platform, and language |
| **Consistent** | Predictable positions, styles, and behaviours reduce cognitive load |
| **Intuitive & Clear** | Familiar patterns, clear hierarchy, generous negative space |
| **Considerate** | Decisions grounded in standards and research, not opinions |
| **Empowering** | Optimised for task completion; always gives access to more detail |

---

## Colors

### Primary (Brand Green)

| Token | Hex | Use |
|:---|:---|:---|
| `Primary_100` | `#d7ffed` | Light tinted backgrounds, hover fills |
| `Primary_200` | `#b2ffdd` | Hover states on primary elements |
| `Primary_300` | `#00bf6f` | **Main brand colour** — buttons, links, active states |
| `Primary_400` | `#049157` | Focused / pressed state |
| `Primary_500` | `#0a5d3d` | Deep pressed, high-contrast brand |

### Secondary (Coral)

| Token | Hex | Use |
|:---|:---|:---|
| `Secondary_100` | `#fde6e3` | Light tinted backgrounds |
| `Secondary_200` | `#f9b3a8` | Hover fills |
| `Secondary_300` | `#ea6753` | Secondary accent |
| `Secondary_400` | `#b33522` | Focused / pressed |
| `Secondary_500` | `#7c2c20` | Deep pressed |

### Neutral

| Token | Hex | Use |
|:---|:---|:---|
| `Neutral_0` | `#ffffff` | Card backgrounds, modal backgrounds |
| `Neutral_50` | `#f4f4f4` | Info card backgrounds, input backgrounds |
| `Neutral_100` | `#dbdbdb` | Light borders |
| `Neutral_200` | `#c4c4c4` | Disabled borders, placeholder outlines |
| `Neutral_300` | `#989898` | Secondary text, labels, captions |
| `Neutral_400` | `#414141` | Secondary body text |
| `Neutral_500` | `#212121` | Primary body text, headings |
| `Neutral_1000` | `#000000` | High-contrast text (data, timestamps) |

### Feedback

| Token | Hex | Use |
|:---|:---|:---|
| `Info_300` | `#29b6f6` | Info toast, info badge |
| `Alert_300` | `#ffa000` | Warning toast, alert badge |
| `Danger_300` | `#e53935` | Error toast, destructive action, error badge |
| `Success_300` | `#66bb6a` | Success toast icon |

### Surface

| Token | Hex | Use |
|:---|:---|:---|
| `Surface_Warm` | `#fbfaf7` | Warm page background |
| `Surface_Cool` | `#edf0f4` | Dashboard page background (behind content card) |

---

## Typography

**Font family:** `'Busup Sans', sans-serif` — proprietary BUSUP typeface.  
Font files (`.woff2`) must be in `static/fonts/` and declared with `@font-face`.

One unified scale across all platforms. What varies is *which token* is used per UI element.

### Type Scale

#### Headings — line-height 1.2

| Name | Size | Weights available |
|:---|:---|:---|
| Display | `50px` | Regular · Bold |
| Header | `42px` | Regular · Bold |
| Headline | `35px` | Regular · Bold |
| Subheader | `29px` | Regular · Bold |
| Subheadline | `24px` | Regular · Bold |

#### Body — line-height 1.5

| Size | Weights available |
|:---|:---|
| `20px` | Light · Regular · Bold |
| `16px` | Light · Regular · Bold |
| `14px` | Light · Regular · Bold |
| `12px` | Light · Regular · Bold |
| `10px` | Light · Regular · Bold |

#### Weights

| Weight | Value | When to use |
|:---|:---|:---|
| Light | `300` | Secondary data, table cells, dropdown options |
| Regular | `400` | Default body text, nav items, labels, titles |
| Bold | `700` | Buttons, emphasis, table headers, badges, screen titles |

### Usage in context

#### Dashboard (Desktop)

| UI element | Size | Weight |
|:---|:---|:---|
| Page title | `24px` | Regular |
| Modal title, panel title | `20px` | Regular |
| Sub-section title | `16px` | Regular |
| Button label | `14px` | Bold |
| Nav item, filter label, dropdown value | `14px` | Regular |
| Dropdown option | `12px` | Light |
| Table header cell | `12px` | Bold |
| Table body cell | `12px` | Light |
| Status tag, badge | `12px` | Regular / Bold |
| Search placeholder | `12px` | Regular |
| Icon button label (xsmall) | `10px` | Bold |

#### App User & App Driver (Mobile)

| UI element | Size | Weight |
|:---|:---|:---|
| Screen title | `24px` | Bold |
| Section heading | `20px` | Bold |
| Card title | `16px` | Bold |
| Body text, description | `14px` | Regular |
| Button label | `10px` | Bold |
| Caption, helper text, label | `12px` | Regular |
| Badge, notification count | `10px` | Bold |

---

## Spacing

Base grid: **4px**. All spacing decisions are multiples of 4.

| Token | Value | Use |
|:---|:---|:---|
| `spacing-2xs` | `2px` | Tight inline gaps |
| `spacing-xs` | `4px` | Icon gaps, tight inline spacing |
| `spacing-sm` | `8px` | Compact list items, badge padding, gap between rows |
| `spacing-md` | `12px` | Component internal padding |
| `spacing-lg` | `16px` | Default padding inside components |
| `spacing-xl` | `20px` | Section gaps within a card |
| `spacing-2xl` | `24px` | Content padding, modal padding |
| `spacing-3xl` | `28px` | Large section rhythm |

Use CSS variables: `padding: var(--spacing-md)` — do not hardcode pixel values.

---

## Elevation & Shadows

Two elevation levels used throughout the system:

| Name | Value | Use |
|:---|:---|:---|
| `shadow-soft` | `0px 2px 8px rgba(0,0,0,0.08)` | Cards, content slot, data rows — default resting state |
| `shadow-deep` | `0px 4px 12px rgba(0,0,0,0.16)` | Modals, dropdowns, action buttons, accordions, toasts |

**Rule:** never mix levels on the same component. `shadow-deep` signals elevation above the page surface (overlays, interactive elements). `shadow-soft` is the default for content that sits on the page.

---

## Border Radius

| Value | Use |
|:---|:---|
| `4px` | Toast container, small tags |
| `8px` | Cards, modals, table badges, accordions, content slot, side menu |
| `20px` | Buttons, pill-shaped elements, icon buttons |
| `50%` | Avatars, circular badges |

---

## Buttons

Global component — applies to Dashboard, App User, App Driver, and Landings.

| Property | Value |
|:---|:---|
| Height | `31px` |
| Padding | `8px 24px` |
| Border radius | `20px` |
| Font — mobile (App User · App Driver) | `10px Bold Busup Sans` |
| Font — desktop (Dashboard · Landings) | `14px Bold Busup Sans` |
| Shadow (Primary + Tertiary) | `shadow-deep` |

| Variant | Background | Text | Border |
|:---|:---|:---|:---|
| Primary | `#00BF6F` | `#ffffff` | none |
| Secondary | `#ffffff` | `#00BF6F` | `1px solid #00BF6F` |
| Tertiary | `#ffffff` | `#00BF6F` | none + `shadow-deep` |
| Disabled (all) | `#c4c4c4` | `#ffffff` | none · 30% opacity |

**Rules:**
- Only **one Primary** button per context
- Primary and Tertiary always carry `shadow-deep` — including Default state
- Secondary never has a shadow
- All disabled states: no shadow, 30% opacity

---

## Layout — Dashboard

Every Dashboard screen uses the same fixed chrome. Only the content inside the white card changes.

```
┌──────────────────────────────────────────────────────┐
│  Side Menu (248px)  │  Header (67px, green #00BF6F)  │
│                     ├────────────────────────────────┤
│                     │  Content Slot (white card)     │
│                     │  offset: left 280px, top 99px  │
│                     │  padding: 32px                 │
└─────────────────────┴────────────────────────────────┘
Background: #EDF0F4
```

| Property | Value |
|:---|:---|
| Side menu width | `248px` |
| Side menu background | `#242D31` |
| Header height | `67px` |
| Header background | `#00BF6F` |
| Content left offset | `280px` (248 + 32px gap) |
| Content top offset | `99px` (67 + 32px gap) |
| Content card background | `#ffffff` |
| Content card border-radius | `8px` |
| Content card shadow | `shadow-soft` |
| Content card padding | `32px` |
| Page background | `#EDF0F4` |

---

## Components — Dashboard

### Side Menu

| Property | Value |
|:---|:---|
| Background | `#242D31` |
| Active sub-item background | `#2F3B40` |
| Width | `248px` |
| Item height | `41px` |
| Item padding | `16px` horizontal |
| Sub-item indent | `34px` left padding |
| Label | `14px Regular #ffffff` |
| Icon | `16px` |

**Behaviour:** collapsed by the Header hamburger (☰), not by the menu itself. One section open at a time.  
Nav item structure (icon + label + chevron) is shared with App User Side Menu.

---

### Header (Dashboard)

| Property | Value |
|:---|:---|
| Background | `#00BF6F` |
| Height | `67px` |
| Left | Hamburger icon — toggles Side Menu |
| Right | Language selector + User profile |

---

### Toast (Dashboard)

| Variant | Background | Icon colour |
|:---|:---|:---|
| Activated | `rgba(102,187,106,0.2)` | `#66BB6A` |
| Alert | `rgba(255,160,0,0.2)` | `#FFA000` |
| Error | `rgba(229,57,53,0.2)` | `#E53935` |
| Info | `rgba(41,182,246,0.2)` | `#29B6F6` |

| Property | Value |
|:---|:---|
| Border radius | `4px` |
| Padding | `12px 24px` |
| Gap (icon → text) | `24px` |
| Max width | `725px` |
| Icon size | `16px` |
| Text | `14px Regular #212121` |

**Behaviour:** inline in content slot (not overlaid). Position is contextual — below the controls that triggered the action.  
Auto-dismisses after 3–5s for transient feedback; stays visible for persistent states (e.g. Edit Mode active).  
Used cross-platform — dimensions adjust on mobile.

---

### Modal (Dashboard)

| Property | Value |
|:---|:---|
| Overlay | `rgba(70,70,70,0.5)` |
| Width | `745px` |
| Padding | `32px horizontal · 24px bottom` |
| Border radius | `8px` |
| Shadow | `0px 4px 6px rgba(0,0,0,0.16)` |
| Title | `20px Regular #212121` |
| Buttons | Centered in footer |

Cancel: `white bg · 1px solid #00bf6f · 14px Bold green`  
Confirm: `#00bf6f bg · 14px Bold white` · disabled → `#c4c4c4`

---

### Accordion

| Property | Value |
|:---|:---|
| Header border | `2px solid #00BF6F` |
| Header padding | `12px 24px` |
| Header border-radius | `8px` collapsed · `8px 8px 0 0` expanded |
| Shadow | `shadow-deep` |
| Title | `16px Regular #00BF6F` |
| Content padding | `16px 24px` |
| Gap between accordions | `8px` |

---

### Data Table

| Property | Value |
|:---|:---|
| Header | `12px Bold #212121` |
| Row | `12px Regular #212121` |
| Row height | `48px` |
| Row hover | `background #f4f4f4` |
| Search bar | `w 242px · bg rgba(255,255,255,0.3) · border 1px #989898 · border-radius 8px` |

---

### Alert Row (Alert System / Operations Control)

| Property | Value |
|:---|:---|
| Badge height | `38px` |
| Badge padding | `10px 8px` |
| Badge border-radius | `8px` |
| Badge shadow | `shadow-soft` |
| Text | `12px Regular` |
| Direction arrow | `14px · inside Route name badge · right-aligned` |
| Row gap | `8px` between badges |

#### Service Status colours

| Status | Colour | Text colour |
|:---|:---|:---|
| Pending service creation | `#ffffff` | `#212121` (+ border `#c4c4c4`) |
| Pending send to provider | `#FFEB3B` | `#212121` |
| Pending assignment | `#FF9800` | `#212121` |
| In progress with issues | `#E53935` | `#ffffff` |
| Pending unsolved issues | `#EF9A9A` | `#212121` |
| Planned | `#42A5F5` | `#ffffff` |
| In progress | `#00BF6F` | `#000000` |
| Completed | `#BDBDBD` | `#212121` |
| Canceled | `#9C27B0` | `#ffffff` |
| Finished with issues | `#212121` | `#ffffff` |

#### Alert System — Column widths

| Column | Width |
|:---|:---|
| Local time | `100px` |
| Service time | `112px` |
| Route name | `330px` |
| Site name | `233px` |
| Provider | `190px` |
| Priority | `104px` |
| Agent | `100px` |
| Pending | `100px` |
| Closed | `100px` |
| Actions | `64px` |

---

### Filters

Primary mechanism for selecting the context of a page or changing the data shown. Always requires explicit Apply — never applied immediately.

#### Anatomy

| Element | Description |
|:---|:---|
| **Header** | Collapsible panel trigger — "Filters" label in `#00BF6F`, green bottom border, chevron |
| **Dropdown single select** | Selects one value; list closes after selection |
| **Dropdown multi select** | Selects one or more values; uses checkboxes; list stays open until closed |
| **Text input** | Optional free-text field for name/keyword search |
| **Mandatory indicator** | Red asterisk `*` — Apply disabled until all mandatory fields filled |
| **Clear all** | Resets all fields without applying; secondary button |
| **Apply** | Submits selection and loads filtered content; primary button; disabled until mandatory fields filled |

#### Behaviour

- Filters are **never applied immediately** — user must press Apply
- Apply button disabled while any mandatory field (`*`) is empty
- Clear all resets fields without changing the current view
- Panel starts **open by default** on pages where filter selection is required to load content
- Grey background on dropdown option = hover/focus only, not selected state
- Both Clear all and Apply buttons always centred at the bottom of the panel

---

### Service Detail Modal

| Property | Value |
|:---|:---|
| Width | `960px` |
| Padding | `24px 32px` |
| Border radius | `8px` |
| Shadow | `shadow-deep` |
| Title | `24px Regular #212121` |

**Sections (Accordion):** Service Information · Itinerary · Incidents · Service alerts · Communications · Comments  
Service Information is expanded by default.

#### Info Card (inside sections)

| Property | Value |
|:---|:---|
| Background | `#f4f4f4` |
| Height | `60px` |
| Padding | `8px 16px` |
| Label | `14px Regular #414141 · letter-spacing 0.5px` |
| Value | `12px Regular #989898 · letter-spacing 0.25px` |
| Action button | White pill `26px · shadow-deep` |
| Grid | 3 columns · `8px` gap |

---

## Components — App User

### Toast (App User)

Same 4 variants and colours as Dashboard Toast. In App User, toast primarily communicates **service states** (route active, connection issue) — mostly persistent, disappears when the state ends not on a timer.

Position: top of screen, below status bar. Never blocks interactive elements.

---

### Navigation Bar

Bottom bar for primary navigation in App User. 5 items max. Active item: `#00BF6F` icon + label. Inactive: `#989898`.

---

### Side Menu (App User)

Shares the **nav item structure** (icon + label + chevron) with the Dashboard Side Menu. Visual shell differs — white background, different typography. One section open at a time.

---

### Badge

Semantic colour-coded labels for status communication.

| Variant | Background | Text |
|:---|:---|:---|
| Success | `#e3f5e3` | `#358439` |
| Warning | `#fff4c5` | `#bb5202` |
| Danger | `#ffe2e1` | `#9d1a17` |
| Info | `#e0f2fe` | `#085884` |
| Neutral | `#f4f4f4` | `#414141` |

---

### Avatar

| Size | Dimensions |
|:---|:---|
| Small | `32px` |
| Medium | `40px` |
| Large | `56px` |

Border radius: `50%`. Fallback: initials on `#d7ffed` background with `#00BF6F` text.

---

### Tabs

Two variants for switching between exactly two related views or content sections.

| Variant | When to use |
|:---|:---|
| **iOS** | Inside cards, modal sheets, embedded content panels |
| **Android** | Full-width page-level navigation at the top of a screen |

| Property | Token | Value |
|:---|:---|:---|
| Height | `--tab-height` | `34px` |
| Padding | `--tab-padding-v` / `--tab-padding-h` | `8px / 16px` |
| Border radius | `--tab-border-radius` | `8px` |
| Container background | `--tab-container-bg` | `#f4f4f4` — Neutral 50 |
| Active background (iOS) | `--tab-active-bg` | `#ffffff` |
| Active border (iOS) | `--tab-active-border` | `#414141` — Neutral 400 |
| Active shadow (iOS) | `--tab-active-shadow` | `0 4px 12px 0 rgba(0,0,0,0.16)` |
| Active indicator (Android) | `--tab-android-active` | `#ea6753` — Secondary 300 |
| Inactive color | `--tab-inactive-color` | `#000000` |
| Font size | — | `14px` |
| Font weight active | — | `700 (Bold)` |
| Font weight inactive | — | `400 (Regular)` |

**Rules:** always exactly two tabs; short parallel labels ("Active / Future", "Upcoming / Past"); one tab always selected — never unselected state.

---

### Feedback Signs

Compact visual element combining an illustrative icon + optional label. Non-blocking — appears inline, never as an overlay.

| Variant | Icon colour | Use when… |
|:---|:---|:---|
| **Success** | `#66bb6a` (Success_300) | Process completed successfully |
| **Alert** | `#ffa000` (Alert_300) | Attention required, intermediate state |
| **Error** | `#e53935` (Danger_300) | Process failed, user sees the result |

**Common contexts:** data tables, ticket validation lists, connection status indicators, inside Text Inputs (icon-only).  
Icon-only version (no label) is valid when context is sufficient.

---

### Feedback Modals

Overlay cards that communicate an action outcome. Interrupt the flow — the user must acknowledge before continuing.

#### Styles

| Style | Structure | Use when… |
|:---|:---|:---|
| **Simple** | Icon + title + 1 button | Outcome is clear, one path forward |
| **Full** | Icon + title + description + 2 buttons | User needs context; action is reversible/destructive |

#### Types

| Type | Colour | Token |
|:---|:---|:---|
| Success | `#00bf6f` | Primary 300 |
| Alert | `#ffa000` | Alert 300 |
| Error | `#e53935` | Danger 300 |

#### Tokens

| Property | Value |
|:---|:---|
| Width | `325px` |
| Border radius | `16px` |
| Shadow | `0px 2px 4px rgba(0,0,0,0.16)` |
| Icon size | `64×64px` |
| Icon padding top | `32px` |
| Icon padding bottom | `16px` |
| Title | `14px Bold #212121` |
| Description | `14px Light #414141` |
| Content padding horizontal | `32px` |
| Button border radius | `20px` |
| Button padding | `8px 24px` |
| Button font | `10px Bold` |
| Button shadow | `0px 4px 6px rgba(0,0,0,0.16)` |

---

### Notification

Card for system messages or communications. Appears in a dedicated screen or list — not an overlay, does not interrupt the flow.

| Property | Value |
|:---|:---|
| Variant | Default (1 documented) |
| Display order | Reverse chronological — most recent first |
| Unread state | Visually distinct from read |
| Action | Mark as read individually or all at once |

**Badge count** on the Navigation Bar will reflect unread count — not yet implemented.

---

### Text Input

| Property | Token | Value |
|:---|:---|:---|
| Width | `--input-width` | `311px` |
| Padding | `--input-padding-v` / `--input-padding-h` | `12px / 16px` |
| Border radius | `--input-border-radius` | `8px` |
| Border Default | `--input-border-default` | `#c4c4c4` — Neutral 200 |
| Border Active | `--input-border-active` | `#989898` — Neutral 300 |
| Border Error | `--input-border-error` | `#e53935` — Danger 300 |
| Background Disabled | `--input-bg-disabled` | `#dbdbdb` — Neutral 100 |
| Label | `--input-label-font-size` | `14px #414141` |
| Placeholder Default | — | `#dbdbdb` — Neutral 100 |
| Placeholder Active | — | `#414141` — Neutral 400 |
| Hint | `--input-hint-font-size` | `10px #414141` |
| Hint Error | — | `#e53935` |
| Required asterisk | — | `#e53935` |
| Slot size | `--input-slot-size` | `16×16px` |

**States:** Default · Active (focus) · Error · Disabled.  
**Slots:** left (context: icon, flag, chip) + right (action: chevron, clear). Both independent and optional.  
**Compositions in use:** Phone Number Input (country flag left slot), File Upload (chip left slot).

#### Dropdown (extends Text Input)

| Property | Token | Value |
|:---|:---|:---|
| Width | `--dropdown-width` | `311px` |
| Item height | `--dropdown-item-height` | `34px` |
| Border radius | `--dropdown-border-radius` | `8px` |
| Padding | `--dropdown-padding-v` / `--dropdown-padding-h` | `8px / 12px` |
| Font | `--dropdown-font-size` / `--dropdown-font-weight` | `12px / 300 Light` |
| Selected background | `--dropdown-selected-bg` | `#f4f4f4` — Neutral 50 |
| List shadow | `--dropdown-shadow` | `0 4px 12px 0 rgba(0,0,0,0.16)` |

Variants: single-select · single-select with system default · multi-select (checkboxes in list items) · disabled.

---

### Form Controls

#### Checkbox

Use when the user can select zero or more options independently.

| Property | Token | Value |
|:---|:---|:---|
| Size | `--checkbox-size` | `24×24px` |
| Border radius | `--checkbox-border-radius` | `4px` |
| Border unchecked | `--checkbox-unchecked-border` | `#989898` — Neutral 300 · `1.5px` |
| Background checked | `--checkbox-checked-bg` | `#00bf6f` — Primary 300 |
| Checkmark color | `--checkbox-checkmark-color` | `#ffffff` |
| Label | `--control-label-font-size` | `12px #414141` |
| Gap control → label | `--control-gap` | `8px` |

#### Radiobutton

Use when exactly one option must be selected from a group (2–6 options max).

| Property | Token | Value |
|:---|:---|:---|
| Size | `--radio-size` | `20×20px` |
| Dot size | `--radio-dot-size` | `8×8px` |
| Border unmarked | `--radio-unmarked-border` | `#989898` — Neutral 300 · `1.5px` |
| Background marked | `--radio-marked-bg` | `#00bf6f` — Primary 300 |
| Dot color | `--radio-marked-dot-color` | `#ffffff` |
| Label | `--control-label-font-size` | `12px #414141` |
| Gap control → label | `--control-gap` | `8px` |

#### Toggle

Use for binary on/off settings that take effect immediately — no submit needed.

| Property | Token | Value |
|:---|:---|:---|
| Track width | `--toggle-track-width` | `40px` |
| Track height | `--toggle-track-height` | `20px` |
| Track radius | `--toggle-track-radius` | `10px` |
| Thumb size | `--toggle-thumb-size` | `14×14px` |
| Thumb color | `--toggle-thumb-color` | `#ffffff` |
| Thumb offset | `--toggle-thumb-offset` | `3px` |
| Off background | `--toggle-off-bg` | `#dbdbdb` — Neutral 100 |
| On background | `--toggle-on-bg` | `#00bf6f` — Primary 300 |
| Thumb shadow | — | `0 2px 8px 0 rgba(0,0,0,0.08)` |

**Label rule:** always describe the active (on) state — "Show booking section", not "Booking section".  
**Do not** use inside forms that require a Save/Confirm step — use Checkbox instead.

---

### Code Input

Segmented numeric entry field for verification codes and PINs. Each digit occupies an independent box.

Supports **1–6 digits**. Three states per box: Default · Active · Error.

| Property | Value |
|:---|:---|
| Digits | 1–6 |
| Validation | On complete code only — never field by field during typing |
| Error | All boxes simultaneously; clear all + return focus to first |
| Paste | Auto-fill all boxes from clipboard |
| Keyboard | Numeric keyboard on mobile |

---

### Segmented Control

Selector for mutually exclusive options in a row. One option always active.

| Variant | Description |
|:---|:---|
| **Selected** | Active option with visual highlight |
| **Default** | Inactive option |

**Rules:**
- All segments same width — never adjust individually by label length
- Always one option selected — no empty state
- Use for 2–4 view modes (Map/List, Week/Month); more options only valid for very short labels (times, numbers)
- Position close to the content it controls

**vs Tabs:** Segmented Control filters/toggles view mode within a screen; Tabs always switches between exactly two content sections.

---

### Progress Bar

Linear progress indicator. 5 defined fill states: 100% · 75% · 50% · 25% · 0%.

**Note:** defined in Figma library but not yet applied in App User. Reference for future implementation and Dashboard use.

| Use when… | Avoid when… |
|:---|:---|
| Process has a measurable quantity (vehicle capacity, route progress) | Process has indeterminate duration — use a loading indicator |
| User benefits from knowing how much is left | Exact value already shown by another element |

**Primary use case:** vehicle capacity — shows available seats before boarding.

---

### Cards

Container grouping related information about an entity. Two variants in App User:

| Variant | Use |
|:---|:---|
| **Bookings Card** | User's active, upcoming, or past bookings |
| **Routes Card** | Available or in-progress routes |

Internal subcomponents: Headline (most important info) · Subhead + Body (secondary) · Divider.

**Rules:**
- Entire card is tappable when it leads to a detail screen
- Max ~4 visible attributes — more → use a detail screen
- Do not mix Bookings Cards and Routes Cards in the same scroll list

---

### Ticket

The user's boarding pass. Content and structure vary by connectivity, booking availability, and operator configuration.

#### Scenarios

| Scenario | Internet | Booking | QR enabled | What it shows |
|:---|:---|:---|:---|:---|
| **1.1** | ❌ | Unknown | — | QR Code + connection error message |
| **2.1** | ✅ | ❌ | ✅ | QR Code + "No bookings for today" |
| **2.2** | ✅ | ❌ | ❌ | "No bookings for today" + booking CTA |
| **3.1** | ✅ | ✅ | ✅ | Full ticket — On demand / Expedition crosseling |
| **3.2** | ✅ | ✅ | ✅ | Full ticket — Standard / Shuttle / Circular |

**Critical rules:**
- QR Code must always be available when technically possible — never block boarding due to lack of internet
- Ticket state must be immediately readable: valid, no booking, connection error
- Reachable in the fewest taps from the main screen
- Support screen rotation for QR reading
- No destructive actions (cancel booking) inside the Ticket screen

---

## Components — App Driver

App Driver is mobile-only. Shares all foundation tokens and most components with App User. Unique components below.

### Welcome Header

Greeting shown on the home screen when the driver opens the app.

| Property | Value |
|:---|:---|
| Background | `#d7ffed` (Primary_100) |
| Border radius | `16px` |
| Padding | `28px 32px` |
| Title | `29px Bold #414141`, line-height `1.2` |
| Subtitle | `20px Regular #414141`, line-height `1.5` |
| Gap | `4px` |

---

### Route Components

**Route Path** — vertical stop sequence showing driver progress.

| State | Dot/track colour |
|:---|:---|
| Not started | `#c4c4c4` |
| Current | `#00bf6f` |
| Completed | `#616161` |

| Property | Value |
|:---|:---|
| Track width | `2px` |
| Dot size | `12px` diameter |
| Stop name — current | `14px Bold #212121` |
| Stop name — other | `14px Regular #989898 / #212121` |
| ETA | `11px Regular #00bf6f` (active) · `#616161` (completed) |

**Route Detail Card** — tooltip on stop tap.

| Property | Value |
|:---|:---|
| Background | `#ffffff` |
| Border | `1px solid #dbdbdb` |
| Border radius | `8px` |
| Shadow | `shadow-soft` |
| Padding | `8px 12px` |

---

### Incidence Modals

Two variants triggered from the active route view.

| Variant | Input |
|:---|:---|
| Comment | Free-text textarea |
| Type select | Dropdown (Defeito mecânico · Defeito elétrico · Via obstruída · Acidente na via) |

| Property | Value |
|:---|:---|
| Width | `320px` |
| Padding | `24px 20px 16px` |
| Border radius | `8px` |
| Shadow | `shadow-deep` |
| Title | `"Feedback" · 16px Bold #212121` |
| Cancel button | `white · 1px solid #00bf6f · 13px Bold green` |
| Submit button | `#00bf6f · 13px Bold white` |

After the driver sets the boarding count, a **confirmation modal** appears before the count is submitted.

---

### Passenger Information

Read-only list of booked passengers per stop.

| Property | Value |
|:---|:---|
| Row padding | `8px 12px` |
| Row divider | `1px solid #f4f4f4` |
| Avatar | `32px · #d7ffed bg · #00bf6f initials · 12px Bold` |
| Name | `13px Bold #212121` |
| Party count | `11px Regular #989898` |
| Badge padding | `3px 8px · border-radius 4px` |

Status values: Pending · Boarding · Boarded · Absent. List is read-only — not interactive.

---

### Manual Boarding Control

Large-target counter for recording boardings at a stop.

| Property | Value |
|:---|:---|
| Container | `#989898 · border-radius 30px · 279 × 141px` |
| Disabled | `30% opacity` |
| − / + buttons | `white · 44 × 44px · border-radius 16px · shadow-deep` |
| Counter circle | `56 × 56px · rgba(255,255,255,0.2) · shadow-soft` |
| Counter text | `35px Bold white · shadow-deep` |
| Label "Boarding" | `14px Regular white` |

After setting the count, a confirmation modal appears before submission.

---

### On Demand Control

Toggle card for accepting or pausing on-demand ride requests.

| Property | Value |
|:---|:---|
| Background | `#f4f4f4` |
| Border | `1px solid rgba(0,191,111,0.3)` |
| Border radius | `12px` |
| Padding | `9px 21px` |
| Width | `355px` |
| Title | `16px Bold #414141` |
| Helper text | `12px Regular #989898` |
| Toggle ON | `#00bf6f` track |
| Toggle OFF | `#c4c4c4` track |

---

## Components — Landings

Landings is the desktop-first public web app. Shares foundation tokens and most components with App User.

### Navigation Header

Persistent top bar on all Landings pages.

| Property | Value |
|:---|:---|
| Background | `#00bf6f` (Primary_300) |
| Height | `67px` |
| Nav item padding | `0 24px` |
| Active nav | `14px Bold white` |
| Inactive nav | `14px Regular #049157` (Primary_400) |
| Language / User | `14px Regular white` |

Nav items: **Search routes** · My bookings · For companies. Header is fixed — stays at top on scroll.

---

### Search Bar *(not yet implemented)*

Route search form — primary action on the home page.

| Field | Required | Icon |
|:---|:---|:---|
| Origin | Yes | — |
| Destination | Yes | — |
| Date | No | Calendar |
| Time | No | Calendar |

| Property | Value |
|:---|:---|
| Container | `white · border-radius 8px · shadow-soft · padding 20px 24px` |
| Field border | `1px solid #989898 · border-radius 8px` |
| Field background | `rgba(255,255,255,0.3)` |
| Field padding | `12px 16px` |
| Label | `16px Regular #414141` |
| Required `*` | `12px #e53935` |
| Search button | `#00bf6f · 14px Bold white · border-radius 20px · shadow-deep` |

Clicking **Date** opens the Calendar Modal. Required fields show error state on submit if empty.

---

### Title *(shared — Landings + Dashboard)*

Named typographic styles for section headings.

| Variant | Size | Weight | Line-height |
|:---|:---|:---|:---|
| 24px regular | `24px` | 400 | `1.2` |
| 20px regular | `20px` | 400 | `1.5` |
| 16px regular | `16px` | 400 | `1.5` |
| 24px bold | `24px` | 700 | `1.2` |
| 20px bold | `20px` | 700 | `1.5` |
| 16px bold | `16px` | 700 | `1.5` |

All variants: `#000000 · "Busup Sans"`.

---

### Calendar Modal

Date picker that opens from the Search Bar Date field.

| Property | Value |
|:---|:---|
| Background | `#ffffff` |
| Width | `305px` |
| Border radius | `8px` |
| Shadow | `shadow-deep` |
| Month label | `14px Bold #414141` |
| Day headers | `14px Light #212121` |
| Day numbers | `12px Light #414141` |
| Outside-month days | `12px Light #dbdbdb` — not interactive |
| Selected circle | `24px diameter · #00bf6f` |
| Selected text | `12px Bold white` |
| Apply button | `#00bf6f · 14px Bold white · border-radius 20px · shadow-deep` |

---

*Last updated: June 2026 — generated from busup-ds.github.io/busup-docs*
