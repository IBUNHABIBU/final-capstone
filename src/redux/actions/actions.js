import actionTypes from './../constants/index';

export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  payload: user,
});

export const checkUser = () => ({
  type: actionTypes.CHECK_USER,
});
