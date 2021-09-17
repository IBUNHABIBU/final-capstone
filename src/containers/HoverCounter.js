import React from 'react';
import { PropTypes } from 'prop-types';

const HoverCounter = ({ eventHandler }) => (
  <div>
    <h2
      onMouseOver={eventHandler}
      onFocus={eventHandler}
    >
      ON mouse hover
    </h2>
  </div>
);

HoverCounter.propTypes = {
  eventHandler: PropTypes.func.isRequired,
};

export default HoverCounter;
