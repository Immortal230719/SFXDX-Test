import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Reducers
import { pokemonsReducer as pokemons } from '../bus/pokemons/reducer';

import { history } from './middlewares';

export const rootReducer = combineReducers({
  router: connectRouter(history),
  pokemons,
});

export type AppState = ReturnType<typeof rootReducer>;
