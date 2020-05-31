import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import {
  Layout,
  Container,
  Grid,
  Card,
  Input,
  Pagination,
  Logo,
  Wrapper,
} from 'components';

import { getPokemons } from 'sagas';
import { selectPokemons, selectPagination } from 'reducers';
import { IPokemonBase } from 'reducers';

const Main: FC = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const pokemons = useSelector(selectPokemons);
  const pagination = useSelector(selectPagination);

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(getPokemons(0));
    }
  }, [dispatch, pokemons.length]);

  const changeHandler = (e: any) => {
    setSearch(e.target.value);
  };

  const handlePageClick = (e: any) => {
    dispatch(getPokemons(e.selected));
  };

  const renderPokemons = (arrOfPokemons: IPokemonBase[]) => {
    return (
      <Grid>
        {arrOfPokemons
          .filter(pokemon => {
            return pokemon.name.startsWith(search.trim().toLowerCase());
          })
          .map(({ name, url }: IPokemonBase) => {
            return (
              <React.Fragment key={name}>
                <Link to={`pokemon/${name}`}>
                  <Card
                    title={name}
                    img={`https://avatars.dicebear.com/api/gridy/${name}.svg`}
                  />
                </Link>
              </React.Fragment>
            );
          })}
      </Grid>
    );
  };

  return (
    <Layout>
      <Wrapper className="center">
        <Logo />
      </Wrapper>
      <Pagination data={pagination} handlePageClick={handlePageClick} />
      <Input
        type="text"
        value={search}
        onChange={changeHandler}
        placeholder="Search"
      />

      <Container>{renderPokemons(pokemons)}</Container>
      <Pagination data={pagination} handlePageClick={handlePageClick} />
    </Layout>
  );
};

export default Main;
