import SET_USER from '../constants/index';

const initialState = {
  logInStatus: 'NOT_LOGGED_IN',
};

const signUpReducer = (state = initialState, { type }) => {
  switch (type) {
    case SET_USER:
      return { ...state, logInStatus: 'LOGGED_IN' };
    default:
      return state;
  }
};

export default signUpReducer;
