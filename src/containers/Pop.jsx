import React, { useState } from 'react';
import Modal from '../components/Modal';

const Pop = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal} type="submit">Open Modal</button>
      <Modal onClose={handleCloseModal} title="My Modal" content="hello" />
      {showModal && (
        <Modal onClose={handleCloseModal} title="My Modal" content="hello" />
      )}
    </div>
  );
};

export default Pop;
