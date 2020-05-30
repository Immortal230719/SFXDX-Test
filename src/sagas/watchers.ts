import { SagaIterator } from '@redux-saga/core';
import { takeEvery, takeLatest, all, takeLeading } from 'redux-saga/effects';

import { GET_POKEMONS } from 'reducers';

import { workerGetPokemons } from './workers';

function* watchGetPokemons(): SagaIterator {
  yield takeLeading(GET_POKEMONS, workerGetPokemons);
}

export default function* rootSaga() {
  yield all([watchGetPokemons()]);
}
