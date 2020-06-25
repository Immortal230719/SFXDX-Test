import { root } from './config';
import { PokemonsType } from '../bus/pokemons/types';

export type FetchPokemonsDataType<T> = (a?: number | string) => Promise<T>;

type APIFetchDataType = {
  pokemons: {
    fetch: FetchPokemonsDataType<PokemonsType>;
  };
  count?: number;
}

export const api: APIFetchDataType = {
  pokemons: {
    fetch: (offset): Promise<PokemonsType> => fetch(`${root}pokemon/?offset=${ offset ? Number(offset) * 20 : 0 }&limit=20"`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then(({ results, count }) => ({
        pokemons: [...results],
        count,
      })),
  },
};

// const baseUrl: string = 'https://pokeapi.co/api/v2/';

// // endpoint Pokemon
// const pokemons = axios.create({
//   baseURL: `${baseUrl}pokemon`,
// });

// export const fetchPokemons = async (offset: number) => {
//   const response = await pokemons.get(`?offset=${offset * 20}&limit=20"`);
//   return response;
// };
// export const fetchPokemonDetailed = async (name: string) => {
//   const response = await pokemons.get(name);
//   return response;
// };

// // endpoint move

// const move = axios.create({
//   baseURL: `${baseUrl}move`,
// });

// export const fetchMove = async (id: string) => {
//   const response = await move.get(id);
//   return response;
// };
