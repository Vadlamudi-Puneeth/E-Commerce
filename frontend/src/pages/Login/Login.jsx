import React, { useState } from "react";
import styles from "./Login.module.css";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils/validators";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!validateEmail(form.email)) {
            setError("Please enter a valid email.");
            return;
        }

        if (!validatePassword(form.password)) {
            setError("Password must be at least 6 characters.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8088/api/users");
            const users = await response.json();

            const matchedUser = users.find(
                (user) => user.email === form.email && user.password === form.password
            );

            if (matchedUser) {
                login({ email: matchedUser.email, name: matchedUser.fullName });
                navigate("/");
            } else {
                setError("Invalid email or password.");
            }
        } catch (err) {
            console.error("Login failed:", err);
            setError("Server error. Please try again later.");
        }
    };

    return (
        <div className={styles.container}>
            <h2>Login Form</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
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
                        onClick={() => setShowPassword((v) => !v)}
                        title={showPassword ? "Hide Password" : "Show Password"}
                        style={{ cursor: "pointer" }}
                    ></i>
                </div>
                {error && <div className={styles.error}>{error}</div>}
                <button className={styles.button} type="submit">Login</button>
            </form>
            <p className={styles.linkText}>
                Don't have an account? <a href="/register">Sign Up</a>
            </p>
        </div>
    );
};

export default Login;
