import { createStore, applyMiddleware } from 'redux';

function configureStore(rootReducer, initialState, middlewares) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
}

export default configureStore;
