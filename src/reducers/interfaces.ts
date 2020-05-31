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

export interface ISingleMove {
  id: number;
  name: string;
  power: number;
  generation: string;
  accuracy: number;
  damageClass: string;
  type: string;
  target: string;
  entries: any;
}

export interface AppAction extends Action {
  payload?: any;
}

export interface GetPokemons extends AppAction {
  type: 'GET_POKEMONS';
  payload: string;
}
