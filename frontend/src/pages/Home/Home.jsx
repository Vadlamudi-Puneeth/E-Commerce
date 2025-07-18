import React from "react";
import styles from "./Home.module.css";
import { useProducts } from "../../Context/ProductContext";
import ProductCard from "../../components/ProductCard/ProductCard";

const Home = () => {
    const { products } = useProducts();

    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <h1 className={styles.title}>Products</h1>
                <div className={styles.grid}>
                    {products?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
