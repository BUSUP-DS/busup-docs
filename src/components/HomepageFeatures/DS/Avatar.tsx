import React from 'react';

// Tokens from Figma
// Avatar circle: 86x86px, bg #d7ffed (Primary_100), icon #C4C4C4 (Neutral_200)
// Hero: same avatar + text 14px #212121 + edit link 10px #00bf6f below
// Font: Busup Sans Regular

const ProfileIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
    <circle cx="30" cy="22" r="12" fill="#C4C4C4" />
    <path d="M6 54c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="#C4C4C4" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

interface AvatarProps {
  property1?: 'Default';
  size?: number;
}

export const AvatarComponent = ({ size = 86 }: AvatarProps) => (
  <div style={{
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    background: '#d7ffed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    overflow: 'hidden',
  }}>
    <ProfileIcon size={size * 0.7} />
  </div>
);

interface HeroProps {
  avatarText?: string;
  edit?: boolean;
  editText?: string;
}

export const Hero = ({
  avatarText = 'Victoria C.',
  edit = true,
  editText = 'Edit',
}: HeroProps) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    width: '111px',
  }}>
    <AvatarComponent size={86} />
    <span style={{
      fontFamily: 'var(--font-family-brand)',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#212121',
      textAlign: 'center',
      width: '100%',
    }}>
      {avatarText}
    </span>
    {edit && (
      <span style={{
        fontFamily: 'var(--font-family-brand)',
        fontSize: '10px',
        fontWeight: 400,
        lineHeight: 1.5,
        color: '#00bf6f',
        textAlign: 'center',
        width: '100%',
      }}>
        {editText}
      </span>
    )}
  </div>
);

export const AvatarDemo = () => (
  <div style={{ display: 'flex', gap: '48px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
      <span style={{ fontSize: '11px', color: '#989898' }}>Default</span>
      <AvatarComponent size={86} />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
      <span style={{ fontSize: '11px', color: '#989898' }}>Hero</span>
      <Hero avatarText="Victoria C." edit={true} editText="Edit" />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
      <span style={{ fontSize: '11px', color: '#989898' }}>Hero — no edit</span>
      <Hero avatarText="Victoria C." edit={false} />
    </div>
  </div>
);
