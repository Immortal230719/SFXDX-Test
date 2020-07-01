import React from 'react';

import { StyledTitle } from './styles';

type TitleProps = {
  icon?: string;
}

export const Title: React.FC<TitleProps> = ({ icon, children }) => (
  <StyledTitle>
    {children}
    {Boolean(icon) && <img src={icon} alt="icon" />}
  </StyledTitle>
);
