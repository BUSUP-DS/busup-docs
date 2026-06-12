---
sidebar_label: Badge
sidebar_position: 9
---

import { BadgeDemo } from '@site/src/components/HomepageFeatures/DS/Badge';

# Badge

<BadgeDemo />

<div style={{marginBottom: "40px"}} />

Badge is a small visual indicator applied over an icon or UI element to signal **quantity** or **the presence of something new**. In BUSUP it has two variants:

- **With number** — displays a count (e.g. 3 unread notifications)
- **Dot (no number)** — indicates that something new is present, without quantifying

---

## When to Use

| Variant | Use when… | Avoid when… |
|:---|:---|:---|
| **With number** | The count is relevant to the user's decision (e.g. 5 unread messages, 2 alerts) | The number would always be 1 — a dot is sufficient |
| **Dot** | It's enough to signal the presence of something new, without quantifying | The quantity matters for context — use with number |
| **Both** | Applied over navigation icons, action buttons, or avatars | Applied over body text or elements unrelated to notifications or counts |

---

## Dos & Don'ts

### Content
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Use real numbers — the badge should reflect the exact count whenever possible. For high counts, truncate: <strong>99+</strong> instead of 3 digits.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't display "0". A zeroed badge has no function — remove it entirely. Don't use badges as visual decoration without functional meaning.</p>
  </div>
</div>

### Positioning
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Always position at the top-right corner of the parent element (icon, avatar, button), slightly overlapping it.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't place the badge next to the element — it should overlap. Don't apply badges over text or labels.</p>
  </div>
</div>

### Behaviour
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Update the badge in real time as items are resolved. Remove it completely when the count reaches zero.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't keep the badge visible after the user has seen or resolved the items.</p>
  </div>
</div>

---

## Best Practices

- **Dot for novelty, number for urgency.** If the user needs to know how many items are pending action, use a number. If they just need to know something new is there, a dot is enough.
- **Never display 0.** A zeroed badge has no function — remove it.
- **Limit usage.** Badging too many elements at once creates visual anxiety. Prioritise the most important entry points.
- **99+ is the cap.** Above that, the number loses meaning for the user — what matters is that there's a lot pending.
