import React from 'react';

// ─── Figma tokens (nodes 38:4840, 38:4784, 38:4768) ──────────────────────────
// Shell bg:       #ffffff, borderRadius 16px (top) + 12px (bottom via card)
// Header zone:    rgba(227,245,227,0.5) — light green tint
// Header title:   16px Bold #00bf6f ("BILLETE")
// Header date:    14px Bold #414141 (right-aligned)
// Ticket separator: dashed 1px #dbdbdb + semicircle cutouts on sides (12px circles)
// Route name:     14px Bold #414141
// Vehicle plate badge: bg #d7ffed, 4px radius, 12px Bold #31312e
// Route code badge:   bg #e0f2fe, 4px radius, 12px Bold #31312e
// Departure / Arrival label: 14px Bold #00bf6f
// Stop address:   12px Bold #414141
// "See more" link: 12px Regular #414141 underlined
// ETA text:       12px Regular #000000
// Time:           16px Bold #000000 (right-aligned)
// Route path dot (departure): 22px circle bg #d7ffed, border 1px #00bf6f
// Route path pin (arrival):   22px circle bg #d7ffed, border 1px #049157
// Vertical dashed line connecting dots
// QR area:        161px wide, borderRadius 10px, shadow 0 4px 12px rgba(0,0,0,0.16)
// QR caption:     8px Light #414141 centered
// GPS button:     bg #00bf6f, 12px Bold #fff, borderRadius 20px, full width
// Error text:     14px Regular #31312e
// Error bold:     14px Bold #FFA000
// Retry button:   outline 1px #00bf6f, bg transparent, 12px Bold #00bf6f, borderRadius 20px

// ─── Shared helpers ───────────────────────────────────────────────────────────
const f = (size: number, weight: number, color: string): React.CSSProperties => ({
  fontFamily: 'var(--font-family-brand)',
  fontSize: `${size}px`,
  fontWeight: weight,
  color,
  lineHeight: 1.5,
  margin: 0,
});

