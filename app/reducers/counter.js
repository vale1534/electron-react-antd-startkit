// @flow
import * as defs from '../actions/defs';

export default function counter(state = 0, action) {
  switch (action.type) {
    case defs.kIncrementCounter:
      return state + 1;
    case defs.kDecrementCounter:
      return state - 1;
    default:
      return state;
  }
}
