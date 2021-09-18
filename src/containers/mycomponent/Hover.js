import React, { Component } from 'react';

const Hover =(props)=> {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount} onFocus={incrementCount}>
          Increment
          {count}
          {' '}
          times
        </h2>
      </div>
    );
  
}


Hover.prototype = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
}

export default Hover;