// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from '../store';
import MainLayout from './MainLayout';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MainLayout />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
