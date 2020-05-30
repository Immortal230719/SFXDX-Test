import { SagaIterator } from '@redux-saga/core';
import { put, call, select } from 'redux-saga/effects';

import { fetchPokemons } from 'API';
import { fetchError, putPokemons } from './actions';

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
