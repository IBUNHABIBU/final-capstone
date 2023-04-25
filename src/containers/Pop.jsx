import React, { useState } from 'react';
import Modal from '../components/Modal';

const MyComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal} type="submit">Open Modal</button>
      {showModal && (
        <Modal onClose={handleCloseModal} title="My Modal">
          <p>Modal content goes here...</p>
        </Modal>
      )}
    </div>
  );
};

export default MyComponent;
