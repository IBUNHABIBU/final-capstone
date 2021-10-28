import React from 'react';
import PropTypes from 'prop-types';

const NameList = ({ car }) => (
  <div>
    <p>{car.color}</p>
    <p>{car.engine}</p>
  </div>
);

NameList.propTypes = {
  car: PropTypes.shape({
    color: PropTypes.string.isRequired,
    engine: PropTypes.string.isRequired,
  }).isRequired,
};
export default NameList;
