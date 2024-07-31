import React, { useState } from 'react'
import './ModalNew.css'

export default function ModalNew() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <>

            <button onClick={openModal}>Open Modal</button>

            {isModalOpen && (
                <div class="modal">
                    <div class="modal-header">
                        <h2>Modal Title</h2>
                        <button class="close-button" onClick={closeModal}>X</button>
                    </div>
                    <div class="modal-content">
                        <p>This is the modal description.</p>
                    </div>
                    <div class="modal-buttons">
                        <button class="cancel-button" onClick={closeModal}>CANCEL</button>
                        <button class="submit-button">SUBMIT</button>
                    </div>
                </div>
            )}
        </>
    )
}
