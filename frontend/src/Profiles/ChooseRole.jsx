import { useNavigate } from "react-router-dom";
import logo from "../assets/kutumb-logo.png";

export default function ChoosePath() {
  const navigate = useNavigate();

  const handleSelection = (role, subRole = null) => {
    // localStorage.setItem("userRole", role);
    // if (subRole) localStorage.setItem("providerType", subRole);
    navigate("/createseeker");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-white relative overflow-hidden">
      {/* 🌊 Floating Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          .animate-float { animation: float 10s ease-in-out infinite; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-1000 { animation-delay: 1s; }
        `}
      </style>

      {/* 🔵 Floating Circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-[5%] w-40 h-40 bg-purple-600 rounded-full blur opacity-30 animate-float" />
        <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-pink-500 rounded-full blur opacity-30 animate-float delay-500" />
        <div className="absolute bottom-[30%] left-[60%] w-24 h-24 bg-blue-400 rounded-full blur opacity-30 animate-float delay-1000" />
        <div className="absolute bottom-10 left-[25%] w-36 h-36 bg-amber-400 rounded-full blur opacity-30 animate-float delay-700" />
      </div>

      {/* 🪙 Logo */}
      <div className="absolute top-8 left-8 z-10">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Kutumb Logo" className="h-16 w-auto" />
          <span className="font-serif text-3xl text-amber-500">KUTUMB</span>
        </div>
      </div>

      {/* 🧭 Main Section */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Welcome to Kutumb</h1>
        <p className="text-lg text-gray-300 mb-10">Choose how you want to use the platform</p>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* 🧍 Get Services */}
          <button
            onClick={() => handleSelection("seeker")}
            className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            I want to Get Services
          </button>

          {/* 🧰 Provide Physical Services */}
          <button
            onClick={() => handleSelection("provider", "physical")}
            className="px-8 py-3 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-black transition"
          >
            I provide Physical Work
          </button>

          {/* 🏬 Provide via Shop */}
          <button
            onClick={() => handleSelection("provider", "shop")}
            className="px-8 py-3 border border-amber-400 text-amber-400 rounded-full hover:bg-amber-400 hover:text-black transition"
          >
            I own a Shop / Sell Products
          </button>
        </div>
      </div>

      <div className="pb-10" />
    </div>
  );
}