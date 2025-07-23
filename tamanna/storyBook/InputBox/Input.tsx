import React, { useState } from 'react';
import './Input.css';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value = '',
  onChange,
  onFocus,
  onBlur,
  helperText,
  state: propState = 'default',
  destructive = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const getDynamicState = (): string => {
    if (propState === 'disabled') return 'disabled';
    if (destructive) {
      if (isFocused && inputValue) return 'error-focused-typing';
      if (isFocused) return 'error-focused';
      if (inputValue) return 'error-typing';
      return 'error';
    }
    if (isFocused && inputValue) return 'focused-typing';
    if (isFocused) return 'focused';
    if (inputValue) return 'typing';
    if (propState === 'active') return 'active';
    return 'default';
  };

  const dynamicState = getDynamicState();

  const getClassName = () => {
    switch (dynamicState) {
      case 'error':
        return 'input-box error';
      case 'error-focused':
        return 'input-box error-focused';
      case 'error-typing':
        return 'input-box error-typing';
      case 'error-focused-typing':
        return 'input-box error-focused-typing';
      case 'focused-typing':
        return 'input-box typing focused';
      case 'default':
        return 'input-box default';
      case 'focused':
        return 'input-box focused';
      case 'typing':
        return 'input-box typing';
      case 'active':
        return 'input-box active';
      case 'disabled':
        return 'input-box disabled';
      default:
        return 'input-box';
    }
  };

  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <div className={getClassName()}>
        <span className="icon leading box"></span>
        <input
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={(e) => {
            handleFocus();
            onFocus?.();
          }}
          onBlur={(e) => {
            handleBlur();
            onBlur?.();
          }}
          disabled={propState === 'disabled'}
        />
        <span className="add-on">Add on</span>
        <span className="icon box"></span>
      </div>
      {/* {helperText && <span className="helper-text">{helperText}</span>} */}
      {helperText && (
  <span className={`helper-text ${destructive ? 'error' : ''}`}>
    {helperText}
  </span>
)}
    </div>
  );
};

export default Input;