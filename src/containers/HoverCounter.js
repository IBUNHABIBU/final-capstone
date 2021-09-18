import React from 'react';
import { PropTypes } from 'prop-types';
import UpdatedComponent from './withCounter';

const HoverCounter = ({ eventHandler, count }) => (
  <div>
    <h2
      onMouseOver={eventHandler}
      onFocus={eventHandler}
    >
      Hover
      {count}
      times
    </h2>
  </div>
);

HoverCounter.propTypes = {
  eventHandler: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default UpdatedComponent(HoverCounter, 5);
