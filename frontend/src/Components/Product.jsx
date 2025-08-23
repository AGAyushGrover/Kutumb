import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, animate, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import plumberImage from "../assets/ProductPage/Plumber.jpg";
import SanitaryImage from "../assets/ProductPage/BathroomSanitary.jpg";
import painterImage from "../assets/ProductPage/Paint.jpg";
import carpenterImage from "../assets/ProductPage//Wood.jpg";
import furnitureImage from "../assets/ProductPage//Furniture.jpg";
import constructionImage from "../assets/ProductPage//Construction.jpg";
import electricianImage from "../assets/ProductPage/Electrical.jpg";
import steelWorksImage from "../assets/ProductPage//SteelWorks.jpg";
import marbleImage from "../assets/ProductPage//Marble.jpg";
import machineryImage from "../assets/ProductPage//Machinery.jpg";
import backgroundImage from "../assets/ServicePage/services-bg.jpg";
import logoImage from "../assets/kutumb-logo.png";

const products = [
  { 
    name: "Plumbering Shops", 
    image: plumberImage, 
    link: "/product/plumber", 
    description: "Premium plumbing fittings & sanitary solutions for every project." 
  },
  { 
    name: "Sanitary Shops", 
    image: SanitaryImage, 
    link: "/product/sanitary", 
    description: "Top-quality sanitary ware and bathroom essentials." 
  },
  { 
    name: "Paint Shops", 
    image: painterImage, 
    link: "/product/paint", 
    description: "Vibrant paints & finishes for flawless walls and exteriors." 
  },
  { 
    name: "Wood & Plywood Shops", 
    image: carpenterImage, 
    link: "/product/carpenter", 
    description: "Finest wood, ply, mic, accessories & carpenter supplies for your custom furniture." 
  },
  { 
    name: "Furniture Shops", 
    image: furnitureImage, 
    link: "/product/furniture", 
    description: "Designer furniture that elevates your spaces with style." 
  },
  { 
    name: "Construction Material Shops", 
    image: constructionImage, 
    link: "/product/construction", 
    description: "Reliable construction materials for safe, lasting builds." 
  },
  { 
    name: "Electrical Shops", 
    image: electricianImage, 
    link: "/product/electrical", 
    description: "Modern electricals, wires & fittings for safe installations." 
  },
  { 
    name: "Steel Works Shops", 
    image: steelWorksImage, 
    link: "/product/steel-works", 
    description: "Quality steel works & fabrications for sturdy structures." 
  },
  { 
    name: "Marble Shops", 
    image: marbleImage, 
    link: "/product/marble", 
    description: "Premium marble & stone for elegant floors & surfaces." 
  },
  { 
    name: "Machinery and Shattering Shops", 
    image: machineryImage, 
    link: "/product/machinery", 
    description: "Heavy-duty construction machinery & tools for all needs." 
  },
];

const ratings = [
  { title: "Trusted Partners", value: 95 },
  { title: "Projects Completed", value: 1200 },
  { title: "Years Experience", value: 15 },
  { title: "Customer Rating", value: 4.9 },
];

const Counter = ({ from = 0, to = 100, duration = 2, suffix = "" }) => {
  const [display, setDisplay] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (to % 1 !== 0) {
            setDisplay(value.toFixed(1));
          } else {
            setDisplay(Math.round(value));
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-serif">
      {display}{suffix}
    </span>
  );
};

const ProductsPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white flex flex-col">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-6 left-6 z-50"
      >
        <Link to="/">
          <img src={logoImage} alt="Kutumb Logo" className="h-20 w-auto" />
        </Link>
      </motion.div>

      <section className="relative text-center pt-10 pb-20">
        <h1 className="text-4xl md:text-7xl font-serif tracking-wide">
          Our Partner Shops
        </h1>
        <p className="text-xl mt-4 opacity-80 font-serif">
          Discover trusted partners and get best deals and products.
        </p>
      </section>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2 },
        }}
        className="w-full flex-1"
      >
        {products.map((service) => (
          <SwiperSlide key={service.name}>
            <div className="relative flex flex-col items-center px-4">
              <div className="relative w-full max-w-xs h-[500px] overflow-hidden shadow-lg">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 z-0"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center px-4 z-20">
                 <h2 className="text-2xl md:text-3xl font-serif mb-4 text-white text-center">
  {service.name}
</h2>
                  <p className="text-center max-w-xs mb-6 text-white opacity-90">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="px-5 py-2 bg-white text-black font-semibold hover:bg-gray-200 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="relative z-10 text-center py-20 bg-black/80">
        <h2 className="text-4xl md:text-5xl font-serif mb-10">
          Why Choose Us
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-4">
          {ratings.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Counter from={0} to={item.value} duration={2} suffix="+"  />
                <p className="mt-4 text-lg md:text-xl font-serif opacity-90">{item.title}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
