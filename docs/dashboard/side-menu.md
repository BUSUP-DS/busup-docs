---
sidebar_label: Side Menu
sidebar_position: 5
---

import { SideMenuDemo } from '@site/src/components/HomepageFeatures/DS/SideMenuDashboard';

# Side Menu

<SideMenuDemo />

<div style={{marginBottom: "40px"}} />

The Side Menu is the primary navigation for the Dashboard. It is always visible on the left side of every screen and gives access to all top-level sections and their sub-pages.

---

## Anatomy

| Element | Description |
|:---|:---|
| **Logo** | BUSUP wordmark, centred at the top of the panel |
| **Section header** | Top-level nav item — groups related sub-pages. Has a chevron indicating it can expand |
| **Sub-item** | Child page within an expanded section. Slightly lighter background (`#2F3B40`) to distinguish from collapsed items |
| **Standalone item** | Top-level page with no children (Events, Schools, Studies, Providers) |

---

## States

| State | Description |
|:---|:---|
| **Closed** | All sections collapsed — only top-level labels visible |
| **Section open** | One section expanded — sub-items appear below the section header with an indented layout and active background |

Only one section can be expanded at a time. Opening a new section closes the previous one.

---

## Tokens

| Property | Value |
|:---|:---|
| Background | `#242D31` |
| Sub-item active background | `#2F3B40` |
| Width | `248px` |
| Item height | `41px` |
| Item padding | `16px` horizontal |
| Sub-item indent | `34px` left padding |
| Label | `14px Regular white` |
| Icon | `16px` |

---

## Behaviour

- The side menu can be **collapsed**, but the control is in the **Header** — the hamburger icon (☰) on the left of the green bar toggles the panel open and closed. There is no collapse control inside the side menu itself.
- Clicking a section header **toggles** its sub-items. If another section is already open, it closes automatically.
- Sub-items navigate to a specific page. Section headers do not navigate on their own.
- The active section's background (`#2F3B40`) is applied to **all sub-items**, not just the current page.

---

## Shared component

The nav item structure — icon + label + chevron — is the same component used in the **App User Side Menu**. The visual shell (dark background, BUSUP logo) and the section/sub-item hierarchy are specific to the Dashboard, but the individual item itself is a shared building block across both platforms.

---

## When to Use

The Side Menu is part of the Dashboard chrome — it is not placed independently. It appears automatically as part of the Layout template on every Dashboard screen. See [Layout](/busup-docs/docs/dashboard/layout) for the full page structure.
