---
sidebar_label: Welcome Header
sidebar_position: 2
---

import { WelcomeHeaderDemo } from '@site/src/components/HomepageFeatures/DS/AppDriverComponents';

# Welcome Header

<WelcomeHeaderDemo />

<div style={{marginBottom: "40px"}} />

The Welcome Header is shown on the App Driver home screen when the driver launches the app. It greets the driver by name and confirms they are ready to start their trip.

---

## Anatomy

| Element | Description |
|:---|:---|
| **Container** | Mint green background (`Primary_100`) with rounded corners |
| **Title** | Driver's first name — `29px Bold #414141` |
| **Subtitle** | Contextual message — `20px Regular #414141` |

---

## Tokens

| Property | Value |
|:---|:---|
| Background | `#d7ffed` (Primary_100) |
| Border radius | `16px` |
| Padding | `28px 32px` |
| Title | `29px Bold #414141`, line-height `1.2` |
| Subtitle | `20px Regular #414141`, line-height `1.5` |
| Gap (title → subtitle) | `4px` |

---

## Behaviour

- The driver's first name is pulled from their account profile.
- The subtitle is contextual — it may vary depending on the time of day or route state (e.g. "Ready for your trip?" before the route starts, or a custom message from the operator).
- The component appears at the top of the home screen, below the status bar.

---

## When to use

Use exclusively on the App Driver home screen as a welcoming entry point. Not used in App User or Dashboard.
