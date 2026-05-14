import React from 'react';

// Using English for interface and props
interface TextInputProps {
  label: string;
  placeholder?: string;
  hint?: string;
  required?: boolean;
  state?: 'default' | 'active' | 'error' | 'disabled';
  icon?: string;
}

export const TextInput = ({
  label,
  placeholder,
  hint,
  required,
  state = 'default',
  icon,
}: TextInputProps) => {

  // Map state to busup-input-field modifier class
  const fieldStateClass =
    state === 'active'   ? 'busup-input-field--active'   :
    state === 'error'    ? 'busup-input-field--error'     :
    state === 'disabled' ? 'busup-input-field--disabled'  :
    '';

  // Hint modifier class for error state
  const hintClass =
    state === 'error' ? 'busup-input-hint busup-input-hint--error' : 'busup-input-hint';

  return (
    <div className="busup-input-wrapper">

      <label className="busup-input-label">
        {label}
        {required && <span className="required-mark">*</span>}
      </label>

      <div className={`busup-input-field ${fieldStateClass}`}>
        {icon && (
          <span className="busup-input-icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <input
          type="text"
          placeholder={placeholder}
          disabled={state === 'disabled'}
          style={{
            border: 'none',
            background: 'transparent',
            outline: 'none',
            width: '100%',
            fontFamily: 'var(--font-family-brand)',
            fontSize: 'var(--input-placeholder-font-size)',
            color: 'inherit',
            cursor: state === 'disabled' ? 'not-allowed' : 'text',
          }}
        />
      </div>

      {hint && <span className={hintClass}>{hint}</span>}

    </div>
  );
};