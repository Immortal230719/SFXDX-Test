import { AppAction } from 'reducers';
import { SagaIterator } from '@redux-saga/core';
import { put, call } from 'redux-saga/effects';

import { fetchPokemons, fetchPokemonDetailed, fetchMove } from 'API';
import {
  fetchError,
  putPokemons,
  putSinglePokemon,
  putSingleMove,
  putPagination,
  putToggleBackDrop,
} from './actions';

export function* workerGetPokemons(action: AppAction): SagaIterator {
  try {
    yield put(putToggleBackDrop(true));
    const {
      data: { count, results },
    } = yield call(fetchPokemons, action.payload);
    const paginationData = {
      count,
    };
    yield put(putPagination(paginationData));
    yield put(putPokemons(results));
    yield put(putToggleBackDrop(false));
  } catch (error) {
    yield put(putToggleBackDrop(false));
    yield put(fetchError(error.message));
  }
}

export function* workerGetSinglePokemon(action: AppAction): SagaIterator {
  try {
    yield put(putToggleBackDrop(true));
    const { data } = yield call(fetchPokemonDetailed, action.payload);

    const { name, stats, sprites, types, moves, abilities } = data;

    const pokemon = {
      name,
      abilities: abilities.map(({ ability }: any) => ability.name),
      stats: stats.map(({ stat }: any) => stat.name),
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
    // yield put(putToggleBackDrop(false));
  } catch (error) {
    yield put(putToggleBackDrop(false));
    yield put(fetchError(error.message));
  }
}

export function* workerGetSingleMove(action: AppAction): SagaIterator {
  try {
    yield put(putToggleBackDrop(true));
    const { data } = yield call(fetchMove, action.payload);

    const move = {
      moveId: data.id,
      name: data.name,
      power: data.power,
      generation: data.generation.name,
      accuracy: data.accuracy,
      damageClass: data.damage_class.name,
      type: data.type.name,
      target: data.target.name,
      effects: data.effect_entries.map((item: any) => {
        return item.short_effect
          .replace(/\$effect_chance%/, '')
          .replace(/ +/g, ' ');
      })[0],
    };
    yield put(putSingleMove(move));
    yield put(putToggleBackDrop(false));
  } catch (error) {
    yield put(putToggleBackDrop(false));
    yield put(fetchError(error.message));
  }
}
