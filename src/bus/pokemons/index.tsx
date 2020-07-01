import React, { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';

// Tools
import { Link } from 'react-router-dom';
import { Pagination } from './elements';
import {
  Layout,
  Logo,
  Wrapper,
  Grid,
  Card,
  Container,
  BackDrop,
  Title,
} from '../../components';
import { PokemonBaseType } from './types';

import { FetchPokemonsAsync, setCurrentPage } from './actions';
import { useStarshipsFetch } from './hooks/usePokemonsFetch';


export const Pokemons: FC = () => {
  const dispatch = useDispatch();
  const {
    isFetching, data, error, currentPage,
  } = useStarshipsFetch();
  const { pokemons, count } = data;

  const handlePageClick = ({ selected }: { selected: number }): void => {
    dispatch(FetchPokemonsAsync(selected));
    dispatch(setCurrentPage(selected));
  };

  const renderPokemons = (arrOfPokemons: Array<PokemonBaseType>): ReactElement => (
    <Grid>
      {arrOfPokemons
      // .filter(pokemon => {
      //   return pokemon.name.startsWith(search.trim().toLowerCase());
      // })
        .map(({ name }) => (
          <React.Fragment key={name}>
            <Link to={`pokemon/${name}`}>
              <Card
                title={name}
                img={`https://avatars.dicebear.com/api/gridy/${name}.svg`}
              />
            </Link>
          </React.Fragment>
        ))}
    </Grid>
  );

  return (
    <Layout>
      {error
        ? <Wrapper className="center between">
          <Title>
            Something went wrong :(
            <br />
            Please, reload page
          </Title>
        </Wrapper>
        : <>
          <Wrapper className="center">
            <Logo />
          </Wrapper>
          <Pagination
            count={count}
            handlePageClick={handlePageClick}
            currentPage={currentPage}
          />
          <Container>{renderPokemons(pokemons)}</Container>
        </>}
      <BackDrop show={isFetching} />
    </Layout>
  );
};
