import { SagaIterator } from '@redux-saga/core';
import { put, call, select } from 'redux-saga/effects';

import { fetchPokemons } from 'API';
import { errorAction } from 'reducers';

export function* workerGetPokemons(): SagaIterator {
  try {
    const pokemons = yield call(fetchPokemons);
    console.log(pokemons);
  } catch (error) {
    yield put(errorAction(error.message));
  }
}
