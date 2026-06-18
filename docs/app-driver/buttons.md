---
sidebar_label: Square Button
sidebar_position: 8
---

import { SquareButtonDemo } from '@site/src/components/HomepageFeatures/DS/ButtonVariants';

# Buttons — App Driver

App Driver uses the same Primary, Secondary, and Tertiary buttons documented in [App User → Buttons](/busup-docs/docs/app-user/buttons). This page covers the one button variant **exclusive to App Driver**: the Square Button.

---

## Square Button

Used in the quick-action grid on the driver home screen and contextual panels. Combines a tinted icon container with a short label in a card format.

<SquareButtonDemo />

| Property | Value |
|:---|:---|
| Size | 110 × 109px |
| Border radius | 16px |
| Background | White `#ffffff` |
| Shadow | `0px 4px 12px rgba(0,0,0,0.16)` (shadow-deep) |
| Icon container | 40 × 40px · Border radius 30px · `rgba(0,191,111,0.2)` |
| Icon size | 24 × 24px · Color `#00bf6f` |
| Label | 12px Bold · `#414141` · centered |
| Disabled | 40% opacity |

### States

| State | Behaviour |
|:---|:---|
| Default | Full opacity, shadow-deep |
| Disabled | 40% opacity, no interaction |

### When to use

Square Buttons appear on the **See Service Details** screen — before, during, and after the driver starts the service (Play). They form a **3×3 grid** of quick-action shortcuts. If additional actions are needed, a fourth row can be added and the screen scrolls vertically to accommodate it.
