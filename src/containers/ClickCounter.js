import React from 'react';
import { PropTypes } from 'prop-types';
import UpdatedComponent from './withCounter';

const ClickCounter = ({ eventHandler, count }) => (
  <div>
    <button type="submit" onClick={eventHandler}>Clicked{count}times</button>
  </div>
);

ClickCounter.propTypes = {
  eventHandler: PropTypes.func.isRequired,
};

export default UpdatedComponent(ClickCounter);
