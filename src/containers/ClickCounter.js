import React from 'react';

const ClickCounter = (props) => (
  <div>
    <button type="submit" onClick={props.incrementCounter}>Incrmement counter</button>
  </div>
);

export default ClickCounter;
