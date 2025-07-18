import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Payment.module.css";
import { useProducts } from "../../Context/ProductContext";
import { createRazorpayOrder, verifyRazorpayPayment } from "../../utils/api";

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { products } = useProducts();
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get('productId');
    const product = products.find(p => p.id === productId);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        paymentMethod: "razorpay",
    });

    useEffect(() => {
        if (!product) {
            navigate('/');
        }
    }, [product, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear any previous errors when user makes changes
        setError(null);
    };

    const initializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const handleRazorpayPayment = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const res = await initializeRazorpay();
            if (!res) {
                throw new Error("Razorpay SDK failed to load");
            }

            // Create order on backend
            const orderData = {
                amount: product.price * 100, // Razorpay expects amount in paise
                currency: "INR",
                receipt: `order_${Date.now()}`,
                productId: productId,
                customerDetails: {
                    name: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address
                }
            };

            const order = await createRazorpayOrder(orderData);
            
            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: order.currency,
                name: "FusionMart",
                description: `Payment for ${product.name}`,
                order_id: order.id,
                handler: async function (response) {
                    try {
                        // Verify payment with backend
                        const verificationData = {
                            orderId: order.id,
                            paymentId: response.razorpay_payment_id,
                            signature: response.razorpay_signature
                        };
                        
                        await verifyRazorpayPayment(verificationData);
                        
                        // Payment successful
                        navigate('/orders', { 
                            state: { 
                                success: true, 
                                message: "Payment successful! Your order has been placed." 
                            } 
                        });
                    } catch (error) {
                        setError("Payment verification failed. Please contact support.");
                    }
                },
                prefill: {
                    name: formData.fullName,
                    email: formData.email,
                    contact: formData.phone,
                },
                notes: {
                    address: formData.address,
                    productId: productId,
                },
                theme: {
                    color: "#2874f0",
                },
                modal: {
                    ondismiss: function() {
                        setError("Payment cancelled by user");
                    }
                }
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            setError(error.message || "Failed to process payment. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmitShipping = async (e) => {
        e.preventDefault();
        
        if (formData.paymentMethod === "razorpay") {
            await handleRazorpayPayment();
        } else {
            try {
                setLoading(true);
                // Handle COD order creation
                const orderData = {
                    amount: product.price,
                    paymentMethod: "COD",
                    productId: productId,
                    customerDetails: {
                        name: formData.fullName,
                        email: formData.email,
                        phone: formData.phone,
                        address: formData.address,
                        city: formData.city,
                        state: formData.state,
                        pincode: formData.pincode
                    }
                };
                
                // Create order in backend
                await createRazorpayOrder(orderData);
                
                navigate('/orders', { 
                    state: { 
                        success: true, 
                        message: "Order placed successfully! You can pay at the time of delivery." 
                    } 
                });
            } catch (error) {
                setError("Failed to place order. Please try again.");
            } finally {
                setLoading(false);
            }
        }
    };

    if (!product) return null;

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {/* Order Summary */}
                <div className={styles.summary}>
                    <h2>Order Summary</h2>
                    <div className={styles.productSummary}>
                        <img src={product.image} alt={product.name} className={styles.productImage} />
                        <div className={styles.productDetails}>
                            <h3>{product.name}</h3>
                            <div className={styles.pricing}>
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
                        </div>
                    </div>
                    <div className={styles.priceBreakdown}>
                        <div className={styles.priceRow}>
                            <span>Price</span>
                            <span>₹{product.price}</span>
                        </div>
                        <div className={styles.priceRow}>
                            <span>Delivery</span>
                            <span className={styles.free}>Free</span>
                        </div>
                        <div className={`${styles.priceRow} ${styles.total}`}>
                            <span>Total</span>
                            <span>₹{product.price}</span>
                        </div>
                    </div>
                </div>

                {/* Forms Section */}
                <div className={styles.formSection}>
                    {error && (
                        <div className={styles.error}>
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmitShipping} className={styles.form}>
                        <h2>Shipping Details</h2>
                        <div className={styles.formGrid}>
                            <div className={styles.formGroup}>
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                <label htmlFor="address">Address</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="city">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="state">State</label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="pincode">PIN Code</label>
                                <input
                                    type="text"
                                    id="pincode"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                <label>Payment Method</label>
                                <div className={styles.paymentOptions}>
                                    <label className={styles.paymentOption}>
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="razorpay"
                                            checked={formData.paymentMethod === "razorpay"}
                                            onChange={handleInputChange}
                                        />
                                        <span className={styles.paymentLabel}>
                                            <img src="https://razorpay.com/favicon.png" alt="Razorpay" className={styles.paymentIcon} />
                                            Razorpay
                                        </span>
                                    </label>
                                    <label className={styles.paymentOption}>
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="cod"
                                            checked={formData.paymentMethod === "cod"}
                                            onChange={handleInputChange}
                                        />
                                        <span className={styles.paymentLabel}>
                                            <i className={`fas fa-money-bill ${styles.paymentIcon}`}></i>
                                            Cash on Delivery
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            className={styles.submitBtn}
                            disabled={loading}
                        >
                            {loading ? "Processing..." : "Place Order"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Payment;
