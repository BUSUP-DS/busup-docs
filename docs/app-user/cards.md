---
sidebar_label: Cards
sidebar_position: 17
---

import { CardsDemo } from '@site/src/components/HomepageFeatures/DS/Cards';

# Cards

<CardsDemo />

<div style={{marginBottom: "40px"}} />

Card is a container that groups related information about an entity — a booking, a route — on a delimited surface. In App User it has two variants:

- **Bookings Card** — displays information about a user's booking
- **Routes Card** — displays information about an available or in-progress route

Internally, Cards are built from combined subcomponents:
- **Headline** — main title of the card
- **Subhead + Body** — secondary and descriptive information
- **Divider** — visual separation between card sections

---

## When to Use

| Variant | Use when… | Avoid when… |
|:---|:---|:---|
| **Bookings Card** | Listing the user's active, upcoming, or past bookings | Displaying full booking details — use a dedicated screen |
| **Routes Card** | Presenting available or in-progress routes | The user needs to compare many routes — consider a more compact list |
| **Both** | The content has multiple related attributes that make sense grouped together | There is only one piece of data to display — a card would be too much structure for too little information |

---

## Dos & Don'ts

### Content
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Include only the most relevant information for the user's decision or recognition — the card is a summary, not a report. Headline carries the most important information, Subhead + Body comes next.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't overload the card with data — if you need more than 4 visible attributes, use a detail screen. Don't use cards to display unrelated items.</p>
  </div>
</div>

### Interaction
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>The entire card should be tappable when it leads to a detail screen — not just an internal button. Indicate visually that the card is interactive (shadow, chevron).</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't place multiple primary actions inside the same card — choose the most important one. Don't mix Bookings Cards with Routes Cards in the same scroll list.</p>
  </div>
</div>

---

## Best Practices

- **Card is an entry point, not a destination.** The user scans cards to find what they're looking for and taps to see more — design the card to support that scanning, not to be the final screen.
- **Clear visual hierarchy.** Headline carries the most important information, Subhead + Body follows. This hierarchy should be immediately perceptible.
- **The whole card is tappable.** When the card leads to a detail screen, the entire surface should respond to tap — not just an internal button.
- **Empty state is part of the component.** When there are no bookings or routes, the card list should have a treated empty state — never leave a blank space without explaining it to the user.
