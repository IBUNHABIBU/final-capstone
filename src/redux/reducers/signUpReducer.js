const initialState = {
 logInStatus: 'NOT_LOGGED_IN',
}

const signUpReducer = (state= initialState, {type, payload}) => {
   switch (type) {
    case actionTypes.setUser:
      return { ...state, state.logInStatus: 'LOGGED_IN'}
     break;
   
    default:
     break;
   }
}