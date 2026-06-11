---
sidebar_label: Code Input
sidebar_position: 14
---

import { CodeInput } from '@site/src/components/HomepageFeatures/DS/CodeInput';

# Code Input

<div style={{display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px'}}>
  <div>
    <p style={{fontSize: '12px', color: '#989898', marginBottom: '8px'}}>4 digits — type, auto-advance, paste, and simulate error</p>
    <CodeInput digits={4} />
  </div>
  <div>
    <p style={{fontSize: '12px', color: '#989898', marginBottom: '8px'}}>6 digits</p>
    <CodeInput digits={6} />
  </div>
</div>

---

Code Input is a segmented numeric entry field where each digit occupies an independent box. It is used for entering verification codes, PINs, and short numeric passwords.

In BUSUP it supports **1 to 6 digits**, with 3 states per field:
- **Default** — empty field, awaiting input
- **Active** — focused field, receiving input
- **Error** — invalid or expired code

---

## When to Use

| Use when… | Avoid when… |
|:---|:---|
| The user needs to enter a verification code sent by SMS or email | The code is a long alphanumeric string — use a standard Text Input |
| The input is a numeric access PIN | The field accepts any type of text — Code Input is exclusive to short numeric sequences |
| The visual separation between digits helps confirm the correct number entered | The number of digits is variable or unknown |

---

## Dos & Don'ts

### Number of digits
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Set the number of fields according to the code expected by the system. The focus should automatically advance to the next field after each digit is entered.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't use Code Input for codes with more than 6 digits — above that, use a Text Input.</p>
  </div>
</div>

### Error state
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Activate the Error state on all fields simultaneously when the full code is invalid. Accompany the Error state with an explanatory message below: <em>"Invalid code"</em>, <em>"Code expired"</em>.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't activate Error field by field during typing — validate only after the complete code has been entered.</p>
  </div>
</div>

### Behaviour
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>When pasting a code, automatically fill all fields at once. On error, clear all fields and return focus to the first. Display a numeric keyboard on mobile.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't allow letters or special characters. Don't require the user to manually tap the next field after each digit.</p>
  </div>
</div>

---

## Best Practices

- **Auto-advance is mandatory.** The user shouldn't need to tap the next field manually — each digit entered should automatically move focus forward.
- **Paste and done.** Full paste support is essential — users frequently copy the code directly from SMS and expect all fields to be filled at once.
- **Validate only at the end.** Don't show an error while the user is still typing. Wait for the last digit to be entered before triggering validation.
- **Code resend.** Whenever the Code Input is used in a verification context, always offer a resend option near the component — never leave the input without an alternative way out.
