"use client"
import React, { useState } from 'react'
import styles from "@/styles/main.module.css"
import NOTE from "@/assets/notes.png"
import Image from 'next/image'
import information from '@/lib/data'
import Shdows from './Shdows'
import {useOpenAnimation,closeAnimation} from "@/lib/animationFunc"


const DisplayNotes =({setShowNotes})=>{

      useOpenAnimation("notes-container")
      const handelClose =()=>{
        closeAnimation("notes-container",()=>{setShowNotes(false)})
      }


     return(
          <div className={`z-[100] notes-container h-0 w-0 absolute top-[50%] left-[50%] overflow-hidden translate-x-[-50%] translate-y-[-50%] ${styles.glass}`}>
      <div className='w-72 h-60 absolute bottom-0 right-0'>
        <Shdows color1='red' color2='purple' intencity={100} />
      </div>
      <div className='float-right cursor-pointer text-3xl bg-rose-400' onClick={()=>{handelClose()}}><i className="ri-close-fill"></i></div>
      <div className='h-full w-full overflow-y-scroll overflow-x-hidden'>
        {/* {
          information[0]?.photos?.map((imgData, index) => (
            <ImagerOpener imgData={imgData} key={index} />
          ))
        } */}
      </div>
    </div>
     )
}


const Note = ({ }) => {

     const [showNotes,setShowNotes] = useState(false)

    return (
        <>
        <div className={`${styles.glass} h-[50px] w-[50px] cursor-pointer inline-block m-4`} onClick={()=>{setShowNotes(true)}}>
            <Image height="100%" width="100%" src={NOTE} alt='gallary' />
            <p className='text-center text-sm'>{information[1]?.app_name}</p>
        </div>
        {showNotes && <DisplayNotes setShowNotes={setShowNotes}/>}
        </>
    )
}

export default Note