import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import './HomeServices.css'; // for CTA styles

export default function Services() {
  return (
    <>
      {/* Services Overview */}
      <section className="services-section section-card">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="services-intro">
            Whether you're moving across town or across the country, Bubs Movers offers complete, end‑to‑end solutions to make your transition seamless. From professional packing to secure storage, we handle every step with care and precision.
          </p>

          <div className="services-grid">
            <div className="service-card card">
              <h3>Full Service Move</h3>
              <p>Complete packing, transport, and unpacking—sit back and relax.</p>
            </div>
            <div className="service-card card">
              <h3>Truck Rental</h3>
              <p>You pack; we drive your rental truck safely to its destination.</p>
            </div>
            <div className="service-card card">
              <h3>Specialty Items</h3>
              <p>Pianos, antiques, artwork—expert handling for your valuables.</p>
            </div>
            <div className="service-card card">
              <h3>Storage Solutions</h3>
              <p>Secure, climate‑controlled storage for as long as you need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Page CTA */}
      <section className="cta-section section-card">
        <div className="container">
          <h2>Ready to Move?</h2>
          <p>Get your free, no‑obligation quote now and let us handle the heavy lifting!</p>
          <Link to="/quote" className="btn">Get Your Quote</Link>
        </div>
      </section>
    </>
  );
}
