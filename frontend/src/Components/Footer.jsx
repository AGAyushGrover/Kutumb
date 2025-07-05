// src/components/Footer.jsx

import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black/90 backdrop-blur-sm text-white text-center px-6 py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        {/* Contact Info */}
        <div>
          <p>Email: contact@kutumbhomes.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        {/* Main Pages */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>

        {/* Copyright */}
        <div>
          <p>© {new Date().getFullYear()} Kutumb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;