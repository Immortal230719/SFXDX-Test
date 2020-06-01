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

const replacementImages = [...Array(4)].map(() =>
  Array(4).fill(
    `https://avatars.dicebear.com/api/gridy/pokemon${Math.random()}.svg`
  )
);

const PokemonDetailed: React.FC = () => {
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
        <ImageList images={images.length === 0 ? replacementImages : images} />
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
