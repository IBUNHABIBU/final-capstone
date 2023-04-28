/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */

import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  createCarBooking, fetchDetails, checkLoginStatus, urlBase,
} from '../redux/actions/fetch';
import Form from '../components/Form';
import Pop from './Pop';

const CarDetails = (props) => {
  const details = useSelector((state) => state.detail);
  const user = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const { id, slug } = props.match.params();
  useEffect(() => {
    checkLoginStatus();
    dispatch(fetchDetails(id, slug));
  }, [id, slug]);

  const {
    color, engine, year, title, price, imageUrl,
  } = details;
  const { name } = user.details;

  const handleSubmit = (data) => {
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
      }
    });
  };

  const form = (
    <Form
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

CarDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CarDetails;
