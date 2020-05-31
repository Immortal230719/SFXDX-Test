import React from 'react';
import { Link } from 'react-router-dom';

import { StyledItem } from './styles';

interface IUnorderedListProps {
  data: any;
}

interface IMovesItem {
  id: string;
  name: string;
}

const UnorderedList: React.FC<IUnorderedListProps> = ({ data }) => {
  return (
    <div>
      {data.map(({ id, name }: IMovesItem) => {
        return (
          <Link to={`/moves/${id}`}>
            <StyledItem>{name}</StyledItem>
          </Link>
        );
      })}
    </div>
  );
};

export default UnorderedList;
