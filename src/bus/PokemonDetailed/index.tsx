import React from 'react';
import { Link } from 'react-router-dom';

import {
  Layout,
  Title,
  Container,
  ImageList,
  Button,
  Subtitle,
  Wrapper,
  BackDrop,
} from '../../components';
import {
  UnorderedList,
  TextList,
} from './elements';
import { useFetchDetailedPokemon } from './hooks';

export const PokemonDetailed: React.FC = () => {
  const {
    data, isFetching, error, isImages, replacementImages,
  } = useFetchDetailedPokemon();
  const {
    name, stats, images, moves, types, abilities,
  } = data;
  const nameOfPokemon = `${name.charAt(0).toUpperCase()}${name.slice(
    1,
    name.length,
  )}`;


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
          <Wrapper className="center between">
            <Title>{nameOfPokemon}</Title>
            <Link to="/">
              <Button text="back to main" />
            </Link>
          </Wrapper>
          <Container>
            <ImageList images={isImages ? images : replacementImages} />
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
        </>}
      <BackDrop show={isFetching} />
    </Layout>
  );
};
