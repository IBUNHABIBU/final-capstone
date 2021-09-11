/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState(
    {
      name: '', email: '', password: '', password_confirmation: '',
    },
  );
  const handleSubmit = (e) => {
    console.log(user.name);
    console.log(user.email);
    axios.post('http://localhost:3001/users', {
      user: {
        name: user.name,
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation,
      },
    },
    { withCredentials: true }).then((response) => {
      console.log('Post', response);
    }).catch((error) => {
      console.log('Error', error);
    });
    e.preventDefault();
  };
  const handleChange = (event) => {
   
    event.preventDefault();
  };
  return (
    <div className="signup container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-floating mb-2 col-3">
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleChange}
            ref={register}
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating mb-2 col-3">
          <input type="email" name="email" ref={register} onChange={handleChange} className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
          <label htmlFor="floatingInputEmail">Email</label>
        </div>
        <div className="form-floating mb-2 col-3">
          <input type="password" name="password" ref={register} onChange={handleChange} className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3 col-3">
          <input type="password" name="password_confirmation" ref={register} onChange={handleChange} className="form-control" id="floatingPasswordConfirm" placeholder="Password" />
          <label htmlFor="floatingPasswordconfirm">Confirm Password</label>
        </div>
        <div className="form-floating mb-3 col-3">
          <button type="submit" className="btn btn-primary col-12">Sign Up</button>
        </div>
        <p>
          Already Member?
          <span>  Login</span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
