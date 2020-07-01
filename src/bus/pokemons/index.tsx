import React, {
  FC, ReactElement, FormEvent,
} from 'react';
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
  Subtitle,
  Input,
} from '../../components';
import { PokemonBaseType } from './types';

import { FetchPokemonsAsync, setCurrentPage, searchPokemons } from './actions';
import { usePokemonFetch } from './hooks/usePokemonsFetch';


export const Pokemons: FC = () => {
  const dispatch = useDispatch();
  const {
    isFetching,
    data,
    error,
    currentPage,
    searchValue,
    resArrOfPokemons,
    nothingFound,
  } = usePokemonFetch();
  const { pokemons, count } = data;

  const handlePageClick = ({ selected }: { selected: number }): void => {
    dispatch(FetchPokemonsAsync(selected));
    dispatch(setCurrentPage(selected));
  };

  const searchHandler = (event: FormEvent<HTMLInputElement>): void => {
    dispatch(searchPokemons(event.currentTarget.value));
  };

  const renderPokemons = (arrOfPokemons: Array<PokemonBaseType>): ReactElement => (
    <Grid>
      {arrOfPokemons
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
        ? <Wrapper className="center">
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
          <Input
            type="text"
            value={searchValue}
            onChange={searchHandler}
            placeholder="Search for Pokemon"
          />
          {nothingFound
            ? <Wrapper className="center">
              <Subtitle>
                Nothing found on this page, please try another.
              </Subtitle>
            </Wrapper>
            : null}
          <Container>
            {nothingFound
              ? renderPokemons(pokemons)
              : renderPokemons(resArrOfPokemons)}
          </Container>
        </>}
      <BackDrop show={isFetching} />
    </Layout>
  );
};
