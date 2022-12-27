import React, { useState } from 'react';
import Modal from 'react-modal';
import Table from './Table';

export default function AModal() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Open the modal</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
            >
                <Table />
            </Modal>
        </div>
    );
}