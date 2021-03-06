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

  const nameList = cars.map((car) => (
    <NameList key={car.id} car={car} />
  ));

  return (
    <div className="car-container">
      <div className="p-2 carlist">
        <div className="row">
          {
        nameList
      }
        </div>
      </div>
    </div>
  );
};

export default CarList;
