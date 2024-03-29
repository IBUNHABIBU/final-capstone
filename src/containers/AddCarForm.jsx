import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { createCar, urlBase } from '../redux/actions/fetch';
import Form from '../components/Form';
import Pop from './Pop';

const AddCarForm = () => {
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setMessage('');
  }, [isOpen]);

  const handleSubmit = (car) => {
    const formData = new FormData();

    formData.append('car[color]', car.color);
    formData.append('car[engine]', car.engine);
    formData.append('car[year]', car.year);
    formData.append('car[title]', car.title);
    formData.append('car[price]', car.price);
    formData.append('car[image]', car.image);
    formData.append('car[description]', car.description);
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
      }).catch((error) => {
        setErrors(error.response.data.message);
      });
  };

  const form = (
    <div className="carform">
      <h3 className="carform__title  u-center-text">Add a new car</h3>
      <Form
        message={message}
        errors={errors}
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
                    name: 'description', type: 'text', label: 'Description', required: true,
                  },
                  {
                    name: 'image', type: 'file', label: 'Image', required: true,
                  },
                ]
              }
        onSubmit={(formData) => handleSubmit(formData)}
        action="Add Car"
      />
    </div>
  );

  return (
    <div className="models-container">

      <div className="options">
        <div className="option">
          <h2 className="heading-secondary">View All Cars</h2>
          <p className="paragraph">Explore our list of cars.</p>
          <Link to="/cars" className="btn">View</Link>
        </div>

        <div className="option">
          <h2 className="heading-secondary">Add New Car</h2>
          <p className="paragraph">Admins can add new cars here.</p>
          <div className="carform">
            <Pop trigger="Create Car" content={form} isOpen={isOpen} setIsOpen={setIsOpen} id="pop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCarForm;
