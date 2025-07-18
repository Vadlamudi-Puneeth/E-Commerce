import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuth } from "../../Context/AuthContext";
import { useCart } from "../../Context/CartContext";

const Navbar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const { cart } = useCart();

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            navigate(`/?search=${encodeURIComponent(search)}`);
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoSection}>
                <Link to="/">
                    <img src="/asserts/FusionMart.png" alt="FusionMart" className={styles.logo} />
                </Link>
                <span className={styles.brand}>Explore Plus</span>
            </div>
            
            <form className={styles.searchForm} onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for products, brands and more"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchBtn}>
                    <i className="fas fa-search"></i>
                </button>
            </form>

            <ul className={styles.links}>
                {user?.role === 'ADMIN' && (
                    <li>
                        <Link to="/admin">
                            <i className="fas fa-user-shield"></i>
                            <span>Admin</span>
                        </Link>
                    </li>
                )}
                
                <li>
                    {user ? (
                        <Link to="/profile">
                            <i className="fas fa-user"></i>
                            <span>{user.name || 'Account'}</span>
                        </Link>
                    ) : (
                        <Link to="/login">
                            <i className="fas fa-user"></i>
                            <span>Login</span>
                        </Link>
                    )}
                </li>

                <li>
                    <Link to="/orders">
                        <i className="fas fa-box"></i>
                        <span>Orders</span>
                    </Link>
                </li>

                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>Cart</span>
                        {cart?.length > 0 && (
                            <span className={styles.cartCount}>{cart.length}</span>
                        )}
                    </Link>
                </li>

                {user && (
                    <li>
                        <button onClick={logout} className={styles.logoutBtn}>
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
