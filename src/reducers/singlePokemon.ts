import { AnyAction } from 'redux';
import { ISinglePokemon } from './interfaces';
import { PUT_SINGLE_POKEMON } from './reducerTypes';

const initialState: ISinglePokemon = {
  name: '',
  stats: [],
  abilities: [],
  images: [],
  types: [],
  moves: [],
};

function reducer(
  state = initialState,
  { type, payload }: AnyAction
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
