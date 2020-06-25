import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

import { FETCH_POKEMONS_ASYNC } from '../types';

import { fetchPokemons } from './workers';

function* watchFetchPokemons(): SagaIterator {
  yield takeEvery( FETCH_POKEMONS_ASYNC, fetchPokemons );
}

export function* watchPokemons(): SagaIterator {
  yield all([
    call(watchFetchPokemons),
  ]);
}
