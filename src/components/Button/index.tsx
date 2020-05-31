import React from 'react';

import { StyledButton } from './styles';

interface IButtonProps {
  text: string;
}

const Button: React.FC<IButtonProps> = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
