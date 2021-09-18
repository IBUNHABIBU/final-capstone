import React from 'react';
import { PropTypes } from 'prop-types';

const HoverCounter = ({ eventHandler, count }) => (
  <div>
    <h2
      onMouseOver={eventHandler}
      onFocus={eventHandler}
    >
      Hover{count}times
    </h2>
  </div>
);

HoverCounter.propTypes = {
  eventHandler: PropTypes.func.isRequired,
};

export default HoverCounter;
