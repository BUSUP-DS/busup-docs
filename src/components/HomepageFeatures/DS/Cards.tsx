import React from 'react';

// Tokens from Figma
// Card: bg #ffffff, borderRadius 12px, boxShadow 0 2px 8px rgba(0,0,0,0.08), padding 16px
// Headline: 13px Bold #212121
// Subhead: 12px Regular #414141
// Body: 11px Regular #989898
// Divider: 1px #f4f4f4
// Tag Active: bg #edfff6, text #00804a, borderRadius 20px, px 8px, 10px Bold
// Tag Pending: bg #fff8e6, text #7a4f00, borderRadius 20px, px 8px, 10px Bold
// Tag Cancelled: bg #ffebee, text #b71c1c

type BookingStatus = 'Active' | 'Pending' | 'Cancelled';

const statusConfig: Record<BookingStatus, { bg: string; color: string }> = {
  Active: { bg: '#edfff6', color: '#00804a' },
  Pending: { bg: '#fff8e6', color: '#7a4f00' },
  Cancelled: { bg: '#ffebee', color: '#b71c1c' },
};

interface BookingsCardProps {
  routeName?: string;
  status?: BookingStatus;
  datetime?: string;
  route?: string;
}

export const BookingsCard = ({
  routeName = 'C3 – Lagoon Park',
  status = 'Active',
  datetime = 'Tomorrow, 08:00',
  route = 'Lagoon Park → Beta Rise',
}: BookingsCardProps) => {
  const { bg, color } = statusConfig[status];
  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      padding: '16px',
      width: '100%',
      boxSizing: 'border-box',
      cursor: 'pointer',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
        <span style={{
          fontFamily: 'var(--font-family-brand)',
          fontSize: '13px',
          fontWeight: 700,
          color: '#212121',
          lineHeight: 1.4,
        }}>
          {routeName}
        </span>
        <span style={{
          fontFamily: 'var(--font-family-brand)',
          fontSize: '10px',
          fontWeight: 700,
          color,
          background: bg,
          borderRadius: '20px',
          padding: '2px 8px',
          flexShrink: 0,
        }}>
          {status}
        </span>
      </div>
      <div style={{ height: '1px', background: '#f4f4f4', margin: '8px 0' }} />
      <p style={{
        margin: '0 0 2px',
        fontFamily: 'var(--font-family-brand)',
        fontSize: '12px',
        fontWeight: 400,
        color: '#414141',
      }}>
        {datetime}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{
          margin: 0,
          fontFamily: 'var(--font-family-brand)',
          fontSize: '11px',
          fontWeight: 400,
          color: '#989898',
        }}>
          {route}
        </p>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#989898">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </div>
    </div>
  );
};

export const CardsDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '340px' }}>
    <p style={{ fontSize: '11px', color: '#989898', margin: '0 0 4px' }}>Bookings Card — 2 states</p>
    <BookingsCard
      routeName="C3 – Lagoon Park"
      status="Active"
      datetime="Tomorrow, 08:00"
      route="Lagoon Park → Beta Rise"
    />
    <BookingsCard
      routeName="C5 – Beta Rise Express"
      status="Pending"
      datetime="Friday, 07:30"
      route="Beta Rise → Downtown"
    />
  </div>
);
