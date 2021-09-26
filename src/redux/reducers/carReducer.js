import actionTypes from '../constants/index';

const initialState = [];

const carReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_CAR:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default carReducer;