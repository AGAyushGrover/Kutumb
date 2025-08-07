import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Footer from "./Footer.jsx";
import logo from "../assets/kutumb-logo.png";

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleMethodSelect = (methodType) => {
    setMethod(methodType);
    setStep(2);
  };

  const handleSendOTP = () => {
    console.log("Send OTP to:", formData.email, formData.phone);
    setStep(3);
  };

  const handleVerifyOTP = () => {
    console.log("Verify OTP:", formData.otp);
    setStep(4);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Account created:", formData);
    navigate("/chooserole");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-white relative overflow-hidden">
      {/* ✅ Inline style for custom float animation */}
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

      {/* 🔵 Background floating shapes */}
     <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Existing shapes */}
        <div className="absolute top-10 left-[5%] w-40 h-40 bg-purple-600 rounded-full blur opacity-30 animate-float" />
        <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-pink-500 rounded-full blur opacity-30 animate-float delay-500" />
        <div className="absolute bottom-[30%] left-[60%] w-24 h-24 bg-blue-400 rounded-full blur  opacity-30 animate-float delay-600" />
        <div className="absolute bottom-50 left-[25%] w-36 h-36 bg-amber-400 rounded-full blur opacity-30 animate-float delay-900" />

        {/* Additional new shapes */}
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

      {/* 🔷 Main Form Section */}
      <div className="flex flex-col items-center justify-center px-4 flex-grow z-10 relative">
        {step === 1 && (
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Sign Up With
            </h2>
            <div className="flex flex-col md:flex-row gap-6">
              <button
                onClick={() => handleMethodSelect("email")}
                className="px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                Email
              </button>
              <button
                onClick={() => handleMethodSelect("phone")}
                className="px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                Phone Number
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="w-full max-w-md space-y-8">
            <h2 className="text-3xl font-serif mb-6 text-center">
              Enter Details
            </h2>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
            />
            <button
              onClick={handleSendOTP}
              className="w-full py-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
            >
              Send OTP
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="w-full max-w-md space-y-8">
            <h2 className="text-3xl font-serif mb-6 text-center">
              Verify OTP
            </h2>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
            />
            <button
              onClick={handleVerifyOTP}
              className="w-full py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              Verify OTP
            </button>
          </div>
        )}

        {step === 4 && (
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
            <h2 className="text-3xl font-serif mb-6 text-center">
              Create Password
            </h2>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              Create Account
            </button>
          </form>
        )}

        {/* 🔗 Login Redirect */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="underline hover:text-orange-400 transition"
          >
            Login here
          </Link>
        </p>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default SignUp;