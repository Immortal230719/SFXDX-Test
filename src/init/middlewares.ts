import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);

const middleware = [sagaMiddleware, routerMiddleware];

export {
  history,
  middleware,
  sagaMiddleware,
};
