import actionTypes from '../constants/index';

const initialState = {

};

const signUpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER:
      return { ...state, ...payload };
    case actionTypes.CHECK_USER:
      return { ...state, loggedIn: true };
    default:
      return state;
  }
};

export default signUpReducer;
