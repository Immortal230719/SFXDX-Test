import { AppAction } from 'reducers';

import * as types from './types';

// Page Main
export const getPokemons = (): AppAction => ({
  type: types.GET_POKEMONS,
});
export const putPokemons = (data: any): AppAction => ({
  type: types.PUT_POKEMONS,
  payload: data,
});

// Page with detailed pokemon
export const getSinglePokemon = (name: string): AppAction => ({
  type: types.GET_SINGLE_POKEMON,
  payload: name,
});
export const putSinglePokemon = (data: any): AppAction => ({
  type: types.PUT_SINGLE_POKEMON,
  payload: data,
});

export const fetchError = (message: string): AppAction => ({
  type: types.FETCH_ERROR,
  payload: message,
});

// Page with detailed Move
export const getSingleMove = (id: string): AppAction => ({
  type: types.GET_SINGLE_MOVE,
  payload: id,
});
export const putSingleMove = (data: any): AppAction => ({
  type: types.PUT_SINGLE_MOVE,
  payload: data,
});
