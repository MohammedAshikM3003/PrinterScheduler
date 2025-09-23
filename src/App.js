import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import Home from './home'; // Import the Home component

function App() {
  return (
    // BrowserRouter is the top-level wrapper for routing
    <BrowserRouter>
      <Routes>
        {/* Default route redirects to the login page */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Define routes for each page */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} /> {/* Added route for the home page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
