---
sidebar_label: Navigation Bar
sidebar_position: 15
---

import { NavigationBarDemo } from '@site/src/components/HomepageFeatures/DS/NavigationBar';

# Navigation Bar

<NavigationBarDemo />

Navigation Bar is the main navigation bar of the App User, fixed at the bottom of the screen. It allows the user to move between the app's primary sections. In BUSUP it has 6 states, each representing the active section:

- **Home**
- **Bookings**
- **Check-in**
- **Routes**
- **Account**
- **Default** — neutral state, no active section

:::info
On iOS devices, the Navigation Bar adopts the native system micro-interactions — this is intentional and expected. Don't try to manually override or replicate animations that iOS already provides by default.
:::

---

## When to Use

| Use when… | Avoid when… |
|:---|:---|
| The user is on one of the app's main screens | The user is in a secondary flow or modal — the Navigation Bar should disappear in these contexts |
| Navigation between sections needs to be always accessible | The screen requires the user's full focus (onboarding, payment, QR reading) |

---

## Dos & Don'ts

### Structure
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Always keep the same 5 destinations in the bar — order and content must not change between screens. Visually highlight only the active section's item.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't add or remove items from the Navigation Bar based on context — it is fixed and predictable. Don't use more than 5 destinations.</p>
  </div>
</div>

### Behaviour
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Tapping the active item should take the user to the top of the section (scroll to top) or to that screen's initial state. A Badge can be applied over Navigation Bar icons to signal new items or pending actions.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't hide the Navigation Bar on listing screens with scroll — it must remain visible. Don't animate it to appear/disappear on scroll — in App User it is always visible on main screens.</p>
  </div>
</div>

### Visibility
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Hide the Navigation Bar in flows that require full focus: QR Code reading, payment, onboarding. Restore it when returning to a main screen.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't keep the Navigation Bar visible during critical flows where accidental taps could pull the user out of the process.</p>
  </div>
</div>

---

## Best Practices

- **Predictability above all.** The user needs to know where they are and how to get back to any section at any time. The Navigation Bar is the app's orientation anchor — never surprise them by changing its items.
- **Badge with restraint.** Multiple items can have Badges simultaneously, but use with judgment — too many badges at once create visual anxiety and lose the highlight effect.
- **Hide in critical flows.** Screens like QR reading, payment confirmation, or onboarding should hide the Navigation Bar to prevent accidental exits from the flow.
- **Active item as orientation.** The active state of the icon is the user's primary reference for where they are in the app — keep the highlight clear and consistent with the system's colour tokens.
