import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

import { FETCH_DETAILED_MOVE_ASYNC } from '../types';

import { fetchDetailedMove } from './workers';

function* watchFetchDetailedMove(): SagaIterator {
  yield takeEvery(FETCH_DETAILED_MOVE_ASYNC, fetchDetailedMove);
}

export function* watchDetailedMove(): SagaIterator {
  yield all([
    call(watchFetchDetailedMove),
  ]);
}
