import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import './Quote.css';

const BASE_URL = "https://vgvpivifad.execute-api.us-east-2.amazonaws.com";

export default function Quote() {
  const { isAuthenticated } = useContext(AuthContext);
  const [form, setForm] = useState({ from:'', to:'', date:'', details:'' });
  const [loading, setLoading] = useState(false);

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/quote/`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          origin: form.from,
          destination: form.to,
          date: form.date,
          inventory: form.details
        })
      });
      if (!res.ok) throw new Error('Quote request failed');
      const data = await res.json();
      alert(`Estimate: $${data.estimate}`);
      // optionally clear form here
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

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
            <input
              name="from"
              placeholder="Moving From"
              value={form.from}
              onChange={handleChange}
              required
            />
            <input
              name="to"
              placeholder="Moving To"
              value={form.to}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
            <textarea
              name="details"
              rows="3"
              placeholder="Additional Details"
              value={form.details}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Requesting…' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
}
