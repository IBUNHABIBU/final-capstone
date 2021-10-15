import axios from 'axios';
import {
  addCar, setUser, bookCar, selectCar,
} from './actions';

export const fetchCars = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/api/v1/cars');
  dispatch(addCar(response.data));
};

export const fetchBookings = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/api/v1/bookings');
  dispatch(bookCar(response.data));
};

export const checkLoginStatus = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/logged_in', {
    withCredentials: true,
  });
  dispatch(setUser(response.data));
};

export const fetchDetails = (id) => async (dispatch) => {
  const response = await axios.get(`http://localhost:3001/api/v1/cars/${id}`);
  dispatch(selectCar(response.data));
};

export const createCarBooking = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/api/v1/bookings', {
    withCredentials: true,
  });
  dispatch(bookCar(response.data));
};

export const createCar = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/api/v1/cars', {
    withCredentials: true,
  });
  dispatch(addCar(response.data));
};
