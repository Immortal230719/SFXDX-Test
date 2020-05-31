// import { IPokemonBase } from './interfaces';

export const selectPokemons = (state: any) => {
  return state.pokemons;
};

export const selectSinglePokemon = (state: any) => {
  if (state.detailed) {
    return state.detailed;
  }
  return null;
};

export const selectMove = (state: any) => {
  if (state.move) {
    return state.move;
  }
  return null;
};

export const selectPagination = (state: any) => {
  if (state.pagination) {
    return state.pagination;
  }
  return null;
};
