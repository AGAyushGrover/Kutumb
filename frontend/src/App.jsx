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
import UserProfile from './Components/UserProfile.jsx';
import Login from './Components/Login.jsx';
import SignUp from './Components/SignUp.jsx';

function App() {

  return (
    
    <Router>

      <Routes>
     
         <Route path="/product/:typeName" element={<ProductsType/>}/>
         <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />

        <Route path="/profile/:typeName" element={<UserProfile/>}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<Services />} />
        <Route path="/product" element={<Products />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        {

        }
      </Routes>

    </Router>
  );
}

export default App;