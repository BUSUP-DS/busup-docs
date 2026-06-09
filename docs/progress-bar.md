---
sidebar_label: Progress Bar
sidebar_position: 13
---

import { ProgressBarDemo } from '@site/src/components/HomepageFeatures/DS/ProgressBar';

# Progress Bar

<ProgressBarDemo />

:::info
The Progress Bar is defined in the Figma library but **is not currently applied in App User**. The use cases documented here are a reference for future implementations or use in other products such as the Dashboard.
:::

Progress Bar is a linear progress indicator. It communicates how much of a process has been completed relative to the total. In BUSUP it has 5 fill states:

**100% → 75% → 50% → 25% → 0%**

---

## When to Use

| Use when… | Avoid when… |
|:---|:---|
| The process has a measurable duration or quantity (vehicle capacity, route progress) | The process has an indeterminate duration — use a loading indicator |
| The user benefits from knowing how much is left (available capacity, completed steps) | The exact value is already shown by another element — the bar would be redundant |
| The progression is continuous and visually intuitive | There are only two possible states (done / not done) — use an icon or badge |

---

## Dos & Don'ts

### Visual
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Always use the Progress Bar with context — the user needs to know what is being measured. When relevant, display the numeric value alongside the bar (e.g. <em>"8/12 passengers"</em>).</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use the Progress Bar as a purely decorative element without a real associated value. Don't animate the bar in a way that suggests false progress — the fill must reflect the actual state.</p>
  </div>
</div>

### Colour and state
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Consider semantic colour variations when the context demands it: near-full capacity could be Alert, fully occupied could be Error.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use the same colour for all states when colour carries meaning (e.g. vehicle capacity).</p>
  </div>
</div>

---

## Best Practices

- **Always with context.** The Progress Bar alone says nothing — *"75% of what?"*. Always pair it with a label or numeric value that explains what is being measured.
- **Vehicle capacity is the primary use case.** The user needs to know how many seats are still available before boarding — the bar makes this immediate and intuitive, without having to read numbers.
- **Real-time updates.** In active boarding contexts, the bar should reflect the current state of the service — not a stale snapshot.
- **0% and 100% deserve attention.** These extreme states often carry critical meaning (empty or full vehicle) — consider reinforcing visually with colour or a specific label.
