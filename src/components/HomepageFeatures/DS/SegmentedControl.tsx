import React, { useState } from 'react';

// Tokens from Figma
// Selected: bg white, border 1px solid #212121, borderRadius 20px, padding 8px 24px,
//           boxShadow 0px 4px 6px rgba(0,0,0,0.16), font bold 10px #212121
// Default:  bg transparent, borderRadius 20px, padding 8px 24px, font regular 10px #212121
// Container: bg #f4f4f4, borderRadius 24px, padding 4px

interface SegmentedControlProps {
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

export const SegmentedControl = ({ options, value, onChange }: SegmentedControlProps) => (
  <div style={{
    display: 'inline-flex',
    background: '#f4f4f4',
    borderRadius: '24px',
    padding: '4px',
    gap: '2px',
  }}>
    {options.map(opt => {
      const selected = opt === value;
      return (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          style={{
            padding: '8px 24px',
            borderRadius: '20px',
            border: selected ? '1px solid #212121' : '1px solid transparent',
            background: selected ? '#ffffff' : 'transparent',
            boxShadow: selected ? '0px 4px 6px rgba(0,0,0,0.16)' : 'none',
            fontFamily: 'var(--font-family-brand)',
            fontSize: '10px',
            fontWeight: selected ? 700 : 400,
            color: '#212121',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            whiteSpace: 'nowrap',
          }}
        >
          {opt}
        </button>
      );
    })}
  </div>
);

export const SegmentedControlDemo = () => {
  const [tab1, setTab1] = useState('Upcoming');
  const [tab2, setTab2] = useState('Shuttle');
  const [tab3, setTab3] = useState('06:00');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Example 1: Standard navigation tabs */}
      <div>
        <p style={{ fontSize: '11px', color: '#989898', marginBottom: '12px', marginTop: 0 }}>
          Navigation — 3 options
        </p>
        <SegmentedControl
          options={['Upcoming', 'Active', 'History']}
          value={tab1}
          onChange={setTab1}
        />
      </div>

      {/* Example 2: Route type filter */}
      <div>
        <p style={{ fontSize: '11px', color: '#989898', marginBottom: '12px', marginTop: 0 }}>
          Route type — 3 options
        </p>
        <SegmentedControl
          options={['Shuttle', 'Circular', 'On demand']}
          value={tab2}
          onChange={setTab2}
        />
      </div>

      {/* Example 3: Expedition times */}
      <div>
        <p style={{ fontSize: '11px', color: '#989898', marginBottom: '12px', marginTop: 0 }}>
          Expedition times — 6 options (horizontally scrollable)
        </p>
        <div style={{ overflowX: 'auto', paddingBottom: '4px' }}>
          <SegmentedControl
            options={['06:00', '06:30', '07:00', '07:30', '08:00', '08:30']}
            value={tab3}
            onChange={setTab3}
          />
        </div>
      </div>
    </div>
  );
};
