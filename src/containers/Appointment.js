/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBookings } from '../redux/actions/fetch';

const Appointment = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking);
  useEffect(() => {
    dispatch(fetchBookings());
    console.log('usef');
  }, []);
  return (
    <div className="main-table-container car-container">
      <p className="display-6" align="center">All appointment</p>
      <div className="table-container">
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
             name, model, pickup, return_date, location,
           } = item;
           return (
             <tbody>
               <tr className="table-activ">
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
    </div>
  );
};

export default Appointment;
