import React, { useState, useRef, KeyboardEvent, ClipboardEvent } from 'react';

interface CodeInputProps {
  digits?: number;
  state?: 'default' | 'error';
}

export const CodeInput = ({ digits = 4, state: initialState = 'default' }: CodeInputProps) => {
  const [values, setValues] = useState<string[]>(Array(digits).fill(''));
  const [focusIndex, setFocusIndex] = useState<number | null>(null);
  const [inputState, setInputState] = useState(initialState);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const getBorderColor = (index: number) => {
    if (inputState === 'error') return '#e53935';
    if (focusIndex === index) return '#00bf6f';
    return '#e0e0e0';
  };

  const getBackground = (index: number) => {
    if (inputState === 'error') return '#ffebee';
    if (focusIndex === index) return '#ffffff';
    return '#f4f4f4';
  };

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newValues = [...values];
    newValues[index] = value.slice(-1);
    setValues(newValues);
    setInputState('default');
    if (value && index < digits - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, digits);
    const newValues = Array(digits).fill('');
    pasted.split('').forEach((char, i) => { newValues[i] = char; });
    setValues(newValues);
    setInputState('default');
    const nextEmpty = pasted.length < digits ? pasted.length : digits - 1;
    inputRefs.current[nextEmpty]?.focus();
  };

  const handleSimulateError = () => {
    setInputState('error');
  };

  const handleReset = () => {
    setValues(Array(digits).fill(''));
    setInputState('default');
    inputRefs.current[0]?.focus();
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
        {values.map((val, index) => (
          <input
            key={index}
            ref={el => { inputRefs.current[index] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={val}
            onChange={e => handleChange(index, e.target.value)}
            onKeyDown={e => handleKeyDown(index, e)}
            onPaste={handlePaste}
            onFocus={() => setFocusIndex(index)}
            onBlur={() => setFocusIndex(null)}
            style={{
              width: '40px',
              height: '40px',
              textAlign: 'center',
              fontSize: '18px',
              fontWeight: 700,
              fontFamily: 'var(--font-family-brand)',
              color: inputState === 'error' ? '#e53935' : '#212121',
              background: getBackground(index),
              border: `2px solid ${getBorderColor(index)}`,
              borderRadius: '8px',
              outline: 'none',
              cursor: 'text',
              transition: 'border-color 0.15s ease, background 0.15s ease',
            }}
          />
        ))}
      </div>

      {inputState === 'error' && (
        <p style={{
          fontSize: '12px',
          color: '#e53935',
          margin: '4px 0 0',
          fontFamily: 'var(--font-family-brand)',
        }}>
          Invalid code. Please try again.
        </p>
      )}

      <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        <button
          onClick={handleSimulateError}
          style={{
            padding: '6px 14px',
            borderRadius: '20px',
            border: '1px solid #e53935',
            background: '#ffebee',
            fontFamily: 'var(--font-family-brand)',
            fontSize: '11px',
            fontWeight: 600,
            color: '#e53935',
            cursor: 'pointer',
          }}
        >
          Simulate error
        </button>
        <button
          onClick={handleReset}
          style={{
            padding: '6px 14px',
            borderRadius: '20px',
            border: '1px solid #e0e0e0',
            background: '#f4f4f4',
            fontFamily: 'var(--font-family-brand)',
            fontSize: '11px',
            fontWeight: 600,
            color: '#414141',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
