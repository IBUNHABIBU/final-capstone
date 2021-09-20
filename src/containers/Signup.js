/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../redux/actions/actions';

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    axios.post('http://localhost:3001/users', {
      user: {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      },
    },
    { withCredentials: true }).then((response) => {
      console.log('Post', response.data);
      if (response.data.status === 'created') {
        dispatch(setUser());
      }
    }).catch((error) => {
      console.log('Error', error);
    });
  };

  return (
    <div className="signup container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
