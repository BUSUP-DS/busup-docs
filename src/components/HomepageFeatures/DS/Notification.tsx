import React, { useState } from 'react';

// ─── Figma tokens (nodes 32:1549 + 218:3173) ─────────────────────────────────
// Variants:    Default (collapsed) | Expanded
// Container:   bg rgba(255,255,255,0.3), borderRadius 16px,
//              shadow 0px 4px 12px rgba(0,0,0,0.16), padding 12px 16px
// All text:    #ffffff — component lives on dark background
// Timestamp:   10px Light white (top-left)
// Close (×):   top-right
// Header:      14px Bold white
// Body:        12px Light white
//   Default:   truncated / preview line
//   Expanded:  full text shown
// Chevron:     bottom-right — points ↓ Default, points ↑ Expanded (rotate 180°)
// Section labels (above card):
//   "recent notifications" 10px Light — top-left
//   "clear all"            10px Light — top-right

// ─── Icons ───────────────────────────────────────────────────────────────────
const CloseIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M2 2l6 6M8 2L2 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const ChevronIcon = ({ expanded }: { expanded: boolean }) => (
  <svg
    width="12" height="8" viewBox="0 0 12 8" fill="none"
    style={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}
  >
    <path d="M1 1.5l5 5 5-5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Single notification card ─────────────────────────────────────────────────
interface NotificationItemProps {
  headerText?: string;
  bodyText?: string;
  timestampText?: string;
  showSectionLabels?: boolean;
  defaultExpanded?: boolean;
}

export const NotificationItem = ({
  headerText = 'Check the infos about your reservation',
  bodyText = 'Your booking for C3 – Lagoon Park has been confirmed for tomorrow at 08:00. Please make sure to be at the stop 5 minutes before departure.',
  timestampText = '06/05/2023 · 9:41',
  showSectionLabels = false,
  defaultExpanded = false,
}: NotificationItemProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div style={{ position: 'relative', paddingTop: showSectionLabels ? '22px' : '0' }}>
      {/* Section labels above the card */}
      {showSectionLabels && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{
            fontFamily: 'var(--font-family-brand)',
            fontSize: '10px', fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5,
          }}>
            recent notifications
          </span>
          <span style={{
            fontFamily: 'var(--font-family-brand)',
            fontSize: '10px', fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, cursor: 'pointer',
          }}>
            clear all
          </span>
        </div>
      )}

      {/* Card */}
      <div style={{
        background: 'rgba(255,255,255,0.3)',
        borderRadius: '16px',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.16)',
        padding: '12px 16px',
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
      }}>
        {/* Top row: timestamp + × */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{
            fontFamily: 'var(--font-family-brand)',
            fontSize: '10px', fontWeight: 300, color: '#ffffff', lineHeight: 1.5,
          }}>
            {timestampText}
          </span>
          <button style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <CloseIcon />
          </button>
        </div>

        {/* Header */}
        <p style={{
          fontFamily: 'var(--font-family-brand)',
          fontSize: '14px', fontWeight: 700, color: '#ffffff', lineHeight: 1.5, margin: 0,
        }}>
          {headerText}
        </p>

        {/* Body — truncated on Default, full on Expanded */}
        <p style={{
          fontFamily: 'var(--font-family-brand)',
          fontSize: '12px', fontWeight: 300, color: '#ffffff', lineHeight: 1.5, margin: 0,
          overflow: expanded ? 'visible' : 'hidden',
          display: expanded ? 'block' : '-webkit-box',
          WebkitLineClamp: expanded ? undefined : 1,
          WebkitBoxOrient: expanded ? undefined : 'vertical' as const,
        }}>
          {bodyText}
        </p>

        {/* Chevron — toggles expand/collapse */}
        <div
          style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '2px', cursor: 'pointer' }}
          onClick={() => setExpanded(e => !e)}
        >
          <ChevronIcon expanded={expanded} />
        </div>
      </div>
    </div>
  );
};

// ─── Demo ─────────────────────────────────────────────────────────────────────
export const NotificationDemo = () => (
  <div style={{
    background: '#242421',
    borderRadius: '16px',
    padding: '24px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '400px',
  }}>
    {/* Default (collapsed) */}
    <NotificationItem
      showSectionLabels={true}
      timestampText="06/05/2023 · 9:41"
      headerText="Check the infos about your reservation"
      bodyText="Your booking for C3 – Lagoon Park has been confirmed for tomorrow at 08:00. Please be at the stop 5 minutes before departure."
      defaultExpanded={false}
    />
    {/* Expanded */}
    <NotificationItem
      showSectionLabels={false}
      timestampText="05/05/2023 · 18:22"
      headerText="Your route has been updated"
      bodyText="C5 – Beta Rise Express schedule changed. The new departure time is 07:45. Please check the updated stop times and plan your journey accordingly."
      defaultExpanded={true}
    />
  </div>
);
