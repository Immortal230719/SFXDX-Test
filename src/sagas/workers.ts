import { AppAction } from 'reducers';
import { SagaIterator } from '@redux-saga/core';
import { put, call } from 'redux-saga/effects';

import { fetchPokemons, fetchPokemonDetailed } from 'API';
import { fetchError, putPokemons, putSinglePokemon } from './actions';

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
      images: Object.values(sprites).filter((url: any) => Boolean(url)),
      types: types.map((element: any) => element.type.name),
      moves: [...moves],
    };

    yield put(putSinglePokemon(pokemon));
  } catch (error) {
    yield put(fetchError(error.message));
  }
}
