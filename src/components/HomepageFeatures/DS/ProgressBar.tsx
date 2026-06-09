import React from 'react';

// Tokens from Figma
// Track: bg #dbdbdb, height 16px, borderRadius 8px
// Fill: bg #00bf6f (Primary_300), height 16px, borderRadius 8px
// Label: 10px #212121 Regular

interface ProgressBarProps {
  progress?: number; // 0–100
  showLabel?: boolean;
  label?: string;
}

export const ProgressBar = ({ progress = 60, showLabel = true, label }: ProgressBarProps) => {
  const clamped = Math.max(0, Math.min(100, progress));
  const text = label ?? `${clamped}%`;

  return (
    <div style={{ width: '100%' }}>
      {showLabel && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '4px',
        }}>
          <span style={{
            fontFamily: 'var(--font-family-brand)',
            fontSize: '10px',
            fontWeight: 400,
            color: '#212121',
          }}>
            {text}
          </span>
        </div>
      )}
      <div style={{
        width: '100%',
        height: '16px',
        borderRadius: '8px',
        background: '#dbdbdb',
        overflow: 'hidden',
      }}>
        <div style={{
          width: `${clamped}%`,
          height: '100%',
          borderRadius: '8px',
          background: '#00bf6f',
          transition: 'width 0.3s ease',
        }} />
      </div>
    </div>
  );
};

export const ProgressBarDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '360px' }}>
    {[
      { progress: 0, label: '0% — empty state' },
      { progress: 25, label: '25%' },
      { progress: 50, label: '50%' },
      { progress: 75, label: '75%' },
      { progress: 100, label: '100% — complete' },
    ].map(({ progress, label }) => (
      <div key={progress}>
        <p style={{ margin: '0 0 6px', fontSize: '11px', color: '#989898' }}>{label}</p>
        <ProgressBar progress={progress} showLabel={false} />
      </div>
    ))}
  </div>
);
