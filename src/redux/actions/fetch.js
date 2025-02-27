import axios from 'axios';
import {
  addCar, setUser, bookCar, selectCar, addRecentCar,
} from './actions';

export const urlBase = 'https://hysan.writehub.cyou';

// export const urlBase = 'http://localhost:3000';

export const fetchCars = () => async (dispatch) => {
  try {const response = await axios.get(`${urlBase}/api/v1/cars`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    }
  })} catch (error) {
    console.error('Error fetching data:', error);
  }
  dispatch(addCar(response.data));
};

export const recentCars = () => async (dispatch) => {
  const response = await axios.get(`${urlBase}/api/v1/cars/recent`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    }
  }).catch(error => console.error("there is Error", error));
  dispatch(addRecentCar(response.data));
};

export const fetchBookings = () => async (dispatch) => {
  const response = await axios.get(`${urlBase}/api/v1/bookings`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    }
  }).catch(error => console.error("there is Error", error));;
  dispatch(bookCar(response.data));
};

export const checkLoginStatus = () => async (dispatch) => {
  const response = await axios.get(`${urlBase}/logged_in`, {
    withCredentials: true, mode: 'no-cors',
  }).catch(error => console.error("there is Error", error));
  dispatch(setUser(response.data));
};

export const fetchDetails = (id) => async (dispatch) => {
  const response = await axios.get(`${urlBase}/api/v1/cars/${id}`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    }
  }).catch(error => console.error("there is Error", error));
  dispatch(selectCar(response.data));
};

export const createCarBooking = () => async (dispatch) => {
  const response = await axios.get(`${urlBase}/api/v1/bookings`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    }
  }).catch(error => console.error("there is Error", error));
  dispatch(bookCar(response.data));
};

export const createCar = () => async (dispatch) => {
  const response = await axios.get(`${urlBase}/api/v1/cars`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    }
  }).catch(error => console.error("there is Error", error));
  dispatch(addCar(response.data));
};
