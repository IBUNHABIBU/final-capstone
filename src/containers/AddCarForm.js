/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { createCar, urlBase } from '../redux/actions/fetch';
import Form from '../components/Form';

const AddCarForm = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
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
          setMessage('Car created successfully');
        }
      });
  };

  const form = (
    <Form
      field={
                [
                  {
                    name: 'color', type: 'text', label: 'Color', required: true,
                  },
                  {
                    name: 'engine', type: 'text', label: 'Engine', required: true,
                  },
                  {
                    name: 'year', type: 'text', label: 'Year', required: true,
                  },
                  {
                    name: 'title', type: 'text', label: 'Car model', required: true,
                  },
                  {
                    name: 'price', type: 'text', label: 'Price', required: true,
                  },
                  {
                    name: 'image', type: 'file', label: 'Image', required: true,
                  },
                ]
              }
      onSubmit={(formData) => handleSubmit(formData)}
      action="Add Car"
    />
  );

  return (
    <div className="carform">
      <Link to="/cars" className="btn btn--list">see cars</Link>
      <div className="container">
        
        <div className="modl">
          

        </div>
      </div>
    </div>
  );
};

export default AddCarForm;
