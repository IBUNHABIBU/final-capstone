/* eslint-disable  no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
// import uuid from 'react-uuid';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import NameList from './NameList';

const CarList = () => {
  const cars = useSelector((state) => state.car);
  if (cars.length === 0) {
    return (
      <Loading />
    );
  }
  
  <div className="car-container">
  <div className="p-2 carlist">
    <div className="row">
  const nameList = cars.map((car) => (
          <NameList key={car.id} car={car} />
      
       ));
  </div>
      </div>
    </div>
  return (
    <div>
      {
        nameList
      }
    </div>
  );
};

export default CarList;
