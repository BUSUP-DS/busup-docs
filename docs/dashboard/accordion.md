---
sidebar_label: Accordion
sidebar_position: 8
---

import { AccordionDemo } from '@site/src/components/HomepageFeatures/DS/Accordion';

# Accordion

<AccordionDemo />

<div style={{marginBottom: "40px"}} />

Accordion is a collapsible container that reveals or hides content when the header is clicked. It keeps the interface compact by showing only what's needed — the user opens the sections they care about.

---

## Anatomy

| Element | Description |
|:---|:---|
| **Header** | Clickable bar with the section title and a chevron. Always visible. |
| **Title** | 16px Regular `#00BF6F` — communicates what the section contains |
| **Chevron** | 16px icon, rotates 180° when expanded |
| **Content slot** | Revealed area below the header — accepts any component |

---

## States

| State | Description |
|:---|:---|
| **Collapsed** | Only the header is visible. Chevron points down. |
| **Expanded** | Header + content area visible. Chevron points up. Header border-radius flattens at the bottom to connect visually with the content. |

---

## Tokens

| Property | Value |
|:---|:---|
| Header background | `#ffffff` |
| Border | `2px solid #00BF6F` |
| Border radius | `8px` (collapsed) · `8px 8px 0 0` (expanded) |
| Shadow | `shadow-deep` — `0px 4px 12px rgba(0,0,0,0.16)` |
| Padding | `12px 24px` |
| Title | `16px Regular #00BF6F` |
| Content background | `#ffffff` |
| Content padding | `16px 24px` |
| Gap between accordions | `8px` |

---

## Behaviour

- Only one accordion can be open at a time **within the same group** — opening one closes the previous. (Exception: independent accordions on the same page do not affect each other.)
- The content slot accepts any component — Info Cards, tables, lists, maps.
- The header always remains visible and interactive, even when expanded.

---

## When to Use

Use Accordion to organise dense detail content into named sections — particularly when the user needs only some sections at a time. Used in the Dashboard in:
- **Service Detail Modal** — Service Information, Itinerary, Incidents, Service Alerts
- **Communications module** — message threads, configuration panels
