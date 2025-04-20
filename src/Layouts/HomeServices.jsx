import React from 'react';
import Hero from './Hero.jsx';
import HowItWorks from './HowItWorks.jsx';
import Services from './Services.jsx';
import { Link } from 'react-router-dom';
import './HomeServices.css';

export default function HomeServices() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />

      <section className="cta-section section-card">
        <div className="container">
          <h2>Ready to Move?</h2>
          <p>Get your free, no‑obligation quote today.</p>
          <Link to="/quote" className="btn">Get a Quote</Link>
        </div>
      </section>
    </>
  );
}
