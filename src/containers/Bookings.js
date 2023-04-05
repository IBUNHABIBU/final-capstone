/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
import uuid from 'react-uuid';

const Bookings = () => {
  const bookings = useSelector((state) => state.booking);
  return (
    <>
      <p className="display-6" align="center">All appointment</p>
      <table className="table table-light">
        <thead className="thead-dark">
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
