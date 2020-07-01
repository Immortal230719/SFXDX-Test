import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { PokemonBaseType } from '../types';
import { FetchPokemonsAsync } from '../actions';
import { PokemonsState } from '../reducer';
import { AppState } from '../../../init/rootReducer';

type usePokemonCustomHookType = {
  resArrOfPokemons: Array<PokemonBaseType>;
  nothingFound: boolean;
}

export const usePokemonFetch = (): PokemonsState &
usePokemonCustomHookType => {
  const dispatch = useDispatch();
  const {
    data,
    isFetching,
    error,
    currentPage,
    searchValue,
  } = useSelector<AppState, PokemonsState>((state) => state.pokemons);

  const resArrOfPokemons = data.pokemons.filter(
    (pokemon) => pokemon.name.toLowerCase().search(
      searchValue.trim().toLowerCase(),
    ) !== -1,
  );

  const nothingFound = resArrOfPokemons.length === 0;

  useEffect(() => {
    if (data.pokemons.length === 0) {
      dispatch(FetchPokemonsAsync(0));
    }
  }, [dispatch, data.pokemons.length, searchValue, data.count]);

  return {
    data,
    isFetching,
    error,
    currentPage,
    searchValue,
    resArrOfPokemons,
    nothingFound,
  };
};
