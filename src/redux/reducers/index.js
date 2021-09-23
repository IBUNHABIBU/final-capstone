import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';

const reducers = combineReducers({
  register: signUpReducer,
});

export default reducers;
