/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { createCar, fetchCars, urlBase } from '../redux/actions/fetch';
import CarList from './CarList';

const Models = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.register);
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [errors, setErrors] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (data) => {
    axios.post(`${urlBase}/api/v1/cars`, {
      car: {
        color: data.color,
        engine: data.engine,
        year: data.year,
        price: data.price,
      },
    }, { withCredentials: true })
      .then((response) => {
        if (response.data.status === 'created') {
          dispatch(createCar(response.data));
          history.push('/models');
          setMessage('Created successfully close the form');
        }
        setErrors(response.data.errors);
      });
  };
  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  return (
    <div>
      {
        userLogin.logged_in ? [
          userLogin.details.admin ? [
            <div>
              <Link to="/cars">see cars</Link>
              <div className="container mt-5">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  {' '}
                  Add new car
                </button>
                <div className="modal" id="myModal">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      {message && (
                      <div className="modal-header col-12">
                        <div className="alert alert-success col-12" role="alert">{message}</div>
                        <button type="button" className="btn-close alert-success close-button" data-bs-dismiss="modal" aria-label="close" />
                      </div>
                      )}
                      <div className="modal-body">
                        <form className="form" onSubmit={handleSubmit(onSubmit)}>
                          {errors && <div className="alert alert-danger col-12" role="alert">{ errors.map((error) => <li className="text-start">{error}</li>) }</div>}
                          <div className="form-floating mb-2 col-10">
                            <input
                              type="text"
                              className="form-control"
                              name="color"
                              {...register('color', { required: true })}
                              id="floatingInput"
                              placeholder="Car color"
                            />
                            <label htmlFor="floatingInput">Color</label>
                          </div>
                          <div className="form-floating mb-2 col-10">
                            <input type="text" name="engine" {...register('engine', { required: true })} className="form-control" id="floatingInputEmail" placeholder="Enter engine type" />
                            <label htmlFor="floatingInputEmail">Engine</label>
                          </div>
                          <div className="form-floating mb-2 col-10">
                            <input type="text" name="year" {...register('year', { required: true })} className="form-control" id="floatingPassword" placeholder="Enter Year" />
                            <label htmlFor="floatingPassword">Year</label>
                          </div>
                          <div className="form-floating mb-2 col-10">
                            <input
                              type="text"
                              name="price"
                              {...register('price', { required: true })}
                              className="form-control"
                              id="floatingInputprice"
                              placeholder="Enter the price"
                            />
                            <label htmlFor="floatingInputImage">Price</label>
                          </div>
                          <div className="form-floating mb-3 col-10">
                            <button type="submit" className="btn btn-primary col-10">Add Car</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
          ] : [
            <div>
              <CarList />
            </div>,
          ],
        ] : [
          <div>Please login to see all car details</div>,
        ]
      }

    </div>
  );
};

export default Models;
