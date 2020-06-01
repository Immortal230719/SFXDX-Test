import React from 'react';

import { StyledBackDrop } from './styles';

interface IindexProps {
  show: boolean;
}

const BackDrop: React.FC<IindexProps> = ({ show }) => {
  return (
    <>
      {show && (
        <StyledBackDrop>
          <div className="mesh-loader">
            <div className="set-one">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="set-two">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </StyledBackDrop>
      )}
    </>
  );
};

export default BackDrop;
