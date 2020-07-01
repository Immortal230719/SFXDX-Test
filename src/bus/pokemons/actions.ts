import {
  FETCH_POKEMONS_STOP,
  FETCH_POKEMONS_START,
  FILL_POKEMONS,
  FETCH_POKEMONS_ERROR,
  FETCH_POKEMONS_ASYNC,
  SET_CURRENT_PAGE,
  SEARCH_POKEMONS,
  searchPokemonsAction,
  setCurrentPageAction,
  PokemonsActionTypes,
  fillPokemonsAction,
  fetchPokemonsAsyncAction,
  PokemonsType,
  ErrorHttpAction,
  FetchPokemonsError,
} from './types';

// fetching pokemons
export function StartFetchingPokemons(): PokemonsActionTypes {
  return {
    type: FETCH_POKEMONS_START,
  };
}
export function FetchPokemonsAsync(currentPage: number): fetchPokemonsAsyncAction {
  return {
    type: FETCH_POKEMONS_ASYNC,
    payload: currentPage,
  };
}
export function StopFetchingPokemons(): PokemonsActionTypes {
  return {
    type: FETCH_POKEMONS_STOP,
  };
}
export function fillPokemons(payload: PokemonsType): fillPokemonsAction {
  return {
    type: FILL_POKEMONS,
    payload,
  };
}
export function searchPokemons(payload: string): searchPokemonsAction {
  return {
    type: SEARCH_POKEMONS,
    payload,
  };
}
export function setFetchingPokemonsError(payload: ErrorHttpAction): FetchPokemonsError {
  return {
    type: FETCH_POKEMONS_ERROR,
    error: true,
    payload,
  };
}

// pagination
export function setCurrentPage(payload: number): setCurrentPageAction {
  return {
    type: SET_CURRENT_PAGE,
    payload,
  };
}
