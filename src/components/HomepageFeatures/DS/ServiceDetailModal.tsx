import React, { useState } from 'react';
import { Accordion } from './Accordion';

// ─── Figma tokens (node 252:12743 — NEW-LIBRARY) ──────────────────────────────
// Modal:      white, border-radius 8px, shadow-deep, width 960px, px 32px py 24px
// Title:      24px Regular #212121
// Close btn:  top-right, 24px × icon
// Info Card:  bg #F4F4F4, h 60px, px 16px py 8px, border-radius 4px (no explicit)
//             Title: 14px Regular #414141, tracking 0.5px
//             Value: 12px Regular #989898, tracking 0.25px
//             Action btn (optional): white pill, shadow-deep, 26px, icon 14px

// ─── Info Card ────────────────────────────────────────────────────────────────

type InfoCardProps = {
  label: string;
  value: string;
  action?: React.ReactNode;
};

export const InfoCard = ({ label, value, action }: InfoCardProps) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#f4f4f4',
    height: 60,
    padding: '8px 16px',
    boxSizing: 'border-box',
    flex: 1,
    minWidth: 0,
  }}>
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <span style={{
        fontSize: 14, fontWeight: 400, color: '#414141',
        letterSpacing: '0.5px', lineHeight: '24px',
        fontFamily: '"Busup Sans", sans-serif',
      }}>
        {label}
      </span>
      <span style={{
        fontSize: 12, fontWeight: 400, color: '#989898',
        letterSpacing: '0.25px', lineHeight: '20px',
        fontFamily: '"Busup Sans", sans-serif',
        overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
      }}>
        {value || '–'}
      </span>
    </div>
    {action && (
      <div style={{
        width: 26, height: 26, borderRadius: 20,
        background: '#ffffff', boxShadow: '0px 4px 6px rgba(0,0,0,0.16)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, marginLeft: 8,
      }}>
        {action}
      </div>
    )}
  </div>
);

// ─── Copy icon ────────────────────────────────────────────────────────────────

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="4" y="4" width="8" height="8" rx="1" stroke="#414141" strokeWidth="1.2" fill="none"/>
    <path d="M2 10V2h8" stroke="#414141" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

// ─── Info grid ────────────────────────────────────────────────────────────────

type Field = { label: string; value: string; copy?: boolean };

const InfoGrid = ({ fields }: { fields: Field[] }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 8,
  }}>
    {fields.map((f, i) => (
      <InfoCard
        key={i}
        label={f.label}
        value={f.value}
        action={f.copy ? <CopyIcon /> : undefined}
      />
    ))}
  </div>
);

// ─── Service Detail Modal ─────────────────────────────────────────────────────

type ServiceDetailModalProps = {
  title: string;
  onClose: () => void;
};

const SERVICE_INFO_FIELDS: Field[] = [
  { label: 'ID',                          value: '5569620',                       copy: true },
  { label: 'Service date',                value: '12/07/2024' },
  { label: 'Route code',                  value: 'AMADM500E' },
  { label: 'Route',                       value: '500 - Jordanésia _ ADM - E',    copy: true },
  { label: 'Expedition ID',               value: '–' },
  { label: 'Expedition name',             value: '–' },
  { label: 'Departure',                   value: '04:25' },
  { label: 'Arrival',                     value: '05:40' },
  { label: 'Reported arrival time',       value: '05:47' },
  { label: 'Reported departure time',     value: '04:17' },
  { label: 'Vehicle',                     value: 'CUA0C27' },
  { label: 'Provider',                    value: 'Dinatur' },
  { label: 'Driver\'s name',              value: 'EDSON VIEIRA DOS SANTOS' },
  { label: 'Driver\'s contact',           value: '(11)998386488' },
  { label: 'Ticket scan / Errors',        value: '14/5' },
  { label: 'Bookings / Capacity',         value: '42/46' },
  { label: 'Next stop',                   value: '–' },
  { label: 'Next stop predicted arrival', value: '–' },
];

export const ServiceDetailModal = ({ title, onClose }: ServiceDetailModalProps) => (
  <div style={{
    position: 'fixed', inset: 0,
    background: 'rgba(70,70,70,0.5)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 1000,
  }}>
    <div style={{
      background: '#ffffff',
      borderRadius: 8,
      boxShadow: '0px 4px 12px rgba(0,0,0,0.16)',
      width: 960,
      maxWidth: '95vw',
      maxHeight: '90vh',
      overflowY: 'auto',
      padding: '24px 32px',
      boxSizing: 'border-box',
      fontFamily: '"Busup Sans", sans-serif',
      position: 'relative',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 400, color: '#212121', margin: 0 }}>{title}</h2>
        <button
          onClick={onClose}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: '#414141' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4l12 12M16 4L4 16" stroke="#414141" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Accordion sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Accordion title="Service Information" defaultOpen>
          <InfoGrid fields={SERVICE_INFO_FIELDS} />
        </Accordion>
        <Accordion title="Itinerary">
          <p style={{ fontSize: 14, color: '#989898', margin: 0 }}>Itinerary stops appear here.</p>
        </Accordion>
        <Accordion title="Incidents">
          <p style={{ fontSize: 14, color: '#989898', margin: 0 }}>Active incidents for this service.</p>
        </Accordion>
        <Accordion title="Service alerts">
          <p style={{ fontSize: 14, color: '#989898', margin: 0 }}>Alerts associated with this service.</p>
        </Accordion>
        <Accordion title="Communications">
          <p style={{ fontSize: 14, color: '#989898', margin: 0 }}>Messages and communication history.</p>
        </Accordion>
        <Accordion title="Comments">
          <p style={{ fontSize: 14, color: '#989898', margin: 0 }}>Internal operator notes and comments.</p>
        </Accordion>
      </div>
    </div>
  </div>
);

// ─── Demo ─────────────────────────────────────────────────────────────────────

export const ServiceDetailModalDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ fontFamily: '"Busup Sans", sans-serif' }}>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: '8px 20px',
          background: '#ffffff',
          border: 'none',
          borderRadius: 20,
          fontSize: 14,
          fontWeight: 700,
          color: '#00bf6f',
          cursor: 'pointer',
          boxShadow: '0px 4px 12px rgba(0,0,0,0.16)',
        }}
      >
        Open Service Detail
      </button>

      {open && (
        <ServiceDetailModal
          title="24 - AMAZON BRASIL GRU5"
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
};
