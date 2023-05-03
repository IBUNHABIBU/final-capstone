import React from 'react';
import PropTypes from 'prop-types';

const Pop = ({ trigger, content, setIsOpen }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
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
