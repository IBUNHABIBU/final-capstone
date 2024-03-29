import React from 'react';
import uuid from 'react-uuid';
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
    <NameList key={uuid()} car={car} />
  ));

  return (
    <div className="car-container">

      <div className="u-center-text u-mt-lg">
        <h2 className="heading-secondary">See all latest cars</h2>
        <p className="paragraph u-mb-sm">Try your ride to test our services</p>
      </div>
      <div className="car-list">
        {
        nameList
      }

      </div>
    </div>
  );
};

export default CarList;
