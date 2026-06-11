---
sidebar_label: Layout
sidebar_position: 2
---

import { LayoutDemo } from '@site/src/components/HomepageFeatures/DS/LayoutDemo';

# Layout

<LayoutDemo />

<div style={{marginBottom: "40px"}} />

Every Dashboard screen is built on the same chrome — Side menu + Header + Content slot. The chrome is fixed and never changes between screens. Only the content inside the white card changes.

---

## Zones

| Zone | Description |
|:---|:---|
| **Side menu** | Dark navigation panel, always visible. Contains the BUSUP logo, section groups, and nav items with icons and chevrons. Never collapses in active use. |
| **Header** | Green bar spanning the top of the content area. Contains the hamburger menu icon (left), language selector and user profile (right). |
| **Content slot** | White card where all screen-specific content lives — page title, Filters, Data Table, forms, etc. |
| **Background** | `#EDF0F4` — visible only at the edges of the content card. Not a design element; do not place content on it. |

---

## Measurements

| Property | Value |
|:---|:---|
| Side menu width | `248px` |
| Header height | `67px` |
| Content left offset | `280px` (248 side menu + 32px gap) |
| Content top offset | `99px` (67 header + 32px gap) |
| Content card | `background white` · `border-radius 8px` · `box-shadow 0px 2px 8px rgba(0,0,0,0.08)` |
| Content padding | `32px` |
| Page title | `24px Regular #212121` — first element inside the card |

---

## How to build a new screen

1. In Figma, open the **Templates** page and duplicate the **Template** frame.
2. Rename the frame to the screen you're building.
3. Fill the **Content slot** (white card) with the screen-specific content — start with the page title, then add Filters, Data Table, or whatever the screen needs.
4. Do not modify the Side menu or Header — they are shared chrome and should remain identical across all screens.

---

## What belongs in the content slot

The content slot is a free area. Common compositions:

| Screen type | Typical content |
|:---|:---|
| List screen | Page title + Filters + Data Table + Pagination |
| Detail screen | Page title + tabs + form sections |
| Configuration screen | Page title + form fields + action buttons |
| Dashboard / overview | Page title + metric cards + charts |

---

## Dos & Don'ts

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Always start a new screen from the Template frame in Figma. This guarantees consistent chrome dimensions, spacing, and font across all screens without manual setup.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't place content outside the white card directly on the grey background. Don't resize or recolour the Side menu or Header — they are not editable per screen.</p>
  </div>
</div>
