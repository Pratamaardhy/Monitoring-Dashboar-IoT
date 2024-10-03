import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Tambahkan Routes dan Route
import App from './App';
import BasicExample from './login'; // Impor halaman login

import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Rute untuk halaman login */}
        <Route path="/login" element={<BasicExample />} />
        {/* Rute default ke halaman utama */}
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
