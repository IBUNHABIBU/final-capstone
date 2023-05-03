import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const Pop = ({ trigger, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => {
    setIsOpen(false);
    // dispatch(isOpen);
  };

  return (
    <div className="popup">
      <button type="submit" className="popup__button" onClick={() => setIsOpen(true)}>
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
};

export default Pop;
