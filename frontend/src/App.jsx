// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Homepage.jsx';
import  Contact  from './Components/Contact.jsx';

// import AboutPage from './Components/AboutPage'; // You’ll make this next

function App() {

  return (
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactus" element={<Contact />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
   
  );
}

export default App;