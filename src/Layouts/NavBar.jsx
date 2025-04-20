import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="Logo-Name">
            Bubs Movers
        </div>
        
        

        <input 
          type="checkbox" 
          id="menu-toggle" 
          className="menu-toggle" 
          checked={open}
          onChange={() => setOpen(o => !o)}
        />
        <label htmlFor="menu-toggle" className="menu-icon">
          <span></span><span></span><span></span>
        </label>

        <ul className={`nav-links${open? ' open':''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About & Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/quote" className="btn quote-link">Get a Quote</Link></li>
        </ul>
      </div>
    </header>
);
}
