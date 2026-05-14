import React, { useState } from 'react';

interface TabsProps {
  tabs: string[];
  system?: 'iOS' | 'Android';
  defaultTab?: number;
}

export const Tabs = ({
  tabs,
  system = 'iOS',
  defaultTab = 0,
}: TabsProps) => {
  const [active, setActive] = useState(defaultTab);

  if (system === 'Android') {
    return (
      <div style={{
        display:        'flex',
        alignItems:     'stretch',
        position:       'relative',
        overflow:       'hidden',
        width:          '100%',
        maxWidth:       '365px',
      }}>
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            style={{
              flex:            1,
              height:          '34px',
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
              padding:         '8px 16px',
              background:      'transparent',
              border:          'none',
              borderBottom:    active === i ? '2px solid #ea6753' : '2px solid transparent',
              fontFamily:      'var(--font-family-brand)',
              fontSize:        '14px',
              fontWeight:      active === i ? 700 : 400,
              color:           active === i ? '#ea6753' : '#000000',
              cursor:          'pointer',
              whiteSpace:      'nowrap',
              transition:      'color 0.15s ease, border-color 0.15s ease',
              boxSizing:       'border-box',
            }}
          >
            {tab}
          </button>
        ))}
        {/* Bottom divider line */}
        <div style={{
          position:    'absolute',
          bottom:      0,
          left:        0,
          right:       0,
          height:      '1px',
          background:  '#dbdbdb',
          zIndex:      0,
        }} />
      </div>
    );
  }

  // iOS variant
  return (
    <div style={{
      display:       'flex',
      alignItems:    'center',
      background:    '#f4f4f4',
      borderRadius:  '8px',
      width:         '100%',
      maxWidth:      '365px',
      padding:       '2px',
      boxSizing:     'border-box',
      gap:           '2px',
    }}>
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => setActive(i)}
          style={{
            flex:          1,
            height:        '34px',
            display:       'flex',
            alignItems:    'center',
            justifyContent:'center',
            padding:       '8px 16px',
            borderRadius:  '8px',
            border:        active === i ? '1px solid #414141' : '1px solid transparent',
            background:    active === i ? '#ffffff' : '#f4f4f4',
            boxShadow:     active === i ? '0 4px 12px 0 rgba(0,0,0,0.16)' : 'none',
            fontFamily:    'var(--font-family-brand)',
            fontSize:      '14px',
            fontWeight:    active === i ? 700 : 400,
            color:         active === i ? '#414141' : '#000000',
            cursor:        'pointer',
            whiteSpace:    'nowrap',
            transition:    'background 0.15s ease, box-shadow 0.15s ease, color 0.15s ease',
            boxSizing:     'border-box',
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};