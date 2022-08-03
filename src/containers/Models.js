import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/actions/fetch';
import CarList from './CarList';
import AddCarForm from './AddCarForm';

const Models = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.register);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  return (
    <div>
      {
        userLogin.logged_in ? [
          userLogin.details.admin ? [
            <AddCarForm key="carForm" />,
          ] : [
            <div key="carlist">
              <CarList />
            </div>,
          ],
        ] : [
          <div key="log">Please login to see all car details</div>,
        ]
      }

    </div>
  );
};

export default Models;
