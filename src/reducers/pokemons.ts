import { AnyAction } from 'redux';
import { PUT_POKEMONS } from './reducerTypes';
import { IPokemonBase } from './interfaces';

const initialState: IPokemonBase[] = [];

function reducer(
  state = initialState,
  { type, payload }: AnyAction
): IPokemonBase[] {
  switch (type) {
    case PUT_POKEMONS:
      return [...payload];
    default:
      return state;
  }
}

export default reducer;
