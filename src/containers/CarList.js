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
                        <img alt="car" src="https://images.dealer.com/ddc/vehicles/2021/CADILLAC/Escalade%20ESV/SUV/color/Black%20Raven-GBA-5,5,7-640-en_US.jpg" />
                        <div className="card-body bg-light">
                          <h5>Model Type: new </h5>
                          <h5 className="card-title">
                            Color:
                            {' '}
                            {color}
                          </h5>
                          <p className="card-text">
                            Engine Type:
                            {' '}
                            {engine}
                          </p>
                          <Link to={`/cars/${id}`} className="btn btn-primary">see details</Link>
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
