import React from "react";
import styles from "./Admin.module.css";
import AdminProductEdit from "../../components/AdminProductEdit/AdminProductEdit";

const Admin = () => (
    <div className={styles.page}>
        <h2>Admin Panel</h2>
        <AdminProductEdit />
    </div>
);

export default Admin;
