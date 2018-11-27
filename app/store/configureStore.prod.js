// @flow
import { createStore, applyMiddleware } from 'redux';

function configureStore(rootReducer: any, initialState: any, middlewares: any) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
}

export default configureStore;
