/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import { setUser } from '../redux/actions/actions';

const CarForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    axios.post('http://localhost:3001/api/v1/cars', {
      car: {
        color: data.color,
        engine: data.engine,
        year: data.year,
      },
    },
    { withCredentials: true }).then((response) => {
      if (response.data.status === 'created') {
        dispatch(setUser());
      }
    });
  };

  return (
    <div className="signup container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating mb-2 col-3">
          <input
            type="text"
            className="form-control"
            name="color"
            {...register('color')}
            id="floatingInput"
            placeholder="Car color"
          />
          <label htmlFor="floatingInput">Color</label>
        </div>
        <div className="form-floating mb-2 col-3">
          <input type="text" name="engine" {...register('engine')} className="form-control" id="floatingInputEmail" placeholder="Enter engine type" />
          <label htmlFor="floatingInputEmail">Engine</label>
        </div>
        <div className="form-floating mb-2 col-3">
          <input type="text" name="year" {...register('year')} className="form-control" id="floatingPassword" placeholder="Enter Year" />
          <label htmlFor="floatingPassword">Year</label>
        </div>
        <div className="form-floating mb-2 col-3">
          <input type="text" name="engine" {...register('engine')} className="form-control" id="floatingInputEmail" placeholder="Enter engine type" />
          <label htmlFor="floatingInputEmail">Engine</label>
        </div>
        <div className="form-floating mb-3 col-3">
          <button type="submit" className="btn btn-primary col-12">Add Car</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
