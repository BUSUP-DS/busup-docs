import React, { useState } from 'react';

// ─── Figma tokens (node 233:3001 — NEW-LIBRARY) ───────────────────────────────
// Header:       h 50px, border-bottom 1px #00bf6f, p 12px
//               title 20px Regular #00bf6f, chevron 24px
// TextInput:    border 1px #c4c4c4, bg rgba(255,255,255,0.3), rounded 8px
//               px 16px py 12px, 14px Regular #414141 (value) / #dbdbdb (placeholder)
//               label 14px Regular #414141 | mandatory asterisk 12px #e53935
//               active border: #989898
// Dropdown:     same input shell + chevron; option list: bg white,
//               shadow 0px 4px 12px rgba(0,0,0,0.16), rounded 8px
//               item: 12px Light black, px 12px py 8px
//               focused item: bg #f4f4f4 (focus only, NOT selected state)
//               checkbox 14px rounded 2px, checked bg #00bf6f
// Buttons:      Primary: bg #00bf6f, shadow-deep, rounded 20px, px 24px py 8px, 14px Bold white
//               Secondary: bg white, border 1px #00bf6f, same sizing, 14px Bold #00bf6f
//               w 148px each, aligned bottom-right of panel

// ─── Icons ────────────────────────────────────────────────────────────────────

const ChevronDownIcon = ({ color = '#00bf6f', size = 24 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronUpIcon = ({ color = '#00bf6f', size = 24 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M18 15l-6-6-6 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
    <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Sub-components ───────────────────────────────────────────────────────────

const FilterLabel = ({ text, mandatory }: { text: string; mandatory?: boolean }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 0, paddingLeft: '4px' }}>
    <span style={{ fontSize: '14px', fontWeight: 400, color: '#414141', lineHeight: 1.5, whiteSpace: 'nowrap' }}>
      {text}
    </span>
    {mandatory && (
      <span style={{ fontSize: '12px', color: '#e53935', lineHeight: 1.5, marginLeft: '2px' }}>*</span>
    )}
  </div>
);

// Text input field
const FilterTextInput = ({
  label, placeholder, value, onChange, mandatory, active,
}: { label: string; placeholder: string; value: string; onChange: (v: string) => void; mandatory?: boolean; active?: boolean }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, minWidth: '200px' }}>
    <FilterLabel text={label} mandatory={mandatory} />
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 16px',
      background: 'rgba(255,255,255,0.3)',
      border: `1px solid ${active ? '#989898' : '#c4c4c4'}`,
      borderRadius: '8px',
    }}>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          border: 'none', outline: 'none', background: 'transparent',
          fontSize: '14px', fontWeight: 400,
          color: value ? '#414141' : '#dbdbdb',
          lineHeight: 1.5, flex: 1, minWidth: 0,
        }}
      />
    </div>
  </div>
);

