import { USER } from '../constants';

const loadUser = userId => ({
  type: USER.LOAD,
  payload: userId
});

const setLoadUser = user => ({
  type: USER.LOAD_SUCCESS,
  payload: user
});

const setLoadUserError = error => ({
  type: USER.LOAD_FAIL,
  payload: error
});

const createUser = user => ({
  type: USER.CREATE,
  payload: user
});

const setUserCreate = user => ({
  type: USER.CREATE_SUCCESS,
  payload: user
});

const setUserCreateError = error => ({
  type: USER.CREATE_FAIL,
  payload: error
});

const updateUser = user => ({
  type: USER.UPDATE,
  payload: user
});

const setUserUpdate = user => ({
  type: USER.UPDATE_SUCCESS,
  payload: user
});

const setUserUpdateError = error => ({
  type: USER.UPDATE_FAIL,
  payload: error
});

export {
  loadUser,
  setLoadUser,
  setLoadUserError,
  createUser,
  setUserCreate,
  setUserCreateError,
  updateUser,
  setUserUpdate,
  setUserUpdateError
};
