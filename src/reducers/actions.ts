import { AppAction } from './interfaces';

import * as types from './types';

export const getPokemons = (): AppAction => ({
  type: types.GET_POKEMONS,
});

export const errorAction = (message: string): AppAction => ({
  type: types.FETCH_ERROR,
  payload: message,
});
