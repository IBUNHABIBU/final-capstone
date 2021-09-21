import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import { fetchCars } from '../redux/actions/fetch';
const Models = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector((state) => state.selected.car);

  useEffect(() => {
    dispatch(fetchCars(categoryName));
  }, [categoryName]);

  if (foodList === null) {
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
                  color, engine, year, thumb
                } = car;
                return (
                  <div className=" col-6 col-lg-3 col-md-6 p-1" key={id}>
                    <Link to={`/category/${id}`} className="link">
                      <div className="card ">
                        <img src={thumb} className="card-img-top" alt="Thumb" />
                        <div className="card-body">
                          <h5 className="card-text">
                            {' '}
                            {color}
                          </h5>
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
      { cars }
    </div>
  );
};

export default Models;
