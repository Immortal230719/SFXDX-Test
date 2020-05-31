import { SagaIterator } from '@redux-saga/core';
import { all, takeLeading } from 'redux-saga/effects';

import * as types from './types';

import { workerGetPokemons, workerGetSinglePokemon } from './workers';

function* watchGetPokemons(): SagaIterator {
  yield takeLeading(types.GET_POKEMONS, workerGetPokemons);
}

function* watchGetSinglePokemon(): SagaIterator {
  yield takeLeading(types.GET_SINGLE_POKEMON, workerGetSinglePokemon);
}

export default function* rootSaga() {
  yield all([watchGetPokemons(), watchGetSinglePokemon()]);
}
