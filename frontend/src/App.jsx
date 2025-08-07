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
// import Account from './Components/Account.jsx';
import ServicesType from './Components/ServicesType.jsx';
import ProductsType  from './Components/ProductsType.jsx';
import Login from './Components/Login.jsx';
import SignUp from './Components/SignUp.jsx';
import ChooseRole from './Profiles/ChooseRole.jsx';
import CreateProfileSeeker from './Profiles/CreateProfileSeeker.jsx';
import ProductSellerProfile from './Profiles/ProductSellerProfile.jsx';
function App() {

  return (
    
    <Router>

      <Routes>
     
         <Route path="/products/:typeName" element={<ProductsType/>}/>
         
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* <Route path="/account" element={<Account />} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/servicestype/:typeName" element={<ServicesType/>}/>
        <Route path="/chooserole" element={<ChooseRole/>}/>
        <Route path="/createseeker" element={<CreateProfileSeeker/>}/>
        <Route path="/productseller" element={<ProductSellerProfile/>}/>
      </Routes>

    </Router>
  );
}

export default App;