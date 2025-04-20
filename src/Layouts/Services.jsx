import React from 'react';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="services-section section-card">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Residential Moves</h3>
            <p>Safe moves for homes, apartments, and condos.</p>
          </div>
          <div className="service-card">
            <h3>Office Relocations</h3>
            <p>Efficient corporate moving solutions.</p>
          </div>
          <div className="service-card">
            <h3>Packing Services</h3>
            <p>Professional packing and unpacking.</p>
          </div>
          <div className="service-card">
            <h3>Storage Solutions</h3>
            <p>Secure short- and long-term storage options.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
