import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import { Layout, Title, Container, ImageList } from 'components';
import { getSinglePokemon } from 'sagas';
import { selectSinglePokemon } from 'reducers';

interface IPokemonDetailedProps {}

const PokemonDetailed: React.FC<IPokemonDetailedProps> = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const { pokemoname } = useParams();
  const { name, stats, images, moves, types } = useSelector(
    selectSinglePokemon
  );
  const nameOfPokemon = `${name.charAt(0).toUpperCase()}${name.slice(
    1,
    name.length
  )}`;

  useEffect(() => {
    dispatch(getSinglePokemon(pokemoname));
  }, [dispatch]);

  return (
    <Layout>
      <Title>{nameOfPokemon}</Title>
      <Container>
        <ImageList images={images} />
      </Container>
    </Layout>
  );
};

export default PokemonDetailed;
