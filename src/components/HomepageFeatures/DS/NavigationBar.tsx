import React, { useState } from 'react';

// ─── Figma tokens (nodes 32:972–32:1053) ─────────────────────────────────────
// Container:  bg #242421, padding 12px 20px, gap 50px, justify-content center
// Items:      Home | Bookings | Check-in | Routes | Account
// Active:     #00bf6f (Primary_300)
// Inactive:   #ffffff
// Label:      10px Light (300), line-height 1.5
// Icon size:  16px, gap to label: 3px

type NavItem = 'Home' | 'Bookings' | 'Check-in' | 'Routes' | 'Account';

const HomeIcon = ({ active }: { active: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M2 6.5L8 2l6 4.5V14a.667.667 0 0 1-.667.667H2.667A.667.667 0 0 1 2 14V6.5z"
      stroke={active ? '#00bf6f' : '#ffffff'}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 14.667V8.667h4v6"
      stroke={active ? '#00bf6f' : '#ffffff'}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BookingsIcon = ({ active }: { active: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="1.5" width="12" height="13" rx="1.5" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.2" />
    <path d="M5 5.5h6M5 8h6M5 10.5h4" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="3.5" cy="5.5" r="0.7" fill={active ? '#00bf6f' : '#ffffff'} />
    <circle cx="3.5" cy="8" r="0.7" fill={active ? '#00bf6f' : '#ffffff'} />
    <circle cx="3.5" cy="10.5" r="0.7" fill={active ? '#00bf6f' : '#ffffff'} />
  </svg>
);

const CheckInIcon = ({ active }: { active: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    {/* QR code grid */}
    <rect x="1.5" y="1.5" width="5" height="5" rx="0.8" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.2" />
    <rect x="3" y="3" width="2" height="2" fill={active ? '#00bf6f' : '#ffffff'} />
    <rect x="9.5" y="1.5" width="5" height="5" rx="0.8" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.2" />
    <rect x="11" y="3" width="2" height="2" fill={active ? '#00bf6f' : '#ffffff'} />
    <rect x="1.5" y="9.5" width="5" height="5" rx="0.8" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.2" />
    <rect x="3" y="11" width="2" height="2" fill={active ? '#00bf6f' : '#ffffff'} />
    <path d="M9.5 9.5h2v2H9.5zM11.5 11.5h2v2H11.5zM9.5 13.5h2v1H9.5zM13.5 9.5h1v2H13.5z" fill={active ? '#00bf6f' : '#ffffff'} />
  </svg>
);

const RoutesIcon = ({ active }: { active: boolean }) => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
    <circle cx="4" cy="4.5" r="2.5" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.2" />
    <circle cx="12" cy="12.5" r="2.5" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.2" />
    <path
      d="M4 7v1.5a3 3 0 0 0 3 3H10a2 2 0 0 1 2 2"
      stroke={active ? '#00bf6f' : '#ffffff'}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const AccountIcon = ({ active }: { active: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="5.5" r="3" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.2" />
    <path
      d="M1.5 14c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5"
      stroke={active ? '#00bf6f' : '#ffffff'}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const navItems: NavItem[] = ['Home', 'Bookings', 'Check-in', 'Routes', 'Account'];

const iconMap: Record<NavItem, (active: boolean) => React.ReactNode> = {
  Home: (a) => <HomeIcon active={a} />,
  Bookings: (a) => <BookingsIcon active={a} />,
  'Check-in': (a) => <CheckInIcon active={a} />,
  Routes: (a) => <RoutesIcon active={a} />,
  Account: (a) => <AccountIcon active={a} />,
};

interface NavigationBarProps {
  active?: NavItem;
  onChange?: (item: NavItem) => void;
}

export const NavigationBar = ({ active = 'Home', onChange }: NavigationBarProps) => (
  <div style={{
    background: '#242421',
    display: 'inline-flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: '50px',
    padding: '12px 20px',
    width: '100%',
    boxSizing: 'border-box',
  }}>
    {navItems.map(item => {
      const isActive = item === active;
      return (
        <button
          key={item}
          onClick={() => onChange?.(item)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          {iconMap[item](isActive)}
          <span style={{
            fontFamily: 'var(--font-family-brand)',
            fontSize: '10px',
            fontWeight: 300,
            color: isActive ? '#00bf6f' : '#ffffff',
            lineHeight: 1.5,
            whiteSpace: 'nowrap',
          }}>
            {item}
          </span>
        </button>
      );
    })}
  </div>
);

// ─── Demo ─────────────────────────────────────────────────────────────────────
export const NavigationBarDemo = () => {
  const [active, setActive] = useState<NavItem>('Home');
  return (
    <div style={{ display: 'inline-block', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}>
      <NavigationBar active={active} onChange={setActive} />
    </div>
  );
};
