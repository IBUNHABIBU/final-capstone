import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { setUser } from '../redux/actions/actions';
import list from '../costants';
import { urlBase } from '../redux/actions/fetch';

const Nav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.register);

  const handleLogout = () => {
    axios.delete(`${urlBase}/logout`, { withCredentials: true })
      .then((response) => {
        dispatch(setUser(response.data));
      });
  };

  return (
    <div className="nav">
      <div className="menu-btn">
        <button type="button" className="btn btn--menu">
          <FontAwesomeIcon icon={faBars} className="social--icon" />
        </button>
      </div>
      <NavLink to="/" className="link">
        <div className="nav__logo">
          <img src="logo.jpg" alt="nav logo" />
        </div>
      </NavLink>
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
          <div className="user">
            <p>
              <span className="p-2">Login as</span>
              <strong>
                {user.details.name}
              </strong>
            </p>
            <button type="submit" className="btn" onClick={handleLogout}>Logout</button>
          </div>

        ) : (
          <div className="user">
            <NavLink to="/signup" className="link ">
              <button type="submit" className="btn btn--signup">Sign Up</button>
            </NavLink>
            <div className="user__member">
              <p>Already a member?</p>
              <NavLink to="/login" className="user__member__link">Login</NavLink>
            </div>
          </div>
        )
}
      </div>
    </div>
  );
};

export default Nav;
