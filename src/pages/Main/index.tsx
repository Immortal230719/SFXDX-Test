import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import { Layout, Title, Container } from 'components';
import { getPokemons } from 'sagas';

const Main: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <Layout>
      <Title>Pokemons</Title>
      <Container>Main logic</Container>
    </Layout>
  );
};

export default Main;
