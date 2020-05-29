import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from 'styles';

import { configureStore, sagaMiddleware as sagaMiddlewareRun } from 'core';
import rootSaga from 'sagas/watchers';

const store = configureStore();

sagaMiddlewareRun.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <div>Hello</div>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
