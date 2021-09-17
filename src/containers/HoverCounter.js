import React from 'react';
import { PropTypes } from 'prop-types';

const HoverCounter = ({ incrementCounter }) => (
  <div>
    <h2
      onMouseOver={incrementCounter}
      onFocus={incrementCounter}
    >
      ON mouse hover
    </h2>
  </div>
);

HoverCounter.propTypes = {
  incrementCounter: PropTypes.func.isRequired,
};

export default HoverCounter;
