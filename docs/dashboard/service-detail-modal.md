---
sidebar_label: Service Detail Modal
sidebar_position: 9
---

import { ServiceDetailModalDemo } from '@site/src/components/HomepageFeatures/DS/ServiceDetailModal';

# Service Detail Modal

<ServiceDetailModalDemo />

<div style={{marginBottom: "40px"}} />

The Service Detail Modal displays the full operational data for a single service. It opens on top of the current screen when the user clicks an Alert Row — without navigating away.

---

## Anatomy

| Element | Description |
|:---|:---|
| **Overlay** | Semi-transparent backdrop `rgba(70,70,70,0.5)` — dims the screen behind the modal |
| **Modal container** | White panel, `960px` wide, `border-radius 8px`, `shadow-deep` |
| **Title** | Service ID + client name — `24px Regular #212121` |
| **Close button** | Top-right × icon — dismisses the modal |
| **Accordion sections** | Collapsible sections, each containing an Info Grid |
| **Info Card** | Individual field — label + value, optional action button |

---

## Info Card

Each data field inside the modal is an **Info Card** — a small tile with a label and a value.

| Property | Value |
|:---|:---|
| Background | `#f4f4f4` (Neutral_50) |
| Height | `60px` |
| Padding | `8px 16px` |
| Label | `14px Regular #414141`, letter-spacing `0.5px` |
| Value | `12px Regular #989898`, letter-spacing `0.25px` |
| Action button | White pill `26px`, `shadow-deep` — used for copy (ID, Route) or external links (Bookings) |

Info Cards are arranged in a **3-column grid** with `8px` gap inside each Accordion section.

---

## Sections

| Section | Contents |
|:---|:---|
| **Service Information** | Core service data — ID, Service date, Route code, Route, Expedition ID/name, Departure, Arrival, Reported times, Vehicle, Provider, Driver, Bookings, Next stop. Fields displayed as Info Cards in a 3-column grid. |
| **Itinerary** | Ordered list of stops with scheduled and reported times |
| **Incidents** | Active incidents linked to this service |
| **Service alerts** | Alerts triggered by this service |
| **Communications** | Messages and communication history related to this service |
| **Comments** | Internal operator notes and comments |

Service Information is expanded by default. All other sections are collapsed and open on demand.

---

## Tokens

| Property | Value |
|:---|:---|
| Modal width | `960px` |
| Modal padding | `24px 32px` |
| Border radius | `8px` |
| Shadow | `shadow-deep` — `0px 4px 12px rgba(0,0,0,0.16)` |
| Title | `24px Regular #212121` |
| Section gap | `8px` |

---

## Behaviour

- Opens when the user clicks an **Alert Row**. The row shows a selected state (green outline) while the modal is open.
- Closes via the **× button**. Clicking the overlay does not close it.
- Scrollable vertically — content can exceed the viewport height.
- Only one Service Detail Modal is shown at a time.

---

## Components used

- [Modal](/busup-docs/docs/dashboard/modal) — shell (overlay + container)
- [Accordion](/busup-docs/docs/dashboard/accordion) — collapsible sections
- Info Card — field tile (documented above)
