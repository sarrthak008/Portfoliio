import React, { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/main.module.css'
import {useOpenAnimation,closeAnimation} from "@/lib/animationFunc"

const ImagerOpener = ({imgData, index}) => {

    const [openImg,setOpenImg] = useState(false)
    const [currentImg,setCurrentImg] = useState()
    const [imgIndex,setImgIndex] = useState()
   
    const handelImgChnage=()=>{
        setOpenImg(true)
        setCurrentImg(imgData.url)
    }


    return (
      <>
         <div className='h-[150px]  w-[250px] bg-gray-500 cursor-pointer inline-block m-4 rounded-md overflow-hidden shadow-gray-700 shadow-md ' key={index} onClick={()=>{handelImgChnage()}}>
            <Image src={imgData.url} height="100%" width="100%" alt={`${imgData.description}`} className='h-full w-full object-fill' />
        </div>
        {openImg && <OpenOneImage currentImg={currentImg} setOpenImg={setOpenImg} description={imgData?.description}/>}
      </>
    )
}

const OpenOneImage =({currentImg,setOpenImg,description})=>{

    useOpenAnimation("box")
    const [infoOpener,setInfoOpner] = useState(false)
    const [redHeart,setRedHeart] = useState(true)
    
    return(
         <div className={`h-0  w-0 box absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ${styles.glass} overflow-hidden`}>
            <div className='float-right cursor-pointer text-3xl bg-rose-400' onClick={()=>{setOpenImg(false)}}><i className="ri-close-fill"></i></div>
            <div className='h-[90%] w-full overflow-hidden p-3 flex items-center justify-center relative'>
                 <Image src={currentImg} height="100%" width="100%" alt='galaary'/>
               <div className={`h-12 ${styles.glass} absolute w-full bottom-0 flex items-center justify-end gap-4 text-white`}>
                    <span className='ml-4 text-[22px] '><i className=" cursor-pointer text-gray-800 ri-delete-bin-6-line"></i></span>
                    <span className='ml-4 text-[22px] ' onClick={()=>{setInfoOpner(true)}}><i className=" cursor-pointer ri-information-line"></i></span>
                    {
                        redHeart ? 
                        <span className='ml-4 text-[22px] ' onClick={()=>{setRedHeart(false)}}><i className=" cursor-pointer ri-heart-line" ></i></span> :
                        <span className='ml-4 text-[22px] ' onClick={()=>{setRedHeart(true)}}><i className=" cursor-pointer ri-heart-fill text-red-600" ></i></span>

                    }
               </div>
               {infoOpener && <DescriptionLoader setInfoOpner={setInfoOpner} description={description}/>}
            </div>

         </div>
    )
}

export default ImagerOpener



const DescriptionLoader =({setInfoOpner,description})=>{
    useOpenAnimation("box")

     return(
        <div onClick={()=>{setInfoOpner(false)}} className={` box cursor-pointer absolute h-full ${styles.glass} w-full flex items-center justify-center top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`}>
              <div className={` overflow-hidden min-h-[150px] w-[350px] bg-gray-300 rounded-xl p-2 `} onClick={(e)=>e.stopPropagation()}>
                 {description}
              </div>
        </div>
     )
}