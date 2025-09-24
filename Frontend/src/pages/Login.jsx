


import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');           
  const [password, setPassword] = useState('');    
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError(false);
    setLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:3000/api/Login',
        { email, password },
        { withCredentials: true }
      );

      setMessage(response.data.msg);
      setError(false);

      
      navigate("/api/create");
    } catch (err) {
      setError(true);
      if (err.response && err.response.data) {
        setMessage(err.response.data.msg || 'Login failed');
      } else if (err.request) {
        setMessage('No response from server. Check CORS or server status.');
      } else {
        setMessage(err.message || 'Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Type Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Type Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <Link to="/api/Register">Create an account</Link>

        {message && (
          <div className={`message ${error ? 'error' : 'success'}`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
