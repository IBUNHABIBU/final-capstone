import React from 'react';
import PropTypes from 'prop-types';

const PopupModal = ({ onClose, title, content }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="moda">
      <div className="mod">
        <div className="mo">
          <h1>Title</h1>
          <h2>{title}</h2>
          <button type="submit" className="close-btn" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{content}</div>
      </div>
    </div>
  );
};

PopupModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default PopupModal;
