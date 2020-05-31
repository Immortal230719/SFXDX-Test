import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import { Layout, Title, Container } from 'components';
import { getPokemons } from 'sagas';
import { selectPokemons } from 'reducers';

import { IPokemonBase } from 'reducers';
import { Grid, Card, Input } from 'components';

const Main: FC = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const pokemons = useSelector(selectPokemons);

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(getPokemons());
    }
  }, [dispatch, pokemons.length]);

  const changeHandler = (e: any) => {
    setSearch(e.target.value);
  };

  const renderPokemons = (arrOfPokemons: IPokemonBase[]) => {
    return (
      <Grid>
        {arrOfPokemons
          .filter(pokemon => {
            return pokemon.name.startsWith(search.trim());
          })
          .map(({ name, url }: IPokemonBase) => {
            return (
              <React.Fragment key={name}>
                <Link to={`pokemon/${name}`}>
                  <Card
                    title={name}
                    img="https://via.placeholder.com/200.png"
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
      <Title>Pokemons</Title>
      <Input
        type="text"
        value={search}
        onChange={changeHandler}
        placeholder="Search"
      />
      <Container>{renderPokemons(pokemons)}</Container>
    </Layout>
  );
};

export default Main;
