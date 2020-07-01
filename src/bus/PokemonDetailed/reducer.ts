import {
  FETCH_DETAILED_POKEMON_START,
  FETCH_DETAILED_POKEMON_STOP,
  FETCH_DETAILED_POKEMON_FILL,
  FETCH_DETAILED_POKEMON_ERROR,
  DetailedPokemonActionTypes,
} from './types';

export type DetailedPokemonState = {
  data: {
    name: string;
    stats: string[];
    abilities: string[];
    types: string[];
    moves: string[];
    images: string[];
  };
  isFetching: boolean;
  error: boolean;
}

const initialState: DetailedPokemonState = {
  data: {
    name: '',
    stats: [],
    abilities: [],
    types: [],
    moves: [],
    images: [],
  },
  isFetching: false,
  error: false,
};

export const detailedPokemonReducer = (
  state = initialState,
  action: DetailedPokemonActionTypes,
): DetailedPokemonState => {
  switch (action.type) {
    case FETCH_DETAILED_POKEMON_START:
      return { ...state, isFetching: true, error: false };
    case FETCH_DETAILED_POKEMON_FILL:
      return {
        ...state,
        data: action.payload.data,
        isFetching: false,
        error: false,
      };
    case FETCH_DETAILED_POKEMON_STOP:
      return { ...state, isFetching: false };
    case FETCH_DETAILED_POKEMON_ERROR:
      return {
        ...state,
        error: Boolean(action.payload),
      };
    default:
      // eslint-disable-next-line no-case-declarations
      const x: never = action;
      return state;
  }
};
