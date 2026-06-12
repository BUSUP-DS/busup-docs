import React from 'react';

// ─── Figma tokens (node 76:2682 + 76:2688) ──────────────────────────────────
// Card:       bg #ffffff, borderRadius 8px, drop-shadow 0px 4px 12px rgba(0,0,0,0.16)
//             padding 16px 24px
// Headline:   14px Bold #00bf6f (left) + 12px Light #414141 (right)
// Divider:    1px #dbdbdb
// Subhead:    14px Regular #00bf6f
// Body:       12px Light #414141
// Action link: 12px Regular #ea6753 (Secondary_300) — right aligned
// Booking icon: green calendar 16px

// ─── Icons ───────────────────────────────────────────────────────────────────
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1.5" y="2.5" width="13" height="12" rx="1.5" stroke="#00bf6f" strokeWidth="1.2" />
    <path d="M1.5 6h13" stroke="#00bf6f" strokeWidth="1.2" />
    <path d="M5 1v3M11 1v3" stroke="#00bf6f" strokeWidth="1.2" strokeLinecap="round" />
    <rect x="3.5" y="8.5" width="2" height="2" rx="0.3" fill="#00bf6f" />
    <rect x="7" y="8.5" width="2" height="2" rx="0.3" fill="#00bf6f" />
    <rect x="10.5" y="8.5" width="2" height="2" rx="0.3" fill="#00bf6f" />
    <rect x="3.5" y="11" width="2" height="1.5" rx="0.3" fill="#00bf6f" />
  </svg>
);

