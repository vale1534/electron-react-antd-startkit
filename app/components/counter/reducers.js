// @flow
import type { Action } from '../types';
import * as Actions from './actions';

export default function counter(state: number = 0, action: Action) {
  switch (action.type) {
    case Actions.INCREMENT_COUNTER:
      return state + 1;
    case Actions.DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}