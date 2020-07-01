import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

import { FETCH_DETAILED_POKEMON_ASYNC } from '../types';

import { fetchDetailedPokemon } from './workers';

function* watchFetchDetailedPokemon(): SagaIterator {
  yield takeEvery(FETCH_DETAILED_POKEMON_ASYNC, fetchDetailedPokemon);
}

export function* watchDetailedPokemon(): SagaIterator {
  yield all([
    call(watchFetchDetailedPokemon),
  ]);
}
