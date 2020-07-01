import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Reducers
import { pokemonsReducer as pokemons } from '../bus/pokemons/reducer';
import { detailedPokemonReducer as detailed } from '../bus/PokemonDetailed/reducer';
import { detailedMoveReducer as move } from '../bus/MoveDetailed/reducer';

import { history } from './middlewares';

export const rootReducer = combineReducers({
  router: connectRouter(history),
  pokemons,
  detailed,
  move,
});

export type AppState = ReturnType<typeof rootReducer>;
