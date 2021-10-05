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
      </div>
    </div>
  );
};

export default CarDetails;
