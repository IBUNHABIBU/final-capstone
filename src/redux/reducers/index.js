import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import carReducer from './carReducer';
import bookingReducer from './bookinReducer';
import detailsReducer from './detailsReducer';

const reducers = combineReducers({
  register: signUpReducer,
  car: carReducer,
  booking: bookingReducer,
  detail: detailsReducer,,
});

export default reducers;
