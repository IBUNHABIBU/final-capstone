/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */

import axios from 'axios';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { setUser } from '../redux/actions/actions';
import { urlBase } from '../redux/actions/fetch';
import Form from '../components/Form';

const Login = () => {
  const userLogin = useSelector((state) => state.register);
  const navigate = useNavigate();
  if (userLogin.logged_in) {
    navigate.push('/models');
  }
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState('');
  const onSubmit = (data) => {
    axios.post(`${urlBase}/sessions`, {
      user: {
        email: data.email,
        password: data.password,
      },
    },
    { withCredentials: true }).then((response) => {
      if (response.data.status === 'created') {
        dispatch(setUser(response.data));
      }
      setErrors(response.data.error);
    });
  };
  return (
    <div className="login-page container">
      <Form fields= {
        [
          {}
        ]
      }
      <p>
        New to this site?
        <Link to="/signup" className="link"> Register</Link>
      </p>
    </div>
  );
};

export default Login;
