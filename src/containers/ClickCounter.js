import React from 'react';
import { PropTypes } from 'prop-types';

const ClickCounter = ({ eventHandler, count }) => (
  <div>
    <button type="submit" onClick={eventHandler}>Clicked{count}times</button>
  </div>
);

ClickCounter.propTypes = {
  eventHandler: PropTypes.func.isRequired,
};

export default ClickCounter;
