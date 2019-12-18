import * as Type from '../types/UserTypes';

const initialState = {
  allUsers: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.GET_ALL_USERS: {
      return {
        ...state,
        allUsers: action.payload,
      };
    }
    default:
      return state;
  }
};

export default UserReducer;
