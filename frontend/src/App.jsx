// src/App.jsx
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Homepage.jsx';
import Services from './Components/Services.jsx';
import  Contact  from './Components/Contact.jsx';
import Products from './Components/Product.jsx';
import AboutUs from './Components/AboutUs'; 
import ServicesType from './Components/ServicesType.jsx';
import ProductsType  from './Components/ProductsType.jsx';

function App() {

  return (
    
    <Router>

      <Routes>
     
         <Route path="/products/:typeName" element={<ProductsType/>}/>
         
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        {

        }
      </Routes>

    </Router>
  );
}

export default App;