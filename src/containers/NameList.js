import React from 'react';
import PropTypes from 'prop-types';

const NameList = ({ car }) => (
  <div key={car.id}>
    <p>{car.color}</p>
    <p>{car.engine}</p>
  </div>
);

NameList.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    engine: PropTypes.string.isRequired,
  }).isRequired,
};
export default NameList;
