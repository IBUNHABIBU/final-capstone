import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/actions/fetch';
import Loading from '../components/Loading';

const Models = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.selected.car);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  return (
    <div>
      <h1>Are you admin</h1>
      <Link to={`/carlist${id}`}>Go to car models</Link>
    </div>
  )
};

export default Models;
