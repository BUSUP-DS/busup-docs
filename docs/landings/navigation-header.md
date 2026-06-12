---
sidebar_label: Navigation Header
sidebar_position: 2
---

import { NavigationHeaderDemo } from '@site/src/components/HomepageFeatures/DS/LandingsComponents';

# Navigation Header

<NavigationHeaderDemo />

<div style={{marginBottom: "40px"}} />

The Navigation Header is the persistent top bar on all Landings pages. It provides access to the main sections of the product, the language selector, and the logged-in user's profile.

---

## Anatomy

| Element | Description |
|:---|:---|
| **Background** | `#00bf6f` (Primary_300) — full width, `67px` height |
| **Logo** | BUSUP logotype — left-aligned |
| **Nav links** | Centre-aligned — active link is bold white, inactive is `#049157` |
| **Language selector** | Flag icon + language label — `14px Regular white` |
| **User profile** | User icon + email address — `14px Regular white` |

---

## Nav link states

| State | Style |
|:---|:---|
| **Active** | `14px Bold white` |
| **Inactive** | `14px Regular #049157` (Primary_400) |

---

## Navigation items

| Item | Description |
|:---|:---|
| Search routes | Primary action — route search |
| My bookings | Access to the user's booking history |
| For companies | B2B landing section |

---

## Tokens

| Property | Value |
|:---|:---|
| Background | `#00bf6f` (Primary_300) |
| Height | `67px` |
| Nav item padding | `0 24px` |
| Active label | `14px Bold white` |
| Inactive label | `14px Regular #049157` |
| Language / User | `14px Regular white` |

---

## Behaviour

- The header is **fixed** — it stays at the top of the viewport as the user scrolls.
- The active nav item reflects the current page.
- The language selector triggers a language switcher dropdown.
- The user profile shows the logged-in email; clicking it opens account options.
- When the user is **logged out**, the user profile slot shows Login / Register buttons instead.

---

## When to use

Use the Navigation Header exclusively on Landings (desktop web). Not used in App User, App Driver, or Dashboard.
