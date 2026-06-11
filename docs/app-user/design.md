---
sidebar_label: 'Design System Overview'
sidebar_position: 3
title: Design System Overview
---

# Design System Overview

A living reference of everything documented in the BUSUP Design System — foundations, components, decisions, and what's coming next.

---

## What is BUSUP-DS?

The BUSUP Design System is the single source of truth for building consistent experiences across four products:

| Product | Platform | Audience |
|:---|:---|:---|
| **App User** | Mobile (iOS + Android) | End users — passengers |
| **App Driver** | Mobile (iOS + Android) | Drivers |
| **Dashboard** | Web | Operators and admins |
| **Landings** | Web | Marketing / acquisition |

Components are shared across products where applicable, with product-specific variants documented when they diverge.

---

## Pipeline

```
Figma Library  →  Claude + MCP  →  Docusaurus  →  GitHub Pages
```

- **Figma** is the source of design — components, tokens, and specs live here first.
- **Claude + MCP** extracts design context and generates documentation code.
- **Docusaurus** hosts the living documentation site.
- **GitHub Pages** serves the published site at [busup-ds.github.io/busup-docs](https://busup-ds.github.io/busup-docs/).
- **Source code** is version-controlled at [github.com/BUSUP-DS/busup-docs](https://github.com/BUSUP-DS/busup-docs).

---

## Foundations

| Token | Status | Description |
|:---|:---|:---|
| [Colors](/docs/design-tokens/colors) | ✅ Documented | Brand, feedback, and neutral color scales |
| [Spacing](/docs/design-tokens/spacing) | ✅ Documented | Spacing scale used across all components |
| [Typography](/docs/typography) | ✅ Documented | Busup Sans — heading and body type scales |
| Elevation | 🔜 Pending | Shadow levels — defined in Figma, not yet documented |
| Iconography | 🔜 Pending | Icon library — defined in Figma, not yet documented |

---

## Components

| Component | Status | Variants | Compositions |
|:---|:---|:---|:---|
| [Buttons](/docs/buttons) | ✅ Documented | Primary, Secondary, Tertiary | — |
| [Text Input](/docs/inputs) | ✅ Documented | Default, Active, Error, Disabled | Dropdown (single + multi-select), Phone, File Upload |
| [Form Controls](/docs/form-controls) | ✅ Documented | Checkbox, Radiobutton, Toggle | Groups, table rows, toggle with subtitle |
| [Feedback Modals](/docs/feedback-modals) | ✅ Documented | Simple, Full | Success, Alert, Error |
| [Side Menu](/docs/side-menu) | ✅ Documented | Default, Disabled | — |
| [Tabs](/docs/tabs) | ✅ Documented | iOS, Android | — |
| Avatar | 🔜 Pending | — | — |
| Badge | 🔜 Pending | — | — |
| Code Input | 🔜 Pending | — | — |
| Toast | 🔜 Pending | — | — |
| Navigation Bar | 🔜 Pending | — | — |
| Progress Bar | 🔜 Pending | — | — |
| Cards | 🔜 Pending | — | — |
| Notification | 🔜 Pending | — | — |
| Ticket | 🔜 Pending | — | — |
| Feedback Signs | 🔜 Pending | — | — |
| Segmented Control | 🔜 Pending | — | — |
| Page Tabs | 🔜 Pending | — | Multi-option navigation with icons (Dashboard) |

---

## Design Decisions

A record of intentional decisions made during the system's construction.

### Checkbox, Radiobutton, and Toggle — affirmative color

All three selection controls use **Primary 300** (`#00bf6f`) for their active/checked state.

Previously, the checked state used **Secondary 300** (`#ea6753`, coral). This was updated to green to:
- Unify the visual language of affirmative states across all three controls
- Reserve coral exclusively for secondary actions (buttons, links)
- Align with the brand's primary color as the "yes / active / on" signal

### Button shadows

**Primary** and **Tertiary** buttons always carry `shadow-deep` (`0 4px 12px rgba(0,0,0,0.16)`) — including in their Default state. **Secondary** never has a shadow. All disabled states have no shadow and render at 30% opacity.

### Tabs — iOS vs Android

| Variant | Visual | BUSUP context |
|:---|:---|:---|
| **iOS** | White active tab + border + shadow, on `#f4f4f4` container | App User, App Driver — contained surfaces |
| **Android** | Colored underline (`#ea6753`) + bold text, no container | App User, Dashboard — page-level navigation |

The Android variant is used in the Dashboard on light backgrounds. In this context, the page surface provides enough visual anchoring — the absence of a container background is a deliberate choice, not a limitation.

### Text Input — slot architecture

The left and right slots in the Text Input are **generic 16×16px content slots**, not icon-only. Any element that fits the slot size can be used — icons, flags, chips, checkboxes. This enables compositions like multi-select dropdowns, phone number inputs, and file upload fields without creating new components.

### Dropdown — `defaultValue`

The `defaultValue` prop was added to the Dropdown component to support system-pre-filled values (based on user profile, last session, or business rules). Without it, the component always started empty. A system default is only used when a reliable value can be inferred — leaving a placeholder is preferable to setting a wrong default.

---

## Figma Library

The component library is maintained in Figma across the following pages:

| Page | Contents |
|:---|:---|
| 🔑 Tokens | Typography, Colors, Elevation |
| ✅ App User | All shared + App User-specific components |
| ✅ Dashboard | Dashboard-specific components and patterns |
| ✅ App Driver | App Driver-specific components |
| Landings *(in progress)* | Landing page components |

→ [Open Figma Library](https://www.figma.com/design/8qxz2HkWpKhLABlai8bLVZ/NEW-LIBRARY)

---

## Maintained by

**Victoria Carneo** — Product Designer, BUSUP

- Email: [v.carneo@busup.com](mailto:v.carneo@busup.com)
- LinkedIn: [linkedin.com/in/victoriacarneo](https://www.linkedin.com/in/vict%C3%B3ria-carneo-632840212/)
