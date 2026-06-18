---
sidebar_label: Toast
sidebar_position: 9
---

import { ToastDemo } from '@site/src/components/HomepageFeatures/DS/Toast';
import { ConnectionBarDemo } from '@site/src/components/HomepageFeatures/DS/Toast';

# Toast — App Driver

App Driver uses the same 4 base Toast variants documented in [App User → Toast](/busup-docs/docs/app-user/toast) (Activated, Alert, Error, Info). This page covers the two variants **exclusive to App Driver**: the Connection Bar toasts.

<ToastDemo />

---

## Connection Bar

A persistent status bar that communicates the driver's connectivity state. Always visible at the top of the screen during an active service. Contains a timestamp of the last successful sync and a refresh action.

<ConnectionBarDemo />

| Property | Connected | No connection |
|:---|:---|:---|
| Background | `rgba(41,182,246,0.2)` | `rgba(196,196,196,0.3)` |
| Left icon | Wifi icon · `#29B6F6` | Error glyph · `#E53935` |
| Label | "Connected" · 12px Bold · `#29B6F6` | "No connection" · 12px Bold · `#414141` |
| Timestamp | 10px Light · `#414141` | 10px Light · `#414141` |
| Refresh button | 30×30px · white · shadow-deep | 30×30px · white · shadow-deep |
| Width | 390px | 390px |
| Height | 46px | 46px |
| Border radius | 4px | 4px |
| Padding | 8px 12px | 8px 12px |

### States

| State | Description |
|:---|:---|
| **Connected** | Driver device has an active internet connection. Shown in blue. |
| **No connection** | Device lost connectivity. Shown in grey. Driver should tap refresh to retry. |

### When to use

The Connection Bar appears **only in the App Driver**, displayed persistently during an active service session. It informs the driver of real-time connectivity status — critical because boarding registrations and route updates require a live connection. The timestamp shows when data was last successfully synced.

> **Behaviour note:** tapping the refresh button triggers a manual sync attempt. The bar transitions from "No connection" to "Connected" once the connection is restored.
