import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import slugify from 'slugify';

const NameList = ({ car }) => {
  const {
    id, color, engine, imageUrl, title,
  } = car;
  const slug = slugify(title, { lower: true });
  return (
    <div className="car-card" key={uuid()}>
      <img alt="car" src={imageUrl} />
      <div className="car-card__details">
        <h5>Model Type: new </h5>
        <h5 className="car-card__title">
          Color:
          {' '}
          {color}
        </h5>
        <p className="car-card__text">
          Engine Type:
          {' '}
          {engine}
        </p>
        <Link to={`/cars/${slug}-${id}`} className="btn btn-primary">see details</Link>
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
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default NameList;
