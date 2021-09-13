import SET_USER from '../constants/index';

const initialState = {
  logInStatus: 'NOT_LOGGED_IN',
};

const signUpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER:
      return { ...state, logInStatus: 'LOGGED_IN' };
      break;

    default:
      return state;
  }
};

export default signUpReducer;
