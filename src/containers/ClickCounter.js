import React from 'react';
import { PropTypes } from 'prop-types';

const ClickCounter = ({ eventHandler }) => (
  <div>
    <button type="submit" onClick={eventHandler}>Incrmement counter</button>
  </div>
);

ClickCounter.propTypes = {
  eventHandler: PropTypes.func.isRequired,
};

export default ClickCounter;
