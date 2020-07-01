import React from 'react';
import { Link } from 'react-router-dom';

import { StyledItem } from './styles';

import { MoveItem } from '../../types';

type UnorderedListProps = {
  data: MoveItem[];
}

export const UnorderedList: React.FC<UnorderedListProps> = ({ data }) => (
  <>
    {data.map(({ id, name }) => (
      <Link key={id} to={`/moves/${id}`}>
        <StyledItem>{name}</StyledItem>
      </Link>
    ))}
  </>
);
