import React from 'react';
import { PropTypes } from 'prop-types';

const CounterTwo = ({ count, incrementCount }) => (
  <div>
    <button type="submit" onClick={incrementCount}>
      Increment
      {count}
      {' '}
      times
    </button>
  </div>
);

CounterTwo.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
};

export default CounterTwo;
