import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { Provider } from 'react-redux';
import './styles/lib.css';

import { ThemeProvider } from 'styled-components';

// import { configureStore, sagaMiddleware as sagaMiddlewareRun } from './core';
import { store } from './init/rootStore';
import Pages from './bus';
// import rootSaga from './sagas/watchers';
import { GlobalStyles, theme } from './styles';

// const store = configureStore();
const history = createBrowserHistory();

// sagaMiddlewareRun.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Pages />
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
