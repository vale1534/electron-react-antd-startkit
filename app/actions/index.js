import { routerActions } from 'connected-react-router';
import * as counterActions from './counter';

const actionCreators = {
  ...counterActions,
  ...routerActions
};

export default actionCreators;
