import reducer from './pokemons';

export { default as PokemonsReducer } from './pokemons';
export * from './actions';
export * from './interfaces';
export * from './types';
export * from './selectors';

export type IPokemonsReducer = ReturnType<typeof reducer>;
