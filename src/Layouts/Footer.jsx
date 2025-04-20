import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-col">
          <h3>Bubs Movers</h3>
          <p>1234 Elm St, Provo, UT</p>
          <p>(555) 123‑4567</p>
          <p>info@bubsmovers.com</p>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <p><a href="#hero">Home</a></p>
          <p><a href="#services">Services</a></p>
          <p><a href="#quote">Quote</a></p>
        </div>
      </div>
      <p className="footer-bottom">&copy; 2025 Bubs Movers. All rights reserved.</p>
    </footer>
  );
}
