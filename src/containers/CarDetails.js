/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  createCarBooking, fetchDetails, checkLoginStatus, urlBase,
} from '../redux/actions/fetch';

const CarDetails = () => {
  const details = useSelector((state) => state.detail);
  const user = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [errors, setErrors] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    checkLoginStatus();
    dispatch(fetchDetails(id));
  }, []);

  const {
    color, engine, year, title, price, imageUrl,
  } = details;
  const { name } = user.details;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
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
      if (response.data.status === 'created') {
        dispatch(createCarBooking(response.data));
        setMessage('Created successfully close the form');
      }
      setErrors(response.data.errors);
    });
  };
  return (
    <div className="details-container">
      <div className="details-image">
        <img alt="car" src={imageUrl} />
      </div>
      <div className="details-section">
        <div className="details-header">
          <p className="display-6">
            {title}
          </p>
          <p className="lead">
            Price per hour:
            {price}
          </p>
        </div>
        <div className="details">
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
        <button
          type="button"
          className="btn btn-primary m-4"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Book a ride
        </button>

        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">

                {message && (
                <div className="modal-header col-12">
                  <div className="alert alert-success col-12" role="alert">{message}</div>
                  <button type="button" className="btn-close alert-success close-button" data-bs-dismiss="modal" aria-label="close" />
                </div>
                )}

              </div>
              <div className="modal-body">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                  {errors && <div className="alert alert-danger col-12" role="alert">{ errors.map((error, index) => <li key={index} className="text-start">{error}</li>) }</div>}
                  <div className="form-floating mb-2 col-8">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      defaultValue={name}
                      {...register('name')}
                      id="floatingInput"
                      placeholder="Car color"
                    />
                    <label htmlFor="floatingInput">Name</label>
                  </div>
                  <div className="form-floating mb-2 col-8">
                    <input type="text" name="model" defaultValue={title} {...register('model')} className="form-control" id="floatingInput" placeholder="Enter model type" />
                    <label htmlFor="floatingInput">model</label>
                  </div>
                  <div className="form-floating mb-2 col-8">
                    <input type="datetime-local" name="pickup" {...register('pickup')} className="form-control" id="floatingInputEmail" placeholder="Enter pickup date" />
                    <label htmlFor="floatingInputEmail">Pickup Date</label>
                  </div>
                  <div className="form-floating mb-2 col-8">
                    <input type="datetime-local" name="return_date" {...register('return_date')} className="form-control" id="floatingInputEmail" placeholder="Enter return date" />
                    <label htmlFor="floatingInputEmail">Return Date</label>
                  </div>
                  <div className="form-floating mb-2 col-8">
                    <input type="text" name="location" {...register('location')} className="form-control" id="floatingPassword" placeholder="Enter location" />
                    <label htmlFor="floatingPassword">Location</label>
                  </div>
                  <div className="form-floating mb-3 col-6">
                    <button type="submit" className="btn btn-primary col-12">Book ride</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
