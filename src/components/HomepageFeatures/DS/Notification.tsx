import React from 'react';

// Tokens from Figma
// Unread: bg #ffffff, left border 3px solid #00bf6f, boxShadow 0 2px 8px rgba(0,0,0,0.08)
// Read: bg #f4f4f4, no border accent
// Title: 12px Bold #212121
// Body: 11px Regular #414141
// Timestamp: 10px Regular #989898
// BorderRadius: 8px, Padding: 12px 16px

interface NotificationItemProps {
  read?: boolean;
  title?: string;
  body?: string;
  timestamp?: string;
  icon?: React.ReactNode;
}

export const NotificationItem = ({
  read = false,
  title = 'Your booking is confirmed',
  body = 'C3 – Lagoon Park → Beta Rise · Tomorrow, 08:00',
  timestamp = '2 min ago',
}: NotificationItemProps) => (
  <div style={{
    background: read ? '#f4f4f4' : '#ffffff',
    borderRadius: '8px',
    boxShadow: read ? 'none' : '0 2px 8px rgba(0,0,0,0.08)',
    padding: '12px 16px',
    borderLeft: read ? 'none' : '3px solid #00bf6f',
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
  }}>
    {/* Bell icon */}
    <div style={{
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      background: read ? '#e0e0e0' : '#d7ffed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <path d="M10 2a6 6 0 0 1 6 6v3l1.5 2.5H2.5L4 11V8a6 6 0 0 1 6-6zm0 16a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2z"
          fill={read ? '#989898' : '#00bf6f'} />
      </svg>
    </div>

    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
        <span style={{
          fontFamily: 'var(--font-family-brand)',
          fontSize: '12px',
          fontWeight: 700,
          color: read ? '#414141' : '#212121',
          lineHeight: 1.4,
        }}>
          {title}
        </span>
        <span style={{
          fontFamily: 'var(--font-family-brand)',
          fontSize: '10px',
          fontWeight: 400,
          color: '#989898',
          flexShrink: 0,
        }}>
          {timestamp}
        </span>
      </div>
      <span style={{
        fontFamily: 'var(--font-family-brand)',
        fontSize: '11px',
        fontWeight: 400,
        color: '#414141',
        display: 'block',
        marginTop: '2px',
        lineHeight: 1.5,
      }}>
        {body}
      </span>
    </div>
  </div>
);

export const NotificationDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '400px' }}>
    <NotificationItem
      read={false}
      title="Your booking is confirmed"
      body="C3 – Lagoon Park → Beta Rise · Tomorrow, 08:00"
      timestamp="2 min ago"
    />
    <NotificationItem
      read={false}
      title="Ride starts in 30 minutes"
      body="Head to Lagoon Park Stop by 05:50"
      timestamp="28 min ago"
    />
    <NotificationItem
      read={true}
      title="Booking cancelled"
      body="C5 – Beta Rise Express · Friday, 07:30"
      timestamp="Yesterday"
    />
    <NotificationItem
      read={true}
      title="Route C3 is now available"
      body="Check schedules and book your seat"
      timestamp="2 days ago"
    />
  </div>
);
