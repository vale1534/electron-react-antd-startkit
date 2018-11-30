import reduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import configureStoreDev from './configureStore.dev';
import configureStoreProd from './configureStore.prod';
import initialState from './initialState';
import createRootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore =
  process.env.NODE_ENV === 'production'
    ? configureStoreProd
    : configureStoreDev;

const history = createHashHistory();
const rootReducer = createRootReducer(history);
const router = routerMiddleware(history);
const reduxSaga = createSagaMiddleware();
const middlewares = [reduxThunk, reduxSaga, router];

const store = configureStore(rootReducer, initialState, middlewares);
const action = (type) => store.dispatch({ type });

reduxSaga.run(rootSaga);
export { store, action, history };
