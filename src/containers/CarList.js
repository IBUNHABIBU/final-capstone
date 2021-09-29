import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/actions/fetch';
import Loading from '../components/Loading';

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

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
                    id, color, engine, year,
                  } = car;
                  return (
                    <div className=" col-6 col-lg-3 col-md-6 p-1" key={id}>
                      <Link to={`/cars/${id}`} className="link">
                      <div className="card" style="width: 18rem;">
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{color}</h5>
    <p className="card-text"> {engine}</p>
    <Link to={`/cars/${id}`} className="btn btn-primary">see details</Link>
  </div>
</div>
                      </Link>
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
