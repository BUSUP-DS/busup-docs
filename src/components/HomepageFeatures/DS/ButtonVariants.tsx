import React, { useState } from 'react';

// ─── Square Button ────────────────────────────────────────────────────────────
// Figma node 83:11601
// 110×109px white card, shadow-deep, border-radius 16px
// Icon container: 40×40px, Primary_100 bg (#d7ffed), rounded 30px
// Label: 12px Bold #414141

type SquareButtonProps = {
  label?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export const SquareButton = ({
  label = 'Action',
  disabled = false,
  icon,
  onClick,
}: SquareButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      width: 110,
      height: 109,
      borderRadius: 16,
      background: '#ffffff',
      border: 'none',
      boxShadow: '0px 4px 12px rgba(0,0,0,0.16)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      padding: 12,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontFamily: '"Busup Sans", sans-serif',
      boxSizing: 'border-box',
    }}
  >
    <div style={{
      width: 40,
      height: 40,
      borderRadius: 30,
      background: 'rgba(0,191,111,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}>
      {icon || (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="11" y="4" width="2" height="16" rx="1" fill="#00bf6f"/>
          <rect x="4" y="11" width="16" height="2" rx="1" fill="#00bf6f"/>
        </svg>
      )}
    </div>
    <span style={{
      fontSize: 12,
      fontWeight: 700,
      color: '#414141',
      lineHeight: 1.5,
      textAlign: 'center',
      wordBreak: 'break-word',
    }}>
      {label}
    </span>
  </button>
);

export const SquareButtonDemo = () => (
  <div style={{ fontFamily: '"Busup Sans", sans-serif', display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: 32 }}>
    <div>
      <p style={{ fontSize: 12, color: '#989898', margin: '0 0 8px' }}>Default</p>
      <SquareButton label="Add stop" />
    </div>
    <div>
      <p style={{ fontSize: 12, color: '#989898', margin: '0 0 8px' }}>Disabled</p>
      <SquareButton label="Add stop" disabled />
    </div>
  </div>
);

// ─── Link Button ──────────────────────────────────────────────────────────────
// Figma node 83:9398
// Variants: Normal | Underline  ×  Link | Disabled
// No container, no shadow — just text in Primary_300 (#00bf6f)
// Font: 10px Regular Busup Sans
// Disabled: 30% opacity
// Optional left/right icon slots (any 12px icon)

type LinkVariant = 'normal' | 'underline';
type LinkType = 'link' | 'disabled';

type LinkButtonProps = {
  text?: string;
  variant?: LinkVariant;
  type?: LinkType;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
};

// Generic chevron — represents an optional icon slot, not a specific icon
const ChevronIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
    <path d="M4.5 2.5L7.5 6L4.5 9.5" stroke="#00bf6f" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LinkButton = ({
  text = 'Button link',
  variant = 'normal',
  type = 'link',
  leftIcon,
  rightIcon,
  onClick,
}: LinkButtonProps) => (
  <button
    onClick={onClick}
    disabled={type === 'disabled'}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '8px 0',
      background: 'none',
      border: 'none',
      cursor: type === 'disabled' ? 'default' : 'pointer',
      opacity: type === 'disabled' ? 0.3 : 1,
      fontFamily: '"Busup Sans", sans-serif',
    }}
  >
    {leftIcon}
    <span style={{
      fontSize: 10,
      fontWeight: 400,
      color: '#00bf6f',
      lineHeight: 1.5,
      textDecoration: variant === 'underline' ? 'underline' : 'none',
      textUnderlineOffset: 2,
    }}>
      {text}
    </span>
    {rightIcon}
  </button>
);

// Demo label style
const demoLabel = (text: string) => (
  <p style={{ fontSize: 11, color: '#989898', margin: '0 0 2px', fontFamily: '"Busup Sans", sans-serif' }}>{text}</p>
);

