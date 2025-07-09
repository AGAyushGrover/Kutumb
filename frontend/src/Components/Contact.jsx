

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
// import backgroundImage from "../assets/PNGWing.jpeg";
import logo from "../assets/kutumb-logo.png";
import Footer from "./Footer";

 const Contact = () => {
  return (
    <div className='h-screen w-screen'>
      <div className=' relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden '>
    {/* <div className= 'absolute -top-2  font-sm text-6xl  left-[13%] mt-2   text-white'> Contact Us</div> */}
    <div className="absolute opacity-30 h-full w-full object-fill bg-center -z-10 "
  style={{ backgroundImage: `url("https://i.pinimg.com/736x/42/38/33/423833960cca260e17cdb02effaf0ddc.jpg")` }}
></div>
  
    <div className='w-[70%] h-[90%] flex flex-col justify-center items-center  rounded-sm bg-black/100 backdrop-blur-md overflow-hidden '>
    
     {/* upper three boxea */}
    <div className='flex flex-col w-full h-[60px] z-60 '>
      <div className='w-full h-[60px] flex flex-row text-xl text-amber-500'>
    <div className='w-[20%] h-full flex  items-center justify-center'>
      <img className='h-[55px]  w-[70px]' src={logo}></img>
    </div>
    <div className='w-[1px] h-full bg-white opacity-45'></div>
    <div className='flex flex-row justify-evenly w-[60%]'>
      <div className='flex  items-center justify-center'>Service</div>
      <div className='flex  items-center justify-center'>Products</div>
    </div>
        <div className='w-[1px] h-full bg-white opacity-45'></div>
    <div className='w-[20%] flex  items-center justify-center'> Home</div>

{/* <img className='h-[30px] w-[30px]' src="https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF" />
        <img className='h-[30px] w-[30px]' src='https://img.icons8.com/?size=100&id=118468&format=png&color=FFFFFF'/>
        <img className='h-[30px] w-[30px]' src='https://img.icons8.com/?size=100&id=37325&format=png&color=FFFFFF'/>
        <img className='h-[30px] w-[30px]' src='https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=FFFFFF'/> 
         </div> */}

    </div>
    <div className='w-full h-[1px] bg-white opacity-45'></div>
    </div>
  
   
    {/* form and conatct */}
    <div className='flex flex-row w-full h-[75%]'>

    {/* form */}

    <div className='w-[60%] h-[60%] z-50  '>

    <div>
      <form  className="space-y-2 mb-6 pl-8 mr-8 text-white">
<div className="mt-[50px] w-full flex flex-row gap-8 ">
   {/* name */}
  <input
    type="text"
    id="name"
    name="Name"
    // value={message.Name}
    // onChange={changeHandler}
    placeholder="Enter your name"
    className="pt-[20px] pb-[7px] pl-[8px] flex-1 border-b-2 focus:outline-none pr-2 focus:border-b-white w-full text-white "
    required
    
  />
  {/*  */}
 {/* email */}
  <input
    type="email"
    id="email"
    name="Email"
    // value={message.Email}
    // onChange={changeHandler}
    placeholder="Enter your email"
    className="pt-[20px] pb-[7px] pl-[8px] flex-1 border-b-2 focus:outline-none focus:border-b-white w-1/2 text-white "
    required
  />
</div>

      
      <div className="w-full">
      {/* <label for="name">Subject:</label> */}
      <input 
      type="text"
       id="subject"
        name="Subject"
      //   value={message.Subject}
      //  onChange={changeHandler}
         placeholder="Enter your Subject"
          className="pt-[20px] pb-[7px] pl-[8px] w-full border-b-2 focus:outline-none  focus:border-b-white focus:transition-colors focus:duration-600 focus:ease-in-out text-white" required/>
      </div>

      {/* <label for="message">Message:</label><br/> */}
      <textarea 
      id="message"
       name="Message" 
      //  value={message.Message}
      //  onChange={changeHandler}
       rows="4" 
       cols="40" 
       placeholder="Type your message here..." className="pt-[10px] pl-[8px] w-full border-b-2 focus:outline-none focus:border-b-white " required></textarea>

      {/* <div className="w-full border-2"> */}
      <button  type='submit' className= " bg-white text-black  rounded-sm px-4 py-2 border-2 flex items-center hover:opacity-100 hover:bg-amber-500 hover:cursor-pointer ">
      <div className="  flex flex-row gap-4 ">
        {/* icons */}
        <div className="">
        {/* <IoMdSend className="relative  text-[30px] "/> */}
        </div>
        
        <div className="  text-[18px] "><p>Send Message</p></div>
        
      </div>
      
      </button>
      {/* </div> */}
      </form>
    </div> 

    
    </div>

    {/* contact */}

    <div className=' relative w-[40%] h-full flex justify-center items-center  text-white'>
    <img className=' rotate-60 opacity-70  bg-none absolute z-10' src='https://i.pinimg.com/736x/59/c9/b2/59c9b29035735f04515ed6eb91e102f3.jpg'></img>
    <div className='z-50'>
       <div className='text-right text-6xl text-amber-500'>Contact</div>

    <div className='flex flex-row'> 
    <div className='flex items-center justify-center'>
    <div className='h-[2px] w-[120px] bg-amber-500'></div>

    </div>
    
    <div className='text-right text-6xl ml-4 text-amber-500' >Us</div>
    </div>

    </div>
   


     </div>


    </div>

     {/* bottom three boxes */}
    <div className='flex flex-col w-full h-[60px]  z-60'>
     <div className='w-full h-[1px] bg-white opacity-45'></div>
      <div className='w-full h-[60px] flex flex-row text-white '>
    <div className='w-[30%] h-full flex  items-center justify-center'>
      <div className='flex flex-col'>
        <div className='opacity-45 scale-90 '>Call us</div>
        <div>9876543210</div>
      </div>
    </div>
    <div className='w-[1px] h-full bg-white opacity-45'></div>
   <div className='flex flex-col w-[40%]'>
        <div className='opacity-45 scale-90 flex justify-center items-center'>Our Residential Address</div>
        <div className='flex justify-center items-center'> 3rd Block, 204 Apex Road, New Delhi ,INDIA</div>
      </div>
        <div className='w-[1px] h-full bg-white opacity-45'></div>
   <div className='flex flex-col w-[30%]'>
        <div className='opacity-45 scale-90 flex justify-center items-center'>Mail us</div>
        <div className='flex justify-center items-center'> support@kutumbhomes.com</div>
      </div>



    </div>
   
    </div>
    
  
    </div>

    

    </div>

    <div className='  flex flex-col mt-6 gap-2  overflow-hidden'>

      <div className=" grayscale-10  w-full h-[60%] overflow-hidden  ">
  <iframe
    className="w-full h-full border-0"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.9820360197295!2d77.11751939999999!3d28.749953299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1751857922021!5m2!1sen!2sin"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
      </div>


      {/* footer */}

      <Footer />
      
      


    </div>
    

    </div>
    
    
  )
}
export default Contact;