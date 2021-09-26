import actionTypes from '../constants/index';

export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  payload: user,
});

export const addCar = (data) => ({
  type: actionTypes.ADD_CAR,
  payload: data,
});

export const bookCar = (car) => ({
  type: actionTypes.BOOK_CAR,
  payload: car,
});
