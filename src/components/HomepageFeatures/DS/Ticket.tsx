import React from 'react';

// Tokens from Figma
// Card: bg #ffffff, borderRadius 16px, boxShadow 0 2px 8px rgba(0,0,0,0.10), padding 20px
// Headline "BILLETE": 13px Bold #212121
// Date: 11px Regular #989898
// Route name: 11px Bold #414141
// Route code label: 10px Regular #989898, value Bold #212121
// Stop label: 10px Bold #414141, stop name: 10px Regular #414141, time: 11px Bold #212121
// Divider: 1px #f4f4f4
// QR container: bg #f4f4f4, borderRadius 8px, padding 12px
// Error state: bg #ffebee, border 1px solid #ffcdd2, 11px color #b71c1c

// Minimal QR code mockup
const QRCode = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="4" fill="white" />
    {/* Top-left finder */}
    <rect x="4" y="4" width="20" height="20" rx="2" fill="#212121" />
    <rect x="8" y="8" width="12" height="12" rx="1" fill="white" />
    <rect x="10" y="10" width="8" height="8" fill="#212121" />
    {/* Top-right finder */}
    <rect x="40" y="4" width="20" height="20" rx="2" fill="#212121" />
    <rect x="44" y="8" width="12" height="12" rx="1" fill="white" />
    <rect x="46" y="10" width="8" height="8" fill="#212121" />
    {/* Bottom-left finder */}
    <rect x="4" y="40" width="20" height="20" rx="2" fill="#212121" />
    <rect x="8" y="44" width="12" height="12" rx="1" fill="white" />
    <rect x="10" y="46" width="8" height="8" fill="#212121" />
    {/* Data modules */}
    <rect x="28" y="4" width="4" height="4" fill="#212121" />
    <rect x="28" y="12" width="4" height="4" fill="#212121" />
    <rect x="36" y="28" width="4" height="4" fill="#212121" />
    <rect x="4" y="28" width="4" height="4" fill="#212121" />
    <rect x="12" y="28" width="4" height="4" fill="#212121" />
    <rect x="20" y="28" width="4" height="4" fill="#212121" />
    <rect x="28" y="28" width="4" height="4" fill="#212121" />
    <rect x="28" y="36" width="4" height="4" fill="#212121" />
    <rect x="36" y="36" width="4" height="4" fill="#212121" />
    <rect x="44" y="28" width="4" height="4" fill="#212121" />
    <rect x="52" y="28" width="4" height="4" fill="#212121" />
    <rect x="52" y="36" width="4" height="4" fill="#212121" />
    <rect x="44" y="44" width="4" height="4" fill="#212121" />
    <rect x="52" y="44" width="4" height="4" fill="#212121" />
    <rect x="44" y="52" width="4" height="4" fill="#212121" />
    <rect x="36" y="52" width="4" height="4" fill="#212121" />
    <rect x="28" y="52" width="4" height="4" fill="#212121" />
    <rect x="28" y="44" width="4" height="4" fill="#212121" />
  </svg>
);

const Divider = () => <div style={{ height: '1px', background: '#f4f4f4', margin: '8px 0' }} />;

const cardStyle: React.CSSProperties = {
  background: '#ffffff',
  borderRadius: '16px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
  padding: '20px',
  width: '220px',
  flexShrink: 0,
  boxSizing: 'border-box',
};

const label = (text: string): React.CSSProperties => ({
  fontSize: '10px', fontWeight: 700, color: '#414141', margin: '0 0 2px',
  fontFamily: 'var(--font-family-brand)',
});

const body = (text?: string): React.CSSProperties => ({
  fontSize: '10px', fontWeight: 400, color: '#414141', margin: '0 0 2px',
  fontFamily: 'var(--font-family-brand)',
});

