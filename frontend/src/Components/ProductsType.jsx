import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React from 'react'
import { useLocation } from 'react-router-dom';
import products from '../dataset/productsData'
import logo from "../assets/kutumb-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';
import Footer from './Footer';

function ProductsType() {

var isEmpty=true;

  const [searchBarValue,setSearchBarValue]=useState("");
  const [searchParameter ,setSearchParameter]=useState("");
  const [currentLocation,setCurrentLocation]=useState([28.6139,77.2090]);
  
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        const {latitude,longitude}=position.coords;
        setCurrentLocation([latitude,longitude]);
      },
      ()=>{
        console.warn('Geolocatoin not allowed.Using defalut.')
      }
    );
  },[]);


  const location=useLocation();
  const pathName=location.pathname;
  const type=pathName.split("/")[1];
  const typeName=pathName.split("/")[2];


 function matchSearch(given, toMatch) {
  if (!given) return true;
  const lowerGiven = given.toLowerCase();
  const firstName = toMatch.split(",")[0]?.trim().toLowerCase();
  const secondName = toMatch.split(" ")[1]?.trim().toLowerCase();
  return lowerGiven === firstName || lowerGiven === secondName;
}

  
  return (
    <div className='relative flex flex-col min-h-screen'>
    <div className=' relative  h-full w-full flex flex-col overflow-x-hidden '>
    <div className="fixed h-full w-full object-fill bg-center -z-10 "
  style={{ backgroundImage: `url("https://i.pinimg.com/736x/ec/f2/57/ecf257e24648362b25563186975e7764.jpg")` }}
></div>  
    <div className=' bg-white/10 backdrop-blur-md border  shadow-md   flex flex-row fixed justify-evenly top-0 h-[70px] w-full  z-10'>
   <div className='mt-1'><img className=' h-[80px]' src={logo}/></div>
   <div className=' mt-2 text-4xl text-white font-semibold'>Available Suppliers</div>
   <div className='mt-2 h-[50px] bg-[#2f3144] w-[400px] rounded-4xl border-1 border-white flex flex-row overflow-hidden '>



{/* --------------------SEARCH BAR-------------------------- */}

    <input
     className=' text-white  ml-4 w-[336px] outline-none '
     placeholder='Search by area...'
     value={searchBarValue}
     onChange={(e)=>(setSearchBarValue(e.target.value))}

     />

    <button onClick={()=>{
      setSearchParameter(searchBarValue);
    }} 


    className='py-1 px-2 bg-amber-500 cursor-pointer'><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "white", fontSize: '35px' }} />

    </button>

     </div>
    </div>

      <div className='mt-[70px] relative flex flex-row h-full w-full  '>
      {/* items Section */}
      
        <div className='mt-4 relative flex flex-col items-center  w-[50%] h-full gap-4 mb-16 ' >

               {/* bg-white/10 backdrop-blur-md border border-white/30 shadow-md text-center rounded-xl */}
        { products[typeName].map((company,index)=>(
          (matchSearch(searchParameter,company.location))?
         (isEmpty=false, <div className='h-[150px] w-[90%]  bg-white/10 backdrop-blur-md border border-white/30 shadow-md  border-none rounded-sm flex flex-row items-center '>
          <div className='ml-2 w-[50%]'><img className=' rounded-sm h-[130px]' src={company.image_url}/></div>
           <div className='flex flex-col w-[80%] gap-2'>
           <div className='text-white text-2xl'>{company.name}</div>
            
            <div className='flex flex-row gap-2 items-center '>
            { company.tags.map((tag,index1)=>(
              <div className='flex flex-row justify-center items-center'>
              <div className='flex justify-center items-center text-3xl'></div>
              <div className=' text-white opacity-75 border-1 rounded-xl border-amber-500 text-[10px]  px-2'>{tag} </div>
              
              </div>  
            ))

            }
            </div>
          
            <div className='flex flex-row gap-2'>
              <div><FontAwesomeIcon icon={faStar} style={{ color: "#f59e0b", fontSize: '15px' }} /></div>
              <div className='text-white'>{company.customer_satisfaction}/5</div>
            </div>
            <div className='flex flex-row gap-2 relative'>
              <div><FontAwesomeIcon icon={faLocationDot} style={{ color: "#f59e0b", fontSize: '15px' }} /></div>
              <div className='text-white' >{company.location}</div>
              <div className='fixed right-2 text-white  bg-amber-500 rounded-sm px-2'>Show More</div>
            </div>
           </div> 
          </div>):(<div></div>)
        ))
          

        }
       {isEmpty && (
  <div className=' absolute top-12 w-full h-full flex flex-col items-center justify-center'>
    <div className='w-[200px] opacity-80'>
      <img
        src='https://i.pinimg.com/736x/3b/3a/a9/3b3aa9036c0e577520a3376b336856c9.jpg'
        alt="No Result"
        className='w-full h-auto object-contain rounded-lg shadow-lg'
      

      />
      <div className='text-center text-2xl mt-4 text-amber-500'>No results found for your search!!!</div>
    </div>
  </div>
)}
        
      
        </div>

        {/* graph section */}
        <div className=' fixed right-0 top-20  w-[50%]  bottom-0'>
          {/* <div className=" grayscale-10  w-full h-[60%] overflow-hidden  ">
  <iframe
    className="w-full h-full border-0"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.9820360197295!2d77.11751939999999!3d28.749953299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1751857922021!5m2!1sen!2sin"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
      </div> */}
      <div className="text-white h-full w-full">
  <MapContainer center={currentLocation} zoom={10} className="h-full w-full">
    <TileLayer
      attribution='&copy; OpenStreetMap contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {products[typeName].map((company,index3) => (
      (matchSearch(searchParameter,company.location))?
      (<Marker key={index3} position={company.coordinates} >
        <Popup>
          <strong>{company.name}</strong><br />
          {company.location}
        </Popup>
      </Marker>):<></>
    ))}
  </MapContainer>
</div>

        </div>

      </div>
      {/* {
        isEmpty &&<div className='absolute '><Footer/></div>
      } */}
       
    </div>
    <div className='absolute bottom-0 right-0 left-0'>
      <Footer/>
    </div>
    

    </div>
    
   

  )
}

export default ProductsType