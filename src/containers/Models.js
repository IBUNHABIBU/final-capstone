import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/actions/fetch';

const Models = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.register);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  return (
    <div>
      {
        userLogin.details.admin ? (<Link to={`/car${id}`}>Create New car</Link>) : (<div> This is the list of cars</div>)
      }

    </div>
  );
};

export default Models;
