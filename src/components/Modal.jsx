import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ title, content, onClose }) => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
    onClose();
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>{title}</h3>
              <button onClick={handleClose}>X</button>
            </div>
            <div className="modal-content">{content}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
