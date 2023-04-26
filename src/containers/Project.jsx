import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Project = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="popup">
      <button className="popup__button" onClick={() => setIsOpen(true)}>
        {trigger}
      </button>
      {isOpen && (
        <div className="popup__content">
          <button type="submit" className="popup__close" onClick={() => setIsOpen(false)}>
            &times;
          </button>
          {children}
        </div>
      )}
    </div>
  );
};

Project.propTypes = {
  trigger: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Project;
