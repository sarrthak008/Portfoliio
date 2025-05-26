import React from 'react'
import styles from "@/styles/main.module.css"
import NOTE from "@/assets/notes.png"
import Image from 'next/image'
import information from '@/lib/data'

const Note = ({key}) => {
  return (
    <div className={`${styles.glass} h-[50px] w-[50px] cursor-pointer inline-block m-4`}>
        <Image height="100%" width="100%" src={NOTE} alt='gallary' />
        <p className='text-center text-sm'>{information[1]?.app_name}</p>
      </div>
  )
}

export default Note