// src/components/Footer.jsx


import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
// import backgroundImage from "../assets/PNGWing.jpeg";
import logo from "../assets/kutumb-logo.png";


const Footer = () => {
  return (
    
          <div className='flex flex-col w-full bg-black overflow-hidden'>
    
          {/* content */}
          <div className=' relative w-full  bg-black flex flex-row  text-white justify-evenly py-4 '>
          
          <div className='flex flex-col'>
            <div>
              <img className='h-[90px] w-[90px]' src={logo}></img>
            </div>
            <div className='flex flex-col'>
            <div className='text-xl  text-amber-500'>About us</div>
            <div className=' text-xl'> We Help Building your dream Houses</div>
            {/* <div><span class="text-xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
     We Help Building your dream Houses
    </span></div> */}
             </div>
          </div>
    
          <div className='flex flex-col'>
            <div className='text-xl text-amber-500'>Information</div>
            <div className='flex flex-col opacity-45'>
            <div>About us </div>
            <div>Sustainability</div>
            <div>Experience</div>
            <div>Privacy Policy</div>
    
            </div>
          </div>
    
           <div className='flex flex-col'>
            <div className='text-xl  text-amber-500'>Helpful Links</div>
            <div className='flex flex-col opacity-45'>
            <div>Service</div>
            <div>Products</div>
            <div>Supports</div>
            <div>Term & Conditions</div>
    
            </div>
          </div>
    
          <div className='flex flex-col justify-start '>
            <div className='text-xl text-amber-500' >Contact us</div>
            <div className='flex flex-col opacity-45'>
              <div> 9876543210</div>
              <div>support@kutumbhomes.com</div>
            </div>
          </div>
        
         
    
          </div>
    
          {/* line */}
          
          <div className='flex justify-center bg-black w-full h-[1px] z-10'>
            <div className='h-[1px] w-[85%] bg-white opacity-45'></div>
          </div>
    
          {/* social media */}
          
         <div className=' relative flex flex-row bg-black justify-center py-2 gap-4'>
        <FontAwesomeIcon icon={faInstagram} style={{ color: "#f59e0b", fontSize: '30px' }} />
          <FontAwesomeIcon icon={faFacebookF} style={{ color: "#f59e0b", fontSize: '25px' }} />
          <FontAwesomeIcon icon={faYoutube} style={{ color: "#f59e0b", fontSize: '25px' }} />
           <FontAwesomeIcon icon={faXTwitter} style={{ color: "#f59e0b", fontSize: '25px' }} />
             <div className='text-white absolute right-4'>
              <p>© {new Date().getFullYear()} Kutumb. All rights reserved.</p>
            </div>
    
         </div>
    
    
          </div>
  );
};

export default Footer;