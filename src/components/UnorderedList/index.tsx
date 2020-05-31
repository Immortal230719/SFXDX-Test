import React from 'react';
import { Link } from 'react-router-dom';

import { StyledItem, Wrapper } from './styles';

interface IUnorderedListProps {
  data: any;
}

interface IMovesItem {
  id: string;
  name: string;
}

const UnorderedList: React.FC<IUnorderedListProps> = ({ data }) => {
  return (
    <Wrapper>
      {data.map(({ id, name }: IMovesItem) => {
        return (
          <Link key={id} to={`/moves/${id}`}>
            <StyledItem>{name}</StyledItem>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default UnorderedList;
