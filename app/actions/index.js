// @flow
import * as counterActions from './counter';
import { routerActions } from 'connected-react-router';

const actionCreators = {
  ...counterActions,
  ...routerActions
};

export default actionCreators;
