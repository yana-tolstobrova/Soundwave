import React from 'react';
import { MainHome } from '../components/MainHome';
import { NavBar } from '../components/NavBar';


export const MainPage=()=> {
  return (
    <div className='bg-general-background overflow-hidden	relative'>
      <NavBar />
      <MainHome />
        <div className='bg-circle1 w-[22rem] h-[22rem] rounded-full absolute top-[20rem] left-[4rem]'></div>
        <div className='bg-circle2-3 w-[22rem] h-[22rem] rounded-full absolute top-[12rem] right-[42rem]'></div>
        <div className='bg-circle2-3 w-[35rem] h-[35rem] rounded-full absolute top-[25rem] right-[-15rem] overflow-hidden	'></div>
    </div>
  )
}

