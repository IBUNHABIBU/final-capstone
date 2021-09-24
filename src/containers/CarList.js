import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/actions/fetch';
import Loading from '../components/Loading';

const Models = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cars = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  if (cars === null) {
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
                  color, thumb,
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
      { displayCars }
    </div>
  );
};

export default Models;
