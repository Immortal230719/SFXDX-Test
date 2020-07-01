import React from 'react';

import { StyledButton } from './styles';

type ButtonProps = {
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (
  { text, onClick },
) => <StyledButton onClick={onClick}>{text}</StyledButton>;