export const LinkButtonDemo = () => (
  <div style={{ fontFamily: '"Busup Sans", sans-serif', marginBottom: 32 }}>
    {/* Row 1 — Normal variants */}
    <p style={{ fontSize: 11, fontWeight: 700, color: '#414141', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: 1 }}>Normal</p>
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: 20 }}>
      <div>
        {demoLabel('Default')}
        <LinkButton text="See more" variant="normal" />
      </div>
      <div>
        {demoLabel('Left icon')}
        <LinkButton text="See more" variant="normal" leftIcon={<ChevronIcon />} />
      </div>
      <div>
        {demoLabel('Right icon')}
        <LinkButton text="See more" variant="normal" rightIcon={<ChevronIcon />} />
      </div>
      <div>
        {demoLabel('Disabled')}
        <LinkButton text="See more" variant="normal" type="disabled" />
      </div>
    </div>

    {/* Row 2 — Underline variants */}
    <p style={{ fontSize: 11, fontWeight: 700, color: '#414141', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: 1 }}>Underline</p>
    <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div>
        {demoLabel('Default')}
        <LinkButton text="See more" variant="underline" />
      </div>
      <div>
        {demoLabel('Left icon')}
        <LinkButton text="See more" variant="underline" leftIcon={<ChevronIcon />} />
      </div>
      <div>
        {demoLabel('Right icon')}
        <LinkButton text="See more" variant="underline" rightIcon={<ChevronIcon />} />
      </div>
      <div>
        {demoLabel('Disabled')}
        <LinkButton text="See more" variant="underline" type="disabled" />
      </div>
    </div>
  </div>
);

// ─── Icon Button ──────────────────────────────────────────────────────────────
// Figma node 83:9415
// Variants: Icon button | Icon-light button  ×  Default | Disabled
// Size: 36×36px, border-radius 20px (pill)
// Icon button: white bg + shadow-deep
// Icon-light: no bg, shadow-deep only
// Disabled: 30% opacity

type IconButtonVariant = 'icon' | 'icon-light';

type IconButtonProps = {
  variant?: IconButtonVariant;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
};

export const IconButton = ({
  variant = 'icon',
  disabled = false,
  icon,
  onClick,
  ariaLabel = 'icon button',
}: IconButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
    style={{
      width: 36,
      height: 36,
      borderRadius: 20,
      border: 'none',
      background: variant === 'icon' ? '#ffffff' : 'transparent',
      boxShadow: disabled && variant === 'icon'
        ? '0px 2px 8px rgba(0,0,0,0.08)'
        : '0px 4px 12px rgba(0,0,0,0.16)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.3 : 1,
      padding: 12,
      boxSizing: 'border-box',
      flexShrink: 0,
    }}
  >
    {icon || (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="6.5" y="1" width="1" height="12" rx="0.5" fill="#00bf6f"/>
        <rect x="1" y="6.5" width="12" height="1" rx="0.5" fill="#00bf6f"/>
      </svg>
    )}
  </button>
);

const cellLabel = (text: string) => (
  <p style={{ fontSize: 11, color: '#989898', margin: '0 0 8px', fontFamily: '"Busup Sans", sans-serif' }}>{text}</p>
);

export const IconButtonDemo = () => (
  <div style={{ fontFamily: '"Busup Sans", sans-serif', marginBottom: 32 }}>
    {/* Column headers */}
    <div style={{ display: 'grid', gridTemplateColumns: '120px 120px', gap: '0 16px', marginBottom: 4 }}>
      <p style={{ fontSize: 11, fontWeight: 700, color: '#414141', margin: 0, textTransform: 'uppercase', letterSpacing: 1 }}>Icon button</p>
      <p style={{ fontSize: 11, fontWeight: 700, color: '#414141', margin: 0, textTransform: 'uppercase', letterSpacing: 1 }}>Icon-light</p>
    </div>

    {/* Default row */}
    <div style={{ display: 'grid', gridTemplateColumns: '120px 120px', gap: '0 16px', marginBottom: 20 }}>
      <div>
        {cellLabel('Default')}
        <IconButton variant="icon" />
      </div>
      <div>
        {cellLabel('Default')}
        <IconButton variant="icon-light" />
      </div>
    </div>

    {/* Disabled row */}
    <div style={{ display: 'grid', gridTemplateColumns: '120px 120px', gap: '0 16px' }}>
      <div>
        {cellLabel('Disabled')}
        <IconButton variant="icon" disabled />
      </div>
      <div>
        {cellLabel('Disabled')}
        <IconButton variant="icon-light" disabled />
      </div>
    </div>
  </div>
);
