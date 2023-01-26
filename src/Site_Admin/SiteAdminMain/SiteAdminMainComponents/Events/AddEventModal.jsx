import React, { useState } from "react";
import Modal from "react-modal";
import EventForm from "./EventForm";

export default function AddEventModal() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const customStyles = {
        content: {
            width: "50%",
            height: "80vh",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)"
        }
    };

    return (
        <div>
            <button onClick={openModal}>Add Event</button>
            <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles} ariaHideApp={false}>
                <div>
                    <h2>Modal Content for Event</h2>
                    <EventForm />
                </div>
            </Modal>
        </div>
    );
}
