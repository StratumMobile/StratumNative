import * as Type from '../types/UserTypes';
import StratumService from '../../services/StratumService';

export const getAllUsers = () => {
  return dispatch => {
    new StratumService()
      .getUsers()
      .then(response => {
        dispatch(getUsersSuccess(response));
      })
      .catch(() => dispatch(getUsersFailed));
  };
};

const getUsersSuccess = users => {
  return {
    type: Type.GET_ALL_USERS,
    payload: users,
  };
};

const getUsersFailed = () => {
  return {
    type: Type.GET_USERS_FAILED,
  };
};
