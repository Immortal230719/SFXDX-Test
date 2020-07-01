import React from 'react';
import { useHistory } from 'react-router-dom';

import { useFetchDetailedMove } from './hooks';
import {
  Layout,
  Title,
  Container,
  Button,
  Wrapper,
  BackDrop,
} from '../../components';
import {
  MoveList,
} from './elements';
import Icon from './img/pokemon.svg';

export const MoveDetailed: React.FC = () => {
  const { data, isFetching, error } = useFetchDetailedMove();

  const history = useHistory();

  return (
    <Layout>
      {error
        ? <Wrapper className="center">
          <Title>
            Something went wrong :(
            <br />
            Please, reload page
          </Title>
        </Wrapper>
        : <>
          <Wrapper className="center">
            <Title icon={Icon}>Move {data.name}</Title>
          </Wrapper>

          <Container>
            <MoveList data={data} />
            <Button onClick={history.goBack} text="back" />
          </Container>
        </>}
      <BackDrop show={isFetching} />
    </Layout>
  );
};
