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

The active tab has a white background, a `#414141` border, and a drop shadow. The inactive tab sits flush on the `#f4f4f4` container. Use for modal sheets, cards, and embedded content panels.

<div style={{marginBottom: '16px'}}>
  <Tabs tabs={['Active', 'Future']} system="iOS" defaultTab={0} />
</div>

<div style={{marginBottom: '32px'}}>
  <Tabs tabs={['Active', 'Future']} system="iOS" defaultTab={1} />
</div>

---

## Android Variant

The active tab is indicated by a bottom border in **Secondary 300** (`#ea6753`) and bold text. The container has no background — tabs sit directly on the page. Use for full-width page-level navigation.

<div style={{marginBottom: '16px'}}>
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
| Active indicator (Android) | `--tab-android-active` | `#ea6753` — Secondary 300 |
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

## When to Use

| Variant | Use when… | Avoid when… |
|:---|:---|:---|
| **iOS** | Switching views inside a card, modal sheet, or embedded content panel | Full-width page-level navigation — use Android variant instead |
| **Android** | Full-width navigation at the top of a page or screen | Embedded or contained contexts — the borderless style loses definition |
| **Either** | The content is related and benefits from direct comparison (Active / Future, Upcoming / Past) | The sections are unrelated — tabs imply a relationship between the two views |
| **Either** | There are exactly two options | There are three or more options — consider a different navigation pattern |

---

## Dos & Don'ts

### Number of tabs

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>

  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <div style={{marginBottom: '16px'}}>
      <Tabs tabs={['Upcoming', 'Past']} system="iOS" defaultTab={0} />
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Use tabs for exactly two options. The binary structure is the core of this component — it works best when each view is the direct counterpart of the other.</p>
  </div>

  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <div style={{marginBottom: '16px'}}>
      <Tabs tabs={['Today', 'Week']} system="iOS" defaultTab={0} />
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use tabs as a workaround for navigation with more options. If you need a third tab, reconsider the information architecture entirely.</p>
  </div>

</div>

### Label structure

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>

  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <div style={{marginBottom: '16px'}}>
      <Tabs tabs={['Active', 'Future']} system="Android" defaultTab={0} />
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Use short, parallel labels that form a natural pair. "Active / Future", "Upcoming / Past" — the user instantly understands the relationship.</p>
  </div>

  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <div style={{marginBottom: '16px'}}>
      <Tabs tabs={['My bookings list', 'Completed trips']} system="Android" defaultTab={0} />
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use long or asymmetric labels. They break the visual balance and make the tab bar feel uneven.</p>
  </div>

</div>

### Variant by context

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>

  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <div style={{background: 'var(--ifm-background-surface-color)', borderRadius: '8px', padding: '16px', marginBottom: '16px'}}>
      <p style={{fontSize: '11px', color: '#989898', marginBottom: '8px', marginTop: 0}}>Inside a card → iOS</p>
      <Tabs tabs={['Details', 'History']} system="iOS" defaultTab={0} />
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Use the iOS variant inside contained surfaces (cards, panels, modals). The white active tab and border give it definition within the container.</p>
  </div>

  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <div style={{background: 'var(--ifm-background-surface-color)', borderRadius: '8px', padding: '16px', marginBottom: '16px'}}>
      <p style={{fontSize: '11px', color: '#989898', marginBottom: '8px', marginTop: 0}}>Inside a card → Android</p>
      <Tabs tabs={['Details', 'History']} system="Android" defaultTab={0} />
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use the Android variant inside cards or panels. The borderless underline style loses visual anchoring and floats without context.</p>
  </div>

</div>

---

## Best Practices

- Use tabs only for **exactly two options** — for three or more, reconsider the information architecture.
- Keep tab labels **short and parallel**: "Active / Future", "Upcoming / Past".
- Use the **iOS variant** for modal sheets, cards, and embedded content panels.
- Use the **Android variant** for full-width page-level navigation.
- Never use tabs to navigate between unrelated sections — they imply a direct relationship between the two views.
- The active tab label should always use **bold** to reinforce selection — don't reduce font weight for visual reasons.
