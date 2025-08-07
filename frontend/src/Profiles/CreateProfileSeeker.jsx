import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/kutumb-logo.png";
// import Footer from "../Components/Footer";

const CreateProfileSeeker = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    interest: [],
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedInterests = checked
        ? [...formData.interest, value]
        : formData.interest.filter((item) => item !== value);
      setFormData({ ...formData, interest: updatedInterests });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Seeker Profile:", formData);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-white relative overflow-hidden">
      {/* 🔶 Logo */}
      <div className="absolute top-8 left-8 z-10">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Kutumb Logo" className="h-16 w-auto" />
          <span className="font-serif text-3xl text-amber-500">KUTUMB</span>
        </div>
      </div>

      {/* 🔷 Background shapes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-[5%] w-40 h-40 bg-purple-600 rounded-full blur opacity-30 animate-float" />
        <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-pink-500 rounded-full blur opacity-30 animate-float delay-1000" />
        <div className="absolute bottom-[30%] left-[60%] w-24 h-24 bg-blue-400 rounded-full blur  opacity-30 animate-float delay-2000" />
      </div>

      {/* 🔷 Main Form Section */}
      <div className="flex flex-col items-center justify-center px-4 flex-grow z-10 relative">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-serif mb-6 text-center">
            Complete Your Profile
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
          />
          <div className="text-sm">
            <label className="block font-medium mb-2">What are you looking for?</label>
            <label className="block mb-2">
              <input
                type="checkbox"
                name="interest"
                value="shop"
                checked={formData.interest.includes("shop")}
                onChange={handleChange}
                className="mr-2"
              />
              I want to buy from nearby shops
            </label>
            <label className="block mb-2">
              <input
                type="checkbox"
                name="interest"
                value="worker"
                checked={formData.interest.includes("worker")}
                onChange={handleChange}
                className="mr-2"
              />
              I need workers for services
            </label>
          </div>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Submit Profile
          </button>
        </form>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default CreateProfileSeeker;