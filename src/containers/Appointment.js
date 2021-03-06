/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookings } from '../redux/actions/fetch';

const Appointment = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking);
  const userLogin = useSelector((state) => state.register);
  useEffect(() => {
    dispatch(fetchBookings());
  }, []);
  return (
    <div className="main-table-container car-container">
      {userLogin.logged_in ? (
        <div className="table-container">
          <p className="display-6" align="center">All appointment</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Client Name</th>
                <th scope="col">Car Model</th>
                <th scope="col">Pickup Date</th>
                <th scope="col">Return Date</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            {
         bookings.map((item) => {
           const {
             id, name, model, pickup, return_date, location,
           } = item;
           return (
             <tbody key={id}>
               <tr className="table-activ" key={id}>
                 <th>{name}</th>
                 <th>{model}</th>
                 <td>{pickup}</td>
                 <td>{return_date}</td>
                 <td>{location}</td>
               </tr>
             </tbody>
           );
         })
        }
          </table>
        </div>
      ) : (<div>Please login to see all appointments</div>)}
    </div>
  );
};

export default Appointment;
