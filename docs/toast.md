---
sidebar_label: Toast
sidebar_position: 8
---

import { ToastDemo } from '@site/src/components/HomepageFeatures/DS/Toast';

# Toast

<ToastDemo />

---

Toast is a notification that appears in the interface to communicate the current state of a service or the result of an action. Unlike the generic market standard, in BUSUP Toast is **mostly persistent** — it remains visible while that state is active, and disappears only when the service status changes.

BUSUP has 4 variants:
- **Activated** — active service or action (green)
- **Alert** — ongoing attention state (yellow)
- **Error** — active failure or error (red)
- **Info** — neutral system information (blue/grey)

---

## When to Use

| Variant | Use when… | Avoid when… |
|:---|:---|:---|
| **Activated** | A service is active and the user needs to know while using the app (route in progress, active check-in) | The state is already unambiguously visible in the UI |
| **Alert** | There is an ongoing attention condition (delay, weak signal, outdated data) that hasn't been resolved | The problem has been resolved — in that case, the toast should disappear |
| **Error** | An active failure is present (connection error, service unavailable) — persists until the system recovers | The error is one-off and already handled — use a Feedback Modal for single-action errors |
| **Info** | The system is communicating something neutral in the background (syncing, updating data) | The information is critical and cannot be missed — use something more prominent |

---

## Dos & Don'ts

### Persistence
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Keep the Toast visible while the state it describes is active. It disappears when the service status changes — not on a timer.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use auto-dismiss on Toasts that communicate continuous states — the user may not have seen it before the state changed.</p>
  </div>
</div>

### Content
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Use short phrases that describe the current state: <em>"Route active"</em>, <em>"No connection"</em>, <em>"Delay detected"</em>.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use technical language or error codes. Don't use more than one line of text.</p>
  </div>
</div>

### State transitions
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>When the status changes (e.g. Alert → Activated), replace the Toast — don't stack them.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't show only one Toast at a time and stack others behind it — only the most relevant state should be visible.</p>
  </div>
</div>

---

## Best Practices

- **Toast = service state, not a button response.** In most BUSUP cases, Toast communicates something happening in the real world (route running, delay detected), not just a confirmation that a button worked.
- **Semantic consistency.** Use the same variant for the same type of state across all products. If "route in progress" is Activated in App User, it should be Activated in App Driver too.
- **State transitions.** When the status changes, the Toast should be replaced, not stacked.
- **Point-in-time action Toasts** (e.g. "Settings saved") may use auto-dismiss — but that is the exception, not the rule.
- **Positioning.** In App User (mobile): top of the screen, below the status bar. Never block interactive elements.
