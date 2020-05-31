import { AppAction } from './interfaces';

import { ISinglePokemon } from './interfaces';
import { PUT_SINGLE_POKEMON } from 'sagas';

const initialState: ISinglePokemon = {
  name: '',
  stats: [],
  images: [],
  types: [],
  moves: [],
};

function reducer(
  state = initialState,
  { type, payload }: AppAction
): ISinglePokemon {
  switch (type) {
    case PUT_SINGLE_POKEMON:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}

export default reducer;
