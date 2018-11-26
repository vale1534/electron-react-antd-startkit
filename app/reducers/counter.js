// @flow
import * as id from '../actions/id';
import type { Action } from '../types';

export default function counter(state: number = 0, action: Action) {
  switch (action.type) {
    case id.kIncrementCounter:
      return state + 1;
    case id.kDecrementCounter:
      return state - 1;
    default:
      return state;
  }
}
