import React from 'react';
import { Link } from 'react-router-dom';

import logoSvg from './logo.svg';
import StyledLogo from './styles';

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <h1>Pokemon</h1>
      <Link to="/">
        <img src={logoSvg} alt="logo" />
      </Link>
    </StyledLogo>
  );
};

export default Logo;
