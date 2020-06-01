import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { Provider } from 'react-redux';
import './styles/lib.css';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from 'styles';

import { configureStore, sagaMiddleware as sagaMiddlewareRun } from 'core';
import Pages from 'pages';
import rootSaga from 'sagas/watchers';

const store = configureStore();
const history = createBrowserHistory();

sagaMiddlewareRun.run(rootSaga);

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
  document.getElementById('root')
);
