import { AppAction } from 'reducers';
import { SagaIterator } from '@redux-saga/core';
import { put, call } from 'redux-saga/effects';

import { fetchPokemons, fetchPokemonDetailed, fetchMove } from 'API';
import {
  fetchError,
  putPokemons,
  putSinglePokemon,
  putSingleMove,
} from './actions';

export function* workerGetPokemons(): SagaIterator {
  try {
    const {
      data: { results },
    } = yield call(fetchPokemons);
    yield put(putPokemons(results));
  } catch (error) {
    yield put(fetchError(error.message));
  }
}

export function* workerGetSinglePokemon(action: AppAction): SagaIterator {
  try {
    const { data } = yield call(fetchPokemonDetailed, action.payload);
    const { name, stats, sprites, types, moves } = data;

    const pokemon = {
      name,
      stats: stats.map((stat: any) => stat.stat.name),
      images: Object.values(sprites)
        .filter((url: any) => Boolean(url))
        .reverse(),
      types: types.map((element: any) => element.type.name),
      moves: moves.map(({ move }: any) => {
        return {
          id: move.url.match(/(move\/)([0-9]+)/g)[0].match(/[0-9]+/)[0],
          name: move.name,
        };
      }),
    };

    yield put(putSinglePokemon(pokemon));
  } catch (error) {
    yield put(fetchError(error.message));
  }
}

export function* workerGetSingleMove(action: AppAction): SagaIterator {
  try {
    const { data } = yield call(fetchMove, action.payload);

    const move = {
      id: data.id,
      name: data.name,
      power: data.power,
      generation: data.generation.name,
      accuracy: data.accuracy,
      damageClass: data.damage_class.name,
      type: data.type.name,
      target: data.target.name,
      entries: data.effect_entries.map((item: any) => {
        const { effect, short_effect } = item;
        return {
          effect: effect.replace(/\$effect_chance%/, '').replace(/ +/g, ' '),
          short_effect: short_effect
            .replace(/\$effect_chance%/, '')
            .replace(/ +/g, ' '),
        };
      }),
    };
    yield put(putSingleMove(move));
  } catch (error) {
    yield put(fetchError(error.message));
  }
}
