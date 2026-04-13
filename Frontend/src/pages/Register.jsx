

// src/Register.js
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError(false);

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/Register`,
                { name, email, password },
                { withCredentials: true }
            );

            setMessage(response.data.msg);
            setError(false);

            
            navigate("/login");
        } catch (err) {
            setError(true);
            if (err.response && err.response.data) {
                setMessage(err.response.data.msg || "Registration failed");
            } else {
                setMessage("Something went wrong");
            }
        }
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input
                    type="text"
                    placeholder="Name"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    required
                />
                <button type="submit" className="button">Register</button>
                
                <Link to="/login">Login to your account</Link>

                {message && (
                    <div className={`message ${error ? 'error' : 'success'}`}>
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default Register;
