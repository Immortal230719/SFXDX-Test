import React from 'react';

import { StyledMoveList } from './styles';
import { MoveDetailedType } from '../../types';

type MoveListProps = {
  data: MoveDetailedType;
}

export const MoveList: React.FC<MoveListProps> = ({ data }) => {
  const moves = Object.entries(data);

  return (
    <StyledMoveList>
      {moves.map((item) => {
        if (item[0] === 'moveId') {
          return null;
        }
        return (
          <li key={item[0]}>
            <span>{item[0]}</span>
            <span>{item[1] ? item[1] : 'does not exist'}</span>
          </li>
        );
      })}
    </StyledMoveList>
  );
};
