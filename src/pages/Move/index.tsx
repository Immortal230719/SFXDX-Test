import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import { getSingleMove } from 'sagas';
import { selectMove } from 'reducers';

import {
  Layout,
  Title,
  Container,
  Button,
  MoveList,
  Wrapper,
} from 'components';
import Icon from './pokemon.svg';

const Move: React.FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const history = useHistory();
  const { id } = useParams();
  const move = useSelector(selectMove);

  useEffect(() => {
    dispatch(getSingleMove(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <Wrapper className="center">
        <Title icon={Icon}>Move {move.name}</Title>
      </Wrapper>

      <Container>
        <MoveList data={move} />
        <Button onClick={history.goBack} text="back" />
      </Container>
    </Layout>
  );
};

export default Move;
