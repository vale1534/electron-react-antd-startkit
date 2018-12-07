import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './app.global.css';
import App from './components/App';


render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./components/App').default;
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
