import { all } from 'redux-saga/effects';

// Watchers
import { watchPokemons } from '../bus/pokemons/saga';
import { watchDetailedPokemon } from '../bus/PokemonDetailed/saga';

export function* rootSaga(): Generator {
  yield all([
    watchPokemons(),
    watchDetailedPokemon(),
  ]);
}
