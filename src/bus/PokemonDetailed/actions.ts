import {
  FETCH_DETAILED_POKEMON_START,
  FETCH_DETAILED_POKEMON_STOP,
  FETCH_DETAILED_POKEMON_FILL,
  FETCH_DETAILED_POKEMON_ASYNC,
  FETCH_DETAILED_POKEMON_ERROR,
  fetchDetailedPokemonAsync,
  fetchDetailedPokemonFill,
  DetailedPokemonActionTypes,
  FetchDetailedPokemonError,
  PokemonDetailedType,
} from './types';

export function StartFetchingDetailedPokemon(): DetailedPokemonActionTypes {
  return {
    type: FETCH_DETAILED_POKEMON_START,
  };
}

export function StopFetchingDetailedPokemon(): DetailedPokemonActionTypes {
  return {
    type: FETCH_DETAILED_POKEMON_STOP,
  };
}

export function setFetchingDetailedPokemonError(payload: string): FetchDetailedPokemonError {
  return {
    type: FETCH_DETAILED_POKEMON_ERROR,
    error: true,
    payload,
  };
}

export function FillDetailedPokemon(data: PokemonDetailedType): fetchDetailedPokemonFill {
  return {
    type: FETCH_DETAILED_POKEMON_FILL,
    payload: data,
  };
}


export function FetchDetailedPokemonAsync(id: string): fetchDetailedPokemonAsync {
  return {
    type: FETCH_DETAILED_POKEMON_ASYNC,
    payload: id,
  };
}
