---
sidebar_label: Incidence Modals
sidebar_position: 4
---

import { IncidenceModalDemo } from '@site/src/components/HomepageFeatures/DS/AppDriverComponents';

# Incidence Modals

<IncidenceModalDemo />

<div style={{marginBottom: "40px"}} />

Incidence Modals allow drivers to report issues that affect the service in real time. There are three variants depending on the type of report.

---

## Variants

| Variant | Description |
|:---|:---|
| **Comment** | Free-text area for the driver to describe the situation |
| **Type select** | Dropdown with a predefined list of incidence types |

---

## Anatomy

| Element | Description |
|:---|:---|
| **Overlay** | `rgba(70,70,70,0.5)` semi-transparent backdrop |
| **Modal container** | White card, `320px` wide, `border-radius 8px`, `shadow-deep` |
| **Title** | "Feedback" — `16px Bold #212121`, centred |
| **Input area** | Free-text textarea (Comment) or dropdown (Type select) |
| **Action buttons** | Cancel (outlined) + Submit (filled green) |

---

## Tokens

| Property | Value |
|:---|:---|
| Modal width | `320px` |
| Modal padding | `24px 20px 16px` |
| Border radius | `8px` |
| Shadow | `shadow-deep` — `0px 4px 12px rgba(0,0,0,0.16)` |
| Title | `16px Bold #212121` |
| Textarea / Dropdown border | `1px solid #dbdbdb`, `border-radius 8px` |
| Cancel button | `white bg · 1px solid #00bf6f · 13px Bold green` |
| Submit button | `#00bf6f bg · 13px Bold white` |

---

## Dropdown options (Type select)

The predefined incidence types are (in Figma):

- Defeito mecânico
- Defeito elétrico
- Via obstruída
- Acidente na via

The list can be extended by the product team as needed.

---

## Behaviour

- Both variants are triggered by the driver tapping a "Report Incidence" action in the active route view.
- **Comment** — requires text before the Submit button is active.
- **Type select** — requires a selection before Submit is active.
- Tapping **Cancel** dismisses the modal without sending any report.
- Only one modal is shown at a time.

---

## When to use

Use Incidence Modals only in the App Driver active route context. Not used in App User or Dashboard.