// ─── QR Code SVG (realistic mockup) ──────────────────────────────────────────
const QRCode = ({ size = 140 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 140 140" fill="none">
    <rect width="140" height="140" fill="white" />
    {/* TL finder */}
    <rect x="8" y="8" width="44" height="44" rx="4" fill="#212121" />
    <rect x="16" y="16" width="28" height="28" rx="2" fill="white" />
    <rect x="22" y="22" width="16" height="16" fill="#212121" />
    {/* TR finder */}
    <rect x="88" y="8" width="44" height="44" rx="4" fill="#212121" />
    <rect x="96" y="16" width="28" height="28" rx="2" fill="white" />
    <rect x="102" y="22" width="16" height="16" fill="#212121" />
    {/* BL finder */}
    <rect x="8" y="88" width="44" height="44" rx="4" fill="#212121" />
    <rect x="16" y="96" width="28" height="28" rx="2" fill="white" />
    <rect x="22" y="102" width="16" height="16" fill="#212121" />
    {/* Data modules */}
    {[60,68,76,84].map(x => <rect key={x} x={x} y="8" width="6" height="6" fill="#212121" />)}
    {[60,76].map(x => <rect key={x} x={x} y="18" width="6" height="6" fill="#212121" />)}
    {[60,68,84].map(x => <rect key={x} x={x} y="28" width="6" height="6" fill="#212121" />)}
    {[8,24,40,60,76,84].map(x => <rect key={x} x={x} y="60" width="6" height="6" fill="#212121" />)}
    {[8,40,60,68,76].map(x => <rect key={x} x={x} y="68" width="6" height="6" fill="#212121" />)}
    {[16,24,60,84,92,100,108].map(x => <rect key={x} x={x} y="76" width="6" height="6" fill="#212121" />)}
    {[60,68,76,84,92,108].map(x => <rect key={x} x={x} y="84" width="6" height="6" fill="#212121" />)}
    {[68,92,100].map(x => <rect key={x} x={x} y="92" width="6" height="6" fill="#212121" />)}
    {[60,76,84,92,108,116].map(x => <rect key={x} x={x} y="100" width="6" height="6" fill="#212121" />)}
    {[60,68,100,108].map(x => <rect key={x} x={x} y="108" width="6" height="6" fill="#212121" />)}
    {[60,76,84,92,116].map(x => <rect key={x} x={x} y="116" width="6" height="6" fill="#212121" />)}
  </svg>
);

// ─── Expand icon ──────────────────────────────────────────────────────────────
const ExpandIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M9 1h4v4M5 13H1V9M1 1l4 4M13 13l-4-4" stroke="#414141" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Rotate/Retry icon ────────────────────────────────────────────────────────
const RetryIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2.5 7A4.5 4.5 0 1 1 4 10.5" stroke="#00bf6f" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M2.5 4.5V7H5" stroke="#00bf6f" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Ticket tear separator ────────────────────────────────────────────────────
// Uses a surrounding bg color to fake the semicircle "cutout" on sides
const TearSeparator = ({ bgColor = '#f0f0ee' }: { bgColor?: string }) => (
  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', margin: '0 -1px' }}>
    {/* Left cutout */}
    <div style={{
      width: '14px', height: '14px', borderRadius: '50%',
      background: bgColor,
      flexShrink: 0, marginLeft: '-7px', zIndex: 1,
    }} />
    {/* Dashed line */}
    <div style={{ flex: 1, borderTop: '1.5px dashed #dbdbdb', margin: '0 4px' }} />
    {/* Right cutout */}
    <div style={{
      width: '14px', height: '14px', borderRadius: '50%',
      background: bgColor,
      flexShrink: 0, marginRight: '-7px', zIndex: 1,
    }} />
  </div>
);

// ─── Ticket header ────────────────────────────────────────────────────────────
const TicketHeader = ({ date = '06 Mar. 2026', title = 'BILLETE' }: { date?: string; title?: string }) => (
  <div style={{
    background: 'rgba(227, 245, 227, 0.5)',
    borderRadius: '12px 12px 0 0',
    padding: '16px 24px 14px',
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={f(16, 700, '#00bf6f')}>{title}</span>
      <span style={f(14, 700, '#414141')}>{date}</span>
    </div>
  </div>
);

// ─── Ticket shell wrapper ─────────────────────────────────────────────────────
const TicketShell = ({ children, date, bgColor = '#f0f0ee' }: {
  children: React.ReactNode;
  date?: string;
  bgColor?: string;
}) => (
  <div style={{
    background: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0px 4px 20px rgba(0,0,0,0.12)',
    width: '100%',
    overflow: 'visible',
    position: 'relative',
  }}>
    <TicketHeader date={date} />
    <TearSeparator bgColor={bgColor} />
    <div style={{ padding: '16px 24px 24px' }}>
      {children}
    </div>
  </div>
);

// ─── Route path icons ─────────────────────────────────────────────────────────
const DepartureIcon = () => (
  <div style={{
    width: '22px', height: '22px', borderRadius: '50%',
    background: '#d7ffed', border: '1.5px solid #00bf6f',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  }}>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <circle cx="5" cy="5" r="3" fill="#00bf6f" />
    </svg>
  </div>
);

const ArrivalIcon = () => (
  <div style={{
    width: '22px', height: '22px', borderRadius: '50%',
    background: '#d7ffed', border: '1.5px solid #049157',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  }}>
    <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
      <path d="M5 0C2.79 0 1 1.79 1 4c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4zm0 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#049157" />
    </svg>
  </div>
);

// ─── Ticket Header Info (route name, plate, code) ─────────────────────────────
interface TicketInfoHeaderProps {
  routeName?: string;
  vehiclePlate?: string;
  routeCode?: string;
}

const TicketInfoHeader = ({
  routeName = 'C3 - 23:10 (Volta) - Lagoas Park - Sete Rios - Av. António Augusto Aguiar...',
  vehiclePlate = '3187HWS',
  routeCode = '13D5F7H',
}: TicketInfoHeaderProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '8px' }}>
    <p style={{ ...f(14, 700, '#414141'), marginBottom: '6px' }}>{routeName}</p>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={f(14, 400, '#31312e')}>VEHICLE PLATE:</span>
      <span style={{
        ...f(12, 700, '#31312e'),
        background: '#d7ffed',
        borderRadius: '4px',
        padding: '2px 6px',
      }}>{vehiclePlate}</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={f(14, 400, '#31312e')}>ROUTE CODE:</span>
      <span style={{
        ...f(12, 700, '#31312e'),
        background: '#e0f2fe',
        borderRadius: '4px',
        padding: '2px 6px',
      }}>{routeCode}</span>
    </div>
  </div>
);

// ─── Stop row (departure / arrival) ──────────────────────────────────────────
interface StopRowProps {
  icon: React.ReactNode;
  label: string;
  address: string;
  time: string;
  eta?: string;
  showLine?: boolean;
}

const StopRow = ({ icon, label, address, time, eta = 'ETA: Not available', showLine = false }: StopRowProps) => (
  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
    {/* Left: icon + optional connecting line */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, flexShrink: 0 }}>
      {icon}
      {showLine && (
        <div style={{ width: '1px', flex: 1, borderLeft: '1.5px dashed #dbdbdb', minHeight: '40px', margin: '4px 0' }} />
      )}
    </div>
    {/* Right: text */}
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={f(14, 700, '#00bf6f')}>{label}</span>
        <span style={{ ...f(16, 700, '#000000'), marginLeft: '8px', flexShrink: 0 }}>{time}</span>
      </div>
      <p style={{ ...f(12, 700, '#414141'), margin: '2px 0' }}>{address}</p>
      <span style={{ ...f(12, 400, '#414141'), textDecoration: 'underline', display: 'block', marginBottom: '2px' }}>See more</span>
      <span style={f(12, 400, '#000000')}>{eta}</span>
    </div>
  </div>
);

