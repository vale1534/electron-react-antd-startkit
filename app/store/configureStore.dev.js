// @noflow
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import actionCreators from '../actions';

function configureStore(rootReducer: any, initialState: any, middlewares: any) {
  // Skip redux logs in console during the tests
  if (process.env.NODE_ENV !== 'test') {
    const logger = createLogger({
      level: 'info',
      collapsed: true
    });
    middlewares.push(logger);
  }

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Options: http://extension.remotedev.io/docs/API/Arguments.html
        actionCreators
      })
    : compose;

  // Create Store
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    module.hot.accept(
      '../reducers',
      // eslint-disable-next-line global-require
      () => store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}

export default configureStore;
