import React, { useState } from 'react';
import './AboutContact.css';

export default function AboutContact() {
  const [msg, setMsg] = useState({ name:'', email:'', message:'' });
  const handleChange = e => setMsg(m => ({ ...m, [e.target.name]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); alert('Message sent!'); setMsg({ name:'', email:'', message:'' }); };

  return (
    <>
      <section className="about-section section-card">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p>Bubs Movers was founded to provide reliable, professional moving services for long‑distance moves. Our trained team and top‑quality equipment ensure your belongings arrive safely.</p>
        </div>
      </section>

      <section className="contact-section section-card">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Name
              <input name="name" value={msg.name} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input name="email" type="email" value={msg.email} onChange={handleChange} required />
            </label>
            <label>
              Message
              <textarea name="message" rows="4" value={msg.message} onChange={handleChange} required />
            </label>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
