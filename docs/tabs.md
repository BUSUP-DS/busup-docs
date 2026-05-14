---
sidebar_label: Tabs
sidebar_position: 7
---

# Tabs

Tabs allow users to switch between two views or content sections within the same screen. The BUSUP Design System provides two variants: **iOS** and **Android**.

<div style={{background: 'var(--ifm-color-success-contrast-background)', borderLeft: '4px solid var(--ifm-color-success)', borderRadius: '4px', padding: '12px 16px', marginBottom: '24px', fontSize: '14px'}}>
  <strong>💡 Real Components:</strong> The demos below are rendered with the actual CSS tokens from <code>custom.css</code>. No images — all live HTML.
</div>

import { Tabs } from '@site/src/components/HomepageFeatures/DS/Tabs';

---

## iOS Variant

The active tab has a white background, a `#414141` border, and a drop shadow. The inactive tab sits flush on the `#f4f4f4` container.

<div style={{marginBottom: '32px'}}>
  <Tabs tabs={['Active', 'Future']} system="iOS" defaultTab={0} />
</div>

<div style={{marginBottom: '32px'}}>
  <Tabs tabs={['Active', 'Future']} system="iOS" defaultTab={1} />
</div>

---

## Android Variant

The active tab is indicated by a bottom border in **Secondary 300** (`#ea6753`) and bold text. The container has no background — tabs sit directly on the page.

<div style={{marginBottom: '32px'}}>
  <Tabs tabs={['Active', 'Future']} system="Android" defaultTab={0} />
</div>

<div style={{marginBottom: '32px'}}>
  <Tabs tabs={['Active', 'Future']} system="Android" defaultTab={1} />
</div>

---

## Technical Specifications

| Property | Token | Value |
|:---|:---|:---|
| Height | `--tab-height` | 34px |
| Padding | `--tab-padding-v` / `--tab-padding-h` | 8px / 16px |
| Border radius | `--tab-border-radius` | 8px |
| Container background | `--tab-container-bg` | `#f4f4f4` — Neutral 50 |
| Active background (iOS) | `--tab-active-bg` | `#ffffff` |
| Active border (iOS) | `--tab-active-border` | `#414141` — Neutral 400 |
| Active color (iOS) | `--tab-active-color` | `#414141` — Neutral 400 |
| Active shadow (iOS) | `--tab-active-shadow` | `0 4px 12px 0 rgba(0,0,0,0.16)` |
| Active color (Android) | `--tab-android-active` | `#ea6753` — Secondary 300 |
| Inactive color | `--tab-inactive-color` | `#000000` |
| Font size | — | 14px |
| Font weight active | — | 700 (Bold) |
| Font weight inactive | — | 400 (Regular) |

---

## Component API

```tsx
import { Tabs } from '@site/src/components/HomepageFeatures/DS/Tabs';

<Tabs
  tabs={['Active', 'Future']}
  system="iOS"
  defaultTab={0}
/>
```

| Property | Type | Default | Description |
|:---|:---|:---|:---|
| `tabs` | `string[]` | — | Required. Array of tab labels. |
| `system` | `'iOS' \| 'Android'` | `'iOS'` | Platform variant — determines visual style. |
| `defaultTab` | `number` | `0` | Index of the initially active tab. |

---

## Best Practices

- Use tabs only for **two options** — for three or more, consider a different navigation pattern.
- Keep tab labels **short and parallel** in structure: "Active / Future", "Upcoming / Past".
- Use the **iOS variant** for modal sheets, cards, and embedded content panels.
- Use the **Android variant** for full-width page-level navigation.
- Never use tabs to navigate between unrelated sections — they imply a relationship between the two views.