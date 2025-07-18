import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { useProducts } from "../../Context/ProductContext";
import { useCart } from "../../Context/CartContext";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products } = useProducts();
    const { addToCart } = useCart();
    
    const product = products.find(p => p.id === id);

    if (!product) {
        return <div className={styles.page}>Product not found</div>;
    }

    const handleBuyNow = () => {
        // Add to cart and redirect to payment
        addToCart(product);
        navigate(`/payment?productId=${id}`);
    };

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.imageSection}>
                    <img src={product.image} alt={product.name} className={styles.productImage} />
                </div>
                <div className={styles.detailsSection}>
                    <h1 className={styles.productName}>{product.name}</h1>
                    
                    <div className={styles.ratingContainer}>
                        <div className={styles.rating}>
                            {product.rating} ★
                        </div>
                        <span className={styles.ratingCount}>({product.numReviews} Reviews)</span>
                    </div>

                    <div className={styles.priceSection}>
                        <div className={styles.priceContainer}>
                            <span className={styles.price}>₹{product.price}</span>
                            {product.mrp > product.price && (
                                <>
                                    <span className={styles.mrp}>₹{product.mrp}</span>
                                    <span className={styles.discount}>
                                        {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% off
                                    </span>
                                </>
                            )}
                        </div>
                        {product.freeDelivery && (
                            <span className={styles.freeDelivery}>Free delivery</span>
                        )}
                        {product.assured && (
                            <img 
                                src="/asserts/assured.png" 
                                alt="Assured" 
                                className={styles.assured}
                            />
                        )}
                    </div>

                    <div className={styles.description}>
                        <h3>Description</h3>
                        <p>{product.description}</p>
                    </div>

                    <div className={styles.highlights}>
                        <h3>Highlights</h3>
                        <ul>
                            {product.highlights?.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button 
                            className={`${styles.button} ${styles.addToCart}`}
                            onClick={() => addToCart(product)}
                        >
                            <i className="fas fa-shopping-cart"></i>
                            Add to Cart
                        </button>
                        <button 
                            className={`${styles.button} ${styles.buyNow}`}
                            onClick={handleBuyNow}
                        >
                            <i className="fas fa-bolt"></i>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
