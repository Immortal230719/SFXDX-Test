import { Action } from 'redux';

export interface IPokemonBase {
  name: string;
  url: string;
}

export interface ISinglePokemon {
  name: string;
  stats: any;
  images: string[];
  types: string[];
  moves: any;
}

export interface AppAction extends Action {
  payload?: any;
}

export interface GetPokemons extends AppAction {
  type: 'GET_POKEMONS';
  payload: string;
}
