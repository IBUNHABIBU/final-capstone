/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */

import axios from 'axios';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { setUser } from '../redux/actions/actions';

const Login = () => {
  const userLogin = useSelector((state) => state.register);
  const history = useHistory();
  if (userLogin.logged_in) {
    history.push('/models');
  }
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState('');
  const onSubmit = (data) => {
    axios.post('http://localhost:3001/sessions', {
      user: {
        email: data.email,
        password: data.password,
      },
    },
    { withCredentials: true }).then((response) => {
      console.log(response.data);
      if (response.data.status === 'created') {
        dispatch(setUser(response.data));
      }
      setErrors(response.data.error);
    });
  };
  return (
    <div className="login-page container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {errors && <div className="alert alert-danger col-4" role="alert">{errors}</div>}
        <div className="form-floating mb-2 col-3">
          <input type="email" name="email" {...register('email')} className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
          <label htmlFor="floatingInputEmail">Email</label>
        </div>
        <div className="form-floating mb-2 col-3">
          <input type="password" name="password" {...register('password')} className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="form-floating mb-3 col-3">
          <button type="submit" className="btn btn-primary col-12">Login</button>
        </div>
        <p>
          New to this site?
          <Link to="/signup" className="link"> Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
