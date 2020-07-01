import { root } from './config';
import { PokemonDetailedType } from '../bus/PokemonDetailed/types';
import { PokemonsType } from '../bus/pokemons/types';

export type FetchPokemonsDataType<T> = (a?: number | string) => Promise<T>;

type APIFetchDataType = {
  pokemons: {
    fetch: FetchPokemonsDataType<PokemonsType>;
  };
  count?: number;
  detailed: {
    fetch: FetchPokemonsDataType<PokemonDetailedType>
  }
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
  detailed: {
    fetch: (name): Promise<PokemonDetailedType> => fetch(`${root}pokemon/${name}`)
    .then((response) => response.json())
    .then((res) => ({
      data: {
        name: res.name,
        stats: res.stats.map(({ stat }: { stat: { name: string } }) => stat.name),
        images: Object.values<string>(res.sprites)
        .filter(url => Boolean(url))
        .reverse(),
        types: res.types.map(({ type }: { type: { name: string } }) => type.name),
        moves: res.moves.map(({ move }: any) => {
          return {
            id: move.url.match(/(move\/)([0-9]+)/g)[0].match(/[0-9]+/)[0],
            name: move.name,
          };
        }),
        abilities: res.abilities.map(
            ({ ability }: { ability: { name: string } }) => ability.name
          ),
      }
    })),
  }
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
