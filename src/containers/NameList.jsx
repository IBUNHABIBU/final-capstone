import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

const NameList = ({ car }) => {
  const {
    id, color, engine, imageUrl, title
  } = car;
  console.log("Title", title);
  return (
    <div className=" col-6 col-lg-3 col-md-6 p-1" key={uuid()}>
      <div className="card">
        <img alt="car" src={imageUrl} />
        <div className="card-body bg-light">
          <h5>Model Type: new </h5>
          <h5 className="card-title">
            Color:
            {' '}
            {color}
          </h5>
          <p className="card-text">
            Engine Type:
            {' '}
            {engine}
          </p>
          <Link to={`/cars/${id}`} className="btn btn-primary">see details</Link>
        </div>
      </div>
    </div>
  );
};
NameList.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    engine: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};
export default NameList;
