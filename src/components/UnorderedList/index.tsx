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
    <>
      {data.map(({ id, name }: IMovesItem) => {
        return (
          <Link key={id} to={`/moves/${id}`}>
            <StyledItem>{name}</StyledItem>
          </Link>
        );
      })}
    </>
  );
};

export default UnorderedList;
