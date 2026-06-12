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
9. [Components — Dashboard](#components--dashboard)
10. [Components — App User](#components--app-user)
11. [Components — App Driver](#components--app-driver)
12. [Components — Landings](#components--landings)

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
| Button label | `14px` | Bold |
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
| Font | `10px Bold Busup Sans` |
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
| Apply button | `#00bf6f · 10px Bold white · border-radius 20px · shadow-deep` |

---

*Last updated: June 2026 — generated from busup-ds.github.io/busup-docs*
