import React, { useState } from 'react';

// ─── Figma tokens (node 238:12622 — NEW-LIBRARY) ──────────────────────────────
// Overlay:   rgba(70,70,70,0.5), fixed full screen
// Container: bg white, rounded 8px, shadow 0px 4px 6px rgba(0,0,0,0.16)
//            w 745px, px 32px, pb 24px
// Title:     20px Regular #212121, padding 32px (top + sides)
// Content:   free slot — px 32px (matches container)
// Footer:    flex row, justify flex-end, gap 8px, pt 16px pb 8px
// Buttons:   Secondary (Cancel): white bg, border 1px #00bf6f, rounded 20px, px 24px py 8px, 14px Bold #00bf6f
//            Primary (Confirm):  bg #00bf6f (disabled → #c4c4c4), same sizing, 14px Bold white

// ─── Modal shell ──────────────────────────────────────────────────────────────

type ModalShellProps = {
  title: string;
  children: React.ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
  confirmDisabled?: boolean;
};

export const ModalShell = ({
  title,
  children,
  onCancel,
  onConfirm,
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  confirmDisabled = false,
}: ModalShellProps) => (
  // Overlay
  <div
    onClick={onCancel}
    style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(70,70,70,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}
  >
    {/* Container — stop click propagation so clicking inside doesn't close */}
    <div
      onClick={e => e.stopPropagation()}
      style={{
        background: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.16)',
        width: '745px',
        maxWidth: 'calc(100vw - 48px)',
        paddingBottom: '24px',
      }}
    >
      {/* Title */}
      <div style={{
        fontSize: '20px',
        fontWeight: 400,
        color: '#212121',
        lineHeight: 1.5,
        padding: '32px 32px 16px',
      }}>
        {title}
      </div>

      {/* Content slot */}
      <div style={{ padding: '0 32px' }}>
        {children}
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        padding: '24px 32px 0',
      }}>
        <button
          onClick={onCancel}
          style={{
            background: '#ffffff',
            border: '1px solid #00bf6f',
            borderRadius: '20px',
            padding: '8px 24px',
            fontSize: '14px',
            fontWeight: 700,
            color: '#00bf6f',
            cursor: 'pointer',
            lineHeight: 1.5,
          }}
        >
          {cancelLabel}
        </button>
        <button
          onClick={onConfirm}
          disabled={confirmDisabled}
          style={{
            background: confirmDisabled ? '#c4c4c4' : '#00bf6f',
            border: 'none',
            borderRadius: '20px',
            padding: '8px 24px',
            fontSize: '14px',
            fontWeight: 700,
            color: '#ffffff',
            cursor: confirmDisabled ? 'default' : 'pointer',
            lineHeight: 1.5,
            boxShadow: confirmDisabled ? 'none' : '0px 4px 6px rgba(0,0,0,0.16)',
            transition: 'background 0.2s',
          }}
        >
          {confirmLabel}
        </button>
      </div>
    </div>
  </div>
);

// ─── Demo ─────────────────────────────────────────────────────────────────────

export const ModalDemo = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(255,255,255,0.3)',
    border: '1px solid #c4c4c4',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 400,
    color: '#414141',
    outline: 'none',
    boxSizing: 'border-box',
    lineHeight: 1.5,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 400,
    color: '#414141',
    marginBottom: '4px',
    display: 'block',
  };

  return (
    <div style={{ fontFamily: 'var(--font-family-brand, sans-serif)' }}>
      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        style={{
          background: '#00bf6f',
          border: 'none',
          borderRadius: '20px',
          padding: '8px 24px',
          fontSize: '14px',
          fontWeight: 700,
          color: '#ffffff',
          cursor: 'pointer',
          boxShadow: '0px 4px 6px rgba(0,0,0,0.16)',
        }}
      >
        Open modal
      </button>

      {open && (
        <ModalShell
          title="Title title"
          onCancel={() => { setOpen(false); setName(''); }}
          onConfirm={() => setOpen(false)}
          cancelLabel="Cancel"
          confirmLabel="Confirm"
          confirmDisabled={name.trim() === ''}
        >
          {/* Example content — the slot accepts any component */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={labelStyle}>
                Name <span style={{ color: '#e53935', fontSize: '12px' }}>*</span>
              </label>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Type something…"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Description</label>
              <input
                placeholder="Optional"
                style={inputStyle}
              />
            </div>
          </div>
        </ModalShell>
      )}
    </div>
  );
};
