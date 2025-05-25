"use client"

import React, { useState } from 'react'
import styles from '@/styles/main.module.css'
import Image from 'next/image'
import GALLARY from "@/assets/gallary.png"
import Shdows from './Shdows'
import { openAnimation } from '@/lib/animationFunc'

const GallaryOpener =({setOpenGallary})=>{

    openAnimation("box") // import open animation from the lib 
    


     return(
         <div className={`box h-0 w-0 absolute top-[50%] left-[50%] overflow-hidden translate-x-[-50%] translate-y-[-50%] ${styles.glass}`}>
              <div className='w-72 h-60 absolute bottom-0 right-0'>
                 <Shdows color1='red' color2='purple' intencity={100} />
              </div>
             <div className='float-right cursor-pointer text-3xl bg-rose-400' onClick={()=>setOpenGallary(false)}><i className="ri-close-fill"></i></div>
         </div>
     )
}



const Gallary = () => {

    const [openGallary, setOpenGallary] = useState(false)

  return (
    <>
      <div className={`${styles.glass} h-[50px] w-[50px] cursor-pointer`} onClick={()=>setOpenGallary(true)}>
         <Image height="100%" width="100%" src={GALLARY} alt='gallary'/>
    </div>

     {openGallary && <GallaryOpener setOpenGallary={setOpenGallary}/>}
    </>
  )
}

export default Gallary