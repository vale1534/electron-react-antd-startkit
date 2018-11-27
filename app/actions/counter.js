// @flow
import type {Dispatch, GetState} from '../types';
import * as defs from './defs';

export function increment() {
  return { type: defs.kIncrementCounter };
}

export function decrement() {
  return {
    type: defs.kDecrementCounter
  };
}

export function incrementAsync() {
  return {
    type: defs.kIncrementCounterAsync
  };
}

export function incrementIfOdd() {
  return (dispatch: Dispatch, getState: GetState) => {
    const { counter } = getState();
    if (counter % 2 === 0) return;
    dispatch(increment());
  };
}
