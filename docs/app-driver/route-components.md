---
sidebar_label: Route Components
sidebar_position: 3
---

import { RoutePathDemo } from '@site/src/components/HomepageFeatures/DS/AppDriverComponents';

# Route Components

<RoutePathDemo />

<div style={{marginBottom: "40px"}} />

Route Components represent the driver's active route as a vertical stop sequence. Each stop has a state that reflects whether it has been completed, is currently active, or is still ahead.

---

## Route Path

The **Route Path** is the primary navigation element — a vertical track with a stop marker at each point. The driver sees at a glance where they are on the route.

### Stop states

| State | Visual | Description |
|:---|:---|:---|
| **Not started** | Grey dot, grey track | Stops the driver has not yet reached |
| **Current** | Green filled dot + bus badge | The stop the driver is currently approaching or at |
| **Completed** | Dark grey dot, dark grey track | Stops already passed |

### Tokens

| Property | Value |
|:---|:---|
| Track width | `2px` |
| Dot size | `12px` diameter |
| Not started — dot/track | `#c4c4c4` |
| Current — dot/track | `#00bf6f` (Primary_300) |
| Completed — dot/track | `#616161` |
| Stop name — not started | `14px Regular #989898` |
| Stop name — current | `14px Bold #212121` |
| Stop name — completed | `14px Regular #212121` |
| Scheduled time | `11px Regular #989898` |
| ETA | `11px Regular #00bf6f` (current) · `#616161` (completed) |

---

## Route Detail Card

The **Route Detail Card** is a tooltip that appears when the driver taps a stop on the Route Path. It shows the stop name, scheduled time, and ETA.

### Tokens

| Property | Value |
|:---|:---|
| Background | `#ffffff` |
| Border | `1px solid #dbdbdb` |
| Border radius | `8px` |
| Shadow | `shadow-soft` |
| Padding | `8px 12px` |
| Stop name | `13px Bold #212121` |
| Time label | `11px Regular #989898` |
| ETA | `11px Regular #00bf6f` or `Completed` in `#616161` |

---

## Behaviour

- The Route Path always shows all stops for the current assignment.
- The driver cannot manually change the current stop — it advances automatically based on GPS position and confirmation actions.
- Tapping a stop name opens the Route Detail Card for that stop.
- The bus icon badge appears only on the current stop.

---

## When to use

Use Route Path and Route Detail Card exclusively in the App Driver route view screen. Not used in App User or Dashboard.
