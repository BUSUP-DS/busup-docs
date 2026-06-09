---
sidebar_label: Ticket
sidebar_position: 18
---

import { TicketDemo } from '@site/src/components/HomepageFeatures/DS/Ticket';

# Ticket

<TicketDemo />

Ticket is the component that represents the user's boarding pass. Its content and structure vary according to **connectivity**, **booking availability**, and **operator configuration**. It always displays a QR Code when possible — even without an active booking, depending on the operator's settings.

---

## Scenarios

The Ticket has 5 distinct scenarios, determined by the combination of internet, booking, and operator configuration:

| Scenario | Internet | Booking | QR enabled | What it shows |
|:---|:---|:---|:---|:---|
| **1.1** | ❌ | Unknown | — | QR Code + connection error message |
| **2.1** | ✅ | ❌ | ✅ | QR Code + "No bookings for today" |
| **2.2** | ✅ | ❌ | ❌ | "No bookings for today" + booking CTA |
| **3.1** | ✅ | ✅ | ✅ | Full ticket — On demand / Expedition crosseling |
| **3.2** | ✅ | ✅ | ✅ | Full ticket — Standard / Shuttle / Circular |

---

### Scenario 1.1 — No internet
The app cannot load booking data, but **still displays the QR Code** — the user can board even while offline. Accompanied by an error message and a reconnect option.

- ✅ The QR Code must always be available, regardless of connectivity
- ✅ The error message should guide the user to check their connection
- ❌ Don't block boarding due to lack of internet — the QR is sufficient for validation

---

### Scenario 2.1 — Internet, no booking, QR enabled
The operator has chosen to allow QR use even without an active booking. The Ticket displays the QR Code alongside a message informing the user that there are no bookings for the day.

- ✅ Useful for services with open boarding or on-site check-in
- ✅ Make it clear that there is no booking — the QR does not guarantee a seat in this case

---

### Scenario 2.2 — Internet, no booking, QR disabled
The operator has not enabled QR without a booking. The Ticket displays the no-booking message and a **booking CTA** — directing the user to make a booking.

- ✅ The CTA must be clear and lead directly to the booking flow
- ❌ Don't display an empty Ticket without guidance — always offer a next step

---

### Scenario 3.1 — Full ticket: On demand / Expedition crosseling
Ticket with all booking data: route, code, vehicle plate, boarding and alighting stops with times and ETA, and QR Code.

---

### Scenario 3.2 — Full ticket: Standard / Shuttle / Circular
Same structure as 3.1, with adaptations for the service type: fixed routes with defined stops, route code, and QR Code.

---

## When to Use

| Use when… | Avoid when… |
|:---|:---|
| The user needs to present the boarding pass for boarding or validation | The context is history review — use the Bookings Card |
| All booking data needs to be communicated in a single visual element | The user hasn't confirmed the booking yet — Ticket represents a valid pass |

---

## Dos & Don'ts

### Content
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Display all information needed for boarding in a single view. The QR Code must be large enough for scanners to read in varying conditions. Make the ticket state immediately recognisable (valid, no booking, connection error).</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't omit critical data (date, time, origin, destination) for the sake of visual simplification. Don't show a cancelled or expired Ticket without making the state explicitly clear.</p>
  </div>
</div>

### Access
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px'}}>
  <div style={{background: 'var(--ifm-color-success-contrast-background)', border: '1px solid var(--ifm-color-success)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-success-dark)', marginBottom: '12px', marginTop: 0}}>✅ DO</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>The Ticket must be reachable in the fewest taps possible from the main screen. Support screen rotation — users may turn their phone to make QR reading easier.</p>
  </div>
  <div style={{background: 'var(--ifm-color-danger-contrast-background)', border: '1px solid var(--ifm-color-danger)', borderRadius: '8px', padding: '20px'}}>
    <p style={{fontSize: '12px', fontWeight: 700, color: 'var(--ifm-color-danger-dark)', marginBottom: '12px', marginTop: 0}}>❌ DON'T</p>
    <p style={{fontSize: '12px', color: 'var(--ifm-font-color-base)', margin: 0}}>Don't place destructive actions (cancel booking) inside the Ticket screen — the user may tap by accident during boarding.</p>
  </div>
</div>

---

## Best Practices

- **QR Code is non-negotiable.** In all scenarios where it is technically possible to display the QR, it must appear — it is the central element of boarding.
- **Offline is not a blocker.** The app must work for boarding even without a connection — the cached QR handles scenario 1.1.
- **Operator configuration defines the experience.** Scenarios 2.1 and 2.2 are determined by the operator, not the user — document this internally to avoid confusion during development.
- **Legibility in adverse conditions.** Bright sunlight, low screen brightness, rushing — the Ticket is used under pressure. Contrast and visual hierarchy are critical.
- **Ticket state always visible.** Valid, no booking, connection error — the user must understand the Ticket's state immediately, without having to read all the content.
- **Consistency for the validator.** Whoever validates the ticket sees dozens of Tickets per day — a predictable structure speeds up validation and reduces errors.
