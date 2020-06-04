import { AnyAction } from 'redux';

import {
  IPokemonBase,
  IPagination,
  ISinglePokemon,
  ISingleMove,
} from 'reducers';

import * as types from 'reducers';

// Page Main
export const getPokemons = (selectedPage: number): AnyAction => ({
  type: types.GET_POKEMONS,
  payload: selectedPage,
});
export const putPokemons = (data: Array<IPokemonBase>): AnyAction => ({
  type: types.PUT_POKEMONS,
  payload: data,
});
export const putPagination = (data: IPagination): AnyAction => ({
  type: types.PUT_PAGINATION,
  payload: data,
});

// Page with detailed pokemon
export const getSinglePokemon = (name: string): AnyAction => ({
  type: types.GET_SINGLE_POKEMON,
  payload: name,
});
export const putSinglePokemon = (data: ISinglePokemon): AnyAction => ({
  type: types.PUT_SINGLE_POKEMON,
  payload: data,
});

export const fetchError = (message: string): AnyAction => ({
  type: types.FETCH_ERROR,
  payload: message,
});

// Page with detailed Move
export const getSingleMove = (id: string): AnyAction => ({
  type: types.GET_SINGLE_MOVE,
  payload: id,
});
export const putSingleMove = (data: ISingleMove): AnyAction => ({
  type: types.PUT_SINGLE_MOVE,
  payload: data,
});

// Toggle backDrop
export const putToggleBackDrop = (toggle: boolean): AnyAction => ({
  type: types.TOGGLE_BACKDROP,
  payload: toggle,
});
