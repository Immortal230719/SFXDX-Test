import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import { Layout, Title, Container } from 'components';
import { getSinglePokemon } from 'sagas';

interface IPokemonDetailedProps {}

const PokemonDetailed: React.FC<IPokemonDetailedProps> = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const { name } = useParams();
  const nameOfPokemon = `${name.charAt(0).toUpperCase()}${name.slice(
    1,
    name.length
  )}`;

  useEffect(() => {
    dispatch(getSinglePokemon(name));
  }, [dispatch]);

  return (
    <Layout>
      <Title>{nameOfPokemon}</Title>
      <Container>detailed</Container>
    </Layout>
  );
};

export default PokemonDetailed;
