import React from 'react'
import NavBar from '@/components/NavBar'
import Shdows from '@/components/Shdows'
import information from '@/lib/data'
import Gallary from '@/components/Gallary'


const Page = () => {

  return (
    <div className='h-screen w-screen overflow-hidden'>
        <NavBar/>
      <div className='h-80 w-80 absolute top-0 left-0'>
          <Shdows color1='amber' color2='cyan' intencity={70}/>
      </div>

      <div className='flex p-14 h-full'>
         {
             information.map((info,index)=>(
                  info.app_name == "gallary" ? <Gallary key={index}/> : null
             ))
         }
          
      </div>
    </div>
  )
}

export default Page