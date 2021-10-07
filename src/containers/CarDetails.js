/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { createCarBooking, fetchDetails } from '../redux/actions/fetch';

const CarDetails = () => {
  const details = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [id]);

  const {
    color, engine, year, model, price,
  } = details;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios.post('http://localhost:3001/api/v1/bookings', {
      booking: {
        name: data.name,
        model: data.model,
        pickup: data.pickup,
        return: data.return,
        location: data.location,
      },
    },
    { withCredentials: true }).then((response) => {
      if (response.data.status === 'created') {
        dispatch(createCarBooking(response.data));
      }
    });
  };
  return (
    <div className="details-container">
      <div className="details-image">
        <img src="" alt="" />
      </div>
      <div className="details-section">
        <div className="details-header">
          <p className="display-6">Cadillac Escallade</p>
          <p className="lead">Price: {price}</p>
        </div>
        <div className="details">
          <ul>
            <li>
              {' '}
              <span className="d-span bold">Color:</span>
              {color}
            </li>
            <li>
              <span className="d-span bold">Engine:</span>
              {engine}
            </li>
            <li>
              <span className="d-span bold">Engine:</span>
              {year}
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Book a ride
        </button>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Add new car
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close" />
              </div>
              <div className="modal-body">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-floating mb-2 col-8">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={model}
                      {...register('name')}
                      id="floatingInput"
                      placeholder="Car color"
                    />
                    <label htmlFor="floatingInput">Name</label>
                  </div>
                  <div className="form-floating mb-2 col-8">
                    <input type="text" name="model" value={model} {...register('model')} className="form-control" id="floatingInputEmail" placeholder="Enter model type" />
                    <label htmlFor="floatingInputEmail">model</label>
                  </div>
                  <div className="form-floating mb-2 col-8">
                    <input type="datetime-local" name="pickup" {...register('pickup')} className="form-control" id="floatingInputEmail" placeholder="Enter pickup date" />
                    <label htmlFor="floatingInputEmail">Pickup Date</label>
                  </div>
                  <div className="form-floating mb-2 col-8">
                    <input type="datetime-local" name="return" {...register('return')} className="form-control" id="floatingInputEmail" placeholder="Enter return date" />
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