// Dropdown — supports single or multi select
const FilterDropdown = ({
  label, options, selected, onToggle, mandatory, multi = true,
}: { label: string; options: string[]; selected: string[]; onToggle: (v: string) => void; mandatory?: boolean; multi?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSelect = (opt: string) => {
    if (!multi) {
      onToggle(opt);
      setOpen(false);
    } else {
      onToggle(opt);
    }
  };

  const displayValue = selected.length > 0 ? selected.join(', ') : '';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, minWidth: '200px', position: 'relative' }}>
      <FilterLabel text={label} mandatory={mandatory} />
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '12px 16px',
          background: 'rgba(255,255,255,0.3)',
          border: `1px solid ${open ? '#989898' : '#c4c4c4'}`,
          borderRadius: '8px', cursor: 'pointer', userSelect: 'none',
        }}
      >
        <span style={{
          fontSize: '14px', fontWeight: 400, lineHeight: 1.5, flex: 1,
          color: displayValue ? '#414141' : '#dbdbdb',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {displayValue || 'Select…'}
        </span>
        <ChevronDownIcon color="#414141" size={16} />
      </div>

      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0,
          background: '#ffffff', borderRadius: '8px',
          boxShadow: '0px 4px 12px rgba(0,0,0,0.16)', zIndex: 10, overflow: 'hidden',
        }}>
          {options.map(opt => {
            const checked = selected.includes(opt);
            return (
              <div
                key={opt}
                onClick={() => handleSelect(opt)}
                onMouseEnter={() => setFocused(opt)}
                onMouseLeave={() => setFocused(null)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '8px 12px',
                  background: focused === opt ? '#f4f4f4' : '#ffffff',
                  cursor: 'pointer',
                }}
              >
                {multi && (
                  <div style={{
                    width: '14px', height: '14px', flexShrink: 0,
                    border: checked ? 'none' : '1px solid #989898',
                    borderRadius: '2px',
                    background: checked ? '#00bf6f' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {checked && <CheckIcon />}
                  </div>
                )}
                <span style={{ fontSize: '12px', fontWeight: 300, color: '#212121', lineHeight: 1.5 }}>
                  {opt}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// ─── Demo ─────────────────────────────────────────────────────────────────────

const COMPANIES = ['Alsa', 'BUSUP ES', 'BUSUP PT', 'Amazon'];
const TYPES     = ['Commuting', 'On Demand', 'Schools', 'D2D'];
const STATUSES  = ['Active', 'Inactive', 'Pending'];

export const FiltersDemo = () => {
  const [open, setOpen]         = useState(true);
  const [company, setCompany]   = useState<string[]>([]);
  const [types, setTypes]       = useState<string[]>([]);
  const [statuses, setStatuses] = useState<string[]>([]);
  const [search, setSearch]     = useState('');

  const toggleType   = (v: string) => setTypes(s => s.includes(v) ? s.filter(x => x !== v) : [...s, v]);
  const toggleStatus = (v: string) => setStatuses(s => s.includes(v) ? s.filter(x => x !== v) : [...s, v]);
  const toggleCompany = (v: string) => setCompany([v]); // single select

  // Apply requires mandatory fields (Company is mandatory in this demo)
  const canApply = company.length > 0;

  const handleClear = () => { setCompany([]); setTypes([]); setStatuses([]); setSearch(''); };

  return (
    <div style={{ fontFamily: 'var(--font-family-brand, sans-serif)', maxWidth: '760px' }}>
      <div style={{ background: '#ffffff', border: '1px solid #c4c4c4', borderRadius: '8px' }}>

        {/* Header */}
        <div
          onClick={() => setOpen(o => !o)}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            height: '50px', padding: '12px',
            borderBottom: `1px solid ${open ? '#00bf6f' : 'transparent'}`,
            cursor: 'pointer', userSelect: 'none',
          }}
        >
          <span style={{ fontSize: '20px', fontWeight: 400, color: '#00bf6f', lineHeight: 1.5 }}>
            Filters
          </span>
          {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>

        {/* Body */}
        {open && (
          <div style={{ padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Filter fields */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
              <FilterDropdown
                label="Company"
                options={COMPANIES}
                selected={company}
                onToggle={toggleCompany}
                mandatory
                multi={false}
              />
              <FilterDropdown
                label="Type"
                options={TYPES}
                selected={types}
                onToggle={toggleType}
                multi={true}
              />
              <FilterDropdown
                label="Status"
                options={STATUSES}
                selected={statuses}
                onToggle={toggleStatus}
                multi={true}
              />
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
              <button
                onClick={handleClear}
                style={{
                  width: '148px', padding: '8px 24px',
                  background: '#ffffff', border: '1px solid #00bf6f',
                  borderRadius: '20px', cursor: 'pointer',
                  fontSize: '14px', fontWeight: 700, color: '#00bf6f', lineHeight: 1.5,
                }}
              >
                Clear all
              </button>
              <button
                disabled={!canApply}
                style={{
                  width: '148px', padding: '8px 24px',
                  background: canApply ? '#00bf6f' : '#c4c4c4',
                  border: 'none', borderRadius: '20px',
                  cursor: canApply ? 'pointer' : 'default',
                  fontSize: '14px', fontWeight: 700, color: '#ffffff', lineHeight: 1.5,
                  boxShadow: canApply ? '0px 4px 6px rgba(0,0,0,0.16)' : 'none',
                  transition: 'background 0.2s',
                }}
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
