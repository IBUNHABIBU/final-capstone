import SET_USER from '../constants/index';

const initialState = {
  isLoggedIn: false,
};

const signUpReducer = (state = initialState, { type }) => {
  switch (type) {
    case SET_USER:
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
};

export default signUpReducer;
