import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import Home from './home';
import Profile from './profile'; // Import the Profile component

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
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} /> {/* Added route for the profile page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;