import reducer from './pokemons';
import singlePokemonReducer from './singlePokemon';
import singleMove from './move';

export { default as PokemonsReducer } from './pokemons';
export { default as SinglePokemon } from './singlePokemon';
export { default as move } from './move';
export * from './interfaces';
export * from './types';
export * from './selectors';

export type IPokemonsReducer = ReturnType<typeof reducer>;
export type ISinglePokemonReducer = ReturnType<typeof singlePokemonReducer>;
export type ISingleMove = ReturnType<typeof singleMove>;
