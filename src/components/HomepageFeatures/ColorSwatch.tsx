import React from 'react';

export default function ColorSwatch({color, name}) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      gap: '15px',
      fontFamily: 'var(--ifm-font-family-base)'
    }}>
      <div style={{
        backgroundColor: color,
        width: '50px',
        height: '50px',
        borderRadius: '8px',
        border: '1px solid #dbdbdb',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }} />
      <div>
        <strong style={{ display: 'block', fontSize: '14px' }}>{name}</strong>
        <code style={{ fontSize: '12px' }}>{color}</code>
      </div>
    </div>
  );
}