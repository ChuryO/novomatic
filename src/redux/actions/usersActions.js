import { USERS } from '../constants';

const loadUsers = () => ({
  type: USERS.LOAD
});

const setUsers = posts => ({
  type: USERS.LOAD_SUCCESS,
  payload: posts
});

const setError = error => ({
  type: USERS.LOAD_FAIL,
  payload: error
});

export { loadUsers, setError, setUsers };
