import { SagaIterator } from '@redux-saga/core';
import { all, takeLeading } from 'redux-saga/effects';

import * as types from './types';

import {
  workerGetPokemons,
  workerGetSinglePokemon,
  workerGetSingleMove,
} from './workers';

function* watchGetPokemons(): SagaIterator {
  yield takeLeading(types.GET_POKEMONS, workerGetPokemons);
}

function* watchGetSinglePokemon(): SagaIterator {
  yield takeLeading(types.GET_SINGLE_POKEMON, workerGetSinglePokemon);
}

function* watchGetSingleMove(): SagaIterator {
  yield takeLeading(types.GET_SINGLE_MOVE, workerGetSingleMove);
}

export default function* rootSaga() {
  yield all([
    watchGetPokemons(),
    watchGetSinglePokemon(),
    watchGetSingleMove(),
  ]);
}
