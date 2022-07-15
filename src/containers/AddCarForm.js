/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { createCar, urlBase } from '../redux/actions/fetch';

const AddCarForm = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const car = { ...data, image: data.image[0] };
    const formData = new FormData();
    formData.append('color', car.color);
    formData.append('engine', car.engine);
    formData.append('year', car.year);
    formData.append('title', car.title);
    formData.append('price', car.price);
    formData.append('image', car.image);
    console.log(Array.from(formData));
    axios.post(`${urlBase}/api/v1/cars`,
    // {
    //   car: {
    //     color: data.color,
    //     engine: data.engine,
    //     year: data.year,
    //     title: data.title,
    //     price: data.price,
    //     image: data.image[0],
    //   },
    // },
      formData, {
        headers: { 'content-type': 'multipart/form-data' },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === 'created') {
          dispatch(createCar(response.data));
          history.push('/models');
          setMessage('Created successfully close the form');
        }
      }).catch((error) => {
        console.log(error);
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
              {message && (
              <div className="modal-header col-12">
                <div className="alert alert-success col-12" role="alert">{message}</div>
                <button type="button" className="btn-close alert-success close-button" data-bs-dismiss="modal" aria-label="close" />
              </div>
              )}
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
                      type="text"
                      name="title"
                      {...register('title', { required: true })}
                      className="form-control"
                      id="floatingInputTitle"
                      placeholder="Enter the Model"
                    />
                    <label htmlFor="floatingInputTitle">Model</label>
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
