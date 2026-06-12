---
sidebar_label: Alert System
sidebar_position: 7
---

import { AlertSystemDemo } from '@site/src/components/HomepageFeatures/DS/AlertSystemTable';

# Alert System

<AlertSystemDemo />

<div style={{marginBottom: "40px"}} />

The Alert System is the Dashboard's real-time traffic monitoring table. It lists all active services for a given time window, colour-coded by their current status, so operators can spot issues at a glance without reading every row.

---

## Structure

The table is made of two components stacked vertically:

| Component | Description |
|:---|:---|
| **Table Header** | Single row of bold column labels. Static — no interaction. |
| **Alert Row** | One row per service. Background colour reflects the service status. Clicking a row opens the Service Detail Modal. |

---

## Columns

| Column | Width | Description |
|:---|:---|:---|
| Local time | `100px` | Scheduled local departure time |
| Service time | `112px` | Service window identifier |
| Route name | `330px` | Full route label, truncated if too long |
| Site name | `233px` | Client site associated with the service |
| Provider | `190px` | Transport operator |
| Priority | `104px` | Alert priority level |
| Agent | `100px` | Assigned operations agent |
| Pending | `100px` | Number of open alerts |
| Closed | `100px` | Number of resolved alerts |
| Actions | `64px` | View detail + Bus tracking shortcuts |

---

## Status codes

Each row's background colour maps to a service status. The legend is accessible via the **ⓘ** icon in the top-right corner.

| Status | Colour | When |
|:---|:---|:---|
| Pending service creation | `#ffffff` | Service exists but hasn't been set up yet |
| Pending send to provider | `#FFEB3B` | Waiting to be sent to the transport operator |
| Pending assignment | `#FF9800` | Operator received it but hasn't assigned a driver/vehicle |
| In progress with issues | `#E53935` | Active service with open unresolved alerts |
| Pending unsolved issues | `#EF9A9A` | Service ended but issues remain open |
| Planned | `#42A5F5` | Confirmed and scheduled, not yet started |
| In progress | `#00BF6F` | Currently running, no issues |
| Completed | `#BDBDBD` | Finished with no outstanding issues |
| Canceled | `#9C27B0` | Service was cancelled |
| Finished with issues | `#212121` | Ended but had unresolved issues |

---

## Behaviour

- Clicking a row opens the **Service Detail Modal** on top of the current view. The row becomes visually selected (green outline).
- Only one row can be selected at a time. Clicking the same row again closes the modal.
- The table auto-refreshes. The timestamp of the last update is shown in the top-right ("Last update: HH:mm").
- The **ⓘ** icon opens the status legend as a floating panel. Clicking elsewhere closes it.

---

## When to Use

The Alert System is a specific screen within the Traffic section of the Dashboard. It is not a reusable component placed independently — it is assembled from `Table Header` + `Alert Row` repeated per service, wrapped in a vertical Auto Layout container with `8px` gap between rows.
