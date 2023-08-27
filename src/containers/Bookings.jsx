/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';

const Bookings = () => {
  const bookings = useSelector((state) => state.booking);
  return (
    <>
      <h2 className="u-center-text u-mb-sm u-mt-lg">All appointment</h2>
      <table className="thead">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Car Model</th>
            <th>Pickup Date</th>
            <th>Return Date</th>
            <th>Location</th>
          </tr>
        </thead>
        {
         bookings.map((item) => {
           const {
             name, model, pickup, return_date, location,
           } = item;
           return (
             <tbody key={uuid()}>
               <tr key={uuid()}>
                 <td>{name}</td>
                 <td>{model}</td>
                 <td>{pickup}</td>
                 <td>{return_date}</td>
                 <td>{location}</td>
               </tr>
             </tbody>
           );
         })
        }
      </table>
    </>
  );
};

export default Bookings;
