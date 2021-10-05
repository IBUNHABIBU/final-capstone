import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetails } from '../redux/actions/fetch';

const CarDetails = () => {
  const details = useSelector((state) => state.detail);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [id]);

  const { color, engine, year } = details;
  return (
    <div className="details-container">
      <div className="details-image">
        <img src="" alt="" />
      </div>
      <div className="details-section">
        <div className="details-header">
          <p className="display-6">Cadillac Escallade</p>
          <p className="lead">Rent for low price</p>
        </div>
        <div className="details">
          <ul>
            <li>
              {' '}
              <span className="d-span bold">Color:</span>
              {color}
            </li>
            <li>
              <span className="d-span bold">Engine:</span>
              {engine}
            </li>
            <li>
              <span className="d-span bold">Engine:</span>
              {year}
            </li>
          </ul>
        </div>
        <button type="button" className="btn btn-primary">Book a ride</button>
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
                          <div className="form-floating mb-2 col-10">
                            <input
                              type="text"
                              className="form-control"
                              name="color"
                              {...register('color', { required: true })}
                              id="floatingInput"
                              placeholder="Car color"
                            />
                            <label htmlFor="floatingInput">Color</label>
                          </div>
                          <div className="form-floating mb-2 col-10">
                            <input type="text" name="engine" {...register('engine', { required: true })} className="form-control" id="floatingInputEmail" placeholder="Enter engine type" />
                            <label htmlFor="floatingInputEmail">Engine</label>
                          </div>
                          <div className="form-floating mb-2 col-10">
                            <input type="text" name="year" {...register('year', { required: true })} className="form-control" id="floatingPassword" placeholder="Enter Year" />
                            <label htmlFor="floatingPassword">Year</label>
                          </div>
                          <div className="form-floating mb-2 col-10">
                            <input type="text" name="image" {...register('image', { required: true })} className="form-control" id="floatingInputImage" placeholder="Enter engine type" accept="image/*" />
                            <label htmlFor="floatingInputImage">Image</label>
                          </div>
                          <div className="form-floating mb-3 col-10">
                            <button type="submit" className="btn btn-primary col-10">Add Car</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
      </div>
    </div>
  );
};

export default CarDetails;
