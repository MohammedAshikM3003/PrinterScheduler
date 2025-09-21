// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login';
import Signup from './signup';

function App() {
  return (
    // BrowserRouter must be the top-level wrapper here
    <BrowserRouter>
      {/* Any other components like a header or nav bar should also go inside */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;