import { all } from 'redux-saga/effects';

import usersSaga from './usersSagas';

export default function* rootSaga() {
  yield all([
    usersSaga(),
  ])
}
