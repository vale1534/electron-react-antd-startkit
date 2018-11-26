import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import { configureStore, history } from './store/configureStore';

import './app.global.css';

const store = configureStore();

render(
  <AppContainer>
    <App store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./components/App').default;
    render(
      <AppContainer>
        <NextApp store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
