import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetails } from '../redux/actions/fetch';

const CarDetails = () => {
  const det = useSelector((state) => state.detail);
  console.log(det);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [id]);
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
            <li>ab</li>
            <li>cd</li>
            <li>ef</li>
            <li>gh</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
