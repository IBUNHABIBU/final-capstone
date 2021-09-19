import React from 'react';
import { PropTypes } from 'prop-types';

const Hover = ({ count, incrementCount }) => (
  <div>
    <h2 onMouseOver={incrementCount} onFocus={incrementCount}>
      Increment
      {count}
      {' '}
      times
    </h2>
  </div>
);

Hover.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
};

export default Hover;
