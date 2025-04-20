import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="notfound-section section-card">
      <div className="container">
        <h2 className="section-title">404 – Page Not Found</h2>
        <p>Oops! The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="btn">Return Home</Link>
      </div>
    </section>
  );
}
