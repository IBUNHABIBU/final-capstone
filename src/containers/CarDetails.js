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
  const { register, handleSubmit, reset } = useForm();

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
        setMessage('created successfully close the form');
      }
      setErrors(response.data.errors);
    });
    reset();
  };

  const form = (
    <Form
      field={
            [
              {
                name: 'name', type: 'text', label: 'Name', required: true,
              },
              {
                name: 'model', type: 'text', label: 'Model', required: true,
              },
              {
                name: 'pickup', type: 'text', label: 'Pickup', required: true,
              },
              {
                name: 'return_date', type: 'text', label: 'Return Date', required: true,
              },
              {
                name: 'location', type: 'text', label: 'Location', required: true,
              },
              {
                name: 'image', type: 'file', label: 'Image', required: true,
              },
            ]
          }
      onSubmit={(formData) => handleSubmit(formData)}
      action="Book Appointment"
    />
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
        <button
          type="button"
        >
          Book a ride
        </button>
        <div className="model-container">
          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body" />

              </div>

            </div>
          </div>
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
