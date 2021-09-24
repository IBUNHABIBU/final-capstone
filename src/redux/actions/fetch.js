import axios from 'axios';
import { setUser } from './actions';

export const fetchCars = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/api/v1/cars');
  dispatch(setUser(response.data));
};

export const fetchBooking = () => {

};

export const checkLoginStatus = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/logged_in', {
    withCredentials: true,
  });
  dispatch(setUser(response.data));
};
