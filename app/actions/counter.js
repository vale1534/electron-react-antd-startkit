// @flow
import type {Dispatch, GetState} from '../types';
import * as id from './id';

export function increment() {
  return { type: id.kIncrementCounter };
}

export function decrement() {
  return {
    type: id.kDecrementCounter
  };
}

export function incrementAsync() {
  return {
    type: id.kIncrementCounterAsync
  };
}

export function incrementIfOdd() {
  return (dispatch: Dispatch, getState: GetState) => {
    const { counter } = getState();
    if (counter % 2 === 0) return;
    dispatch(increment());
  };
}
