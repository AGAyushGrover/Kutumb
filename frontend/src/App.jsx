// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Homepage.jsx';
import Services from './Components/Services.jsx';
import  Contact  from './Components/Contact.jsx';
import Products from './Components/Product.jsx';
import AboutUs from './Components/AboutUs'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs/>} />
      </Routes>
    </Router>
  );
}

export default App;