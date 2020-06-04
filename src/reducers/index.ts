import reducer from './pokemons';
import singlePokemonReducer from './singlePokemon';
import singleMove from './move';
import pagination from './pagination';

export { default as PokemonsReducer } from './pokemons';
export { default as SinglePokemon } from './singlePokemon';
export { default as Move } from './move';
export { default as Pagination } from './pagination';
export * from './interfaces';
export * from './reducerTypes';
export * from './selectors';
export * from './actions';

export type IPokemonsReducer = ReturnType<typeof reducer>;
export type ISinglePokemonReducer = ReturnType<typeof singlePokemonReducer>;
export type ISingleMove = ReturnType<typeof singleMove>;
export type IPagination = ReturnType<typeof pagination>;
