---
sidebar_label: Notification
sidebar_position: 16
---

import { NotificationDemo } from '@site/src/components/HomepageFeatures/DS/Notification';

# Notification

<NotificationDemo />

Notification is a card that displays a system message or relevant communication to the user. It appears within a dedicated screen or list — it is not an overlay and does not interrupt the flow.

In BUSUP it has 1 documented variant: **Default**.

---

## When to Use

| Use when… | Avoid when… |
|:---|:---|
| The system needs to communicate something that doesn't require immediate action (route information, service update) | The message requires an immediate decision — use a Feedback Modal |
| There is a history of communications the user can review at their own pace | The message is ephemeral and disappears on its own — use a Toast |
| The message has enough context to be read independently | The content is a system action already visible in the UI — avoid duplicating information |

**Notification vs Toast vs Feedback Modal:**

| | Notification | Toast | Feedback Modal |
|:---|:---|:---|:---|
| **Interrupts the flow?** | No | No | Yes |
| **Persists?** | Yes | Depends on state | Yes, until the user acts |
| **Where it appears** | In a list or dedicated screen | Top of the screen | Overlaid, centred |
| **Requires action?** | No | No | Yes |

---

## Dos & Don'ts

### Content
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Be direct and specific — the user should understand the message without needing extra context. Include date and time when the message's timing is relevant.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use generic language like <em>"You have a notification"</em> — always say what it's about. Don't send notifications about events already visible in the UI.</p>
  </div>
</div>

### Behaviour
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Unread notifications should have a clear visual distinction from read ones. Allow the user to mark as read individually or all at once. In the future, the Badge on the Navigation Bar will reflect the unread notification count — <strong>this functionality is not yet implemented</strong>.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't remove notifications automatically without the user having seen them.</p>
  </div>
</div>

### Notification list
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Display in reverse chronological order — the most recent always at the top.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't mix very different types of communication without visual separation (e.g. service alerts and promotional messages).</p>
  </div>
</div>

---

## Best Practices

- **Notification is advisory, not urgent.** The user opens it when they want — the content should make sense outside the moment it was generated.
- **Badge count must be reliable.** If the Badge shows 3 notifications, the user should find exactly 3 unread items when they open the list. Inconsistency here destroys trust in the component.
- **Don't overuse the channel.** Too many notifications cause the user to ignore all of them — prioritise communications that genuinely add value to the user's context at that moment.
