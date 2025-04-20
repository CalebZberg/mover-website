import React, { useState } from 'react';
import './AboutContact.css';

export default function AboutContact() {
  const [msg, setMsg] = useState({ name: '', email: '', message: '' });

  const handleChange = e =>
    setMsg(current => ({ ...current, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    alert('Message sent!');
    setMsg({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* About Us Section */}
      <section className="about-section section-card">
        <div className="container about-container">
          <h2 className="section-title">About Us</h2>

          {/* Our Story */}
          <div className="about-story">
            <h3>Our Story</h3>
            <p>
              Founded in 2010 by two friends in Provo, UT, Bubs Movers started
              with a single truck and a promise: make long‑distance moves
              worry‑free. Today we’ve grown our fleet and team—but the heart of
              our business remains personalized service and absolute care for
              your belongings.
            </p>
          </div>

          {/* Our Values */}
          <div className="about-values">
            <h3>Our Values</h3>
            <ul>
              <li>
                <strong>Integrity:</strong> We honor our promises and treat your
                items like our own.
              </li>
              <li>
                <strong>Reliability:</strong> On‑time arrivals and dependable
                service.
              </li>
              <li>
                <strong>Safety:</strong> Industry‑leading packing and transport
                methods.
              </li>
              <li>
                <strong>Customer Focus:</strong> 24/7 support and clear
                communication.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section section-card">
        <div className="container contact-container">
          <h2 className="section-title">Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={msg.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={msg.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={msg.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
