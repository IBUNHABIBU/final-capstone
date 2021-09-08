import React from 'react';

const Signup = () => (
  <div>
    <form>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="Email">Email</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="Password">Password</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
);

export default Signup;
