import React, { useState, useEffect, useRef } from 'react';

interface DropdownProps {
  label?: string;
  options: string[];
  placeholder?: string;
  hint?: string;
  required?: boolean;
  state?: 'default' | 'disabled';
  defaultValue?: string;
}

export const Dropdown = ({
  label,
  options,
  placeholder = 'Select an option',
  hint,
  required,
  state = 'default',
  defaultValue,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(defaultValue || null);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isDisabled = state === 'disabled';

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        width: '311px',
        position: 'relative',
        marginBottom: '24px',
      }}
    >
      {/* Label */}
      {label && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 4px',
          fontFamily: 'var(--font-family-brand)',
        }}>
          <span style={{
            fontSize: '14px',
            fontWeight: 400,
            color: '#414141',
            lineHeight: 1.5,
          }}>
            {label}
          </span>
          {required && (
            <span style={{
              fontSize: '12px',
              color: '#e53935',
              marginLeft: '2px',
              lineHeight: 1.5,
            }}>*</span>
          )}
        </div>
      )}

      {/* Trigger */}
      <div
        onClick={() => mounted && !isDisabled && setIsOpen((prev) => !prev)}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          height: '46px',
          padding: '12px 16px',
          borderRadius: '8px',
          border: isDisabled ? 'none' : `1px solid ${isOpen ? '#989898' : '#c4c4c4'}`,
          background: isDisabled ? '#dbdbdb' : 'rgba(255,255,255,0.30)',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          boxSizing: 'border-box',
          width: '100%',
          transition: 'border-color 0.15s ease',
          userSelect: 'none',
          opacity: 1,
        }}
      >
        {/* Placeholder / selected value */}
        <span style={{
          flex: 1,
          fontFamily: 'var(--font-family-brand)',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: 1.5,
          color: isDisabled ? '#989898' : selected ? '#414141' : '#dbdbdb',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}>
          {selected || placeholder}
        </span>

        {/* Chevron icon — right slot */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            flexShrink: 0,
            transition: 'transform 0.2s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            color: isDisabled ? '#989898' : '#c4c4c4',
          }}
        >
          <path
            d="M3 6L8 11L13 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Dropdown list */}
      {mounted && isOpen && (
        <div
          role="listbox"
          style={{
            position: 'absolute',
            top: label ? 'calc(46px + 4px + 22px + 4px)' : 'calc(46px + 4px)',
            left: 0,
            width: '100%',
            background: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 4px 12px 0 rgba(0,0,0,0.16)',
            zIndex: 100,
            overflow: 'hidden',
          }}
        >
          {options.map((option) => (
            <div
              key={option}
              role="option"
              aria-selected={selected === option}
              onClick={() => handleSelect(option)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 12px',
                height: '34px',
                fontFamily: 'var(--font-family-brand)',
                fontSize: '12px',
                fontWeight: 300,
                lineHeight: 1.5,
                color: '#000000',
                background: selected === option ? '#f4f4f4' : 'transparent',
                cursor: 'pointer',
                transition: 'background 0.15s ease',
                boxSizing: 'border-box',
              }}
              onMouseEnter={(e) => {
                if (selected !== option)
                  (e.currentTarget as HTMLElement).style.background = '#f4f4f4';
              }}
              onMouseLeave={(e) => {
                if (selected !== option)
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}

      {/* Hint */}
      {hint && (
        <span style={{
          fontFamily: 'var(--font-family-brand)',
          fontSize: '10px',
          fontWeight: 400,
          color: '#414141',
          lineHeight: 1.5,
        }}>
          {hint}
        </span>
      )}
    </div>
  );
};