import React, { useState } from 'react';
import Modal from '../components/Modal';

const Pop = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    console.log('Modal closed', showModal);
    setShowModal(true);
    console.log('Modal closed after', showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal} type="submit">Open Modal</button>
      {showModal && (
        <Modal
          title="My Modal"
          content="This is the content of my modal."
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Pop;