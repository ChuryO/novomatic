import { USERS } from '../constants';

const usersReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case USERS.LOAD_SUCCESS:
      return action.payload.data;
    case USERS.LOAD_FAIL:
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;
