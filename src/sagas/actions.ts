import { AppAction } from 'reducers';

import * as types from './types';

export const getPokemons = (): AppAction => ({
  type: types.GET_POKEMONS,
});

export const putPokemons = (data: any): AppAction => ({
  type: types.PUT_POKEMONS,
  payload: data,
});

export const fetchError = (message: string): AppAction => ({
  type: types.FETCH_ERROR,
  payload: message,
});
