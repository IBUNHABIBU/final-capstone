import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import carReducer from './carReducer';
import bookingReducer from './bookinReducer';

const reducers = combineReducers({
  register: signUpReducer,
  car: carReducer,
  booking: bookingReducer,
});

export default reducers;
