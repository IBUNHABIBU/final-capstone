/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/actions';
import { urlBase } from '../redux/actions/fetch';
import Form from '../components/Form';

const Login = () => {
  const userLogin = useSelector((state) => state.register);
  const [isMounted, setIsMounted] = useState(true);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [errors, setErrors] = useState('');
  const handleSubmit = (data) => {
    axios.post(`${urlBase}/sessions`, {
      user: {
        email: data.email,
        password: data.password,
      },
    },
    { withCredentials: true }).then((response) => {
      if (isMounted) {
        if (response.data.status === 'created') {
          dispatch(setUser(response.data));
          navigate('/models');
        }
        setErrors(response.data.error);
      }
    });
  };

  useEffect(() => () => setIsMounted(false), []);

  return (
    <div className="login">
      <div className="login__header">
        <h1>Login</h1>
      </div>
      <Form
        field={
        [
          { name: 'email', type: 'email', label: 'Email' },
          { name: 'password', type: 'password', label: 'Password' },
        ]
      }
        onSubmit={(formData) => handleSubmit(formData)}
        action="Login"
      />
      <p>
        New to this site?
        <NavLink to="/signup" className="Link"> Register</NavLink>
      </p>
    </div>
  );
};

export default Login;
