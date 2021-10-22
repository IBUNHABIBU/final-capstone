import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';

const CarList = () => {
  const cars = useSelector((state) => state.car);

  if (cars === undefined) {
    return (
      <Loading />
    );
  }
  const displayCars = (
    <div className="car-container">
      <div className="p-2 carlist">
        <div className="row">
          {
                cars.map((car) => {
                  const {
                    id, color, engine,
                  } = car;
                  return (
                    <div className=" col-6 col-lg-3 col-md-6 p-1" key={uuid()}>
                      <div className="card">
                        <h6>Image required ....</h6>
                        <div className="card-body bg-light">
                          <h5>Model Type: new </h5>
                          <h5 className="card-title" key={uuid()}>
                            Color:
                            {' '}
                            {color}
                          </h5>
                          <p className="card-text" key={uuid()}>
                            Engine Type:
                            {' '}
                            {engine}
                          </p>
                          <Link to={`/cars/${id}`} className="btn btn-primary" key={uuid()}>see details</Link>
                        </div>
                      </div>
                    </div>
                  );
                })
          }
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <h1 className="car-heading">Select the cars</h1>
      { displayCars }
    </div>
  );
};

export default CarList;
