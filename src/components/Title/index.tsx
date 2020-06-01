import React from 'react';

import { StyledTitle } from './styles';

interface IindexProps {
  icon?: string;
}

const Title: React.FC<IindexProps> = ({ icon, children }) => {
  return (
    <StyledTitle>
      {children}
      {Boolean(icon) && <img src={icon} alt="icon" />}
    </StyledTitle>
  );
};

export default Title;
