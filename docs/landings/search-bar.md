---
sidebar_label: Search Bar
sidebar_position: 3
---

import { SearchBarDemo } from '@site/src/components/HomepageFeatures/DS/LandingsComponents';

# Search Bar

:::caution Not yet implemented
This component is designed but not yet built in production. The documentation and demo reflect the Figma specification.
:::

<SearchBarDemo />

<div style={{marginBottom: "40px"}} />

The Search Bar is the primary action component on the Landings home page. It allows users to search for available routes by specifying an origin, destination, date, and time.

---

## Anatomy

| Element | Description |
|:---|:---|
| **Field label** | `16px Regular #414141` — shown above each input |
| **Required indicator** | `*` in `12px #e53935` — Origin and Destination are required |
| **Input field** | Dropdown-style input with icon and chevron |
| **Calendar icon** | Appears in Date and Time fields |
| **Chevron** | Dropdown arrow in all fields — `16px #989898` |
| **Search button** | Primary green CTA — `14px Bold white`, `border-radius 20px` |

---

## Fields

| Field | Required | Width (desktop) | Icon |
|:---|:---|:---|:---|
| Origin | Yes | flex 2 | — (chevron only) |
| Destination | Yes | flex 2 | — (chevron only) |
| Date | No | flex 1 | Calendar icon |
| Time | No | flex 1 | Calendar icon |

---

## Tokens

| Property | Value |
|:---|:---|
| Container background | `#ffffff` |
| Container border radius | `8px` |
| Container shadow | `shadow-soft` |
| Container padding | `20px 24px` |
| Field border | `1px solid #989898` |
| Field border radius | `8px` |
| Field background | `rgba(255,255,255,0.3)` |
| Field padding | `12px 16px` |
| Label | `16px Regular #414141` |
| Required asterisk | `12px #e53935` |
| Value / placeholder | `16px Regular #414141` |
| Icon size | `16px` |
| Search button | `#00bf6f · 14px Bold white · border-radius 20px · shadow-deep` |

---

## Behaviour

- Clicking **Origin** or **Destination** opens a location autocomplete dropdown.
- Clicking **Date** opens the [Calendar Modal](/busup-docs/docs/landings/calendar-modal).
- Clicking **Time** opens a time-slot picker.
- The **Search** button is always visible; form validation fires on submit.
- Required fields show an error state (red border + message) if empty on submit.

---

## When to use

Use the Search Bar on the Landings home page as the primary route search entry point. It is a Landings-only component — not used in App User, App Driver, or Dashboard.
