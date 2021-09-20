import SET_USER from '../constants/index';

const initialState = {

};

const signUpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default signUpReducer;
