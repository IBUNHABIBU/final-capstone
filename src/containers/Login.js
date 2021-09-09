/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Login = () => (
  <div className="signup container">
    <form className="form">

      <div className="form-floating mb-2 col-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Email</label>
      </div>
      <div className="form-floating mb-2 col-3">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="form-floating mb-3 col-3">
        <button type="submit" className="btn btn-primary col-12">Login</button>
      </div>
    </form>
  </div>
);

export default Login;
