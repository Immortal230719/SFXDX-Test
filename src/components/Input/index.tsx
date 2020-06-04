import React, { useState, FormEvent } from 'react';

import InputWrap from './styles';

interface IindexProps {
  type: string;
  value: string;
  onChange(event: FormEvent<HTMLInputElement>): void;
  placeholder: string;
}

const Input: React.FC<IindexProps> = ({
  type,
  value,
  onChange,
  placeholder,
}) => {
  const [toggle, setToggle] = useState(false);

  const focusHandler = () => {
    if (value === '') {
      setToggle(!toggle);
    }
  };

  return (
    <InputWrap>
      {!toggle && <span>{placeholder}</span>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={focusHandler}
        onBlur={focusHandler}
      />
    </InputWrap>
  );
};

export default Input;
