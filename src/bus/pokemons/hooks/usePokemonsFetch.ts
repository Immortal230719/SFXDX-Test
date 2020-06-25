import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FetchPokemonsAsync } from '../actions';
import { PokemonsState } from '../reducer';
import { AppState } from '../../../init/rootReducer';

export const useStarshipsFetch = (): PokemonsState => {
  const dispatch = useDispatch();
  const {
    data,
    isFetching,
    error,
    currentPage,
  } = useSelector<AppState, PokemonsState>((state) => state.pokemons);

  useEffect(() => {
    if (data.pokemons.length === 0) {
      dispatch(FetchPokemonsAsync(0));
    }
  }, [dispatch]);

  return {
    data,
    isFetching,
    error,
    currentPage,
  };
};
