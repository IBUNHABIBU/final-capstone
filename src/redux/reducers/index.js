import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import carReducer from './carReducer';

const reducers = combineReducers({
  register: signUpReducer,
  car: carReducer,
});

export default reducers;