// Scenario 3.2 — Full ticket (Standard/Shuttle/Circular)
export const TicketScenario32 = () => (
  <div style={cardStyle}>
    <p style={{ fontSize: '10px', color: '#989898', margin: '0 0 8px', fontWeight: 600, letterSpacing: '0.5px' }}>3.2 — FULL TICKET</p>
    <p style={{ fontSize: '13px', fontWeight: 700, color: '#212121', margin: '0 0 2px', fontFamily: 'var(--font-family-brand)' }}>BILLETE</p>
    <p style={{ fontSize: '11px', color: '#989898', margin: '0 0 10px', fontFamily: 'var(--font-family-brand)' }}>06 Mar. 2026</p>
    <p style={{ fontSize: '11px', fontWeight: 700, color: '#414141', margin: '0 0 2px', fontFamily: 'var(--font-family-brand)' }}>C3 – Lagoon Park → Beta Rise</p>
    <p style={{ fontSize: '10px', color: '#989898', margin: '0 0 8px', fontFamily: 'var(--font-family-brand)' }}>
      ROUTE CODE: <strong style={{ color: '#212121' }}>1000THL</strong>
    </p>
    <Divider />
    <p style={label('')}>Departure</p>
    <p style={body()}>Lagoon Park Stop</p>
    <p style={{ fontSize: '11px', fontWeight: 700, color: '#212121', margin: '0 0 8px', fontFamily: 'var(--font-family-brand)' }}>05:20</p>
    <p style={label('')}>Arrival</p>
    <p style={{ fontSize: '10px', color: '#414141', margin: '0 0 8px', fontFamily: 'var(--font-family-brand)' }}>Beta Rise Main Entrance</p>
    <Divider />
    <div style={{ background: '#f4f4f4', borderRadius: '8px', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <QRCode size={80} />
    </div>
  </div>
);

// Scenario 1.1 — No internet
export const TicketScenario11 = () => (
  <div style={cardStyle}>
    <p style={{ fontSize: '10px', color: '#989898', margin: '0 0 8px', fontWeight: 600, letterSpacing: '0.5px' }}>1.1 — NO INTERNET</p>
    <p style={{ fontSize: '13px', fontWeight: 700, color: '#212121', margin: '0 0 10px', fontFamily: 'var(--font-family-brand)' }}>BILLETE</p>
    <div style={{ background: '#ffebee', border: '1px solid #ffcdd2', borderRadius: '8px', padding: '10px', marginBottom: '12px' }}>
      <p style={{ fontSize: '11px', color: '#b71c1c', margin: 0, fontFamily: 'var(--font-family-brand)' }}>
        Could not load booking info. Check your connection.
      </p>
    </div>
    <div style={{ background: '#f4f4f4', borderRadius: '8px', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
      <QRCode size={80} />
    </div>
    <button style={{
      width: '100%', padding: '8px', borderRadius: '20px',
      border: '1px solid #00bf6f', background: '#edfff6',
      fontSize: '11px', fontWeight: 700, color: '#00804a',
      cursor: 'pointer', fontFamily: 'var(--font-family-brand)',
    }}>
      Reconnect
    </button>
  </div>
);

// Scenario 2.2 — No booking, QR disabled
export const TicketScenario22 = () => (
  <div style={cardStyle}>
    <p style={{ fontSize: '10px', color: '#989898', margin: '0 0 8px', fontWeight: 600, letterSpacing: '0.5px' }}>2.2 — NO BOOKING</p>
    <p style={{ fontSize: '13px', fontWeight: 700, color: '#212121', margin: '0 0 10px', fontFamily: 'var(--font-family-brand)' }}>BILLETE</p>
    <div style={{ textAlign: 'center', padding: '24px 0' }}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '8px' }}>
        <rect x="3" y="5" width="18" height="14" rx="2" fill="#e0e0e0" />
        <path d="M3 10h18" stroke="#bdbdbd" strokeWidth="1.5" />
      </svg>
      <p style={{ fontSize: '12px', color: '#989898', margin: '0 0 16px', fontFamily: 'var(--font-family-brand)' }}>
        No bookings for today
      </p>
      <button style={{
        padding: '8px 24px', borderRadius: '20px',
        border: 'none', background: '#00bf6f',
        fontSize: '12px', fontWeight: 700, color: '#fff',
        cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.16)',
        fontFamily: 'var(--font-family-brand)',
      }}>
        Book now
      </button>
    </div>
  </div>
);

export const TicketDemo = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <TicketScenario32 />
    <TicketScenario11 />
    <TicketScenario22 />
  </div>
);
