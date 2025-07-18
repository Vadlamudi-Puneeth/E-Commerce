import React, { useState, useEffect } from "react";
import styles from "./Toast.module.css";

const Toast = ({ message = "", type = "info", duration = 3000 }) => {
    const [show, setShow] = useState(!!message);

    useEffect(() => {
        if (message) {
            setShow(true);
            const timer = setTimeout(() => setShow(false), duration);
            return () => clearTimeout(timer);
        }
    }, [message, duration]);

    if (!show) return null;

    return (
        <div className={`${styles.toast} ${styles[type]}`}>
            {message}
        </div>
    );
};

export default Toast;
