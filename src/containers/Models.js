import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../redux/actions/fetch';
import CarList from './CarList';

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
            <div>
              <Link to="/newcar">Add new car</Link>
              <button
                type="button"
                className="btn btn-primaray"
                data-bs-toggle="model"
                data-bs-target="#myModel"
              >
                {' '}
                Create car
              </button>
              <div className="model" id="myModel">
                <div className="modal-dialog">
                  <div className="model-content">
                    <div className="model-header">
                      <h5 className="model-title">
                        Add new car
                      </h5>
                      <button />
                    </div>
                  </div>
                </div>
              </div>
            </div>,
          ] : [
            <div>
              <CarList />
            </div>,
          ],
        ] : [
          <div>Please login to see all cars</div>,
        ]
      }

    </div>
  );
};

export default Models;
