import React, { useState } from 'react';

// Tokens from Figma
// Container: bg #242421, height 72px (+ safe area), padding 0 16px
// Active icon + label: #00bf6f (Primary_300)
// Inactive: #ffffff (White)
// Label: 10px Light (300)
// Icons: 24px, inline SVG

type NavItem = 'Home' | 'Routes' | 'Ticket' | 'Bookings' | 'Profile';

const icons: Record<NavItem, (active: boolean) => React.ReactNode> = {
  Home: (active) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 22V12h6v10" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Routes: (active) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="6" r="3" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.5" />
      <circle cx="18" cy="18" r="3" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.5" />
      <path d="M6 9v3a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Ticket: (active) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.5" />
      <path d="M3 10h18" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.5" />
      <rect x="7" y="13" width="4" height="3" rx="0.5" fill={active ? '#00bf6f' : '#ffffff'} />
    </svg>
  ),
  Bookings: (active) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.5" />
      <path d="M16 2v4M8 2v4M3 10h18" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="15" r="1.5" fill={active ? '#00bf6f' : '#ffffff'} />
      <circle cx="12" cy="15" r="1.5" fill={active ? '#00bf6f' : '#ffffff'} />
      <circle cx="16" cy="15" r="1.5" fill={active ? '#00bf6f' : '#ffffff'} />
    </svg>
  ),
  Profile: (active) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.5" />
      <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke={active ? '#00bf6f' : '#ffffff'} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

const navItems: NavItem[] = ['Home', 'Routes', 'Ticket', 'Bookings', 'Profile'];

interface NavigationBarProps {
  active?: NavItem;
  onChange?: (item: NavItem) => void;
}

export const NavigationBar = ({ active = 'Home', onChange }: NavigationBarProps) => (
  <div style={{
    background: '#242421',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '12px 8px 16px',
    borderRadius: '0 0 20px 20px',
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
            gap: '2px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '4px 8px',
            minWidth: '48px',
          }}
        >
          {icons[item](isActive)}
          <span style={{
            fontFamily: 'var(--font-family-brand)',
            fontSize: '10px',
            fontWeight: 300,
            color: isActive ? '#00bf6f' : '#ffffff',
            lineHeight: 1.4,
          }}>
            {item}
          </span>
        </button>
      );
    })}
  </div>
);

export const NavigationBarDemo = () => {
  const [active, setActive] = useState<NavItem>('Home');
  return (
    <div style={{ maxWidth: '375px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}>
      <NavigationBar active={active} onChange={setActive} />
    </div>
  );
};
