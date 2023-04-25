import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ title, content, onClose }) => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(true);
    onClose();
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>{title}</h3>
              <button onClick={handleClose} type="submit">X</button>
            </div>
            <div className="modal-content">{content}</div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Modal;
