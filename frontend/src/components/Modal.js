import React from 'react';
import '../css/Modal.css';

const Modal = ({ showModal, children }) => {
    return (
        showModal && (
            <div className="ModalContainer">
                <div className="modalShow">
                {children}
                </div>

            </div>
        )
    )
}

export default Modal;