// ─── QR block ─────────────────────────────────────────────────────────────────
const QRBlock = ({ caption = 'Show this QR code to the driver' }: { caption?: string }) => (
  <div style={{ marginTop: '16px' }}>
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div style={{
        borderRadius: '10px',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.16)',
        overflow: 'hidden',
        display: 'inline-block',
      }}>
        <QRCode size={160} />
      </div>
      {/* Expand icon button */}
      <div style={{
        position: 'absolute', bottom: '8px', right: '8px',
        width: '28px', height: '28px', borderRadius: '50%',
        background: '#ffffff',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.16)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
      }}>
        <ExpandIcon />
      </div>
    </div>
    <p style={{ ...f(8, 300, '#414141'), textAlign: 'center', marginTop: '8px' }}>{caption}</p>
  </div>
);

// ─── Scenario 3.2 — Full ticket ───────────────────────────────────────────────
export const TicketScenario32 = ({ bgColor = '#f0f0ee' }: { bgColor?: string }) => (
  <TicketShell date="06 Mar. 2026" bgColor={bgColor}>
    <TicketInfoHeader />
    <div style={{ height: '1px', background: '#dbdbdb', margin: '12px 0' }} />
    <StopRow
      icon={<DepartureIcon />}
      label="Departure"
      address="Rodovia Nicola Capucci, Macrozona Destinação...."
      time="05:20"
      showLine={true}
    />
    <div style={{ height: '8px' }} />
    <StopRow
      icon={<ArrivalIcon />}
      label="Arrival"
      address="Carrer de Gaspar Fàbregas i Roses, 3, 08950 Esplugues de..."
      time="06:25"
      showLine={false}
    />
    <QRBlock caption="Show this QR code to the driver" />
    <button style={{
      marginTop: '16px', width: '100%', padding: '12px',
      borderRadius: '20px', border: 'none',
      background: '#00bf6f', cursor: 'pointer',
      ...f(12, 700, '#ffffff'),
    }}>
      View GPS location
    </button>
  </TicketShell>
);

// ─── Scenario 1.1 — No internet ──────────────────────────────────────────────
export const TicketScenario11 = ({ bgColor = '#f0f0ee' }: { bgColor?: string }) => (
  <TicketShell date="06 Mar. 2026" bgColor={bgColor}>
    <p style={{ ...f(14, 400, '#31312e'), marginBottom: '8px' }}>
      We were unable to load your booking information.
    </p>
    <p style={{ ...f(14, 700, '#FFA000'), marginBottom: '8px' }}>
      Please check your internet connection and try again.
    </p>
    <p style={{ ...f(14, 400, '#31312e'), marginBottom: '16px' }}>
      If the problem persists, contact customer support.
    </p>
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
      <button style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '8px 24px', borderRadius: '20px',
        border: '1px solid #00bf6f', background: 'transparent',
        cursor: 'pointer', ...f(12, 700, '#00bf6f'),
      }}>
        <RetryIcon /> Retry
      </button>
    </div>
    <TearSeparator bgColor={bgColor} />
    <div style={{ marginTop: '16px' }}>
      <QRBlock caption="Show this QR code to the driver" />
    </div>
  </TicketShell>
);

// ─── Scenario 2.1 — No booking, QR enabled ────────────────────────────────────
export const TicketScenario21 = ({ bgColor = '#f0f0ee' }: { bgColor?: string }) => (
  <TicketShell date="06 Mar. 2026" bgColor={bgColor}>
    <p style={{ ...f(14, 700, '#31312e'), marginBottom: '16px' }}>
      You have no bookings for today
    </p>
    <QRBlock caption="Show this QR code to the driver" />
  </TicketShell>
);

// ─── Demo ─────────────────────────────────────────────────────────────────────
export const TicketDemo = () => (
  <div style={{
    background: '#f0f0ee',
    borderRadius: '16px',
    padding: '24px',
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  }}>
    {/* Scenario labels + cards */}
    {[
      { label: '3.2 — Full ticket', node: <TicketScenario32 bgColor="#f0f0ee" /> },
      { label: '1.1 — No internet', node: <TicketScenario11 bgColor="#f0f0ee" /> },
      { label: '2.1 — No booking (QR enabled)', node: <TicketScenario21 bgColor="#f0f0ee" /> },
    ].map(({ label, node }) => (
      <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '280px', flexShrink: 0 }}>
        <span style={{ fontSize: '11px', color: '#989898' }}>{label}</span>
        {node}
      </div>
    ))}
  </div>
);
