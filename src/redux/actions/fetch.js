import axios from 'axios';
import {
  addCar, setUser, bookCar, selectCar, addRecentCar,
} from './actions';

// export const urlBase = 'https://car.darlive.cyou';

export const urlBase = 'http://localhost:3000';

export const fetchCars = () => async (dispatch) => {
  const response = await axios.get(`${urlBase}/api/v1/cars`);
  dispatch(addCar(response.data));
};

export const recentCars = () => async (dispatch) => {
  const response = await axios.get(`${urlBase}/api/v1/cars/recent`);
  dispatch(addRecentCar(response.data));
};

export const fetchBookings = () => async (dispatch) => {
  const response = await axios.get(`${urlBase}/api/v1/bookings`);
  dispatch(bookCar(response.data));
};

export const checkLoginStatus = () => async (dispatch) => {
  const response = await axios.get(`${urlBase}/logged_in`, {
    withCredentials: true, mode: 'no-cors',
  });
  dispatch(setUser(response.data));
};

export const fetchDetails = (id) => async (dispatch) => {
  const response = await axios.get(`${urlBase}/api/v1/cars/${id}`);
  dispatch(selectCar(response.data));
};

export const createCarBooking = () => async (dispatch) => {
  const response = await axios.get(`${urlBase}/api/v1/bookings`, {
    withCredentials: true,
  });
  dispatch(bookCar(response.data));
};

export const createCar = () => async (dispatch) => {
  const response = await axios.get(`${urlBase}/api/v1/cars`, {
    withCredentials: true,
  });
  dispatch(addCar(response.data));
};
