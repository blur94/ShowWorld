import React, { useState } from 'react';
import Modal from 'react-modal';

export default function AddMoviesModal() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Add Movie</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={{
                    content: {
                        left: 'auto',
                        right: '0',
                        width: '75%',
                        marginRight: '20px'
                    },
                }}
            >
                <div>Modal Content</div>
            </Modal>
        </div>
    );
}