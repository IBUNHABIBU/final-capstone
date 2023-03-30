/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { setUser } from '../redux/actions/actions';
import { urlBase } from '../redux/actions/fetch';

const Signup = () => {
  const userLogin = useSelector((state) => state.register);
  const history = useHistory();
  if (userLogin.logged_in) {
    history.push('/models');
  }
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState('');
  const onSubmit = (data) => {
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
    <div className="signup container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {errors && <div className="alert alert-danger col-6" role="alert">{ errors.map((error, id) => <li key={id} className="text-start">{error}</li>) }</div>}
        <div className="form-floating mb-2 col-3">
          <input
            type="text"
            className="form-control"
            name="name"
            {...register('name')}
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating mb-2 col-3">
          <input type="email" name="email" {...register('email')} className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
          <label htmlFor="floatingInputEmail">Email</label>
        </div>
        <div className="form-floating mb-2 col-3">
          <input type="password" name="password" {...register('password')} className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3 col-3">
          <input type="password" name="password_confirmation" {...register('password_confirmation')} className="form-control" id="floatingPasswordConfirm" placeholder="Password" />
          <label htmlFor="floatingPasswordconfirm">Confirm Password</label>
        </div>
        <div className="form-floating mb-3 col-3">
          <button type="submit" className="btn btn-primary col-12">Sign Up</button>
        </div>
        <p>
          Already Member?
          <Link to="/login" className="link"> Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
