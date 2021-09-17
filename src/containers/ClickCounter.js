import React from 'react';
import { PropTypes } from 'prop-types';

const ClickCounter = ({incrementCounter}) => (
  <div>
    <button type="submit" onClick={incrementCounter}>Incrmement counter</button>
  </div>
);

ClickCounter.PropTypes = {
  incrementCounter: PropTypes.func.isRequired,
}

export default ClickCounter;
