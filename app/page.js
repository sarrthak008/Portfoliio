"use client"
import React, { useRef } from 'react'
import PowerBtn from '@/components/PowerBtn'
import Shdows from '@/components/Shdows'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import { useRouter } from 'next/navigation'



const Page = () => {

  const boxref = useRef(null);
  const router =  useRouter()

  useGSAP(()=>{},{scope:boxref})


   const handelChange =()=>{
      gsap.to(".box1",{
          duration:2,
          ease: "power2.inOut",
          stagger: 0.1,
          rotation:"180deg",
          onComplete:()=>{
             router.push("/screen")
          }
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

export default Page