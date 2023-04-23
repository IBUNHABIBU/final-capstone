import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '../redux/actions/actions';
import list from '../costants';
import { urlBase } from '../redux/actions/fetch';

const Nav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);

  const handleLogout = () => {
    axios.delete(`${urlBase}/logout`, { withCredentials: true })
      .then((response) => {
        dispatch(setUser(response.data));
      });
  };

  return (
    <div className="nav">
      <div className="nav__logo">
        <span />
        <NavLink to="/" className="link">Salum Habibu</NavLink>
      </div>
      <div className="nav__lists">
        {
        list.map((list) => (
          <NavLink
            to={list.path}
            key={list.id}
            className={({ isActive }) => (isActive ? 'link link--active' : 'link')}
          >
            {list.name}
          </NavLink>
        ))
        }
        {
        user.logged_in ? (
          <div>
            <p>
              <span className="p-2">Login as</span>
              <strong>
                {user.name}
              </strong>
            </p>
            <button type="submit" className="btn btn-primary col-4" onClick={handleLogout}>Logout</button>
          </div>

        ) : (
          <div className="user">
            <NavLink to="/signup" className="link ">
              <button type="submit" className="btn">Sinup</button>
            </NavLink>
            <div>
              <p>Already a member?</p>
              <NavLink to="/login" className="link">Login</NavLink>
            </div>
          </div>
        )
}
      </div>
    </div>
  );
};

export default Nav;
