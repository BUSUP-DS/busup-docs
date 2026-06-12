---
sidebar_label: Toast
sidebar_position: 6
---

import { ToastDashboardDemo } from '@site/src/components/HomepageFeatures/DS/ToastDashboard';

# Toast

<ToastDashboardDemo />

<div style={{marginBottom: "40px"}} />

Toast is a non-blocking feedback message. It appears in response to a user action or a system event and communicates the result without interrupting the user's flow.

---

## Anatomy

| Element | Description |
|:---|:---|
| **Icon** | 16px glyph — colour-coded per variant to reinforce the semantic meaning at a glance |
| **Message** | 14px Regular — concise description of what happened or what the user should know |
| **Background** | Translucent tint of the variant colour at 20% opacity — subtle, never overpowering |

---

## Variants

| Variant | Background | Icon colour | When to use |
|:---|:---|:---|:---|
| **Activated** | `rgba(102,187,106,0.2)` | `#66BB6A` | Confirms a successful action — record saved, mode activated, import complete |
| **Alert** | `rgba(255,160,0,0.2)` | `#FFA000` | Warns of a condition that needs attention but hasn't blocked the action — unsaved changes, session expiring |
| **Error** | `rgba(229,57,53,0.2)` | `#E53935` | Reports a failure — action could not be completed, server error |
| **Info** | `rgba(41,182,246,0.2)` | `#29B6F6` | Neutral informational message — status update, background process started |

---

## Behaviour

- Appears **inline inside the content slot**, between UI elements — not overlaid or floating. It occupies the full width of the content area.
- Its **position is contextual** — it appears immediately below the controls that triggered the action (e.g. below the expedition selector, above the data table), not at a fixed position on the screen.
- **Dismiss behaviour depends on context:**
  - For transient feedback (save confirmed, import complete, error) it **auto-dismisses** after a fixed duration (typically 3–5 seconds).
  - For persistent states (e.g. Edit Mode active) it **stays visible** until the state ends — the toast disappears when the user saves or cancels the flow.
- Only **one toast is shown at a time**. If a new one is triggered while another is visible, the previous one is replaced.
- The message should be **one line** — concise and scannable. Do not use toasts for multi-line explanations.
- On **mobile**, the same component is used with dimensions adjusted to the screen width.

---

## Dos & Don'ts

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Use Toast for immediate, transient feedback after an action. Keep the message short — one sentence. Match the variant to the semantic meaning: green for success, amber for warning, red for error, blue for neutral info.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use Toast for errors that require user action — use a Modal or inline validation instead. Don't show multiple toasts simultaneously. Don't use it to communicate information that is unrelated to a user action or a clear system state.</p>
  </div>
</div>

---

## Best Practices

- **Write in past tense for success** — "Changes saved.", "Import complete." confirms the action happened.
- **Write in present tense for warnings/errors** — "You have unsaved changes." describes the current state.
- **Never use Toast as the only feedback** for destructive actions — always pair with a confirmation Modal before the action, and use Toast only to confirm the outcome.
