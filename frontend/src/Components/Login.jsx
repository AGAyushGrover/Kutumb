import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Footer from "./Footer.jsx";
import logo from "../assets/kutumb-logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ Send login request to backend
    console.log("Logging in:", formData);
    // Simulate login success:
    navigate("/"); // Or "/home", or any route after login
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-white relative overflow-hidden">
      {/* 🌊 Inline animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          .animate-float {
            animation: float 10s ease-in-out infinite;
          }
          .delay-1000 { animation-delay: 1s; }
          .delay-2000 { animation-delay: 2s; }
          .delay-3000 { animation-delay: 3s; }
        `}
      </style>

      {/* 🌐 Background shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-[5%] w-40 h-40 bg-purple-600 rounded-full blur opacity-30 animate-float" />
        <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-pink-500 rounded-full blur opacity-30 animate-float delay-500" />
        <div className="absolute bottom-[30%] left-[60%] w-24 h-24 bg-blue-400 rounded-full blur opacity-30 animate-float delay-600" />
        <div className="absolute bottom-10 left-[25%] w-36 h-36 bg-amber-400 rounded-full blur opacity-30 animate-float delay-900" />
        <div className="absolute top-[5%] right-[5%] w-28 h-28 bg-green-400 rounded-full blur opacity-20 animate-float delay-[1.2s]" />
        <div className="absolute bottom-[30%] right-[15%] w-44 h-44 bg-red-400 rounded-full blur opacity-25 animate-float delay-[1.5s]" />
        <div className="absolute top-[25%] left-[10%] w-20 h-20 bg-cyan-400 rounded-full blur opacity-20 animate-float delay-[2s]" />
        <div className="absolute bottom-[35%] right-[80%] w-36 h-36 bg-indigo-400 rounded-full blur opacity-30 animate-float delay-[2.3s]" />
      </div>

      {/* 🔶 Logo */}
      <div className="absolute top-8 left-8 z-10">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Kutumb Logo" className="h-16 w-auto" />
          <span className="font-serif text-3xl text-amber-500">KUTUMB</span>
        </Link>
      </div>

      {/* 🔐 Login Form */}
      <div className="flex flex-col items-center justify-center px-4 flex-grow z-10 relative">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-center">
            Login to Kutumb
          </h2>
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Email or Phone"
            value={formData.emailOrPhone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Login
          </button>
        </form>

        {/* 🔗 Sign Up Redirect */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="underline hover:text-orange-400 transition"
          >
            Sign Up here
          </Link>
        </p>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Login;