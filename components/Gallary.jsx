import React from 'react'
import styles from '@/styles/main.module.css'
import Image from 'next/image'
import GALLARY from "@/assets/gallary.png"

const Gallary = () => {
  return (
    <div className={`${styles.glass} h-[50px] w-[50px] cursor-pointer`}>
         <Image height="100%" width="100%" src={GALLARY} alt='gallary'/>
    </div>
  )
}

export default Gallary