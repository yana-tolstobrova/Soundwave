import React from 'react'
import { Footer } from '../components/Footer'
import { MainJoin } from '../components/MainJoin'
import { NavBar } from '../components/NavBar'

export function Join() {
  return (
    <div className='bg-general-background relative overflow-hidden'>
          <NavBar />
          <MainJoin />
        <div className='bg-circle1 w-[30rem] h-[30rem] rounded-full absolute top-[25rem] left-[-5rem]'></div>
        <div className='bg-circle2-3 w-[30rem] h-[30rem] rounded-full absolute top-[-10rem] right-[47rem]'></div>
      <Footer />
          
          
    </div>
  )
}