const WalkIcon = () => (
  <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
    <circle cx="7" cy="2" r="1.5" fill="#212121" />
    <path d="M7 4.5l-2.5 5h2l-1 5.5" stroke="#212121" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 4.5l2.5 3-1.5 1" stroke="#212121" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M4.5 9.5l-1.5 5.5" stroke="#212121" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const BusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="3" width="12" height="9" rx="2" fill="#212121" />
    <path d="M2 7h12" stroke="white" strokeWidth="1" />
    <rect x="3.5" y="9" width="2" height="1.5" rx="0.5" fill="white" />
    <rect x="10.5" y="9" width="2" height="1.5" rx="0.5" fill="white" />
    <circle cx="4.5" cy="13" r="1.2" fill="#212121" />
    <circle cx="11.5" cy="13" r="1.2" fill="#212121" />
    <path d="M4.5 12V11.8M11.5 12V11.8" stroke="#212121" strokeWidth="0.8" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M2 5h6M6 3l2 2-2 2" stroke="#414141" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Shared styles ────────────────────────────────────────────────────────────
const font = (size: number, weight: number, color: string): React.CSSProperties => ({
  fontFamily: 'var(--font-family-brand)',
  fontSize: `${size}px`,
  fontWeight: weight,
  color,
  lineHeight: 1.5,
  margin: 0,
});

const Divider = () => (
  <div style={{ height: '1px', background: '#dbdbdb', margin: '4px 0' }} />
);

// ─── Bookings Card (node 76:2682) ────────────────────────────────────────────
interface BookingsCardProps {
  headline?: string;     // e.g. "ONGOING"
  dateRange?: string;    // e.g. "18/01/2022 – 19/07/2022"
  routeDirection?: string; // e.g. "Outbound route"
  routeName?: string;
  bookingType?: string;  // e.g. "Flexible"
}

export const BookingsCard = ({
  headline = 'ONGOING',
  dateRange = '18/01/2022 – 19/07/2022',
  routeDirection = 'Outbound route',
  routeName = 'AICA1 (LEROY MERLIN): CIRCULAR PARQUE EMPRESARIAL ARROYO DE LA VEGA...',
  bookingType = 'Flexible',
}: BookingsCardProps) => (
  <div style={{
    background: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.16)',
    padding: '16px 24px',
    width: '280px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  }}>
    {/* Headline row */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '21px' }}>
      <span style={font(14, 700, '#00bf6f')}>{headline}</span>
      <span style={{ ...font(12, 300, '#414141'), textAlign: 'right' }}>{dateRange}</span>
    </div>

    <Divider />

    {/* Subhead 1 — route direction + icon */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <CalendarIcon />
        <span style={font(14, 400, '#00bf6f')}>{routeDirection}</span>
      </div>
      <p style={{ ...font(12, 300, '#414141'), margin: 0 }}>{routeName}</p>
    </div>

    {/* Subhead 2 — booking type */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <span style={font(14, 400, '#00bf6f')}>Type of booking</span>
      <p style={{ ...font(12, 300, '#414141'), margin: 0 }}>{bookingType}</p>
    </div>

    {/* Action link */}
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '4px', paddingTop: '4px' }}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M9 9H3M9 3H3M9 3v6M3 3v6" stroke="#ea6753" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <span style={{ ...font(12, 400, '#ea6753'), cursor: 'pointer' }}>Cancel booking</span>
    </div>
  </div>
);

// ─── Routes Card (node 76:2688) ───────────────────────────────────────────────
interface RoutesCardProps {
  routeName?: string;
  departureTime?: string;
  arrivalTime?: string;
  walkMinutes1?: string;
  busMinutes?: string;
  walkMinutes2?: string;
}

export const RoutesCard = ({
  routeName = 'Route AB',
  departureTime = '07:00',
  arrivalTime = '07:45',
  walkMinutes1 = '3min',
  busMinutes = '33min',
  walkMinutes2 = '1min',
}: RoutesCardProps) => (
  <div style={{
    background: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.16)',
    padding: '16px 24px',
    width: '315px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  }}>
    {/* Headline — route name only (no date) */}
    <span style={font(14, 700, '#00bf6f')}>{routeName}</span>

    {/* Subhead 1 — times + link */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
      <span style={font(14, 400, '#00bf6f')}>
        {departureTime} → {arrivalTime}
      </span>
      <span style={{ ...font(12, 400, '#00bf6f'), cursor: 'pointer' }}>+Other schedules</span>
    </div>

    {/* Subhead 2 — journey breakdown */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
      <WalkIcon />
      <span style={font(12, 300, '#414141')}>{walkMinutes1}</span>
      <ArrowIcon />
      <BusIcon />
      <span style={font(12, 300, '#414141')}>{busMinutes}</span>
      <ArrowIcon />
      <WalkIcon />
      <span style={font(12, 300, '#414141')}>{walkMinutes2}</span>
    </div>

    {/* Action link */}
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '4px', paddingTop: '4px' }}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M9 9H3M9 3H3M9 3v6M3 3v6" stroke="#ea6753" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <span style={{ ...font(12, 400, '#ea6753'), cursor: 'pointer' }}>Delete route</span>
    </div>
  </div>
);

// ─── Demo ─────────────────────────────────────────────────────────────────────
export const CardsDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    {/* Example 1 — Bookings Card */}
    <div>
      <p style={{ fontSize: '11px', color: '#989898', margin: '0 0 12px' }}>Bookings Card</p>
      <BookingsCard
        headline="ONGOING"
        dateRange="18/01/2022 – 19/07/2022"
        routeDirection="Outbound route"
        routeName="AICA1 (LEROY MERLIN): CIRCULAR PARQUE EMPRESARIAL ARROYO DE LA VEGA..."
        bookingType="Flexible"
      />
    </div>

    {/* Example 3 — Routes Card */}
    <div>
      <p style={{ fontSize: '11px', color: '#989898', margin: '0 0 12px' }}>Routes Card</p>
      <RoutesCard
        routeName="Route AB"
        departureTime="07:00"
        arrivalTime="07:45"
        walkMinutes1="3min"
        busMinutes="33min"
        walkMinutes2="1min"
      />
    </div>
  </div>
);
