import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const initialProducts = [
  { 
    id: "1",
    name: "HP Pavilion Gaming Laptop",
    price: 49999,
    mrp: 69999,
    image: "https://via.placeholder.com/500x500?text=Gaming+Laptop",
    rating: 4.5,
    numReviews: 1289,
    freeDelivery: true,
    assured: true,
    description: "Experience the power of gaming with the HP Pavilion Gaming Laptop. Featuring high-performance hardware and immersive graphics, this laptop delivers exceptional gaming experiences.",
    highlights: [
      "AMD Ryzen 5 5600H",
      "8GB DDR4 RAM",
      "512GB SSD",
      "NVIDIA GTX 1650 4GB Graphics",
      "15.6 inch Full HD Display",
      "Windows 11 Home"
    ]
  },
  { 
    id: "2",
    name: "Samsung Galaxy S21 FE 5G",
    price: 49999,
    mrp: 74999,
    image: "https://via.placeholder.com/500x500?text=Smartphone",
    rating: 4.3,
    numReviews: 856,
    freeDelivery: true,
    assured: true,
    description: "The Samsung Galaxy S21 FE 5G combines flagship features with great value. Experience pro-grade cameras, smooth 120Hz display, and powerful performance.",
    highlights: [
      "6.4 inch Dynamic AMOLED Display",
      "Snapdragon 888 Processor",
      "8GB RAM + 128GB Storage",
      "Triple Rear Camera Setup",
      "4500mAh Battery",
      "Android 12"
    ]
  },
  { 
    id: "3",
    name: "Sony WH-1000XM4 Headphones",
    price: 24999,
    mrp: 29999,
    image: "https://via.placeholder.com/500x500?text=Headphones",
    rating: 4.8,
    numReviews: 2341,
    freeDelivery: true,
    assured: true,
    description: "Industry-leading noise cancellation with premium sound quality. The Sony WH-1000XM4 delivers exceptional audio performance and smart features.",
    highlights: [
      "Industry-leading Noise Cancellation",
      "30 Hours Battery Life",
      "Multipoint Connection",
      "Touch Controls",
      "Speak-to-chat Technology",
      "High-Resolution Audio"
    ]
  },
  { 
    id: "4",
    name: "Apple Watch Series 7",
    price: 41999,
    mrp: 45999,
    image: "https://via.placeholder.com/500x500?text=Smartwatch",
    rating: 4.6,
    numReviews: 543,
    freeDelivery: true,
    assured: true,
    description: "The largest, most advanced display yet on an Apple Watch. Track your fitness, stay connected, and monitor your health with style.",
    highlights: [
      "Always-On Retina Display",
      "ECG & Blood Oxygen Monitoring",
      "Water Resistant",
      "18-hour Battery Life",
      "Fast Charging",
      "watchOS 8"
    ]
  },
  { 
    id: "5",
    name: "JBL Flip 5 Bluetooth Speaker",
    price: 8999,
    mrp: 11999,
    image: "https://via.placeholder.com/500x500?text=Speaker",
    rating: 4.4,
    numReviews: 987,
    freeDelivery: true,
    assured: true,
    description: "Powerful, portable sound with the JBL Flip 5. Enjoy up to 12 hours of playtime with stunning audio quality and waterproof design.",
    highlights: [
      "12 Hours Playtime",
      "IPX7 Waterproof",
      "PartyBoost Feature",
      "USB-C Charging",
      "Durable Fabric Design",
      "Built-in Microphone"
    ]
  }
];

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  const editProduct = (id, updates) => {
    setProducts((prods) =>
      prods.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
  };

  return (
    <ProductContext.Provider value={{ products, editProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
