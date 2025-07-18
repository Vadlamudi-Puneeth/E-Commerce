import React from "react";
import styles from "./CartItems.module.css";
import { useCart } from "../../Context/CartContext";

const CartItems = () => {
    const { cart, removeFromCart } = useCart();

    if (cart.length === 0) return <div className={styles.empty}>Your cart is empty.</div>;

    return (
        <div className={styles.cartList}>
            {cart.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                    <img src={item.image} alt={item.name} className={styles.img} />
                    <div className={styles.info}>
                        <h4>{item.name}</h4>
                        <p>₹{item.price}</p>
                        <button className={styles.remove} onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItems;
