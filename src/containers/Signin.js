import React from 'react';

const Signin = () => (
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
      <p>
        Already Member?
        <span>  Login</span>
      </p>
    </form>
  </div>
);

export default Signin;
