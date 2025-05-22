import React from 'react'
import NavBar from '@/components/NavBar'
import Shdows from '@/components/Shdows'

const Page = () => {
  return (
    <div className='h-screen w-screen overflow-hidden'>
        <NavBar/>
      <div className='h-80 w-80 absolute top-0 left-0'>
          <Shdows color1='amber' color2='cyan' intencity={70}/>
      </div>
    </div>
  )
}

export default Page