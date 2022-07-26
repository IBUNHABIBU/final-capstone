import { combineReducers } from 'redux';
import signUpReducer from './signUpReducer';
import carReducer from './carReducer';
import bookingReducer from './bookingReducer';
import detailsReducer from './detailsReducer';
import recentCarReducer from './recentCarReducer';

const reducers = combineReducers({
  register: signUpReducer,
  car: carReducer,
  booking: bookingReducer,
  detail: detailsReducer,
  recent: recentCarReducer,
});

export default reducers;
