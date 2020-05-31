import reducer from './pokemons';
import singlePokemonReducer from './singlePokemon';

export { default as PokemonsReducer } from './pokemons';
export { default as SinglePokemon } from './singlePokemon';
export * from './interfaces';
export * from './types';
export * from './selectors';

export type IPokemonsReducer = ReturnType<typeof reducer>;
export type ISinglePokemonReducer = ReturnType<typeof singlePokemonReducer>
