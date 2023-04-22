import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import list from '../constants';
import { setUser } from '../redux/actions/actions';

const Nav = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let filteredList;
  useEffect(() => {
    checkUser();
  }, []);
  if (!user.logged_in) {
    filteredList = list.filter((list) => list.name !== 'Admin Panel');
  } else {
    filteredList = list;
  }
  const handleLogout = () => {
    axios.delete(`${urlBase}/logout`, { withCredentials: true })
      .then((response) => {
        dispatch(setUser(response.data));
      });
  };

  if (!user.logged_in) {
    navigate('/');
  }
  return (
    <div className="nav">
      <div className="nav__logo">
        <span />
        <NavLink to="/" className="link">Salum Habibu</NavLink>
      </div>
      <div className="nav__lists">
        {
        filteredList.map((list) => (
          <NavLink
            to={list.path}
            key={list.id}
            className={({ isActive }) => (isActive ? 'link link--active' : 'link')}
          >
            {list.name}
          </NavLink>
        ))
      }
        { user.logged_in && (<button type="submit" className="btn" onClick={handleLogout}>Logout</button>)}
      </div>
    </div>
  );
};

export default Nav;
