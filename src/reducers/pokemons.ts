import { AppAction } from './interfaces';

import { IPokemonBase } from './interfaces';
import { PUT_POKEMONS } from 'sagas';

const initialState: IPokemonBase[] = [];

function reducer(
  state = initialState,
  { type, payload }: AppAction
): IPokemonBase[] {
  switch (type) {
    case PUT_POKEMONS:
      console.log(payload);

      return [...state, ...payload];
    default:
      return state;
  }
}

export default reducer;
