/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { createCar, urlBase } from '../redux/actions/fetch';

const AddCarForm = () => {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const formData = new FormData();
    const car = { ...data, image: data.image[0] };
    formData.append('car[color]', car.color);
    formData.append('car[engine]', car.engine);
    formData.append('car[year]', car.year);
    formData.append('car[title]', car.title);
    formData.append('car[price]', car.price);
    formData.append('car[image]', car.image);
    axios.post(`${urlBase}/api/v1/cars`,

      formData, {
        headers: { 'content-type': 'multipart/form-data' },
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.status === 'created') {
          dispatch(createCar(response.data));
          // history.push('/models');
          setMessage('Car created successfully');
          console.log('after set message', message);
        }
      });
  };
  return (
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
                {/* {message && ( */}
                <div className="modal-header col-12">
                  <div className="alert alert-success col-12" role="alert">{message}</div>
                  <button type="button" className="btn-close alert-success close-button" data-bs-dismiss="modal" aria-label="close" />
                </div>
                {/* )} */}
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
                    <input
                      type="text"
                      name="engine"
                      {...register('engine', { required: true })}
                      className="form-control"
                      id="floatingInput"
                      placeholder="Enter engine type"
                    />
                    <label htmlFor="floatingInput">Engine</label>
                  </div>
                  <div className="form-floating mb-2 col-10">
                    <input
                      type="text"
                      name="year"
                      {...register('year', { required: true })}
                      className="form-control"
                      id="floatingInput"
                      placeholder="Enter Year"
                    />
                    <label htmlFor="floatingInput">Year</label>
                  </div>
                  <div className="form-floating mb-2 col-10">
                    <input
                      type="text"
                      name="title"
                      {...register('title', { required: true })}
                      className="form-control"
                      id="floatingInput"
                      placeholder="Enter car model"
                    />
                    <label htmlFor="floatingInput">Model</label>
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
                  <div className="form-floating mb-2 col-10">
                    <input
                      type="file"
                      name="image"
                      {...register('image', { required: true })}
                      className="form-control"
                      id="floatingInputprice"
                      placeholder="Upload image"
                      accept="image/*"
                    />
                    <label htmlFor="floatingInputImage">Image</label>
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
    </div>
  );
};

export default AddCarForm;
