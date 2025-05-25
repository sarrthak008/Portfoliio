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
         <div className='h-[150px]  w-[250px] bg-gray-500 cursor-pointer inline-block m-4 rounded-md overflow-hidden shadow-gray-700 shadow-md' key={index} onClick={()=>{handelImgChnage()}}>
            <Image src={imgData.url} height="100%" width="100%" alt={`${imgData.description}`} className='h-full w-full object-fill' />
        </div>
        {openImg && <OpenOneImage currentImg={currentImg} setOpenImg={setOpenImg}/>}
      </>
    )
}

const OpenOneImage =({currentImg,setOpenImg})=>{

    useOpenAnimation("box")

    


    return(
         <div className={`h-0 w-0 box absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ${styles.glass} overflow-hidden`}>
            <div className='float-right cursor-pointer text-3xl bg-rose-400' onClick={()=>{setOpenImg(false)}}><i className="ri-close-fill"></i></div>
            <div className='h-[90%] w-full overflow-hidden p-3 flex items-center justify-center'>
                 <Image src={currentImg} height="100%" width="100%" alt='galaary'/>
            </div>
         </div>
    )
}

export default ImagerOpener