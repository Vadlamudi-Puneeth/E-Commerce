import React from "react";
import styles from "./Fotter.module.css";
import logo from "../../assets/logo.png";

const Fotter = () => (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <p>&copy; {new Date().getFullYear()} FusionMart. All rights reserved.</p>
        </div>
    </footer>
);

export default Fotter;
