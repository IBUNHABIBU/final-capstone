import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
// import loginReducer from './loginReducer';

const reducers = combineReducers({
  register: signUpReducer,
  // login: loginReducer,
});

export default reducers;
