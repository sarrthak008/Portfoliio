"use client"
import PowerBtn from '@/components/PowerBtn'
import Shdows from '@/components/Shdows'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import 'remixicon/fonts/remixicon.css'



const page = () => {

  const boxref = useRef('null')

  useGSAP(()=>{},{scope:boxref})


   const handelChange =()=>{
      gsap.to(".box1",{
          duration:2,
          ease: "power2.inOut",
          stagger: 0.1,
          rotation:"180deg"
      })
   }
  

  return (
    <div>
       <PowerBtn onClick={handelChange} />
           <div className='w-[1200px] h-[1200px] absolute  box1 top-0 right-0' ref={boxref}>
                <Shdows color1='sky' color2='fuchsia'/>
           </div>
    </div>
  )
}

export default page