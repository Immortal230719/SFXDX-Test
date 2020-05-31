import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import {
  Layout,
  Title,
  Container,
  ImageList,
  TextList,
  Button,
  UnorderedList,
  Subtitle,
  Wrapper,
} from 'components';
import { getSinglePokemon } from 'sagas';
import { selectSinglePokemon } from 'reducers';

interface IPokemonDetailedProps {}

const PokemonDetailed: React.FC<IPokemonDetailedProps> = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const { pokemoname } = useParams();
  const { name, stats, images, moves, types, abilities } = useSelector(
    selectSinglePokemon
  );
  const nameOfPokemon = `${name.charAt(0).toUpperCase()}${name.slice(
    1,
    name.length
  )}`;

  useEffect(() => {
    if (name === '' || pokemoname !== name) {
      dispatch(getSinglePokemon(pokemoname));
    }
  }, [dispatch, pokemoname, name]);

  return (
    <Layout>
      <Wrapper className="center between">
        <Title>{nameOfPokemon}</Title>
        <Link to="/">
          <Button text="back to main" />
        </Link>
      </Wrapper>
      <Container>
        <ImageList images={images} />
        <Wrapper className="around">
          <TextList title="type" data={types} />
          <TextList title="abilities" data={abilities} />
          <TextList title="stats" data={stats} />
        </Wrapper>
        <Subtitle>Moves:</Subtitle>
        <Wrapper>
          <UnorderedList data={moves} />
        </Wrapper>
      </Container>
    </Layout>
  );
};

export default PokemonDetailed;
