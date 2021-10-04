import actionTypes from '../constants';

const initialState = {
};

const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECT_CAR:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default detailsReducer;
