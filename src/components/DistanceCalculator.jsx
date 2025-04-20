import React, { useState } from 'react';

export default function DistanceCalculator() {
  const [addrs, setAddrs] = useState({ origin: '', destination: '' });
  const [distance, setDistance] = useState('');
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');

  const handleChange = e =>
    setAddrs({ ...addrs, [e.target.name]: e.target.value });  // React event #2

  const calculateDistance = async () => {
    setLoading(true);
    setError('');
    try {
      const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
      const url = `https://maps.googleapis.com/maps/api/distancematrix/json`
        + `?origins=${encodeURIComponent(addrs.origin)}`
        + `&destinations=${encodeURIComponent(addrs.destination)}`
        + `&key=${key}`;

      const res  = await fetch(url);       // microtask
      const json = await res.json();

      if (json.rows[0].elements[0].status === 'OK') {
        setTimeout(() => {                // macro‑task
          setDistance(json.rows[0].elements[0].distance.text);
          setLoading(false);
        }, 500);
      } else {
        throw new Error('No route found');
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Calculate Move Distance</h2>
      <input
        name="origin"
        placeholder="Current address"
        value={addrs.origin}
        onChange={handleChange}         /* React event #3 */
      />
      <input
        name="destination"
        placeholder="New address"
        value={addrs.destination}
        onChange={handleChange}
      />
      <button onClick={calculateDistance} disabled={loading}>
        {loading ? 'Calculating…' : 'Calculate Distance'}
      </button>

      {error    && <p style={{ color: 'red' }}>{error}</p>}
      {distance && <p>Your move distance: <strong>{distance}</strong></p>}
    </div>
  );
}
