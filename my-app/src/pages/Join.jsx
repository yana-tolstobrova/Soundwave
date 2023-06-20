import React from 'react'
import { Footer } from '../components/Footer'
import { MainJoin } from '../components/MainJoin'
import { NavBar } from '../components/NavBar'

export function Join() {
  return (
    <div className='bg-general-background relative overflow-hidden'>
          <NavBar />
          <MainJoin />
          <Footer />
        <div className='bg-circle1 w-[10rem] h-[10rem] rounded-full absolute top-[35rem] left-[-5rem] xl:w-[30rem] xl:h-[30rem] xl:top-[19rem] xl:left-[-5rem]'></div>
        <div className='bg-circle2-3 w-[10rem] h-[10rem] rounded-full absolute top-[-5rem] right-[10rem] xl:w-[30rem] xl:h-[30rem] xl:top-[-10rem] xl:right-[38rem]'></div>       
    </div>
  )
}

