import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/kutumb-logo.png";

const categories = [
  "Plumbering Shops",
  "Sanitary Shops",
  "Paint Shops",
  "Wood & Plywood Shops",
  "Furniture Shops",
  "Construction Material Shops",
  "Electrical Shops",
  "Steel Works Shops",
  "Marble Shops",
  "Machinery and Shattering Shops",
];

const ProductSellerProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ownerName: "",
    shopName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    gstNumber: "",
    selectedCategories: [],
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCheckboxChange = (category) => {
    const updated = formData.selectedCategories.includes(category)
      ? formData.selectedCategories.filter((c) => c !== category)
      : [...formData.selectedCategories, category];
    setFormData({ ...formData, selectedCategories: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Ambient background lighting */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-28 left-20 w-72 h-72 bg-amber-400 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-10 animate-pulse delay-900" />
      </div>

      {/* Logo */}
      <div className="absolute top-6 left-6 z-10 flex items-center space-x-3">
        <img src={logo} alt="Kutumb Logo" className="h-14" />
        <span className="text-3xl font-serif text-amber-400 tracking-widest">
          KUTUMB
        </span>
      </div>

      {/* Form */}
      <div className="flex justify-center items-center pt-32 pb-20 z-10 relative">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl px-10 py-12 space-y-10"
        >
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
            Product Seller Profile
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="ownerName"
              placeholder="Owner's Full Name"
              value={formData.ownerName}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="text"
              name="shopName"
              placeholder="Shop Name"
              value={formData.shopName}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="input"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pin Code"
              value={formData.pincode}
              onChange={handleChange}
              className="input"
            />
            <input
              type="text"
              name="gstNumber"
              placeholder="GST Number (Optional)"
              value={formData.gstNumber}
              onChange={handleChange}
              className="input"
            />
            <textarea
              name="address"
              placeholder="Full Shop Address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className="input col-span-1 md:col-span-2 resize-none"
            />
          </div>

          {/* Category Selection */}
          <div className="space-y-4">
            <label className="text-lg font-medium text-amber-300">
              Select Business Categories:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((category, idx) => (
                <label
                  key={idx}
                  className="flex items-center gap-3 bg-black/20 border border-white/20 px-4 py-2 rounded-xl hover:border-amber-300 transition"
                >
                  <input
                    type="checkbox"
                    checked={formData.selectedCategories.includes(category)}
                    onChange={() => handleCheckboxChange(category)}
                    className="accent-amber-400"
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold rounded-full hover:brightness-110 transition"
          >
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductSellerProfile;