import React, { useEffect } from 'react';
import uuid from 'react-uuid';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/actions/fetch';
import CarList from './CarList';
import AddCarForm from './AddCarForm';
import PleaseLogin from '../components/PleaseLogin';

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
            <AddCarForm key={uuid()} />,
          ] : [
            <div key={uuid()}>
              <CarList />
            </div>,
          ],
        ] : [
          <PleaseLogin key={uuid()} />,
        ]
      }

    </div>
  );
};

export default Models;
