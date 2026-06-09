import React from 'react';

// Tokens from Figma
// Success: icon #00bf6f (Primary_300), label 10px #212121
// Warning: icon #FFA000 (Alert_300)
// Error:   icon #E53935 (Danger_300)
// Icon size: 16x16px, container: inline-flex, gap 4px, label optional

type SignVariant = 'Success' | 'Warning' | 'Error';

const icons: Record<SignVariant, React.ReactNode> = {
  Success: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="#00bf6f" />
      <path d="M4.5 8.5l2.5 2.5 5-5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Warning: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="#FFA000" />
      <path d="M8 4.5v4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="11" r="1" fill="#ffffff" />
    </svg>
  ),
  Error: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="#E53935" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

interface FeedbackSignProps {
  variant?: SignVariant;
  label?: string;
  showLabel?: boolean;
}

export const FeedbackSign = ({ variant = 'Success', label, showLabel = true }: FeedbackSignProps) => {
  const defaultLabels: Record<SignVariant, string> = {
    Success: 'Confirmed',
    Warning: 'Pending',
    Error: 'Failed',
  };
  const text = label ?? defaultLabels[variant];

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
    }}>
      <div style={{ lineHeight: 0, flexShrink: 0 }}>{icons[variant]}</div>
      {showLabel && (
        <span style={{
          fontFamily: 'var(--font-family-brand)',
          fontSize: '10px',
          fontWeight: 400,
          lineHeight: 1.5,
          color: '#212121',
        }}>
          {text}
        </span>
      )}
    </div>
  );
};

export const FeedbackSignsDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    {/* With labels */}
    <div>
      <p style={{ fontSize: '11px', color: '#989898', marginBottom: '12px', marginTop: 0 }}>With label</p>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
        <FeedbackSign variant="Success" showLabel={true} />
        <FeedbackSign variant="Warning" showLabel={true} />
        <FeedbackSign variant="Error" showLabel={true} />
      </div>
    </div>

    {/* Icon only */}
    <div>
      <p style={{ fontSize: '11px', color: '#989898', marginBottom: '12px', marginTop: 0 }}>Icon only (in table context)</p>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <FeedbackSign variant="Success" showLabel={false} />
        <FeedbackSign variant="Warning" showLabel={false} />
        <FeedbackSign variant="Error" showLabel={false} />
      </div>
    </div>

    {/* In context: table */}
    <div>
      <p style={{ fontSize: '11px', color: '#989898', marginBottom: '12px', marginTop: 0 }}>In context — boarding list</p>
      <div style={{
        background: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #f4f4f4',
        overflow: 'hidden',
      }}>
        {[
          { name: 'Ana Lima', route: 'C3 – Lagoon Park', status: 'Success' as SignVariant, label: 'Boarded' },
          { name: 'Carlos Melo', route: 'C3 – Lagoon Park', status: 'Warning' as SignVariant, label: 'Pending' },
          { name: 'Priya Singh', route: 'C3 – Lagoon Park', status: 'Error' as SignVariant, label: 'No show' },
        ].map((row, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 16px',
            borderBottom: i < 2 ? '1px solid #f4f4f4' : 'none',
          }}>
            <div>
              <p style={{ margin: 0, fontSize: '12px', fontWeight: 600, color: '#212121' }}>{row.name}</p>
              <p style={{ margin: 0, fontSize: '10px', color: '#989898' }}>{row.route}</p>
            </div>
            <FeedbackSign variant={row.status} label={row.label} showLabel={true} />
          </div>
        ))}
      </div>
    </div>
  </div>
);
