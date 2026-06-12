import React, { useState } from 'react';

// ─── BUSUP Logo (white) ───────────────────────────────────────────────────────
// Source: LOGO VERDE2.svg — fill overridden to white

const BusupLogo = ({ height = 22 }: { height?: number }) => {
  const aspect = 869.35 / 216.68;
  return (
    <svg
      height={height}
      width={height * aspect}
      viewBox="0 0 869.35 216.68"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <path
        fill="#ffffff"
        d="M861.55,25.72c-12.94-12.09-32-18.49-55.16-18.49H743.94V221.77h27.57V147.21h34.88c23.17,0,42.24-6.34,55.16-18.34S881.36,99,881.36,77.36,874.51,37.83,861.55,25.72Zm-52.32,96.2H771.51V32.53h37.72c28.32,0,44.56,16.34,44.56,44.83C853.79,105.26,837.13,121.92,809.23,121.92ZM153.7,67.4c0-38.24-26.81-60.17-73.55-60.17H12V221.77H75c46.74,0,73.54-22.14,73.54-60.74a48.75,48.75,0,0,0-26.14-43.59C142.08,109.43,153.7,91,153.7,67.4ZM77.87,196.48H39.58V127.29H75c28.36,0,46,12.93,46,33.74C121,183.89,105.69,196.48,77.87,196.48ZM83,102H39.58V32.53H83c27.41,0,43.13,12.71,43.13,34.87S110.81,102,83,102ZM310,7.23h27.57v135.3c0,49.58-28.18,80.38-73.54,80.38-45.54,0-73.83-30.8-73.83-80.38V7.23h27.57V139.12c0,37.52,16,57.36,46.26,57.36,30.07,0,46-19.84,46-57.36Zm206.47,70.2V79H489.27V77.43c0-26.17-18.4-45.16-43.75-45.16-25.19,0-43.47,19-43.47,45.16s18.28,45.17,43.47,45.17h1.16v26h-1.16c-40.93,0-70.64-29.94-70.64-71.2s29.71-71.2,70.64-71.2C486.61,6.23,516.43,36.18,516.43,77.43ZM673.37,7.23h27.57v135.3c0,49.58-28.18,80.38-73.55,80.38-45.54,0-73.83-30.8-73.83-80.38V7.23h27.57V139.12c0,37.52,16,57.36,46.26,57.36,30.08,0,46-19.84,46-57.36ZM516.43,151.71c0,41.26-29.82,71.2-70.91,71.2-40.93,0-70.64-29.94-70.64-71.2v-1.55h27.17v1.55c0,26.17,18.28,45.17,43.47,45.17,25.35,0,43.75-19,43.75-45.17,0-25.76-17.85-44.53-42.59-45.11v-26C487.16,81.13,516.43,110.85,516.43,151.71Z"
        transform="translate(-12.01 -6.23)"
      />
    </svg>
  );
};

// ─── Navigation Header ────────────────────────────────────────────────────────
// Figma node 209:2720
// bg #00bf6f, h 67px, BUSUP logo left, nav links center, language + user right
// Active nav: 14px Bold white | Inactive nav: 14px Regular #049157

type NavItem = { label: string; active?: boolean };

const DEFAULT_NAV: NavItem[] = [
  { label: 'Search routes', active: true },
  { label: 'My bookings' },
  { label: 'For companies' },
];

