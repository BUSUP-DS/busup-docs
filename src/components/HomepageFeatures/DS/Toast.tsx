import React, { useState } from 'react';

// Tokens from Figma
// Activated: bg rgba(102,187,106,0.2) — Success_300 #66BB6A @ 20%
// Alert:     bg rgba(255,160,0,0.2)   — Alert_300 #FFA000 @ 20%
// Error:     bg rgba(229,57,53,0.2)   — Danger_300 #E53935 @ 20%
// Info:      bg rgba(41,182,246,0.2)  — Info_300 #29B6F6 @ 20%
// Border radius: 4px | Padding: 8px 12px | Gap: 12px | Icon: 12px | Font: 10px Regular

type ToastVariant = 'Activated' | 'Alert' | 'Error' | 'Info';

const config: Record<ToastVariant, { bg: string; icon: React.ReactNode }> = {
  Activated: {
    bg: 'rgba(102,187,106,0.2)',
    icon: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <circle cx="6" cy="6" r="6" fill="#66BB6A" />
        <path d="M3 6.5l2 2 4-4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  Alert: {
    bg: 'rgba(255,160,0,0.2)',
    icon: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <circle cx="6" cy="6" r="6" fill="#FFA000" />
        <path d="M6 3.5v3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="6" cy="8.5" r="0.8" fill="#fff" />
      </svg>
    ),
  },
  Error: {
    bg: 'rgba(229,57,53,0.2)',
    icon: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <circle cx="6" cy="6" r="6" fill="#E53935" />
        <path d="M4 4l4 4M8 4L4 8" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  Info: {
    bg: 'rgba(41,182,246,0.2)',
    icon: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <circle cx="6" cy="6" r="6" fill="#29B6F6" />
        <path d="M6 5.5v3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="6" cy="3.8" r="0.8" fill="#fff" />
      </svg>
    ),
  },
};

interface ToastProps {
  property1?: ToastVariant;
  message?: string;
}

export const Toast = ({
  property1 = 'Activated',
  message = 'Edition mode activated. Save before leaving the page.',
}: ToastProps) => {
  const { bg, icon } = config[property1];
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      background: bg,
      borderRadius: '4px',
      padding: '8px 12px',
      width: '383px',
      maxWidth: '100%',
      boxSizing: 'border-box',
    }}>
      <div style={{ flexShrink: 0, lineHeight: 0 }}>{icon}</div>
      <span style={{
        fontFamily: 'var(--font-family-brand)',
        fontSize: '10px',
        fontWeight: 400,
        lineHeight: 1.5,
        color: '#000000',
      }}>
        {message}
      </span>
    </div>
  );
};

export const ToastDemo = () => {
  const [active, setActive] = useState<ToastVariant>('Activated');

  const variants: { type: ToastVariant; message: string }[] = [
    { type: 'Activated', message: 'Edition mode activated. Save before leaving the page.' },
    { type: 'Alert', message: 'Unsaved changes. Save before leaving the page.' },
    { type: 'Error', message: 'Connection lost. Check your network and try again.' },
    { type: 'Info', message: 'Syncing data in the background.' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {variants.map(v => (
          <button
            key={v.type}
            onClick={() => setActive(v.type)}
            style={{
              padding: '4px 12px',
              borderRadius: '20px',
              border: active === v.type ? '2px solid #00bf6f' : '1px solid #e0e0e0',
              background: active === v.type ? '#edfff6' : '#f4f4f4',
              fontFamily: 'var(--font-family-brand)',
              fontSize: '11px',
              fontWeight: active === v.type ? 700 : 400,
              color: active === v.type ? '#00804a' : '#414141',
              cursor: 'pointer',
            }}
          >
            {v.type}
          </button>
        ))}
      </div>
      <Toast
        property1={active}
        message={variants.find(v => v.type === active)?.message}
      />
    </div>
  );
};

// ─── Connection Bar (App Driver only) ────────────────────────────────────────
// Figma nodes 93:8267 (connected) | 93:8371 (no connection)
// Width: 390px | Height: 46px | Border-radius: 4px | Padding: 8px 12px | Gap: 12px
// Connected:      bg rgba(41,182,246,0.2) | "Connected" 12px Bold #29B6F6
// No connection:  bg rgba(196,196,196,0.3) | "No connection" 12px Bold #414141
// Both: timestamp 10px Light #414141 + refresh icon button 30×30px

const WifiIcon = () => (
  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" style={{ flexShrink: 0 }}>
    <path d="M10 10.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" fill="#29B6F6"/>
    <path d="M6.8 8.2a4.5 4.5 0 0 1 6.4 0" stroke="#29B6F6" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M3.5 4.9a9 9 0 0 1 13 0" stroke="#29B6F6" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M0.5 1.9A13.5 13.5 0 0 1 19.5 1.9" stroke="#29B6F6" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

const RefreshIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
    <path d="M1.5 7A5.5 5.5 0 0 1 12 4M12.5 7A5.5 5.5 0 0 1 2 10" stroke="#414141" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M10 2.5l2 1.5-1.8 1.3" stroke="#414141" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 11.5L2 10l1.8-1.3" stroke="#414141" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ErrorSmallIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="6" cy="6" r="6" fill="#E53935"/>
    <path d="M4 4l4 4M8 4L4 8" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

type ConnectionBarVariant = 'connected' | 'no-connection';

interface ConnectionBarProps {
  variant?: ConnectionBarVariant;
  timestamp?: string;
  onRefresh?: () => void;
}

export const ConnectionBar = ({
  variant = 'connected',
  timestamp = 'Updated at 13:15:00h 27/02',
  onRefresh,
}: ConnectionBarProps) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '8px 12px',
    borderRadius: 4,
    background: variant === 'connected' ? 'rgba(41,182,246,0.2)' : 'rgba(196,196,196,0.3)',
    width: 390,
    boxSizing: 'border-box',
    fontFamily: '"Busup Sans", sans-serif',
  }}>
    {variant === 'connected' ? <WifiIcon /> : <ErrorSmallIcon />}
    <span style={{
      fontSize: 12,
      fontWeight: 700,
      color: variant === 'connected' ? '#29B6F6' : '#414141',
      whiteSpace: 'nowrap',
    }}>
      {variant === 'connected' ? 'Connected' : 'No connection'}
    </span>
    <span style={{
      fontSize: 10,
      fontWeight: 300,
      color: '#414141',
      flex: 1,
      minWidth: 0,
    }}>
      {timestamp}
    </span>
    <button
      onClick={onRefresh}
      aria-label="Refresh connection"
      style={{
        width: 30,
        height: 30,
        borderRadius: 20,
        border: 'none',
        background: '#ffffff',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.16)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flexShrink: 0,
        padding: 0,
      }}
    >
      <RefreshIcon />
    </button>
  </div>
);

export const ConnectionBarDemo = () => (
  <div style={{ fontFamily: '"Busup Sans", sans-serif', display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
    <div>
      <p style={{ fontSize: 11, color: '#989898', margin: '0 0 8px' }}>Connection bar — Connected</p>
      <ConnectionBar variant="connected" />
    </div>
    <div>
      <p style={{ fontSize: 11, color: '#989898', margin: '0 0 8px' }}>Connection bar — No connection</p>
      <ConnectionBar variant="no-connection" />
    </div>
  </div>
);
