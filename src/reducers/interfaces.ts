import { Action } from 'redux';
import { NUMBERS } from 'typings';

export interface IReducer {
  pokemons?: NUMBERS;
}

export interface AppAction extends Action {
  payload?: any;
}

export interface GetPokemons extends AppAction {
  type: 'GET_POKEMONS';
  payload: string;
}
