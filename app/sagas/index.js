import { delay } from 'redux-saga';
import { put, call, takeEvery } from 'redux-saga/effects';
import * as defs from '../actions/defs';

function* IncrementCounterAsync() {
  yield call(delay, 1000);
  yield put({ type: defs.kIncrementCounter });
}

function* rootSaga() {
  console.log('Hello Sagas!');
  yield takeEvery(defs.kIncrementCounterAsync, IncrementCounterAsync);
}

export default rootSaga;
