// @flow
import * as defs from '../actions/defs';
import type { Action } from '../types';

export default function counter(state: number = 0, action: Action) {
  switch (action.type) {
    case defs.kIncrementCounter:
      return state + 1;
    case defs.kDecrementCounter:
      return state - 1;
    default:
      return state;
  }
}
