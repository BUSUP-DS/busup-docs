import React from 'react';

// Tokens from Figma
// Background: #FFA000 (Alert_300)
// With number: rounded pill, px-4px, text 10px #414141, drop-shadow 0 2px 4px rgba(0,0,0,0.08)
// Dot: 8px circle, shadow 0 2px 8px rgba(0,0,0,0.08)
// Border radius: 16px

interface BadgeProps {
  numbers?: boolean;
  badgeText?: string;
}

export const Badge = ({ numbers = true, badgeText = '8' }: BadgeProps) => {
  if (!numbers) {
    return (
      <div style={{
        background: '#FFA000',
        borderRadius: '16px',
        width: '8px',
        height: '8px',
        boxShadow: '0px 2px 8px 0px rgba(0,0,0,0.08)',
        flexShrink: 0,
      }} />
    );
  }
  return (
    <div style={{
      background: '#FFA000',
      borderRadius: '16px',
      padding: '0 4px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.08))',
      minWidth: '14px',
      height: '15px',
    }}>
      <span style={{
        fontFamily: 'var(--font-family-brand)',
        fontSize: '10px',
        fontWeight: 400,
        lineHeight: 1.5,
        color: '#414141',
        whiteSpace: 'nowrap',
      }}>
        {badgeText}
      </span>
    </div>
  );
};

// Demo showing all variants in context
export const BadgeDemo = () => {
  const iconStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    background: '#f4f4f4',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const BellIcon = () => (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M10 2a6 6 0 0 1 6 6v3l1.5 2.5H2.5L4 11V8a6 6 0 0 1 6-6zm0 16a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2z" fill="#414141"/>
    </svg>
  );

  return (
    <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: '8px' }}>
      {/* With number */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '11px', color: '#989898' }}>With number</span>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div style={iconStyle}><BellIcon /></div>
          <div style={{ position: 'absolute', top: '-6px', right: '-8px' }}>
            <Badge numbers={true} badgeText="3" />
          </div>
        </div>
      </div>

      {/* Dot */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '11px', color: '#989898' }}>Dot</span>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div style={iconStyle}><BellIcon /></div>
          <div style={{ position: 'absolute', top: '-3px', right: '-3px' }}>
            <Badge numbers={false} />
          </div>
        </div>
      </div>

      {/* 99+ cap */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '11px', color: '#989898' }}>99+ cap</span>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div style={iconStyle}><BellIcon /></div>
          <div style={{ position: 'absolute', top: '-6px', right: '-12px' }}>
            <Badge numbers={true} badgeText="99+" />
          </div>
        </div>
      </div>

      {/* On avatar */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '11px', color: '#989898' }}>On avatar</span>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#d7ffed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" fill="#C4C4C4" />
              <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ position: 'absolute', top: '-3px', right: '-3px' }}>
            <Badge numbers={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
