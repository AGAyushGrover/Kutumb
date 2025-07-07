

import React from 'react'
// import backgroundImage from "../assets/PNGWing.jpeg";
import logo from "../assets/kutumb-logo.png";

 const Contact = () => {
  return (
    <div>
      <div className=' relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden'>
    <div className= 'absolute -top-2  font-sm text-6xl  left-[13%] mt-2 opacity-70'> Contact Us</div>
    <div className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
  style={{ backgroundImage: `url("https://i.pinimg.com/736x/3a/dc/67/3adc67d938b21f9e1aec82d4b33d2410.jpg")` }}
></div>
  
    <div className='w-3/4 h-[85%] flex flex-row justify-center items-center overflow-hidden rounded-sm mt-12'>
    <div className=' relative w-1/3 h-full flex flex-col px-6 py-4 '>
    <img  className='h-full w-full absolute left-0 top-0 bottom-0 -z-10 ' src="https://i.pinimg.com/736x/c5/3d/5d/c53d5d45ac12988ce969c0dce952511d.jpg" />

   
    <div className=' relative text-white text-left'>
        <div className='text-2xl mb-2' >Contact Information</div>
        <div className='mb-12 font-light opacity-90'>if you have any query feel free to get in touch with us</div>

        <div className='mb-2 flex felx-row gap-2' > <img className='h-[20px]' src='https://img.icons8.com/?size=100&id=9730&format=png&color=FFFFFF'/> 9999999999</div>
        <div className='mb-2 flex felx-row gap-2'> <img  className='h-[20px]' src='https://img.icons8.com/?size=100&id=53435&format=png&color=FFFFFF'/>abcdf@gmail.com</div>
        <div className='mb-12  flex felx-row gap-2'  > <img  className='h-[20px]' src='https://img.icons8.com/?size=100&id=7880&format=png&color=FFFFFF'/> 20AB Haryana India</div>
       
        <div > Monday-Friday</div>
        <div>9:00 - 6:00 PM</div>

        <div className=' flex flex-row justify-evenly mt-28  '>

        <img className='h-[30px] w-[30px]' src="https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF" />
        <img className='h-[30px] w-[30px]' src='https://img.icons8.com/?size=100&id=118468&format=png&color=FFFFFF'/>
        <img className='h-[30px] w-[30px]' src='https://img.icons8.com/?size=100&id=37325&format=png&color=FFFFFF'/>
        <img className='h-[30px] w-[30px]' src='https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=FFFFFF'/> 
         </div>
    </div>
        
   

 
    
    </div>
    <div className='w-2/3 h-full bg-white '>

    <div>
      <form  className="space-y-6 mb-8 pl-8 mr-8">
<div className="mt-[50px] w-full flex flex-row gap-8 ">
   {/* name */}
  <input
    type="text"
    id="name"
    name="Name"
    // value={message.Name}
    // onChange={changeHandler}
    placeholder="Enter your name"
    className="pt-[20px] pb-[7px] pl-[8px] flex-1 border-b-2 focus:outline-none pr-2 focus:border-b-bluish w-full "
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
    className="pt-[20px] pb-[7px] pl-[8px] flex-1 border-b-2 focus:outline-none focus:border-b-bluish w-1/2 "
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
         placeholder="Enter your Subject" className="pt-[20px] pb-[7px] pl-[8px] w-full border-b-2 focus:outline-none  focus:border-b-bluish focus:transition-colors focus:duration-600 focus:ease-in-out" required/>
      </div>

      {/* <label for="message">Message:</label><br/> */}
      <textarea 
      id="message"
       name="Message" 
      //  value={message.Message}
      //  onChange={changeHandler}
       rows="5" 
       cols="40" 
       placeholder="Type your message here..." className="pt-[20px] pl-[8px] w-full border-b-2 focus:outline-none focus:border-b-bluish " required></textarea>

      {/* <div className="w-full border-2"> */}
      <button  type='submit' className= " opacity-80 bg-red-500 text-white  rounded-sm px-4 py-2 border-2 flex items-center hover:opacity-100 ">
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

    </div>

    

    </div>
    <div className=' grayscale-10 flex flex-row mt-6 gap-4 ml-6 mr-2'>

      <div className="  w-[30%] h-[full] rounded-sm overflow-hidden  ">
  <iframe
    className="w-full h-full border-0"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.9820360197295!2d77.11751939999999!3d28.749953299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1751857922021!5m2!1sen!2sin"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
      </div>
      
      <div className=' relative w-[70%] h-full bg-black flex flex-row rounded-sm  text-white justify-evenly'>
    <img className='absolute  h-[60px] w-[60px] top-4 left-4'  src={logo}/>
      <div className='flex items-center justify-center text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent w-[30%]'> it works beyond your imagination!!</div>
      <div className='flex flex-col mb-4'>

      <div  className='flex flex-row mt-5 mb-6 gap-14'>

        <div className='flex flex-col gap-2 text-left '>
        <div className='text-2xl '>Company</div>
        <div className='opacity-55'>About</div>
        <div className='opacity-55'>Experience</div>
        <div className='opacity-55'>Sustainability</div>
        </div>

       <div className='flex flex-col gap-2 text-left '>
        <div className='text-2xl '>Services</div>
        <div className='opacity-55'>For Consumers</div>
        <div className='opacity-55'>For Suppliers</div>
        <div className='opacity-55'>Review,s</div>
        </div>


      </div>
      

         <div className=' flex flex-row justify-evenly mt-8  '>

        <img className='h-[30px] w-[30px]' src="https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF" />
        <img className='h-[30px] w-[30px]' src='https://img.icons8.com/?size=100&id=118468&format=png&color=FFFFFF'/>
        <img className='h-[30px] w-[30px]' src='https://img.icons8.com/?size=100&id=37325&format=png&color=FFFFFF'/>
        <img className='h-[30px] w-[30px]' src='https://img.icons8.com/?size=100&id=6Fsj3rv2DCmG&format=png&color=FFFFFF'/> 
         </div>
         
      
      </div>
     

      </div>


    </div>
    

    </div>
    
    
  )
}
export default Contact;