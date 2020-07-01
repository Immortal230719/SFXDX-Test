import { root } from './config';
import { PokemonDetailedType } from '../bus/PokemonDetailed/types';
import { PokemonsType } from '../bus/pokemons/types';
import { MoveDetailedType } from '../bus/MoveDetailed/types';

export type FetchPokemonsDataType<T> = (a?: number | string) => Promise<T>;

type APIFetchDataType = {
  pokemons: {
    fetch: FetchPokemonsDataType<PokemonsType>;
  };
  count?: number;
  detailed: {
    fetch: FetchPokemonsDataType<PokemonDetailedType>;
  };
  move: {
    fetch: FetchPokemonsDataType<MoveDetailedType>;
  };
}

export const api: APIFetchDataType = {
  pokemons: {
    fetch: (offset): Promise<PokemonsType> => fetch(`${root}pokemon/?offset=${offset ? Number(offset) * 20 : 0}&limit=20"`, {
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
            .filter((url) => Boolean(url))
            .reverse(),

          types: res.types.map(({ type }: { type: { name: string } }) => type.name),

          moves: res.moves.map(({ move }: { move: {
              name: string;
              url: string;
            };
            }) => {
            const url = move.url.match(/(move\/)([0-9]+)/g);
            const result = url ? url[0].match(/[0-9]+/) : null;
            return {
              id: result ? result[0] : null,
              name: move.name,
            };
          }),

          abilities: res.abilities.map(
            ({ ability }: { ability: { name: string } }) => ability.name,
          ),
        },
      })),
  },
  move: {
    fetch: (id): Promise<MoveDetailedType> => fetch(`${root}move/${id}`)
      .then((response) => response.json())
      .then((data) => ({
        moveId: data.id,
        name: data.name,
        power: data.power,
        generation: data.generation.name,
        accuracy: data.accuracy,
        damageClass: data.damage_class.name,
        type: data.type.name,
        target: data.target.name,
        effects: data.effect_entries.map((item: {
            short_effect: string;
          }) => item.short_effect
          .replace(/\$effect_chance%/, '')
          .replace(/ +/g, ' '))[0],
      })),
  },
};
