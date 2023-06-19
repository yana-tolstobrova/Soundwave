import React from 'react';
import { MainHome } from '../components/MainHome';
import { NavBar } from '../components/NavBar';


export const MainPage=()=> {
  return (
    <div className='bg-general-background overflow-hidden	relative'>
      <NavBar />
      <MainHome />
        <div className='bg-circle1 w-[8rem] h-[8rem] rounded-full absolute top-[38rem] left-[2rem] xl:w-[22rem] xl:h-[22rem] xl:top-[20rem] xl:left-[4rem]'></div>
        <div className='bg-circle2-3 w-[8rem] h-[8rem] rounded-full absolute top-[8rem] right-[10rem] xl:w-[22rem] xl:h-[22rem] xl:top-[12rem] xl:right-[40rem]'></div>
        <div className='bg-circle2-3 w-[17rem] h-[17rem] rounded-full absolute overflow-hidden  xl:w-[35rem] xl:h-[35rem] '></div>
    </div>
  )
}

