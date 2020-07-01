import React from 'react';

import { StyledBackDrop } from './styles';

type BackDropProps = {
  show: boolean;
}

export const BackDrop: React.FC<BackDropProps> = ({ show }) => (
  <>
    {show && (
    <StyledBackDrop>
      <div className="mesh-loader">
        <div className="set-one">
          <div className="circle" />
          <div className="circle" />
        </div>
        <div className="set-two">
          <div className="circle" />
          <div className="circle" />
        </div>
      </div>
    </StyledBackDrop>
    )}
  </>
);
