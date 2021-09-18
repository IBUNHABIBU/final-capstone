import React from 'react';
import { PropTypes } from 'prop-types';

const UserComponent = (props) => {
  const { render } = props;
  return (
    <div>
      {render(true)}
    </div>
  );
};

UserComponent.propTypes = {
  render: PropTypes.string.isRequired,
};

export default UserComponent;
