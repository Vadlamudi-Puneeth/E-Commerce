import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Toast from "./components/Toast/Toast";
import Loader from "./components/Loader/Loader";
import { AuthProvider } from "./Context/AuthContext";
import { CartProvider } from "./Context/CartContext";
import { ProductProvider } from "./Context/ProductContext";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Admin from "./pages/Admin/Admin";
import Orders from "./pages/Orders/Orders";
import Payment from "./pages/Payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <Router>
            <Navbar />
            <Toast />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
