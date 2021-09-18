import React from 'react';
import { PropTypes, string } from 'prop-types';
import UpdatedComponent from './withCounter';

const ClickCounter = ({ eventHandler, count, name }) => (
  <div>
    <button type="submit" onClick={eventHandler}>
      {name}
      Clicked
      {count}
      times
    </button>
  </div>
);

ClickCounter.propTypes = {
  eventHandler: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  name: string.isRequired,
};

export default UpdatedComponent(ClickCounter);
