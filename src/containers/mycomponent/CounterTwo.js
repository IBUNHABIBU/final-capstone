import React, { Component } from 'react';

const CounterTwo =(props)=> {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button type="submit" onClick={incrementCount}>
          Increment
          {count}
          {' '}
          times
        </button>
      </div>
    );
}

CounterTwo.prototype = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
}

export default CounterTwo;