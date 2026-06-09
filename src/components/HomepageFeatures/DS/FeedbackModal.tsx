import React from 'react';

interface FeedbackModalProps {
  type: 'success' | 'alert' | 'error';
  style?: 'simple' | 'full';
  title: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

const typeConfig = {
  success: {
    color: '#00bf6f',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="30" fill="#edfff6" stroke="#b2ffdd" strokeWidth="1.5" />
        <path d="M20 33l8 8 16-16" stroke="#00bf6f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  alert: {
    color: '#ffa000',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="30" fill="#fff8e6" stroke="#ffe0b2" strokeWidth="1.5" />
        <path d="M32 20v16" stroke="#ffa000" strokeWidth="3" strokeLinecap="round" />
        <circle cx="32" cy="43" r="2.5" fill="#ffa000" />
      </svg>
    ),
  },
  error: {
    color: '#e53935',
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="30" fill="#ffebee" stroke="#ffcdd2" strokeWidth="1.5" />
        <path d="M22 22l20 20M42 22L22 42" stroke="#e53935" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
};

export const FeedbackModal = ({
  type,
  style = 'simple',
  title,
  description,
  primaryLabel = 'Confirm',
  secondaryLabel = 'Cancel',
}: FeedbackModalProps) => {
  const { color, icon } = typeConfig[type];
  const isFull = style === 'full';

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.16)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '24px',
      width: '325px',
    }}>
      {/* Icon */}
      <div style={{ paddingTop: '32px', paddingBottom: '16px' }}>
        {icon}
      </div>

      {/* Title */}
      <div style={{
        padding: '16px 32px',
        width: '100%',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}>
        <span style={{
          fontFamily: 'var(--font-family-brand)',
          fontSize: '14px',
          fontWeight: 700,
          lineHeight: 1.5,
          color: '#212121',
        }}>
          {title}
        </span>
      </div>

      {/* Description — Full only */}
      {isFull && description && (
        <div style={{
          padding: '0 32px 24px',
          textAlign: 'center',
          boxSizing: 'border-box',
          width: '100%',
        }}>
          <span style={{
            fontFamily: 'var(--font-family-brand)',
            fontSize: '14px',
            fontWeight: 300,
            lineHeight: 1.5,
            color: '#414141',
          }}>
            {description}
          </span>
        </div>
      )}

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        {isFull && (
          <button style={{
            background: '#ffffff',
            border: `1px solid ${color}`,
            borderRadius: '20px',
            padding: '8px 24px',
            fontFamily: 'var(--font-family-brand)',
            fontSize: '10px',
            fontWeight: 700,
            color: color,
            cursor: 'pointer',
            lineHeight: 1.5,
          }}>
            {secondaryLabel}
          </button>
        )}
        <button style={{
          background: isFull ? color : '#ffffff',
          border: isFull ? 'none' : 'none',
          borderRadius: '20px',
          padding: '8px 24px',
          fontFamily: 'var(--font-family-brand)',
          fontSize: '10px',
          fontWeight: 700,
          color: isFull ? '#ffffff' : '#212121',
          cursor: 'pointer',
          lineHeight: 1.5,
          boxShadow: '0px 4px 6px rgba(0,0,0,0.16)',
        }}>
          {primaryLabel}
        </button>
      </div>
    </div>
  );
};