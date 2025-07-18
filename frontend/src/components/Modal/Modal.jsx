import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ open, onClose, children }) => {
    if (!open) return null;
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.close} onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
