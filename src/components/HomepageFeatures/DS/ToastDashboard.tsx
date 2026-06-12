import React, { useState, useEffect } from 'react';

// ─── Figma tokens (node 42:6777 — NEW-LIBRARY) ───────────────────────────────
// Container: border-radius 4px, px 24px py 12px, gap 24px, w 725px
// Text:      14px Regular #212121, line-height 1.5
// Icon:      16px, coloured per variant
// Variants:
//   Activated  bg rgba(102,187,106,0.2)  icon #66BB6A  (check circle)
//   Alert      bg rgba(255,160,0,0.2)    icon #FFA000  (warning triangle)
//   Error      bg rgba(229,57,53,0.2)    icon #E53935  (X circle)
//   Info       bg rgba(41,182,246,0.2)   icon #29B6F6  (info circle)

// ─── Icons ────────────────────────────────────────────────────────────────────

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="8" cy="8" r="8" fill="#66BB6A" />
    <path d="M4.5 8l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AlertIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <path d="M8 1.5L15 13.5H1L8 1.5Z" fill="#FFA000" />
    <path d="M8 6v3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="8" cy="11.5" r="0.75" fill="white" />
  </svg>
);

const ErrorIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="8" cy="8" r="8" fill="#E53935" />
    <path d="M5 5l6 6M11 5L5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="8" cy="8" r="8" fill="#29B6F6" />
    <circle cx="8" cy="5" r="0.75" fill="white" />
    <path d="M8 7v4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ─── Variant config ───────────────────────────────────────────────────────────

type Variant = 'Activated' | 'Alert' | 'Error' | 'Info';

const VARIANTS: Record<Variant, { bg: string; icon: React.ReactNode; label: string }> = {
  Activated: { bg: 'rgba(102,187,106,0.2)', icon: <CheckIcon />, label: 'Activated' },
  Alert:     { bg: 'rgba(255,160,0,0.2)',   icon: <AlertIcon />, label: 'Alert' },
  Error:     { bg: 'rgba(229,57,53,0.2)',   icon: <ErrorIcon />, label: 'Error' },
  Info:      { bg: 'rgba(41,182,246,0.2)',  icon: <InfoIcon />,  label: 'Info' },
};

// ─── Toast shell ──────────────────────────────────────────────────────────────

const Toast = ({ variant, text, visible }: { variant: Variant; text: string; visible?: boolean }) => {
  const { bg, icon } = VARIANTS[variant];
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      padding: '12px 24px',
      background: bg,
      borderRadius: '4px',
      width: '100%',
      maxWidth: '725px',
      boxSizing: 'border-box',
      opacity: visible === false ? 0 : 1,
      transition: 'opacity 0.3s ease',
    }}>
      {icon}
      <span style={{
        fontSize: '14px',
        fontWeight: 400,
        color: '#212121',
        lineHeight: '1.5',
        fontFamily: '"Busup Sans", sans-serif',
      }}>
        {text}
      </span>
    </div>
  );
};

// ─── Demo ─────────────────────────────────────────────────────────────────────

const DEMO_TEXTS: Record<Variant, string> = {
  Activated: 'Edition mode activated. Save before leaving the page.',
  Alert:     'You have unsaved changes. Save before leaving the page.',
  Error:     'Something went wrong. Please try again.',
  Info:      'Your session will expire in 5 minutes.',
};

export const ToastDashboardDemo = () => {
  const [active, setActive] = useState<Variant | null>(null);
  const [visible, setVisible] = useState(false);

  const trigger = (v: Variant) => {
    setActive(v);
    setVisible(true);
  };

  useEffect(() => {
    if (!visible) return;
    const fadeOut = setTimeout(() => setVisible(false), 3000);
    const clear   = setTimeout(() => setActive(null), 3300);
    return () => { clearTimeout(fadeOut); clearTimeout(clear); };
  }, [visible, active]);

  return (
    <div style={{ fontFamily: '"Busup Sans", sans-serif' }}>

      {/* Live toast — auto-dismisses after 3s */}
      <div style={{ minHeight: '44px', marginBottom: '16px' }}>
        {active && (
          <Toast variant={active} text={DEMO_TEXTS[active]} visible={visible} />
        )}
      </div>

      {/* Tertiary trigger buttons */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {(Object.keys(VARIANTS) as Variant[]).map(v => (
          <button
            key={v}
            onClick={() => trigger(v)}
            style={{
              padding: '8px 20px',
              background: '#ffffff',
              border: 'none',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 700,
              color: '#00bf6f',
              cursor: 'pointer',
              boxShadow: '0px 4px 12px rgba(0,0,0,0.16)',
            }}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
};
