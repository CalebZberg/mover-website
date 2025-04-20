import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    login(email);
    navigate('/quote');
  };

  return (
    <section id="login" className="login-section section-card">
      <div className="container">
        <h2 className="section-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
          />
          <button type="submit" className="btn">Log In</button>
        </form>
      </div>
    </section>
  );
}
