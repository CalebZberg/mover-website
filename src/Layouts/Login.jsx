import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';
import './Login.css';

export default function Login() {
  const [creds, setCreds] = useState({ user: '', pass: '' });
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    login(() => {
      setLoading(false);
      navigate('/quote');
    });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            name="user"
            value={creds.user}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="pass"
            value={creds.pass}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in…' : 'Login'}
        </button>
      </form>
    </div>
  );
}
