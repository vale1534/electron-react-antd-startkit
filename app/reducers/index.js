// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import counter from './counter';

function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    counter
  });
}

export default createRootReducer;
