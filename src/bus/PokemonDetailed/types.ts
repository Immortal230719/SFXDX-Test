export type PokemonDetailedType = {
  data: {
    name: string,
    stats: string[],
    abilities: string[],
    types: string[],
    moves: string[],
    images: string[],
  };
}

export const FETCH_DETAILED_POKEMON_START = 'FETCH_DETAILED_PKEMON_START';
type fetchDetailedPokemonStart = {
  type: typeof FETCH_DETAILED_POKEMON_START;  
}

export const FETCH_DETAILED_POKEMON_STOP = 'FETCH_DETAILED_PKEMON_STOP';
type fetchDetailedPokemonStop = {
  type: typeof FETCH_DETAILED_POKEMON_STOP;  
}

export const FETCH_DETAILED_POKEMON_FILL = 'FETCH_DETAILED_PKEMON_FILL';
export type fetchDetailedPokemonFill = {
  type: typeof FETCH_DETAILED_POKEMON_FILL;
  payload: PokemonDetailedType;
}

export const FETCH_DETAILED_POKEMON_ERROR = 'FETCH_DETAILED_POKEMON_ERROR';
export type FetchDetailedPokemonError = {
  type: typeof FETCH_DETAILED_POKEMON_ERROR;
  error: true;
  payload: string;
};

export const FETCH_DETAILED_POKEMON_ASYNC = 'FETCH_DETAILED_POKEMON_ASYNC';
export type fetchDetailedPokemonAsync = {
  type: typeof FETCH_DETAILED_POKEMON_ASYNC;
  payload: string;
}

export type DetailedPokemonActionTypes= 
  | fetchDetailedPokemonStart
  | fetchDetailedPokemonStop
  | fetchDetailedPokemonFill
  | FetchDetailedPokemonError
