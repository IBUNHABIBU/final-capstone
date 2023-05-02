/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
  createCarBooking, fetchDetails, checkLoginStatus, urlBase,
} from '../redux/actions/fetch';
// import Form from '../components/Form';
import Pop from './Pop';

const CarDetails = () => {
  const details = useSelector((state) => state.detail);
  const user = useSelector((state) => state.register);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState('');
  const dispatch = useDispatch();
  const { slug } = useParams();
  const id = parseInt(slug.split('-').pop(), 10);

  useEffect(() => {
    checkLoginStatus();
    dispatch(fetchDetails(id));
  }, [id, slug]);

  const {
    color, engine, year, title, price, imageUrl,
  } = details;
  const { name } = user.details;

  const handleSubmit = (data) => {
    console.log('Data', data);
    axios.post(`${urlBase}/api/v1/bookings`, {
      booking: {
        name: data.name,
        model: data.model,
        pickup: data.pickup,
        return_date: data.return_date,
        location: data.location,
      },
    },
    { withCredentials: true }).then((response) => {
      console.log('Response', response);
      if (response.data.status === 'created') {
        dispatch(createCarBooking(response.data));
        setMessage('Booking created successfully');
        console.log('Response', response, message);
      }
      console.log('Response error', response.data.error);
    }).catch((error) => {
      console.log(error);
      setErrors(error.response.data.message);
    });
  };

  const form = (
    <div className="form">
      { message && <span className="msg">{message}</span> }
      {errors?.length ? (
        <div className="error">
          <h4>Oops! your form could not be saved</h4>
          <p>Please correct the following errors:</p>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <form onSubmit={(formData) => handleSubmit(formData)}>
        <input
          name="name"
          type="text"
          label="Name"
          required="true"
          defaultValue={name}
        />
        <input
          name="title"
          type="text"
          label="Model"
          required="true"
          defaultValue={title}
        />
        <input
          name="pickup"
          type="datetime-local"
          label="Pickup date"
          required="true"
        />
        <input
          name="return_date"
          type="datetime-local"
          label="Return date"
          required="true"
        />
        <input
          name="location"
          type="text"
          label="Location"
          required="true"
        />
        <button type="submit" className="btn btn-primary col-12">Book Appointment</button>
      </form>
    </div>
  );

  return (
    <div className="details">
      <div className="details__image">
        <img alt="car" src={imageUrl} />
      </div>
      <div className="details__section">
        <div className="details__section__header">
          <p>
            {title}
          </p>
          <p>
            Price per hour:
            {price}
          </p>
        </div>
        <div className="details__section__lists">
          <ul>
            <li>
              {' '}
              <span className="d-span lead mr-4">Color:</span>
              {color}
            </li>
            <li>
              <span className="d-span lead mr-4">Engine:</span>
              {engine}
            </li>
            <li>
              <span className="d-span lead mr-4">Year:</span>
              {year}
            </li>
          </ul>
        </div>

        <div className="details__section__actions">
          <Pop trigger="Book a ride" content={form} />
          <div className="form-floating mb-3 col-6">
            <button type="submit" className="btn btn-primary col-12">Edit car</button>
          </div>
          <div className="form-floating mb-3 col-6">
            <button type="submit" className="btn btn-primary col-12">Delete car</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
