import { all } from 'redux-saga/effects';

// Watchers
import { watchPokemons } from '../bus/pokemons/saga';

export function* rootSaga(): Generator {
  yield all([watchPokemons()]);
}
