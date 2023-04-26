import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ onClose, title, content }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(true);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h1>Titlee</h1>
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

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Modal;
