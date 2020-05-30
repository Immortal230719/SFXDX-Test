import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { PokemonsReducer } from 'reducers';

import { routerMiddleware, connectRouter } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
export const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, routerMiddleware(history)];

export const configureStore = () =>
  createStore(
    combineReducers({
      pokemons: PokemonsReducer,
      router: connectRouter(history),
    }),
    composeWithDevTools(applyMiddleware(...middleware))
  );