---
sidebar_label: Segmented Control
sidebar_position: 12
---

import { SegmentedControlDemo } from '@site/src/components/HomepageFeatures/DS/SegmentedControl';

# Segmented Control

<SegmentedControlDemo />

---

Segmented Control is a selector for mutually exclusive options presented in a row, where only one option can be active at a time. It has two item variants:

- **Selected** — active option, with visual highlight
- **Default** — inactive option

---

## When to Use

| Use when… | Avoid when… |
|:---|:---|
| There are short, mutually exclusive options that filter or toggle the content of the same screen | The options take the user to different screens — use navigation (Tabs or Navigation Bar) |
| Switching between options is frequent and the user needs quick access | The options are actions, not states — use Buttons |
| All options are equal in importance | One option is clearly primary — use a different pattern |
| The context is a filter or view mode (e.g. Map / List, Week / Month) | The user needs to combine multiple criteria — use a filter system |

**Segmented Control vs Tabs — when to use each:**

| | Segmented Control | Tabs |
|:---|:---|:---|
| **Function** | Filters or toggles view mode | Switches between two content sections |
| **Options** | 2 or more | Always 2 |
| **Content changes?** | Yes, the same content reorganises | Yes, distinct sections are shown |
| **Navigation?** | No | No |

---

## Dos & Don'ts

### Number of options
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Use 2 to 4 options for view mode toggles (Map / List, Week / Month). More options are valid when each item represents an objective data entry — such as expedition departure times. When there are many options, the component should be horizontally scrollable.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use many options with long labels — the component loses legibility. Multiple options only work with very short labels (times, numbers, dates).</p>
  </div>
</div>

### Labels
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Use short, parallel labels: <em>"Map / List"</em>, <em>"Week / Month / Year"</em>. All options should have the same grammatical weight.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't mix an icon on one option and text on another — keep visual consistency across all items. Don't use long phrases.</p>
  </div>
</div>

### Behaviour
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Always keep one option selected — Segmented Control never has no active selection. Switching options should update the content immediately, with no perceptible loading.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use it to confirm actions — it selects states, it doesn't execute commands.</p>
  </div>
</div>

---

## Best Practices

- **Always with a default selection.** The user should never see the Segmented Control with no option active — always define a `defaultSelected`.
- **Proportional width.** All segments should have the same width — don't adjust individually by label size.
- **Positioning.** Place the Segmented Control close to the content it controls — the visual relationship between the selector and the result is part of the usability.
- **Doesn't replace complex filters.** If the user needs to combine multiple criteria, use a filter system — Segmented Control resolves only one dimension at a time.
