---
sidebar_label: Manual Boarding Control
sidebar_position: 6
---

import { ManualBoardingControlDemo } from '@site/src/components/HomepageFeatures/DS/AppDriverComponents';

# Manual Boarding Control

<ManualBoardingControlDemo />

<div style={{marginBottom: "40px"}} />

The Manual Boarding Control is a large-target counter widget that lets the driver increment or decrement the boarding count by tapping plus and minus buttons. It is designed for quick, one-hand operation while managing passengers at a stop.

---

## Anatomy

| Element | Description |
|:---|:---|
| **Container** | Dark grey pill-shaped background |
| **Minus button** | White icon button, left — decrements the count |
| **Counter** | White translucent circle with the current boarding count |
| **Plus button** | White icon button, right — increments the count |
| **Label** | "Boarding" — `14px Regular white`, centred below the counter |

---

## States

| State | Description |
|:---|:---|
| **Default** | Full opacity — interactive |
| **Disabled** | `30% opacity` — taps have no effect. Used when boarding is not permitted at this stop. |

---

## Tokens

| Property | Value |
|:---|:---|
| Container background | `#989898` |
| Container border radius | `30px` |
| Container size | `279 × 141px` |
| Disabled opacity | `30%` |
| Minus/Plus button | White, `44 × 44px`, `border-radius 16px`, `shadow-deep` |
| Counter circle | `56 × 56px`, `rgba(255,255,255,0.2)`, `shadow-soft` |
| Counter text | `35px Bold white`, `shadow-deep` |
| Label | `14px Regular white` |

---

## Behaviour

- Count starts at `0` at the beginning of each stop.
- The minus button cannot decrement below `0`.
- When the driver confirms the stop departure, a **confirmation modal** appears showing the final boarding count. The driver must confirm before the count is submitted. This prevents accidental submissions.
- In the **Disabled** state, both buttons are inert and the counter cannot be changed.

---

## When to use

Use Manual Boarding Control in the App Driver stop management screen — displayed prominently when the bus is at a stop and boarding is active. Not used in App User or Dashboard.
