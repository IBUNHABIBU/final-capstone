import actionTypes from '../constants/index';

const initialState = [];

const recentCarReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_RECENT_CAR:
      return [...payload];
    default:
      return state;
  }
};

export default recentCarReducer;
