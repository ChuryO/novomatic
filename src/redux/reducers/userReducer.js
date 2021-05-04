import { USER } from '../constants';

const userReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case USER.LOAD_SUCCESS:
      return action.payload.data;
    case USER.LOAD_FAIL:
      return action.payload;
    case USER.CREATE_SUCCESS:
      return action.payload.data;
    case USER.CREATE_FAIL:
      return action.payload;
    case USER.UPDATE_SUCCESS:
      return action.payload.data;
    case USER.UPDATE_FAIL:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
