import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Pop = ({ trigger, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="popup">
      <button type="submit" className="popup__button" onClick={() => setIsOpen(true)}>
        {trigger}
      </button>
      {isOpen && (
        <div className="popup__content">
          <button type="submit" className="popup__close" onClick={() => setIsOpen(false)}>
            &times;
          </button>
          {content}
        </div>
      )}
    </div>
  );
};

Pop.propTypes = {
  trigger: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Pop;
