import actionTypes from '../constants/index';

export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  payload: user,
});

export const checkUser = (data) => ({
  type: actionTypes.CHECK_USER,
  payload: data,
});

export const setCars = (car) => ({
  type: actionTypes.SET_CAR,
  payload: car,
});
