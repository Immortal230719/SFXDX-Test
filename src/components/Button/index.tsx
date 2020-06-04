import React from 'react';

import { StyledButton } from './styles';

interface IButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
