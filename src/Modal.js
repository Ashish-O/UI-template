import React, { useState } from 'react';
import './Modal.css'; // You can create your own CSS file for styling

const MyModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && (
        <dialog open className="modal">
          <button className="close-button" onClick={closeModal}>
            ✖
          </button>
          <div className="modal-content">
            <img
              src="/path/to/cookie-icon.png"
              alt="Cookie Icon"
              className="cookie-icon"
            />
            <p>We use cookies for improving user experience, analytics, and marketing.</p>
            <button onClick={closeModal}>That's fine!</button>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyModal;
