import React, { useState } from 'react';

// ─── Figma tokens (node 238:12075 — NEW-LIBRARY) ──────────────────────────────
// Container:   bg #242D31, w 248px
// Item:        h 41px, px 16px, 14px Regular white
// Active item: bg #2F3B40 (sub-items under expanded section)
// Logo:        BUSUP wordmark, centred, top 26px
// Chevron:     16px, white, right side
// Icon:        16px, left side

// ─── Icons ────────────────────────────────────────────────────────────────────

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }}>
    <path d="M3 4.5l3 3 3-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BusupLogo = () => (
  <svg height="22" viewBox="0 0 869.35 216.68" xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ffffff' }}>
    <path d="M861.55,25.72c-12.94-12.09-32-18.49-55.16-18.49H743.94V221.77h27.57V147.21h34.88c23.17,0,42.24-6.34,55.16-18.34S881.36,99,881.36,77.36,874.51,37.83,861.55,25.72Zm-52.32,96.2H771.51V32.53h37.72c28.32,0,44.56,16.34,44.56,44.83C853.79,105.26,837.13,121.92,809.23,121.92ZM153.7,67.4c0-38.24-26.81-60.17-73.55-60.17H12V221.77H75c46.74,0,73.54-22.14,73.54-60.74a48.75,48.75,0,0,0-26.14-43.59C142.08,109.43,153.7,91,153.7,67.4ZM77.87,196.48H39.58V127.29H75c28.36,0,46,12.93,46,33.74C121,183.89,105.69,196.48,77.87,196.48ZM83,102H39.58V32.53H83c27.41,0,43.13,12.71,43.13,34.87S110.81,102,83,102ZM310,7.23h27.57v135.3c0,49.58-28.18,80.38-73.54,80.38-45.54,0-73.83-30.8-73.83-80.38V7.23h27.57V139.12c0,37.52,16,57.36,46.26,57.36,30.07,0,46-19.84,46-57.36Zm206.47,70.2V79H489.27V77.43c0-26.17-18.4-45.16-43.75-45.16-25.19,0-43.47,19-43.47,45.16s18.28,45.17,43.47,45.17h1.16v26h-1.16c-40.93,0-70.64-29.94-70.64-71.2s29.71-71.2,70.64-71.2C486.61,6.23,516.43,36.18,516.43,77.43ZM673.37,7.23h27.57v135.3c0,49.58-28.18,80.38-73.55,80.38-45.54,0-73.83-30.8-73.83-80.38V7.23h27.57V139.12c0,37.52,16,57.36,46.26,57.36,30.08,0,46-19.84,46-57.36ZM516.43,151.71c0,41.26-29.82,71.2-70.91,71.2-40.93,0-70.64-29.94-70.64-71.2v-1.55h27.17v1.55c0,26.17,18.28,45.17,43.47,45.17,25.35,0,43.75-19,43.75-45.17,0-25.76-17.85-44.53-42.59-45.11v-26C487.16,81.13,516.43,110.85,516.43,151.71Z" transform="translate(-12.01 -6.23)"/>
  </svg>
);

// ─── Nav data ─────────────────────────────────────────────────────────────────

const TOP_LEVEL = ['General', 'Commuting', 'Dashboard'];
const COMMUTING_CHILDREN = ['Dashboard', 'Promoters', 'Companies', 'Sites', 'Passengers', 'Routes', 'Bookings', 'Invoicing', 'Fare', 'Datalog'];
const BOTTOM_SECTIONS = ['Events', 'Schools', 'Studies', 'Providers'];

// ─── Sub-components ───────────────────────────────────────────────────────────

const NavItem = ({ label, active, sub, open, onClick }: {
  label: string; active?: boolean; sub?: boolean; open?: boolean; onClick?: () => void;
}) => (
  <div
    onClick={onClick}
    style={{
      display: 'flex', alignItems: 'center', gap: '12px',
      height: '41px',
      padding: sub ? '8px 16px 8px 34px' : '8px 16px',
      background: active ? '#2f3b40' : 'transparent',
      cursor: onClick ? 'pointer' : 'default',
      userSelect: 'none',
    }}
  >
    {/* Icon placeholder — 16px circle */}
    <div style={{
      width: 16, height: 16, borderRadius: '50%',
      background: 'rgba(255,255,255,0.2)',
      flexShrink: 0,
    }} />
    <span style={{
      flex: 1, fontSize: '14px', fontWeight: 400,
      color: '#ffffff', lineHeight: 1.5,
      fontFamily: '"Busup Sans", sans-serif',
    }}>
      {label}
    </span>
    {open !== undefined && <ChevronIcon open={open} />}
    {open === undefined && onClick && (
      <div style={{ width: 12, height: 12, flexShrink: 0 }} />
    )}
  </div>
);

// ─── Main component ───────────────────────────────────────────────────────────

const SideMenuPanel = ({ expanded, onToggle }: { expanded: string | null; onToggle: (s: string) => void }) => (
  <div style={{
    width: 248,
    background: '#242d31',
    borderRadius: 8,
    overflow: 'hidden',
    flexShrink: 0,
  }}>
    {/* Logo */}
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      height: 79, borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <BusupLogo />
    </div>

    {/* Top-level sections */}
    {TOP_LEVEL.map(label => {
      const hasChildren = label === 'Commuting';
      const isOpen = expanded === label;
      return (
        <React.Fragment key={label}>
          <NavItem
            label={label}
            open={hasChildren ? isOpen : undefined}
            onClick={hasChildren ? () => onToggle(label) : undefined}
          />
          {hasChildren && isOpen && (
            COMMUTING_CHILDREN.map(child => (
              <NavItem key={child} label={child} active sub />
            ))
          )}
        </React.Fragment>
      );
    })}

    {/* Separator */}
    <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '4px 0' }} />

    {/* Bottom sections */}
    {BOTTOM_SECTIONS.map(label => (
      <NavItem key={label} label={label} open={false} onClick={() => onToggle(label)} />
    ))}
  </div>
);

// ─── Demo ─────────────────────────────────────────────────────────────────────

export const SideMenuDemo = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (s: string) => setExpanded(prev => prev === s ? null : s);

  return (
    <div style={{ fontFamily: '"Busup Sans", sans-serif' }}>
      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        {/* Closed state */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#989898', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Closed</p>
          <SideMenuPanel expanded={null} onToggle={() => {}} />
        </div>

        {/* Interactive state */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#989898', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Interactive — click to expand</p>
          <SideMenuPanel expanded={expanded} onToggle={toggle} />
        </div>
      </div>
    </div>
  );
};
