import actionTypes from '../constants/index';

export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  payload: user,
});

export const addCar = (data) => ({
  type: actionTypes.ADD_CAR,
  payload: data,
});

export const addRecentCar = (data) => ({
  type: actionTypes.ADD_RECENT_CAR,
  payload: data,
});

export const bookCar = (car) => ({
  type: actionTypes.BOOK_CAR,
  payload: car,
});

export const selectCar = (car) => ({
  type: actionTypes.SELECT_CAR,
  payload: car,
});
