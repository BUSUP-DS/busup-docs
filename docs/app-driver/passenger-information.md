---
sidebar_label: Passenger Information
sidebar_position: 5
---

import { PassengerInformationDemo } from '@site/src/components/HomepageFeatures/DS/AppDriverComponents';

# Passenger Information

<PassengerInformationDemo />

<div style={{marginBottom: "40px"}} />

The Passenger Information list shows all passengers booked for the current stop or service. Each row displays the passenger's name, party size, and current boarding status.

---

## Anatomy

| Element | Description |
|:---|:---|
| **Avatar** | `32px` circular initials avatar — `Primary_100` background, `Primary_300` text |
| **Name** | Passenger's full name — `13px Bold #212121` |
| **Party count** | Number of passengers in the booking — `11px Regular #989898` |
| **Status badge** | Colour-coded label showing the current boarding state |
| **Divider** | `1px` line in `#f4f4f4` between rows |

---

## Status values

| Status | Meaning |
|:---|:---|
| **Pending** | Passenger has not boarded yet |
| **Boarding** | Passenger is currently boarding |
| **Boarded** | Passenger has confirmed boarding |
| **Absent** | Passenger did not board at this stop |

---

## Tokens

| Property | Value |
|:---|:---|
| Row padding | `8px 12px` |
| Row divider | `1px solid #f4f4f4` |
| Avatar size | `32px` |
| Avatar background | `#d7ffed` (Primary_100) |
| Avatar text | `12px Bold #00bf6f` |
| Name | `13px Bold #212121` |
| Party count | `11px Regular #989898` |
| Badge font | `11px Regular` |
| Badge border radius | `4px` |
| Badge padding | `3px 8px` |

---

## Behaviour

- The list shows passengers booked for the current stop or service.
- Rows are not interactive — the list is read-only.
- Status updates automatically when the driver uses Manual Boarding Control or ticket scan.

---

## When to use

Use Passenger Information exclusively in the App Driver stop detail and service overview screens. Not used in App User or Dashboard.
