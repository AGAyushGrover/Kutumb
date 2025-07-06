import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/kutumb-logo.png";
import heroImage from "../assets/background.jpg";

const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-screen overflow-hidden">
      {/* ✅ Fixed hero background */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="fixed inset-0 bg-black/40 z-0" />

      {/* ✅ Fake scrollable layer */}
      <div className="relative z-20 h-[200vh]">
        {/* ✅ Top Nav */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-6 bg-black/40 backdrop-blur-sm z-30"
        >
          <Link to="/about" className="flex items-center space-x-3">
            <img src={logo} alt="Kutumb Logo" className="h-20 w-auto" />
            <span className="text-white font-bold text-5xl">KUTUMB</span>
          </Link>
          <div className="flex items-center space-x-6 text-white font-medium">
            <a href="#" className="hover:underline">EN</a>
            <a href="#" className="hover:underline">HI</a>
            <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200">
              Book a Visit
            </button>
          </div>
        </motion.div>

        {/* ✅ Hero content shifts when sidebar visible */}
        <motion.div
          className="fixed inset-0 z-10 flex flex-col justify-end items-end px-8 md:px-20 pb-16"
          animate={{ marginRight: showSidebar ? "25%" : "0%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
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
        </motion.div>
      </div>

      {/* ✅ Sidebar */}
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            key="sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-1/4 bg-black/60 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8"
          >
            <nav className="text-white space-y-4 text-lg">
              <Link to="/" className="block hover:underline">Home</Link>
              <Link to="/about" className="block hover:underline">About</Link>
              <Link to="/services" className="block hover:underline">Services</Link>
              <Link to="/contact" className="block hover:underline">Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Footer under sidebar if needed */}
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
