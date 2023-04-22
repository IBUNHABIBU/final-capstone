import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '../redux/actions/actions';
import list from '../costants';

const Nav = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
 
//   const handleLogout = () => {
//     axios.delete(`${urlBase}/logout`, { withCredentials: true })
//       .then((response) => {
//         dispatch(setUser(response.data));
//       });
//   };

 
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
        { user.logged_in && (<button type="submit" className="btn" onClick={handleLogout}>Logout</button>)}
      </div>
    </div>
  );
};

export default Nav;
