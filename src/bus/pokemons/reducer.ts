import {
  PokemonsType,
  FILL_POKEMONS,
  FETCH_POKEMONS_START,
  FETCH_POKEMONS_STOP,
  FETCH_POKEMONS_ERROR,
  SET_CURRENT_PAGE,
  SEARCH_POKEMONS,
  PokemonsActionTypes,
  ErrorHttpAction,
} from './types';

export type PokemonsState = {
  data: PokemonsType;
  currentPage: number;
  searchValue: string;
  isFetching: boolean;
  error: false | ErrorHttpAction;
}

const initialState: PokemonsState = {
  data: {
    pokemons: [],
    count: 0,
  },
  searchValue: '',
  currentPage: 0,
  isFetching: false,
  error: false,
};

export const pokemonsReducer = (
  state = initialState,
  action: PokemonsActionTypes,
): PokemonsState => {
  switch (action.type) {
    case FETCH_POKEMONS_START:
      return { ...state, isFetching: true, error: false };
    case FILL_POKEMONS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: false,
      };
    case FETCH_POKEMONS_STOP:
      return { ...state, isFetching: false };
    case FETCH_POKEMONS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SEARCH_POKEMONS:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};
