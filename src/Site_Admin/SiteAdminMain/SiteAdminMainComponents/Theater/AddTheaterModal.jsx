import React, { useState } from 'react';
import Modal from 'react-modal';

export default function AddTheaterModal() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Add Theater</button>
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