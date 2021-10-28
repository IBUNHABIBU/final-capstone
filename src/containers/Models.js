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

  
  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  return (
    <div>
      {
        userLogin.logged_in ? [
          userLogin.details.admin ? [
            
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
