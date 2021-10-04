import axios from 'axios';
import { addCar, setUser, bookCar } from './actions';

export const fetchCars = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/api/v1/cars');
  dispatch(addCar(response.data));
};

export const fetchBooking = () => {

};

export const checkLoginStatus = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/logged_in', {
    withCredentials: true,
  });
  dispatch(setUser(response.data));
};

export const fetchDetails = (id) => async (dispatch) => {
  const response = await axios.get(`http://localhost:3001/api/v1/cars${id}`);
  dispatch()
}

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
