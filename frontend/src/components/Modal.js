import React from 'react';
import '../css/Modal.css';

const Modal = ({ showModal, children, hideModal }) => {
    return (
        showModal && (
            <div className="ModalContainer" onClick={hideModal}>
                {children}

            </div>
        )
    )
}

export default Modal;
