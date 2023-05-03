import React from 'react';
import PropTypes from 'prop-types';

const Pop = ({
  trigger, content, setIsOpen, isOpen,
}) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="popup">
      <button type="submit" className="popup__button" onClick={handleOpen}>
        {trigger}
      </button>
      {isOpen && (
        <div className="popup__content">
          <button type="submit" className="popup__close" onClick={handleClose}>
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
  content: PropTypes.node.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Pop;
