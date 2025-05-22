"use client"
import React, { useState ,useEffect} from 'react'
import 'remixicon/fonts/remixicon.css'

const NavBar = () => {

    const [time,settime] = useState()

     const getCurrentTime =()=>{
         let date = new Date();
         let hours = date.getHours();
         let minutes = date.getMinutes();
         let AM_PM = hours >= 12 ? "PM" : "AM";
         hours =  hours % 12;
         hours = hours ? hours : 12;
         minutes = minutes < 10 ? "0" + minutes : minutes;
         let time = hours + ":" + minutes + " " + AM_PM;
         return `${time}`
     }

      useEffect(() => {

         let intervalId = setInterval(() => {
            settime(getCurrentTime())
         }, 1000)
         
         return ()=> clearInterval(intervalId)
      },[])




  return (
    <div className='h-8 w-full bg-gray-200 backdrop-blur-md flex items-center justify-between px-4'>
         <div>SARTHAK </div>
         <div>{time}</div>
         <div className=' flex gap-3'>
             <i className="ri-wireless-charging-line cursor-pointer"></i>
             <i className="ri-shut-down-line cursor-pointer"></i>
         </div>
    </div>
  )
}

export default NavBar