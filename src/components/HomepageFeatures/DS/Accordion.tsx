import React, { useState } from 'react';

// ─── Figma tokens (node 59:20396 — NEW-LIBRARY) ───────────────────────────────
// Header:  bg white, border 2px #00BF6F, border-radius 8px, px 24px py 12px
//          gap 16px, shadow-deep 0px 4px 12px rgba(0,0,0,0.16)
// Title:   16px Regular #00BF6F
// Chevron: 16px, rotates 180° when expanded
// Content: bg white, shadow-deep, border-radius 0 0 8px 8px

// ─── Chevron icon ─────────────────────────────────────────────────────────────

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="16" height="16" viewBox="0 0 16 16" fill="none"
    style={{ flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }}
  >
    <path d="M4 6l4 4 4-4" stroke="#00BF6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Accordion ────────────────────────────────────────────────────────────────

type AccordionProps = {
  title: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
};

export const Accordion = ({ title, children, defaultOpen = false }: AccordionProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div style={{ width: '100%', fontFamily: '"Busup Sans", sans-serif' }}>
      {/* Header */}
      <div
        onClick={() => setOpen(v => !v)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '12px 24px',
          background: '#ffffff',
          border: '2px solid #00BF6F',
          borderRadius: open ? '8px 8px 0 0' : 8,
          boxShadow: '0px 4px 12px rgba(0,0,0,0.16)',
          cursor: 'pointer',
          userSelect: 'none',
          boxSizing: 'border-box',
        }}
      >
        <span style={{ flex: 1, fontSize: 16, fontWeight: 400, color: '#00BF6F', lineHeight: 1.5 }}>
          {title}
        </span>
        <ChevronIcon open={open} />
      </div>

      {/* Content */}
      {open && (
        <div style={{
          background: '#ffffff',
          boxShadow: '0px 4px 12px rgba(0,0,0,0.16)',
          borderRadius: '0 0 8px 8px',
          padding: '16px 24px',
          boxSizing: 'border-box',
        }}>
          {children}
        </div>
      )}
    </div>
  );
};

// ─── Demo ─────────────────────────────────────────────────────────────────────

export const AccordionDemo = () => (
  <div style={{ fontFamily: '"Busup Sans", sans-serif', display: 'flex', flexDirection: 'column', gap: 8 }}>
    <Accordion title="Service Information" defaultOpen>
      <p style={{ fontSize: 14, color: '#989898', margin: 0 }}>Content slot — accepts any component.</p>
    </Accordion>
    <Accordion title="Itinerary">
      <p style={{ fontSize: 14, color: '#989898', margin: 0 }}>Content slot — accepts any component.</p>
    </Accordion>
    <Accordion title="Incidents">
      <p style={{ fontSize: 14, color: '#989898', margin: 0 }}>Content slot — accepts any component.</p>
    </Accordion>
    <Accordion title="Service alerts">
      <p style={{ fontSize: 14, color: '#989898', margin: 0 }}>Content slot — accepts any component.</p>
    </Accordion>
  </div>
);
