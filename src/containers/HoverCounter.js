import React from 'react';
import { PropTypes } from 'prop-types';

const HoverCounter = (props) => (
  <div>
    <h2
    onMouseOver={props.incrementCounter}
    onFocus={this.props.incrementCounter}
    >ON mouse hover</h2>
  </div>
);

HoverCounter.propTypes = {
  incrementCounter: PropTypes.func.isRequired,
}

export default HoverCounter;
