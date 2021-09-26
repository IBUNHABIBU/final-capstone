import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/actions/fetch';
import Loading from '../components/Loading';

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car);
  console.log('carlist', cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  if (cars === undefined) {
    return (
      <Loading />
    );
  }
  const displayCars = (
    <div className="p-2">
      <div className="row">
        {
              cars.map((car) => {
                const {
                  id, color, engine, year,
                } = car;
                return (
                  <div className=" col-6 col-lg-3 col-md-6 p-1" key={id}>
                    <Link to={`/category/${id}`} className="link">
                      <div className="card ">
                        {/* <img src={mainImage} className="card-img-top" alt="Thumb" /> */}
                        <div className="card-body">
                          <h5 className="card-text">
                            {' '}
                            {color}
                          </h5>
                          <p>{engine}</p>
                          <p>{year}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
        }
      </div>
    </div>
  );
  return (
    <div>
      <h1 align="center">
        Choose your desired ride
      </h1>
      { displayCars }
    </div>
  );
};

export default CarList;
