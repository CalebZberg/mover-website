import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content container">
        <h1>Your Move, Our Priority</h1>
        <p>Stress‑free, professional moving services you can trust.</p>
        <Link to="/quote" className="btn cta-button">Get a Quote</Link>
      </div>
    </section>
  );
}
