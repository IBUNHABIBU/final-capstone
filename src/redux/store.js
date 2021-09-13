import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import signUpReducer from './reducers/signUpReducer';

export const middleware = [thunk];

const store = createStore(
  signUpReducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);

export default store;
