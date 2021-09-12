/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
// import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  // const [logStatus, setLogStatus] = useState('NOT_LOGGED_IN');
  const { register, handleSubmit } = useForm();
  return (
    <div className="Login container">
      <form className="form" onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default Login;
