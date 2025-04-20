import React from 'react';
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-section section-card">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Request a Quote</h3>
            <p>Fill out our form or call us for a free estimate.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Packing & Loading</h3>
            <p>We carefully pack and load your belongings.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Transport & Unload</h3>
            <p>We deliver and unload at your new location.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
