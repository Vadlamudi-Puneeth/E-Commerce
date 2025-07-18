import React, { useState } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils/validators";

const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        confirm: ""
    });
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        // Validation
        if (!form.name.trim()) {
            setError("Please enter your name.");
            return;
        }
        if (!form.mobile.trim() || !/^\d{10}$/.test(form.mobile)) {
            setError("Please enter a valid 10-digit mobile number.");
            return;
        }
        if (!validateEmail(form.email)) {
            setError("Please enter a valid email.");
            return;
        }
        if (!validatePassword(form.password)) {
            setError("Password must be at least 6 characters.");
            return;
        }
        if (form.password !== form.confirm) {
            setError("Passwords do not match.");
            return;
        }

        // Backend connection
        try {
            const response = await fetch("http://localhost:8088/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName: form.name,
                    phoneno: form.mobile,
                    email: form.email,
                    password: form.password,
                    cfpassword: form.confirm,
                }),
            });

            const data = await response.text();

            if (response.ok) {
                alert("Registered successfully!");
                navigate("/login");
            } else {
                setError(data); // Backend error message
            }
        } catch (error) {
            console.error("Error during registration:", error);
            setError("Server error. Please try again later.");
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Create Your Account</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    className={styles.input}
                />
                <input
                    name="mobile"
                    type="text"
                    placeholder="Mobile Number"
                    value={form.mobile}
                    onChange={handleChange}
                    className={styles.input}
                    maxLength={10}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className={styles.input}
                />
                <div className={styles.passwordContainer}>
                    <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    <i
                        className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"} ${styles.eyeIcon}`}
                        onClick={() => setShowPassword(!showPassword)}
                        title={showPassword ? "Hide Password" : "Show Password"}
                        style={{ cursor: "pointer" }}
                    ></i>
                </div>
                <div className={styles.passwordContainer}>
                    <input
                        name="confirm"
                        type={showConfirm ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={form.confirm}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    <i
                        className={`fas ${showConfirm ? "fa-eye" : "fa-eye-slash"} ${styles.eyeIcon}`}
                        onClick={() => setShowConfirm(!showConfirm)}
                        title={showConfirm ? "Hide Password" : "Show Password"}
                        style={{ cursor: "pointer" }}
                    ></i>
                </div>
                {error && <div className={styles.error}>{error}</div>}
                <button className={styles.button} type="submit">Sign Up</button>
            </form>
            <p className={styles.linkText}>
                Already have an account? <a href="/login">Login</a>
            </p>
        </div>
    );
};

export default Register;
