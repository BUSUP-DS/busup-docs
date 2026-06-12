---
sidebar_label: Calendar Modal
sidebar_position: 5
---

import { CalendarModalDemo } from '@site/src/components/HomepageFeatures/DS/LandingsComponents';

# Calendar Modal

<CalendarModalDemo />

<div style={{marginBottom: "40px"}} />

The Calendar Modal is a date picker that opens when the user clicks the **Date** field in the Search Bar. It shows a monthly calendar grid and lets the user select a single date before confirming with Apply.

---

## Anatomy

| Element | Description |
|:---|:---|
| **Container** | White card, `305px` wide, `border-radius 8px`, `shadow-deep` |
| **Month navigation** | Previous / Next chevrons flanking the current month+year label |
| **Month label** | `14px Bold #414141` — e.g. "February, 2026" |
| **Day headers** | Mo–Su labels — `14px Light #212121` |
| **Day numbers** | `12px Light` — current month days; `#dbdbdb` for days outside the visible month |
| **Selected day** | Green circle `#00bf6f`, `12px Bold white` |
| **Apply button** | `10px Bold white`, `#00bf6f`, `border-radius 20px`, `shadow-deep` |

---

## Day states

| State | Style |
|:---|:---|
| **Default** | `12px Light #414141` |
| **Selected** | Green circle `#00bf6f` + `12px Bold white` |
| **Outside current month** | `12px Light #dbdbdb` — not interactive |

---

## Tokens

| Property | Value |
|:---|:---|
| Container background | `#ffffff` |
| Container width | `305px` |
| Border radius | `8px` |
| Shadow | `shadow-deep` — `0px 4px 12px rgba(0,0,0,0.16)` |
| Month label | `14px Bold #414141` |
| Day header | `14px Light #212121` |
| Day number | `12px Light #414141` |
| Selected circle | `24px diameter · #00bf6f` |
| Selected text | `12px Bold white` |
| Outside-month text | `12px Light #dbdbdb` |
| Apply button | `#00bf6f · 10px Bold white · border-radius 20px · shadow-deep` |

---

## Behaviour

- Opens as an overlay anchored to the Date field in the Search Bar.
- Only one date can be selected at a time.
- The user navigates between months using the Previous / Next arrows.
- Clicking **Apply** confirms the selection and closes the modal.
- Clicking outside the calendar dismisses it without applying.
- Days outside the current month are visible but not selectable.

---

## When to use

Use the Calendar Modal exclusively as the date picker for the Search Bar Date field. Not used in App User, App Driver, or Dashboard.
