import React from 'react';
import { NavLink } from 'react-router-dom';

const PleaseLogin = () => (
  <div className="authorize">
    <div className="login-container">
      <h1>Welcome to our Website</h1>
      <p>Please log in to access the full content.</p>
      <NavLink to="/login" className="btn">Login</NavLink>
    </div>
  </div>
);

export default PleaseLogin;
