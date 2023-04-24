/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../redux/actions/actions';
import { urlBase } from '../redux/actions/fetch';
import Form from '../components/Form';

const Signup = () => {
  const userLogin = useSelector((state) => state.register);
  const navigate = useNavigate();
  if (userLogin.logged_in) {
    navigate.push('/models');
  }
  const dispatch = useDispatch();
  const [errors, setErrors] = useState('');
  const handleSubmit = (data) => {
    axios.post(`${urlBase}/users`, {
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
    },
    { withCredentials: true }).then((response) => {
      if (response.data.status === 'created') {
        dispatch(setUser(response.data));
      }
      setErrors(response.data.error);
    });
  };

  return (
    <div className="signup">
      <div className="signup__header">
        <h1>Register</h1>
      </div>
      <Form
        field={
        [
          { name: 'username', type: 'username', label: 'Username' },
          { name: 'email', type: 'email', label: 'Email' },
          { name: 'password', type: 'password', label: 'Password' },
          { name: 'password_confirmation', type: 'password_confirmation', label: 'Password_confirmation' },
        ]
      }
        onSubmit={(FormData) => handleSubmit(FormData)}
        action="Signup"
      />
      <p>
        Already Member?
        <Link to="/login" className="link"> Login</Link>
      </p>
    </div>
  );
};

export default Signup;
