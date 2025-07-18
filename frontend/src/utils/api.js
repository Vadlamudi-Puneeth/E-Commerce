// API Base URL
const API_BASE_URL = 'http://localhost:8080/api';

// Example: Mock API functions
export const fetchProducts = async () => {
  // Replace with real API call
  return [
    { id: 1, name: "Laptop", price: 49999, image: "/assets/laptop.jpg" },
    { id: 2, name: "Smartphone", price: 19999, image: "/assets/phone.jpg" },
  ];
};

// Razorpay API functions
export const createRazorpayOrder = async (orderData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/payments/create-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create order');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    throw error;
  }
};

export const verifyRazorpayPayment = async (paymentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/payments/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });
    
    if (!response.ok) {
      throw new Error('Payment verification failed');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error verifying payment:', error);
    throw error;
  }
};
