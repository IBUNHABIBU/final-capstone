/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Signup = () => {
  const handleSubmit = (e) => {
    console.log("submited");
    e.preventDefault();
  }
  const handleChange = (e) => {
    console.log("onChange", e.target.value);
    e.preventDefault();
  }
  return (
  <div className="signup container">
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-floating mb-2 col-3">
        <input type="text"
        className="form-control"
        onChange={handleChange}
        id="floatingInput"
        placeholder="name@example.com" />
        <label htmlFor="floatingInput">Username</label>
      </div>
      <div className="form-floating mb-2 col-3">
        <input type="email" onChange={handleChange} className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Email</label>
      </div>
      <div className="form-floating mb-2 col-3">
        <input type="password" onChange={handleChange} className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="form-floating mb-3 col-3">
        <input type="password" onChange={handleChange} className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Confirm Password</label>
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
)};

export default Signup;
