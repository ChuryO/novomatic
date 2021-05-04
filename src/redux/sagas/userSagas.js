import { call, fork, put, take } from 'redux-saga/effects';

import { USER } from '../constants';

import {
  setUserCreate,
  setUserUpdate,
  setUserCreateError,
  setUserUpdateError,
  setLoadUser, setLoadUserError
} from '../actions/userActions'

import { getById, postReq, putReq } from '../api'

export function* handleUserLoad({ payload }) {
  try {
    const user = yield call(getById, 'https://reqres.in/api/users', payload);
    yield put(setLoadUser(user))
  } catch (error) {
    yield put(setLoadUserError(error.toString()));
  }
}

export function* handleUserCreate(payload) {
  try {
    const user = yield call(postReq, 'https://reqres.in/api/users', payload);
    yield put(setUserCreate(user))
  } catch (error) {
    yield put(setUserCreateError(error.toString()));
  }
}

export function* handleUserUpdate(payload) {
  try {
    const user = yield call(putReq, 'https://reqres.in/api/users');
    yield put(setUserUpdate(user))
  } catch (error) {
    yield put(setUserUpdateError(error.toString()));
  }
}

function* userLoad(action) {
  const payload = yield take(USER.LOAD);
  yield fork(handleUserLoad, payload)
}

function* userCreate(action) {
  const payload = yield take(USER.CREATE);
  yield fork(handleUserCreate, payload)
}

function* userUpdate(action) {
  const payload = yield take(USER.UPDATE);
  yield fork(handleUserUpdate, payload)
}

export { userLoad, userCreate, userUpdate }