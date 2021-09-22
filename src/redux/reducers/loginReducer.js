import actionTypes from '../constants/index';

const initialState = {

};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHECK_USER:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default loginReducer;
