import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
    const calculateDiscount = (mrp, price) => {
        return Math.round(((mrp - price) / mrp) * 100);
    };

    return (
        <Link 
            to={`/product/${product.id}`} 
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className={styles.imageContainer}>
                <img src={product.image} alt={product.name} className={styles.img} />
            </div>
            <div className={styles.details}>
                <h3 className={styles.name}>{product.name}</h3>
                <div className={styles.ratingContainer}>
                    <div className={styles.rating}>
                        {product.rating} ★
                    </div>
                    <span className={styles.ratingCount}>({product.numReviews})</span>
                </div>
                <div className={styles.priceContainer}>
                    <span className={styles.price}>₹{product.price}</span>
                    {product.mrp > product.price && (
                        <>
                            <span className={styles.mrp}>₹{product.mrp}</span>
                            <span className={styles.discount}>
                                {calculateDiscount(product.mrp, product.price)}% off
                            </span>
                        </>
                    )}
                </div>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.highlights}>
                    {product.highlights?.slice(0, 3).map((highlight, index) => (
                        <div key={index} className={styles.highlight}>
                            <span className={styles.bulletPoint}>•</span>
                            {highlight}
                        </div>
                    ))}
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
        </Link>
    );
};

export default ProductCard;
