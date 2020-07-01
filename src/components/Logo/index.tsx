import React from 'react';
import { Link } from 'react-router-dom';

import logoSvg from './logo.svg';
import StyledLogo from './styles';

export const Logo: React.FC = () => (
  <StyledLogo>
    <h1>Pokemon</h1>
    <Link to="/">
      <img src={logoSvg} alt="logo" />
    </Link>
  </StyledLogo>
);
