import React, { useState, useRef, FormEvent } from 'react';

import InputWrap from './styles';

type InputProps = {
  type: string;
  value: string;
  onChange(event: FormEvent<HTMLInputElement>): void;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
}) => {
  const [toggle, setToggle] = useState(false);
  const inputEl = useRef<HTMLInputElement>(null);

  const spanClickHandler = (): void => {
    if (inputEl.current !== null) {
      inputEl.current.focus();
    }
  };

  const focusHandler = () => {
    if (value === '') {
      setToggle(!toggle);
    }
  };

  return (
    <InputWrap>
      {!toggle && <span
        onClick={spanClickHandler}
        onKeyPress={spanClickHandler}
        role="button"
        tabIndex={0}
      >{placeholder}</span>}
      <input
        ref={inputEl}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={focusHandler}
        onBlur={focusHandler}
      />
    </InputWrap>
  );
};
