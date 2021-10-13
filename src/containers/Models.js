/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { createCar, fetchCars } from '../redux/actions/fetch';
import CarList from './CarList';

const Models = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.register);
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/api/v1/cars', {
      car: {
        color: data.color,
        engine: data.engine,
        year: data.year,
        image: data.image[0],
        car_model: data.car_model,
        price: data.price,
      },
    }, { withCredentials: true })
      .then((response) => {
        dispatch(createCar(response.data));
        history.push('/models');
      }).catch((error) => {
        console.log('error', error);
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
                      <div className="modal-header">
                        <h5 className="modal-title">
                          Add new car
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close" />
                      </div>
                      <div className="modal-body">
                        <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
                              type="file"
                              name="image"
                              {...register('image', { required: true })}
                              className="form-control"
                              id="floatingInputImage"
                              placeholder="Enter engine type"
                              accept="image/png, image/jpeg"
                            />
                            <label htmlFor="floatingInputImage">Image</label>
                          </div>
                          <div className="form-floating mb-2 col-10">
                            <input
                              type="text"
                              name="car_model"
                              {...register('car_model', { required: true })}
                              className="form-control"
                              id="floatingInputImage"
                              placeholder="Enter model"
                            />
                            <label htmlFor="floatingInputImage">Model</label>
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
          <div>Please login to see all cars</div>,
        ]
      }

    </div>
  );
};

export default Models;
