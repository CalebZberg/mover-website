import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar       from './Layouts/NavBar.jsx';
import Footer       from './Layouts/Footer.jsx';
import HomeServices from './Layouts/HomeServices.jsx';
import Services     from './Layouts/Services.jsx';      // ← new page
import Quote        from './Layouts/Quote.jsx';
import Reviews      from './Layouts/Reviews.jsx';
import Login        from './Layouts/Login.jsx';
import AboutContact from './Layouts/AboutContact.jsx';
import NotFound     from './Layouts/NotFound.jsx';

import ProtectedRoute from './components/ProtectedRoute.jsx';  // ← guard
import './App.css';

export default function App() {
  return (
    <div className="appPage">
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<HomeServices />} />

          <Route path="/services" element={<Services />} />

          {/* protect the quote page */}
          <Route
            path="/quote"
            element={
              <ProtectedRoute>
                <Quote />
              </ProtectedRoute>
            }
          />

          <Route path="/reviews" element={<Reviews />} />
          <Route path="/login"   element={<Login />} />
          <Route path="/about"   element={<AboutContact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
