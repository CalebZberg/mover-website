import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import './Quote.css';

export default function Quote() {
  const { isAuthenticated } = useContext(AuthContext);
  const [form, setForm] = useState({ from:'', to:'', date:'', details:'' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); alert("We'll be in touch!"); };

  if (!isAuthenticated) {
    return (
      <section className="quote-section section-card">
        <div className="container">
          <h2>Please Log In</h2>
          <p>You must <a href="/login">log in</a> to request a quote.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="quote-section section-card">
      <div className="container">
        <h2 className="section-title">Request a Quote</h2>
        <form onSubmit={handleSubmit} className="quote-form">
          <div className="fields">
            <input name="from" placeholder="Moving From" value={form.from} onChange={handleChange} required />
            <input name="to"   placeholder="Moving To"   value={form.to}   onChange={handleChange} required />
            <input type="date" name="date"                 value={form.date} onChange={handleChange} required />
            <textarea name="details" rows="3" placeholder="Additional Details" value={form.details} onChange={handleChange} />
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </section>
  );
}
