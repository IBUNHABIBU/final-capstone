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
              <br />
              <Link to="/carlist">see cars</Link>
              <div className="container mt-5">
                <button
                  type="button"
                  className="btn btn-primaray"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  {' '}
                  Create car
                </button>
                <div className="modal" id="myModal">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">
                          Add new car
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close" />
                      </div>
                      <div className="modal-body">
                      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating mb-2 col-3">
          <input
            type="text"
            className="form-control"
            name="color"
            {...register('color')}
            id="floatingInput"
            placeholder="Car color"
          />
          <label htmlFor="floatingInput">Color</label>
        </div>
        <div className="form-floating mb-2 col-3">
          <input type="text" name="engine" {...register('engine')} className="form-control" id="floatingInputEmail" placeholder="Enter engine type" />
          <label htmlFor="floatingInputEmail">Engine</label>
        </div>
        <div className="form-floating mb-2 col-3">
          <input type="text" name="year" {...register('year')} className="form-control" id="floatingPassword" placeholder="Enter Year" />
          <label htmlFor="floatingPassword">Year</label>
        </div>
        <div className="form-floating mb-2 col-3">
          <input type="file" name="image" {...register('image')} className="form-control" id="floatingInputEmail" placeholder="Enter engine type" />
          <label htmlFor="floatingInputEmail">Image</label>
        </div>
        <div className="form-floating mb-3 col-3">
          <button type="submit" className="btn btn-primary col-12">Add Car</button>
        </div>
      </form>
                      </div>
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
