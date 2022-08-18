/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookings } from '../redux/actions/fetch';
import Bookings from './Bookings';

const Appointment = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.register);
  useEffect(() => {
    dispatch(fetchBookings());
  }, []);
  return (
    <div className="main-table-container car-container">
      {userLogin.logged_in ? (
        <div className="table-container">
          <Bookings />
        </div>
      ) : (<div>Please login to see all appointments</div>)}
    </div>
  );
};

export default Appointment;