export const NavigationHeader = ({
  navItems = DEFAULT_NAV,
  language = 'English',
  userEmail = 'user@busup.com',
}: {
  navItems?: NavItem[];
  language?: string;
  userEmail?: string;
}) => {
  const [activeIdx, setActiveIdx] = useState(navItems.findIndex(n => n.active) ?? 0);
  return (
    <div style={{
      background: '#00bf6f',
      height: 67,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      fontFamily: '"Busup Sans", sans-serif',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      {/* Logo */}
      <BusupLogo height={22} />

      {/* Nav links */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {navItems.map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 14,
              fontWeight: i === activeIdx ? 700 : 400,
              color: i === activeIdx ? '#ffffff' : '#049157',
              padding: '0 24px', height: 67,
              fontFamily: '"Busup Sans", sans-serif',
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Right: language + user */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <span style={{ fontSize: 14, fontWeight: 400, color: '#ffffff', display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6.5" stroke="#ffffff" strokeWidth="1.2"/>
            <ellipse cx="8" cy="8" rx="3" ry="6.5" stroke="#ffffff" strokeWidth="1.2"/>
            <path d="M1.5 8h13M2 5h12M2 11h12" stroke="#ffffff" strokeWidth="1.2"/>
          </svg>
          {language}
        </span>
        <span style={{ fontSize: 14, fontWeight: 400, color: '#ffffff', display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="4" r="2.5" stroke="#ffffff" strokeWidth="1.2"/>
            <path d="M1.5 13c0-3 2.5-4.5 5.5-4.5s5.5 1.5 5.5 4.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          {userEmail}
        </span>
      </div>
    </div>
  );
};

export const NavigationHeaderDemo = () => (
  <div style={{ fontFamily: '"Busup Sans", sans-serif', borderRadius: 8, overflow: 'hidden' }}>
    <NavigationHeader />
  </div>
);

// ─── Search Bar ───────────────────────────────────────────────────────────────
// Figma node 226:4130 / 209:4654
// Desktop: horizontal row — Origin (req) + Destination (req) + Date + Time + Search button
// Field: border 1px solid #989898, border-radius 8px, bg rgba(255,255,255,0.3), padding 12px 16px
// Label: 16px Regular #414141 | Required *: 12px #e53935 | Value: 16px Regular #414141

type SearchField = {
  label: string;
  required?: boolean;
  placeholder: string;
  icon?: 'dropdown' | 'calendar';
  flex?: number;
};

const SEARCH_FIELDS: SearchField[] = [
  { label: 'Origin',      required: true,  placeholder: 'Stop or address…',   icon: 'dropdown', flex: 2 },
  { label: 'Destination', required: true,  placeholder: 'Enter your destination', icon: 'dropdown', flex: 2 },
  { label: 'Date',        required: false, placeholder: 'Select a date',       icon: 'calendar', flex: 1 },
  { label: 'Time',        required: false, placeholder: 'Select a time',       icon: 'calendar', flex: 1 },
];

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="3" width="14" height="12" rx="2" stroke="#989898" strokeWidth="1.2" fill="none"/>
    <path d="M5 1v4M11 1v4M1 7h14" stroke="#989898" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const ChevronIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 4l4 4 4-4" stroke="#989898" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SearchBar = () => (
  <div style={{
    display: 'flex',
    alignItems: 'flex-end',
    gap: 16,
    padding: '20px 24px',
    background: '#ffffff',
    borderRadius: 8,
    boxShadow: '0px 2px 8px rgba(0,0,0,0.08)',
    fontFamily: '"Busup Sans", sans-serif',
    flexWrap: 'wrap',
  }}>
    {SEARCH_FIELDS.map((field, i) => (
      <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: field.flex, minWidth: 140 }}>
        <div style={{ display: 'flex', gap: 2, paddingLeft: 4 }}>
          <span style={{ fontSize: 16, fontWeight: 400, color: '#414141', lineHeight: 1.5 }}>{field.label}</span>
          {field.required && <span style={{ fontSize: 12, color: '#e53935', lineHeight: 1.5 }}>*</span>}
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          border: '1px solid #989898', borderRadius: 8,
          background: 'rgba(255,255,255,0.3)',
          padding: '12px 16px',
        }}>
          {field.icon === 'calendar' && <CalendarIcon />}
          <span style={{ flex: 1, fontSize: 16, fontWeight: 400, color: '#414141', lineHeight: 1.5 }}>
            {field.placeholder}
          </span>
          <ChevronIcon />
        </div>
      </div>
    ))}
    {/* Search button */}
    <button style={{
      height: 46, padding: '0 24px',
      background: '#00bf6f', border: 'none', borderRadius: 20,
      fontSize: 14, fontWeight: 700, color: '#ffffff',
      cursor: 'pointer', flexShrink: 0,
      boxShadow: '0px 4px 12px rgba(0,0,0,0.16)',
      fontFamily: '"Busup Sans", sans-serif',
    }}>
      Search
    </button>
  </div>
);

export const SearchBarDemo = () => (
  <div style={{ fontFamily: '"Busup Sans", sans-serif' }}>
    <SearchBar />
  </div>
);

// ─── Title ────────────────────────────────────────────────────────────────────
// Figma node 209:4627
// 6 variants: 24/20/16px × Regular/Bold, color #000000
// line-height: 1.2 for 24px, 1.5 for 20px and 16px

type TitleSize = '24px regular' | '20px regular' | '16px regular' | '24px bold' | '20px bold' | '16px bold';

const TITLE_STYLES: Record<TitleSize, { size: number; weight: number; lineHeight: number }> = {
  '24px regular': { size: 24, weight: 400, lineHeight: 1.2 },
  '20px regular': { size: 20, weight: 400, lineHeight: 1.5 },
  '16px regular': { size: 16, weight: 400, lineHeight: 1.5 },
  '24px bold':    { size: 24, weight: 700, lineHeight: 1.2 },
  '20px bold':    { size: 20, weight: 700, lineHeight: 1.5 },
  '16px bold':    { size: 16, weight: 700, lineHeight: 1.5 },
};

export const Title = ({ text = 'Section title', variant = '24px regular' }: { text?: string; variant?: TitleSize }) => {
  const s = TITLE_STYLES[variant];
  return (
    <p style={{
      fontSize: s.size, fontWeight: s.weight, lineHeight: s.lineHeight,
      color: '#000000', margin: 0,
      fontFamily: '"Busup Sans", sans-serif',
    }}>
      {text}
    </p>
  );
};

export const TitleDemo = () => (
  <div style={{ fontFamily: '"Busup Sans", sans-serif', display: 'flex', flexDirection: 'column', gap: 20, padding: '8px 0' }}>
    {(Object.keys(TITLE_STYLES) as TitleSize[]).map(variant => (
      <div key={variant} style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
        <span style={{ fontSize: 11, color: '#989898', width: 90, flexShrink: 0 }}>{variant}</span>
        <Title text="Section title" variant={variant} />
      </div>
    ))}
  </div>
);

// ─── Calendar Modal ───────────────────────────────────────────────────────────
// Figma node 209:2825
// Container: white, border-radius 8px, 305px wide
// Header: month/year 14px Bold #414141 + chevron
// Day headers: Mo–Su, 14px Light #212121
// Day numbers: 12px Light
//   Available: #212121 / #414141
//   Unavailable (weekend prior month): #dbdbdb
//   Selected: green circle #00bf6f, 12px Bold white
// Apply: 10px Bold white, #00bf6f, border-radius 20px, shadow-deep

type CalendarModalProps = { onClose: () => void; onApply: (date: string) => void };

const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

function buildCalendar(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const offset = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();
  const cells: { day: number; type: 'prev' | 'current' | 'next' }[] = [];
  for (let i = offset - 1; i >= 0; i--) cells.push({ day: daysInPrev - i, type: 'prev' });
  for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, type: 'current' });
  while (cells.length % 7 !== 0) cells.push({ day: cells.length - daysInMonth - offset + 1, type: 'next' });
  return cells;
}

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export const CalendarModal = ({ onClose, onApply }: CalendarModalProps) => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selected, setSelected] = useState<number | null>(today.getDate());
  const cells = buildCalendar(year, month);

  const prevMonth = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); };
  const nextMonth = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); };

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'rgba(70,70,70,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000,
    }} onClick={onClose}>
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#ffffff', borderRadius: 8,
          boxShadow: '0px 4px 12px rgba(0,0,0,0.16)',
          width: 305, padding: '16px',
          fontFamily: '"Busup Sans", sans-serif',
        }}
      >
        {/* Month navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
          <button onClick={prevMonth} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: '#414141' }}>
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M8 2L4 6l4 4" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#414141' }}>
            {MONTH_NAMES[month]}, {year}
          </span>
          <button onClick={nextMonth} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: '#414141' }}>
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M4 2l4 4-4 4" stroke="#414141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        {/* Day headers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: 8 }}>
          {DAYS.map(d => (
            <div key={d} style={{ textAlign: 'center', fontSize: 14, fontWeight: 300, color: '#212121', padding: '4px 0' }}>{d}</div>
          ))}
        </div>

        {/* Day cells */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', rowGap: 4 }}>
          {cells.map((cell, i) => {
            const isSelected = cell.type === 'current' && cell.day === selected;
            const isOtherMonth = cell.type !== 'current';
            return (
              <div
                key={i}
                onClick={() => cell.type === 'current' && setSelected(cell.day)}
                style={{
                  textAlign: 'center', padding: '3px 0', cursor: cell.type === 'current' ? 'pointer' : 'default',
                  position: 'relative',
                }}
              >
                <span style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 24, height: 24, borderRadius: '50%',
                  background: isSelected ? '#00bf6f' : 'transparent',
                  fontSize: 12, fontWeight: isSelected ? 700 : 300,
                  color: isSelected ? '#ffffff' : isOtherMonth ? '#dbdbdb' : '#414141',
                }}>
                  {cell.day}
                </span>
              </div>
            );
          })}
        </div>

        {/* Apply */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
          <button
            onClick={() => { if (selected) onApply(`${MONTH_NAMES[month]} ${selected}, ${year}`); onClose(); }}
            style={{
              padding: '4px 24px', background: '#00bf6f', border: 'none',
              borderRadius: 20, fontSize: 10, fontWeight: 700, color: '#ffffff',
              cursor: 'pointer', boxShadow: '0px 4px 12px rgba(0,0,0,0.16)',
              fontFamily: '"Busup Sans", sans-serif',
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export const CalendarModalDemo = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');
  return (
    <div style={{ fontFamily: '"Busup Sans", sans-serif', display: 'flex', alignItems: 'center', gap: 12 }}>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: '8px 20px', background: '#ffffff', border: 'none',
          borderRadius: 20, fontSize: 13, fontWeight: 700, color: '#00bf6f',
          cursor: 'pointer', boxShadow: '0px 4px 12px rgba(0,0,0,0.16)',
        }}
      >
        {date || 'Select date'}
      </button>
      {open && <CalendarModal onClose={() => setOpen(false)} onApply={d => setDate(d)} />}
    </div>
  );
};
