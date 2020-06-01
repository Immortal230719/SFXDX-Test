import { Action } from 'redux';

export interface IPokemonBase {
  name: string;
  url: string;
}

export interface ISinglePokemon {
  name: string;
  stats: any;
  abilities: string[];
  images: string[];
  types: string[];
  moves: any;
}

export interface ISingleMove {
  moveId: number;
  name: string;
  power: number;
  generation: string;
  accuracy: number;
  damageClass: string;
  type: string;
  target: string;
  effects: any;
}

export interface IPagination {
  count: number;
  next: string;
  previous: null | string;
}

export interface AppAction extends Action {
  payload?: any;
}

export interface GetPokemons extends AppAction {
  type: 'GET_POKEMONS';
  payload: string;
}
