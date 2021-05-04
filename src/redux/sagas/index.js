import { all } from 'redux-saga/effects';

import usersSaga from './usersSagas';
import { userCreate, userUpdate, userLoad } from "./userSagas";

export default function* rootSaga() {
  yield all([
    usersSaga(),
    userLoad(),
    userCreate(),
    // userUpdate(),
  ])
}
