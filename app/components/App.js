// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import MainLayout from './MainLayout';
import { routes } from './constants';
import type { Store } from '../types';

type Props = {
  store: Store,
  history: {}
};

export default class App extends Component<Props> {
  props: Props;
  
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MainLayout />
        </ConnectedRouter>
      </Provider>
    );
  }
}
