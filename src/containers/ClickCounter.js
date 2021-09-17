import React from 'react';
import { PropTypes } from 'prop-types';

const ClickCounter = ({ incrementCounter }) => (
  <div>
    <button type="submit" onClick={incrementCounter}>Incrmement counter</button>
  </div>
);

ClickCounter.propTypes = {
  incrementCounter: PropTypes.func.isRequired,
};

export default ClickCounter;
