---
sidebar_label: Feedback Modals
sidebar_position: 8
---

# Feedback Modals

Feedback Modals communicate the outcome of an action — success, alert, or error. They appear as overlay cards centered on the screen, interrupting the flow to ensure the user acknowledges the result before continuing.

<div style={{background: 'var(--ifm-color-success-contrast-background)', borderLeft: '4px solid var(--ifm-color-success)', borderRadius: '4px', padding: '12px 16px', marginBottom: '24px', fontSize: '14px'}}>
  <strong>💡 Real Components:</strong> The demos below are rendered with the actual CSS tokens from the Design System. No images — all live HTML.
</div>

import { FeedbackModal } from '@site/src/components/HomepageFeatures/DS/FeedbackModal';

---

## Styles

The Feedback Modal comes in two styles that differ in content density and number of actions.

### Simple
Icon + title + one action. Use when the outcome is clear and only one path forward exists.

<div style={{display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '32px'}}>
  <FeedbackModal type="success" style="simple" title="Booking confirmed!" primaryLabel="Done" />
  <FeedbackModal type="alert" style="simple" title="Action required" primaryLabel="OK" />
  <FeedbackModal type="error" style="simple" title="Something went wrong" primaryLabel="Close" />
</div>

### Full
Icon + title + description + two actions. Use when the user needs context to decide between two paths (confirm vs. cancel).

<div style={{display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '32px'}}>
  <FeedbackModal
    type="success"
    style="full"
    title="Booking confirmed!"
    description="Your route has been booked successfully. You'll receive a confirmation email shortly."
    primaryLabel="View booking"
    secondaryLabel="Go home"
  />
  <FeedbackModal
    type="alert"
    style="full"
    title="Are you sure?"
    description="This action will cancel the current booking. This cannot be undone."
    primaryLabel="Yes, cancel"
    secondaryLabel="Go back"
  />
  <FeedbackModal
    type="error"
    style="full"
    title="Payment failed"
    description="We couldn't process your payment. Please check your card details and try again."
    primaryLabel="Try again"
    secondaryLabel="Cancel"
  />
</div>

---

## Types

| Type | Color | Token | Use when… |
|:---|:---|:---|:---|
| **Success** | `#00bf6f` | `Primary 300` | An action completed successfully |
| **Alert** | `#ffa000` | `Alert 300` | A warning or confirmation is needed before proceeding |
| **Error** | `#e53935` | `Danger 300` | An action failed and the user needs to take corrective action |

---

## Technical Specifications

| Property | Value |
|:---|:---|
| Width | 325px |
| Border radius | 16px |
| Card shadow | `0px 2px 4px rgba(0,0,0,0.16)` |
| Icon size | 64×64px |
| Icon padding top | 32px |
| Icon padding bottom | 16px |
| Title font size | 14px |
| Title font weight | 700 (Bold) |
| Title color | `#212121` — Neutral 500 |
| Description font size | 14px |
| Description font weight | 300 (Light) |
| Description color | `#414141` — Neutral 400 |
| Content padding (horizontal) | 32px |
| Button border radius | 20px |
| Button padding | 8px 24px |
| Button font size | 10px |
| Button font weight | 700 (Bold) |
| Button shadow | `0px 4px 6px rgba(0,0,0,0.16)` |

---

## Component API

| Property | Type | Default | Description |
|:---|:---|:---|:---|
| `type` | `'success' \| 'alert' \| 'error'` | — | Required. Determines the icon and color theme. |
| `style` | `'simple' \| 'full'` | `'simple'` | Layout variant — Simple has 1 button, Full has description + 2 buttons. |
| `title` | `string` | — | Required. Main message displayed below the icon. |
| `description` | `string` | — | Supporting text. Only shown in the `full` style. |
| `primaryLabel` | `string` | `'Confirm'` | Label for the primary (filled) button. |
| `secondaryLabel` | `string` | `'Cancel'` | Label for the secondary (outlined) button. Only shown in the `full` style. |

---

## When to Use

| Style | Use when… | Avoid when… |
|:---|:---|:---|
| **Simple** | The outcome is clear and only one action is needed (e.g. "Done", "OK", "Close") | The user needs context or must choose between two paths |
| **Full** | The user needs information to decide, or the action is reversible/destructive | The message is self-explanatory — the description becomes noise |

| Type | Use when… | Avoid when… |
|:---|:---|:---|
| **Success** | An operation completed as expected | The result is neutral — use a toast or inline message instead |
| **Alert** | A warning needs acknowledgement, or a destructive action needs confirmation | The action is already done — use Error or Success instead |
| **Error** | Something failed and the user must act | The error is silent/recoverable — use inline validation instead |

---

## Dos & Don'ts

### Title copy

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '16px', marginTop: 0}}>✅ DO</p>
    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '16px'}}>
      <FeedbackModal type="success" style="simple" title="Booking confirmed!" primaryLabel="Done" />
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Use a short, specific title that states the outcome clearly. "Booking confirmed!" tells the user exactly what happened.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '16px', marginTop: 0}}>❌ DON'T</p>
    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '16px'}}>
      <FeedbackModal type="success" style="simple" title="Success" primaryLabel="OK" />
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Avoid generic titles like "Success" or "Error". They confirm the state but don't tell the user what actually happened.</p>
  </div>
</div>

### Style choice

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '16px', marginTop: 0}}>✅ DO</p>
    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '16px'}}>
      <FeedbackModal type="alert" style="full" title="Cancel booking?" description="This will remove your reservation. You won't be able to undo this." primaryLabel="Yes, cancel" secondaryLabel="Go back" />
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Use the Full style for destructive or consequential actions. Give the user context and two clear paths — confirm or go back.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '16px', marginTop: 0}}>❌ DON'T</p>
    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '16px'}}>
      <FeedbackModal type="alert" style="simple" title="Cancel booking?" primaryLabel="OK" />
    </div>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use the Simple style for destructive actions. A single "OK" button doesn't give the user a way out — it forces a decision without context.</p>
  </div>
</div>

---

## Best Practices

- **Always interrupt intentionally** — modals block the UI. Only use them when the user must acknowledge the outcome before continuing.
- **Match type to outcome** — Success for completed actions, Alert for warnings/confirmations, Error for failures. Never use Success for neutral results.
- **Keep titles specific** — "Route deleted" is better than "Done". "Payment failed" is better than "Error".
- **Full style descriptions** — be concise. One or two sentences max. Tell the user what happened and what to do next.
- **Button labels** — use action verbs that match the context ("View booking", "Try again", "Go back") rather than generic labels ("OK", "Cancel", "Yes").
- **Don't stack modals** — one modal at a time. If a modal action triggers another outcome, dismiss the first before showing the second.