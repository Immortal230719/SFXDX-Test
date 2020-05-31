import React from 'react';

import { StyledMoveList } from './styles';

interface IMoveListProps {
  data: any;
}

const MoveList: React.FC<IMoveListProps> = ({ data }) => {
  const moves = Object.entries(data);

  return (
    <StyledMoveList>
      {moves.map((item: any, index: number) => {
        if (item[0] === 'moveId') {
          return null;
        } else {
          return (
            <li key={index + Math.random()}>
              <span>{item[0]}</span>
              <span>{item[1] ? item[1] : 'does not exist'}</span>
            </li>
          );
        }
      })}
    </StyledMoveList>
  );
};

export default MoveList;
