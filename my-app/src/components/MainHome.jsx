import React from 'react';
import Girl from '../assets/images/landing-page-girl.png'
import { ButtonJoin } from './ButtonJoin';

export function MainHome() {
  return (
      <div className='w-6/6 z-20 relative mt-[7em] mb-[15em] flex flex-col justify-start md:mt-[6em] mb-[14em] xl:flex-row xl:mb-0 xl:w-4/6 xl:mx-auto xl:justify-between'>
        <img src={Girl} alt='girl with voluminous hair in profile' className='hidden z-10 xl:block xl:w-[25rem] '></img>
  
        <div className='text-white pt-20 px-4 xl:mx-0'>
              <h1 className='text-5xl md:text-center xl:text-left'>Feel The Music</h1>
              <p className='my-5 text-xl w-[28rem] md:mx-auto md:text-center xl:text-left'>Stream over 20 thousand songs with one click</p>
              <ButtonJoin/>
        </div>
    </div>
  )
}
