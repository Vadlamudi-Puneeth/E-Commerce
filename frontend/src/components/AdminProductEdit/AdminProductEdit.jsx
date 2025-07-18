import React, { useState } from "react";
import styles from "./AdminProductEdit.module.css";
import { useProducts } from "../../Context/ProductContext";

const AdminProductEdit = () => {
    const { products, editProduct } = useProducts();
    const [editId, setEditId] = useState(null);
    const [form, setForm] = useState({ name: "", price: "", image: "" });

    const startEdit = (product) => {
        setEditId(product.id);
        setForm({ name: product.name, price: product.price, image: product.image });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        editProduct(editId, { ...form, price: Number(form.price) });
        setEditId(null);
    };

    return (
        <div className={styles.adminEdit}>
            <h2>Edit Products</h2>
            {products.map((product) => (
                <div key={product.id} className={styles.productRow}>
                    {editId === product.id ? (
                        <>
                            <input name="name" value={form.name} onChange={handleChange} />
                            <input name="price" value={form.price} onChange={handleChange} type="number" />
                            <input name="image" value={form.image} onChange={handleChange} />
                            <button onClick={handleSave}>Save</button>
                            <button onClick={() => setEditId(null)}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <img src={product.image} alt={product.name} className={styles.img} />
                            <span>{product.name}</span>
                            <span>₹{product.price}</span>
                            <button onClick={() => startEdit(product)}>Edit</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AdminProductEdit;
