import React from 'react';
import '../css/Modal.css';

const Modal = ({ showModal, children,hideModal }) => {
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
