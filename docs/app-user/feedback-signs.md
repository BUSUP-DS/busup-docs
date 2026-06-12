---
sidebar_label: Feedback Signs
sidebar_position: 11
---

import { FeedbackSignsDemo } from '@site/src/components/HomepageFeatures/DS/FeedbackSigns';

# Feedback Signs

<FeedbackSignsDemo />

<div style={{marginBottom: "40px"}} />

Feedback Sign is a compact visual element that communicates the result of a process or the state of a system. It is composed of an **illustrative icon** and, optionally, a **label** below it. It has 3 variants:

- **Success** — process completed successfully (green)
- **Alert** — attention required, intermediate state (yellow)
- **Error** — failure or identified problem (red)

Unlike the **Feedback Modal** (which interrupts the flow and requests an action), the Feedback Sign is **non-blocking** — it appears within a screen or section, without overlaying the UI.

---

## Contexts of use

The Feedback Sign is always inline — never isolated on its own screen. Common contexts:

- Data tables and lists
- Ticket reading / validation lists
- Connection status indicators
- Inside Text Inputs (icon-only version)

---

## When to Use

| Variant | Use when… | Avoid when… |
|:---|:---|:---|
| **Success** | A process has been completed and the result deserves visual emphasis in the screen (ticket validated, check-in confirmed) | Success is already communicated by another element — avoid duplication |
| **Alert** | There is an ongoing condition that deserves attention but doesn't block usage (pending document, approaching deadline) | The situation requires an immediate decision — use a Modal |
| **Error** | A process has failed and the user is looking at the result (payment declined, route unavailable) | The error requires immediate blocking action — use a Feedback Modal |

**Feedback Sign vs Feedback Modal — when to use each:**

| | Feedback Sign | Feedback Modal |
|:---|:---|:---|
| **Interrupts the flow?** | No | Yes |
| **Requires user action?** | No | Yes |
| **Where it appears** | Inline, within the screen | Overlaid, centred |
| **When to use** | State visible in context | Confirmation of a critical action |

---

## Dos & Don'ts

### Label (optional)
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>When using a label, describe the state, not the action: <em>"Validated"</em>, <em>"Pending"</em>, <em>"Declined"</em>. Omit the label when the icon alone is sufficient in context — e.g. inside a list where the state is obvious.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use long labels — Feedback Sign is a compact element. Don't alter the variant colours — they follow BUSUP's feedback token system.</p>
  </div>
</div>

### Colour
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Keep the icon and label always centre-aligned. Use the system's feedback colour tokens for each variant.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't alter the colours of the variants — they carry semantic meaning within the system.</p>
  </div>
</div>

---

## Best Practices

- **Sign is always inline, never isolated.** It appears inside tables, ticket reading lists, connection status indicators, text inputs — always in context, as part of a larger element.
- **Icon-only version.** When space is limited (such as inside a Text Input or a table cell), use the Sign without a label — the icon alone carries the meaning.
- **Context determines the variant.** The same event can generate different variants depending on the moment: a ticket read with a caveat may be Alert, an invalid read is Error, a confirmed read is Success.
- **Sign for state, Modal for decision.** If the element communicates a result visible in context, use a Sign. If the user needs to confirm or cancel something, use a Modal.
- **Don't replace loading states.** Feedback Sign communicates a final result — while a process is still running, use a loading indicator, not an anticipatory Sign.
