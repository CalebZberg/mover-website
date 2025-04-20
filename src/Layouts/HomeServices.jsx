import React from 'react';
import Hero        from './Hero.jsx';
import HowItWorks  from './HowItWorks.jsx';
import { Link }    from 'react-router-dom';
import './HomeServices.css';

export default function HomeServices() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* How It Works */}
      <HowItWorks />

      {/* Home CTA */}
      <section className="cta-section section-card">
        <div className="container">
          <h2>Ready to Move?</h2>
          <p>Contact us today for a free, no‑obligation quote!</p>
          <Link to="/quote"    className="btn">Get Your Quote</Link>
          <Link to="/services" className="btn btn-secondary" style={{ marginLeft: '1rem' }}>
            View Our Services
          </Link>
        </div>
      </section>
    </>
  );
}
