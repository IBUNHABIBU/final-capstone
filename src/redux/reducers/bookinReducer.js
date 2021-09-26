import actionTypes from '../constants/index';

const initialState = [];

const bookingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.BOOK_CAR:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default bookingReducer;
