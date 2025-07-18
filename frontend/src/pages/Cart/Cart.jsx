import React from "react";
import styles from "./Cart.module.css";
import CartItems from "../../components/CartItems/CartItems";
import { useCart } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className={styles.cartPage}>
            <h2>Your Cart</h2>
            <CartItems />
            {cart.length > 0 && (
                <div className={styles.summary}>
                    <p>Total: <b>₹{total}</b></p>
                    <button className={styles.checkout} onClick={() => { clearCart(); navigate("/payment"); }}>Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
