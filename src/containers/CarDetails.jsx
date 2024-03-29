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
import Form from '../components/Form';
import Pop from './Pop';

const CarDetails = () => {
  const details = useSelector((state) => state.detail);
  const user = useSelector((state) => state.register);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { slug } = useParams();
  const id = parseInt(slug.split('-').pop(), 10);

  useEffect(() => {
    checkLoginStatus();
    dispatch(fetchDetails(id));
    setMessage('');
  }, [id, slug, isOpen]);

  const {
    color, engine, year, title, price, imageUrl,
  } = details;
  const { name } = user.details;

  const handleSubmit = (data) => {
    axios.post(`${urlBase}/api/v1/bookings`, {
      booking: {
        name,
        model: title,
        pickup: data.pickup,
        return_date: data.return_date,
        location: data.location,
      },
    },
    { withCredentials: true }).then((response) => {
      if (response.data.status === 'created') {
        dispatch(createCarBooking(response.data));
        setMessage('Booking created successfully');
      }
    }).catch((error) => {
      setErrors(error.response.data.message);
    });
  };

  const form = (

    <div className="form-container">
      <h3 className="u-center-text">Add an Appointment</h3>
      <Form
        message={message}
        errors={errors}
        field={
              [
                {
                  name: 'name', type: 'text', label: 'Name', required: true, defaultValue: name,
                },
                {
                  name: 'model', type: 'text', label: 'Model', required: true, defaultValue: title,
                },
                {
                  name: 'pickup', type: 'datetime-local', label: 'Pickup', required: true,
                },
                {
                  name: 'return_date', type: 'datetime-local', label: 'Return Date', required: true,
                },
                {
                  name: 'location', type: 'text', label: 'Location', required: true,
                },
              ]
            }
        onSubmit={(formData) => handleSubmit(formData)}
        action="Book Appointment"
      />
    </div>
  );

  return (
    <div className="details">
      <div className="details__image">
        <img alt="car" src={imageUrl} />
      </div>
      <div className="details__section">
        <div className="details__header">
          <p>
            {title}
          </p>
          <p>
            Price per hour:
            {price}
          </p>
        </div>
        <div className="details__lists">
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

        <div className="details__actions">
          <Pop trigger="Book a ride" content={form} isOpen={isOpen} setIsOpen={setIsOpen} />
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
