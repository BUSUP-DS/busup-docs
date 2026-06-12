---
sidebar_label: On Demand Control
sidebar_position: 7
---

import { OnDemandControlDemo } from '@site/src/components/HomepageFeatures/DS/AppDriverComponents';

# On Demand Control

<OnDemandControlDemo />

<div style={{marginBottom: "40px"}} />

The On Demand Control is a card that lets the driver accept or pause on-demand ride requests. It uses a toggle to switch between active and off-duty states, with contextual helper text that changes to reflect the current state.

---

## Anatomy

| Element | Description |
|:---|:---|
| **Container** | Neutral background with a soft green border |
| **Title** | "On-Demand Rides" — `16px Bold #414141` |
| **Helper text** | Contextual subtitle — `12px Regular #989898` |
| **Toggle** | Green (ON) / Grey (OFF) — see [Form Controls → Toggle](/busup-docs/docs/app-user/form-controls) |

---

## States

| State | Toggle | Helper text |
|:---|:---|:---|
| **ON** | Green `#00bf6f` | "You are accepting ride requests" |
| **OFF** | Grey `#c4c4c4` | "You are off-duty. Turn this ON to start receiving ride requests." |

---

## Tokens

| Property | Value |
|:---|:---|
| Container background | `#f4f4f4` (Neutral_50) |
| Container border | `1px solid rgba(0,191,111,0.3)` |
| Container border radius | `12px` |
| Container padding | `9px 21px` |
| Container width | `355px` |
| Shadow | `0px 1px 1px rgba(0,0,0,0.05)` |
| Title | `16px Bold #414141`, line-height `28px` |
| Helper text | `12px Regular #989898`, line-height `1.5` |
| Toggle ON | `#00bf6f` track, white thumb |
| Toggle OFF | `#c4c4c4` track, white thumb |
| Toggle size | `44 × 24px`, thumb `18 × 18px` |

---

## Behaviour

- The toggle reflects the driver's current availability for on-demand requests.
- Toggling OFF removes the driver from the on-demand pool immediately — no new requests will be sent.
- Toggling ON re-enters the driver into the pool — requests may arrive immediately.
- If the driver has an active on-demand passenger, turning OFF does not cancel the current trip — only future requests stop.

---

## When to use

Display the On Demand Control card in the App Driver home screen or route overview when the driver's service type supports on-demand rides. Hide it entirely for drivers on fixed-route-only contracts. Not used in App User or Dashboard.
