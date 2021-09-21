/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { setUser } from '../redux/actions/actions';

const Booking = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    axios.post('http://localhost:3001/api/v1/cars', {
      booking: {
        name: data.name,
        model: data.model,
        pickup: data.pickup,
        return: data.return,
        locataion: data.locataion,
      },
    },
    { withCredentials: true }).then((response) => {
      console.log('Post', response.data);
      if (response.data.status === 'created') {
        dispatch(setUser());
      }
    }).catch((error) => {
      console.log('Error', error);
    });
  };

  return (
    <div className="signup container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating mb-2 col-3">
          <input
            type="text"
            className="form-control"
            name="name"
            {...register('name')}
            id="floatingInput"
            placeholder="Car color"
          />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-2 col-3">
          <input type="text" name="model" {...register('model')} className="form-control" id="floatingInputEmail" placeholder="Enter model type" />
          <label htmlFor="floatingInputEmail">model</label>
        </div>
        <div className="form-floating mb-2 col-3">
          <input type="text" name="pickup" {...register('pickup')} className="form-control" id="floatingInputEmail" placeholder="Enter pickup type" />
          <label htmlFor="floatingInputEmail">Pickup Date</label>
        </div>
        <div className="form-floating mb-2 col-3">
          <input type="text" name="engine" {...register('engine')} className="form-control" id="floatingInputEmail" placeholder="Enter engine type" />
          <label htmlFor="floatingInputEmail">Engine</label>
        </div>
        <div className="form-floating mb-2 col-3">
          <input type="text" name="year" {...register('year')} className="form-control" id="floatingPassword" placeholder="Enter Year" />
          <label htmlFor="floatingPassword">Year</label>
        </div>
        <div className="form-floating mb-3 col-3">
          <button type="submit" className="btn btn-primary col-12">Add Car</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
