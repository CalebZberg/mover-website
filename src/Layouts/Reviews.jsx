import React from 'react';
import './Reviews.css';

export default function Reviews() {
  const reviews = [
    { stars:5, text:"Fantastic service! A+", author:"Alice W." },
    { stars:4, text:"Very professional movers.", author:"Bob L." },
    { stars:5, text:"Made our move stress-free.", author:"Carol P." }
  ];

  return (
    <section id="reviews" className="reviews-section section-card">
      <div className="container">
        <h2 className="section-title">Customer Reviews</h2>
        <div className="reviews-grid">
          {reviews.map((r,i) => (
            <div key={i} className="review-card">
              <div className="stars">{"★".repeat(r.stars)}</div>
              <p className="review-text">{r.text}</p>
              <p className="review-author">— {r.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
