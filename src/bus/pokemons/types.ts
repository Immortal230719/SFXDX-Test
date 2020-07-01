export type PokemonBaseType = {
  name: string;
  url: string;
}

export type PokemonsType = {
  pokemons: Array<PokemonBaseType>;
  count: number;
}

export type ErrorHttpAction = string;

export const FETCH_POKEMONS_START = 'FETCH_POKEMONS_START';
type fetchPokemonsStartAction = {
  type: typeof FETCH_POKEMONS_START;
};
export const FETCH_POKEMONS_STOP = 'FETCH_POKEMONS_STOP';
type fetchPokemonsStopAction = {
  type: typeof FETCH_POKEMONS_STOP;
};
export const FILL_POKEMONS = 'FILL_POKEMONS';
export type fillPokemonsAction = {
  type: typeof FILL_POKEMONS;
  payload: PokemonsType;
};
export const FETCH_POKEMONS_ASYNC = 'FETCH_POKEMONS_ASYNC';
export type fetchPokemonsAsyncAction = {
  type: typeof FETCH_POKEMONS_ASYNC;
  payload: number;
};
export const FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR';
export type FetchPokemonsError = {
  type: typeof FETCH_POKEMONS_ERROR;
  error: true;
  payload: ErrorHttpAction;
};


export const PUT_PAGINATION = 'PUT_PAGINATION';
export type putPaginationAction = {
  type: typeof PUT_PAGINATION;
};
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export type setCurrentPageAction = {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
};

export type PokemonsActionTypes =
  | fetchPokemonsStartAction
  | fetchPokemonsStopAction
  | fillPokemonsAction
  | FetchPokemonsError
  | setCurrentPageAction
