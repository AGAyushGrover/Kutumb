import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/kutumb-logo.png";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="bg-black text-white relative overflow-x-hidden">
      {/* 🌊 Inline animation styles */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          .animate-float {
            animation: float 10s ease-in-out infinite;
          }
          .delay-500 { animation-delay: 0.5s; }
          .delay-1000 { animation-delay: 1s; }
          .delay-1500 { animation-delay: 1.5s; }
        `}
      </style>

      {/* Logo and Brand Name placed in the top-left corner */}
      <div className="absolute top-8 left-8 z-20">
        <a href="/" className="flex items-center space-x-3">
          <img src={logo} alt="Kutumb Logo" className="h-16 w-auto" />
          <span className="font-serif text-3xl text-amber-500">KUTUMB</span>
        </a>
      </div>

      {/* 🌐 Background shapes consistent with the login page */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-[5%] w-40 h-40 bg-gray-700 rounded-full blur-2xl animate-float" />
        <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-amber-800 rounded-full blur-2xl animate-float delay-500" />
        <div className="absolute bottom-[30%] left-[60%] w-24 h-24 bg-gray-600 rounded-full blur-2xl animate-float delay-1000" />
        <div className="absolute bottom-10 left-[25%] w-36 h-36 bg-amber-700 rounded-full blur-2xl animate-float delay-1500" />
        <div className="absolute top-[5%] right-[5%] w-28 h-28 bg-gray-500 rounded-full blur-2xl animate-float delay-1000" />
      </div>

      {/* --- Main Content Section (First Viewport) --- */}
      <div className="min-h-screen flex items-center justify-center relative z-10 p-4">
        <div className='w-[85%] h-[90%] flex flex-col justify-center items-center rounded-sm bg-black/10 backdrop-blur-md overflow-hidden'>
            {/* Form and Contact Info */}
            <div className='flex flex-row w-full h-[75%]'>
                {/* Form */}
                <div className='w-full h-full p-4 z-50'>
                    <div>
                      <div className="text-4xl text-center text-amber-500 font-bold mb-8">
                            Get In Touch
                        </div>
                        <form className="space-y-2 mb-6 pl-8 mr-8 text-white">
                            <div className="mt-[50px] w-full flex flex-row gap-8">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="pt-[20px] pb-[7px] pl-[8px] flex-1 border-b-2 bg-transparent border-gray-600 focus:outline-none focus:border-white w-full text-white"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="pt-[20px] pb-[7px] pl-[8px] flex-1 border-b-2 bg-transparent border-gray-600 focus:outline-none focus:border-white w-1/2 text-white"
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Enter your Subject"
                                    className="pt-[20px] pb-[7px] pl-[8px] w-full border-b-2 bg-transparent border-gray-600 focus:outline-none focus:border-white focus:transition-colors focus:duration-600 focus:ease-in-out text-white"
                                    required
                                />
                            </div>
                            <textarea
                                name="message"
                                rows="4"
                                cols="40"
                                placeholder="Type your message here..."
                                className="pt-[10px] pl-[8px] w-full border-b-2 bg-transparent border-gray-600 focus:outline-none focus:border-white"
                                required
                            ></textarea>
                            <button type='submit' className="bg-amber-500 text-black font-semibold rounded-sm px-4 py-2 border-2 border-amber-500 flex items-center hover:opacity-100 hover:bg-white hover:text-amber-500 hover:cursor-pointer transition">
                                <div className="flex flex-row gap-4">
                                    <div className="text-[18px]"><p>Send Message</p></div>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
                
                {/* Contact Info */}
                <div className='relative w-[40%] flex justify-center items-center text-white'>
                    <img className='rotate-60 opacity-40 bg-none absolute z-10' src='https://i.pinimg.com/736x/59/c9/b2/59c9b29035735f04515ed6eb91e102f3.jpg' alt="Decorative swirl" />
                    <div className='z-50 text-center'>
                        <h2 className='text-6xl text-amber-500'>Contact</h2>
                        <div className='flex flex-row items-center justify-center mt-2'>
                            <div className='h-[2px] w-[120px] bg-amber-500'></div>
                            <h2 className='text-6xl ml-4 text-amber-500'>Us</h2>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom contact info boxes */}
            <div className='flex flex-col w-full h-[60px] z-60'>
                <div className='w-full h-[1px] bg-white opacity-45'></div>
                <div className='w-full h-[60px] flex flex-row text-white'>
                    <div className='w-[1px] h-full bg-white opacity-45'></div>
                    <div className='flex flex-col w-[30%]'>
                        <div className='opacity-45 scale-90 flex justify-center items-center'>Call</div>
                        <div className='flex justify-center items-center'>8883405000</div>
                    </div>
                    <div className='w-[1px] h-full bg-white opacity-45'></div>
                    <div className='flex flex-col w-[40%]'>
                        <div className='opacity-45 scale-90 flex justify-center items-center'>Our Residential Address</div>
                        <div className='flex justify-center items-center'>3rd Block, 204 Apex Road, New Delhi ,INDIA</div>
                    </div>
                    <div className='w-[1px] h-full bg-white opacity-45'></div>
                    <div className='flex flex-col w-[30%]'>
                        <div className='opacity-45 scale-90 flex justify-center items-center'>Mail us</div>
                        <div className='flex justify-center items-center'>support@kutumbhomes.com</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      {/* --- Second Scrollable Section (Map and Footer) --- */}
      <div className='flex flex-col gap-2 overflow-hidden bg-black text-white py-6'>
        {/* 🗺️ Google Map section */}
        <div className="w-full h-[300px] overflow-hidden">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.9820360197295!2d77.11751939999999!3d28.749953299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1751857922021!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of location"
          ></iframe>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Contact;
