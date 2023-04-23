import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../redux/actions/actions';
import list from '../costants';
import { urlBase } from '../redux/actions/fetch';

const Nav = () => {
  const dispatch = useDispatch();

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
        <div className="user">
        <Link to="/signup" className="link ">
          <button type="submit" className="btn">Sinup</button></Link>
              <div>
                <p>Already a member?</p>
                <NavLink to="/login" className="link">Login</Link>
              </div>   </div>
      </div>
    </div>
  );
};

export default Nav;
