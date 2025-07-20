import React from 'react'
import logo from "../assets/kutumb-logo.png";
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
function AboutUs() {
  return (
    <div>
        <div className='relative flex flex-col w-screen   '>
<div className="fixed h-full w-full object-fill bg-center -z-10 "
  style={{ backgroundImage: `url("https://i.pinimg.com/736x/f2/99/55/f299555aeeebcd1f75596201d06f4513.jpg")` }}
></div>     

    <div className='text-5xl font-bold text-amber-500 py-2 px-8 flex flex-row gap-12'>
    <div  className='w-[100px] h-[100px]'><img src={logo}/></div>
    <div className='mt-4'>About Us</div>
    </div> 
      {/* intro */}
        <div className='w-[80%] h-[70%] rounded-xl bg-white/10 backdrop-blur-md border border-white/30 shadow-md text-white flex felx-row items-center justify-center mt-2 ml-8'>
        
        <div className='flex flex-col gap-4 w-[60%] ml-6 '>
            <div className='text-sm  w-[70px] px-1 py-1 border-2 border-amber-400 rounded-4xl '>About us</div>
            <div className='text-xl'>About our Idea</div>
            <div>Have you ever imagined ,how much dificult someeon faces when building their homes
            form constructor to suppliers to workers acquasitoin all this take so much time and so stressfull,here is our 
            one platform complete housing solutoin KUTUMB</div>
            <div className='flex flex-row gap-4'>
            <div className='text-xl bg-amber-500 rounded-sm px-2 py-1'>Get Services</div>
            <div className='border-2 border-amber-500 rounded-lg px-1 py-1'>Contact Us</div>
            </div>
            <div className='flex flex-row gap-4'>
            <div className='flex flex-col'>
                <div className='text-4xl text-amber-500'>95%</div>
                <div className='opacity-80'>Customer Satisfaction</div>
            </div>
            <div className='flex flex-col'>
                <div className='text-4xl text-amber-500'>10+</div>
                <div className='opacity-80'>Project Completion</div>
            </div>
            <div className='flex flex-col'>
                <div className='text-4xl text-amber-500'>90k+</div>
                <div className='opacity-80'>Annual Users</div>
            </div>

            </div>
            
        </div>
        <div className='w-[40%] h-full'>
            <img className='h-full w-full object-fit rounded-sm' src='https://i.pinimg.com/736x/33/de/f2/33def242e75c74ca4a57dd7e71b40f82.jpg'/>
        </div>

        
      </div>

       {/* what we focuson */}
        <div className='ml-[15%] w-[80%] h-[70%] rounded-xl bg-white/10 backdrop-blur-md border border-white/30 shadow-md text-white flex felx-row items-center justify-center mt-12'>
         <div className='w-[40%] h-full'>
            <img className='h-full w-full object-fit rounded-sm' src='https://i.pinimg.com/736x/a4/0b/31/a40b31bd7dd2b93fc548515e4e079179.jpg'/>
        </div>
        <div className='flex flex-col gap-4 w-[60%] ml-6 '>
            <div className='text-sm  w-[70px] px-1 py-1 border-2 border-amber-400 rounded-4xl '>About us</div>
            <div className='text-xl'>Unlock our resources for future ready home</div>
            <div>Have you ever imagined ,how much dificult someeon faces when building their homes
            form constructor to suppliers to workers acquasitoin all this take so much time and so stressfull,here is our 
            one platform complete housing solutoin KUTUMB</div>
            
            <div className='flex flex-row justify-evenly'>
                <div className='flex flex-col text-amber-500 gap-2'>
                    <div className='flex felx-row gap-2' >
                      <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#f59e0b", fontSize: '25px' }} />Proven customer satisfaction</div>
                    <div className='flex felx-row gap-2' >
                      <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#f59e0b", fontSize: '25px' }} />Customized results</div>
                    <div className='flex felx-row gap-2' >
                      <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#f59e0b", fontSize: '25px' }} />Wide Range Products</div>
                    
                </div>
                <div className='flex flex-col text-amber-500 gap-2'>
                    <div className='flex felx-row gap-2' >
                      <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#f59e0b", fontSize: '25px' }} />
                      One stop solution</div>
                    <div className='flex felx-row gap-2' >
                      <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#f59e0b", fontSize: '25px' }} />Long term support</div>
                    <div className='flex felx-row gap-2' >
                      <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#f59e0b", fontSize: '25px' }} />Customer supplier interaction</div>
                    
                </div>
            </div>
            
            
        </div>
        

        
      </div>

        {/* why better than competion */}
        <div className=' ml-8 w-[80%] h-[70%] rounded-xl bg-white/10 backdrop-blur-md border border-white/30 shadow-md text-white flex flex-row items-center justify-evenly mt-12  gap-4 mb-6'>
        
        <div className=' text-white flex flex-col items-center justify-evenly w-[60%] gap-6 '>
        
         <div className='text-xl text-white px-2 border-2 rounded-3xl  border-amber-500 '>Core features that set us apart form Ohters</div>

        <div className='flex flex-row justify-evenly '>
            <div className='  flex flex-col  w-[30%] border-1 rounded-xl px-3 py-4  bg-black/60 backdrop-blur-md  '>
        <div><FontAwesomeIcon icon={faCircleUser} style={{ color: "#f59e0b", fontSize: '40px' }} /></div>
        <div className='text-2xl text-amber-500'>Customer Oriented</div>
        <div className='text-sm'>User need not to fo to differentd wesites or app as this project take care of all housing needs from start to endsamll to large.</div>
            
        </div>

        <div className='flex flex-col  w-[30%] border-1   rounded-xl px-3 py-4  bg-black/60 backdrop-blur-md   '>
        <div><FontAwesomeIcon icon={faMoneyBill} style={{ color: "#f59e0b", fontSize: '40px' }} /></div>
        <div className='text-2xl  text-amber-500'>Value for money</div>
        <div className='text-sm'>User can check for different suppliers for a wide ranges of products and pricing and can select what best suite to them.</div>


        </div>
        <div className='flex flex-col  w-[30%] border-1    rounded-xl px-3 py-4  bg-black/60 backdrop-blur-md   '>
        <div ><FontAwesomeIcon icon={faChartLine} style={{ color: "#f59e0b", fontSize: '40px' }} /></div>
        <div className='text-2xl  text-amber-500'>Increase in Sales</div>
        <div className='text-sm'>Supplier also able to increase its business profitability buy having more potential customers to its goods and services</div>
            
        </div>
        </div>

        </div>

         <div className='w-[40%]  h-full'>
            <img className='h-full w-full object-fit rounded-sm' src='https://i.pinimg.com/736x/ab/d7/ba/abd7ba355fedac6999160b2107fe60a9.jpg'/>
        </div>
        
       
      </div>

     
    <Footer/>
    </div>
    

    </div>
    
  )
}

export default AboutUs









