// @flow
import { delay } from 'redux-saga';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as id from '../actions/id';

function* IncrementCounterAsync(): any {
  yield call(delay, 1000);
  yield put({ type: id.kIncrementCounter });
}

function* rootSaga(): any {
  console.log('Hello Sagas!');
  yield takeEvery(id.kIncrementCounterAsync, IncrementCounterAsync);
}

export default rootSaga;
