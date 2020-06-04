import { ISinglePokemon } from 'reducers';
import { AnyAction } from 'redux';
import { SagaIterator } from '@redux-saga/core';
import { put, call, delay } from 'redux-saga/effects';

import { fetchPokemons, fetchPokemonDetailed, fetchMove } from 'API';
import {
  fetchError,
  putPokemons,
  putSinglePokemon,
  putSingleMove,
  putPagination,
  putToggleBackDrop,
} from './sagaActions';

export function* workerGetPokemons(action: AnyAction): SagaIterator {
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

export function* workerGetSinglePokemon(action: AnyAction): SagaIterator {
  try {
    yield put(putToggleBackDrop(true));
    const { data } = yield call(fetchPokemonDetailed, action.payload);
    const { name, stats, sprites, types, moves, abilities } = data;

    const pokemon: ISinglePokemon = {
      name,
      abilities: abilities.map(
        ({ ability }: { ability: { name: string } }) => ability.name
      ),
      stats: stats.map(({ stat }: { stat: { name: string } }) => stat.name),
      images: Object.values(sprites)
        .filter(url => Boolean(url))
        .reverse(),
      types: types.map(({ type }: { type: { name: string } }) => type.name),
      moves: moves.map(({ move }: any) => {
        return {
          id: move.url.match(/(move\/)([0-9]+)/g)[0].match(/[0-9]+/)[0],
          name: move.name,
        };
      }),
    };
    yield put(putSinglePokemon(pokemon));
    yield delay(100);
    yield put(putToggleBackDrop(false));
  } catch (error) {
    yield put(putToggleBackDrop(false));
    yield put(fetchError(error.message));
  }
}

export function* workerGetSingleMove(action: AnyAction): SagaIterator {
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
