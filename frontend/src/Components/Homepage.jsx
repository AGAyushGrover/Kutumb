import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/kutumb-logo.png";
import heroImage from "../assets/background.jpg";
import luxury1 from "../assets/luxury1.jpg";
import luxury2 from "../assets/luxury2.jpg";
import luxury3 from "../assets/luxury3.jpg";

const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const aboutRef = useRef(null);

  // ✅ Window scroll triggers About section only if not already showing
  useEffect(() => {
    const handleScroll = () => {
      if (showSecondSection) return; // ⏹️ Disable while About is open

      const scrollY = window.scrollY;

      if (scrollY > window.innerHeight) {
        setShowSidebar(false);
        setShowSecondSection(true);
      } else if (scrollY > 100) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSecondSection]); // ✅ Depend on `showSecondSection`

  // ✅ Only About scroll: close when scrolled to bottom
  useEffect(() => {
    if (!showSecondSection) return;

    const el = aboutRef.current;
    if (!el) return;

    const handleAboutScroll = () => {
      if (el.scrollHeight - el.scrollTop <= el.clientHeight + 1) {
        setShowSecondSection(false);
        window.scrollTo({ top: 0, behavior: "smooth" }); // optional: reset scroll
      }
    };

    el.addEventListener("scroll", handleAboutScroll);
    return () => el.removeEventListener("scroll", handleAboutScroll);
  }, [showSecondSection]);

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const slides = [
    {
      image: luxury1,
      title: "Bespoke Design",
      text: "We blend tradition & modernity, ensuring your space feels elegant and truly yours."
    },
    {
      image: luxury2,
      title: "Premium Materials",
      text: "From marble to teak, we help you source the best — ensuring every detail feels premium."
    },
    {
      image: luxury3,
      title: "Authentic Craftsmanship",
      text: "Kutumb connects you to artisans & skilled workers who bring timeless designs alive with precision."
    }
  ];

  return (
    <div className="relative w-screen overflow-x-hidden">
      {/* Hero background */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="fixed inset-0 bg-black/40 z-0" />

      {/* NavBar */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-6 bg-black/40 backdrop-blur-md z-50"
      >
        <div
          onClick={handleLogoClick}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <img src={logo} alt="Kutumb Logo" className="h-20 w-auto" />
          <span className="text-white font-serif text-5xl">KUTUMB</span>
        </div>

        <div className="flex items-center space-x-6 text-white font-medium">
          <a href="#" className="hover:underline">EN</a>
          <a href="#" className="hover:underline">HI</a>
          <button
            onClick={toggleSidebar}
            className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Scroll Container */}
      <div className="relative z-20 h-[400vh]">
        <motion.div
          className="fixed inset-0 z-10 flex flex-col justify-end items-end px-8 md:px-20 pb-16"
          animate={{ marginRight: showSidebar ? "25%" : "0%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="text-white text-8xl md:text-8xl lg:text-[12rem] font-serif tracking-tight text-right">
            KUTUMB
          </h1>
          <div className="max-w-md text-right text-white mt-4">
            <h2 className="text-lg md:text-2xl font-serif">
              Build smart. Find trusted workers, dealers & materials — all in one place.
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Welcome to Kutumb, where design, sustainability and cultural depth
              create your dream home.
            </p>
            <p className="text-sm mt-6">SCROLL</p>
          </div>
        </motion.div>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {showSidebar && !showSecondSection && (
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
              <Link to="/products" className="block hover:underline">Products</Link>
              <Link to="/services" className="block hover:underline">Services</Link>
              <Link to="/contactus" className="block hover:underline">Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About Section */}
      <AnimatePresence>
        {showSecondSection && (
          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 overflow-y-scroll bg-black z-30 pt-40 pb-20"
          >
            <motion.p
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto text-center"
>
            <div className="px-8 md:px-32 text-white font-serif text-center mb-32">
        <h2 className="text-4xl md:text-6xl mb-3">Welcome to Kutumb</h2>
        <h2 className="text-4xl md:text-3xl mb-6">Your Trusted Home Companion</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
          Finding skilled workers 👷‍♂️, reliable dealers 🧱, and top-quality materials 🪵 for your dream home 🏠 shouldn’t be a hassle.  
Kutumb brings everything you need under one roof 🏡 — connecting you with trusted professionals 🤝 and premium products ✨,  
so you can build and renovate with confidence and ease.
        </p>
      </div>
      </motion.p>
            <div className="flex flex-col space-y-32 px-8 md:px-32">
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-12`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full md:w-1/2 rounded-lg shadow-2xl"
                  />
                  <div className="text-white font-serif md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-serif mb-4">{slide.title}</h2>
                    <p className="text-lg text-gray-300">{slide.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default HomePage;
