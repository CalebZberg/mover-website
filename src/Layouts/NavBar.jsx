import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';
import './NavBar.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          Bub’s Movers
        </Link>


        {/* Hamburger toggle */}
        <input
          type="checkbox"
          id="menu-toggle"
          className="menu-toggle"
          checked={open}
          onChange={() => setOpen(o => !o)}
        />
        <label htmlFor="menu-toggle" className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </label>

        {/* Nav Links */}
        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About & Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>

          {isAuthenticated ? (
            <li>
              <button onClick={handleLogout} className="nav-button">
                Logout
              </button>
            </li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}

          <li>
            <Link to="/quote" className="btn quote-link">
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
