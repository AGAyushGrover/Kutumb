import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/kutumb-logo.png";
import heroImage from "../assets/background.jpg"; // Replace with your image


const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Top Nav Bar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-6 bg-black/40 backdrop-blur-sm z-30"
      >
        {/* Left: Logo + Name */}
        <Link to="/about" className="flex items-center space-x-3">
          <img src={logo} alt="Kutumb Logo" className="h-8 md:h-10 w-auto" />
          <span className="text-white font-bold text-xl">KUTUMB</span>
        </Link>

        {/* Right: Nav Links */}
        <div className="flex items-center space-x-6 text-white font-medium">
          <a href="#" className="hover:underline">EN</a>
          <a href="#" className="hover:underline">HI</a>
          <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200">
            Book a Visit
          </button>
        </div>
      </motion.div>

      {/* Scroll-triggered Sidebar */}
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-1/4 bg-black/40 backdrop-blur-sm z-20 flex flex-col items-center justify-center space-y-8"
          >
            <nav className="text-white space-y-4 text-lg">
              {/* <a href="#" className="block hover:underline">Home</a>
              <a href="#" className="block hover:underline">About</a>
              <a href="#" className="block hover:underline">Services</a> */}
             <Link to="/contactus" className="block hover:underline">Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div
        className={`relative h-full w-full flex flex-col justify-end items-end px-8 md:px-20 pb-16 z-10 transition-all duration-500 ${
          showSidebar ? "md:pr-[25%]" : ""
        }`}
      >
        <h1 className="text-white text-6xl md:text-8xl lg:text-[12rem] font-bold tracking-tight text-right">
          KUTUMB
        </h1>

        <div className="max-w-md text-right text-white mt-4">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            BUILDING DREAMS IN PERFECT HARMONY
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Welcome to Kutumb, where design, sustainability and cultural depth
            create your dream home.
          </p>
          <p className="text-sm mt-6">SCROLL</p>
        </div>
      </div>
      {/* ✅ Conditional Footer */}
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
