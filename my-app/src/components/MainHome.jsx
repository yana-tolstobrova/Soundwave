import React from 'react';
import Girl from '../assets/images/landing-page-girl.png'
import { ButtonJoin } from './ButtonJoin';

export function MainHome() {
  return (
      <div className='w-6/6 mt-[9em] mb-[15em] flex xl:mb-0 xl:w-4/6 xl:mx-auto xl:justify-between'>
        <img src={Girl} alt='four album coversphoto of a girl in profile' className='hidden z-10 xl:block xl:w-[25rem] '></img>
  
        <div className='text-white pt-20 mx-4 xl:mx-0'>
              <h1 className='text-5xl'>Feel The Music</h1>
              <p className='my-5 text-xl w-[28rem]'>Stream over 20 thousand songs with one click</p>
              <ButtonJoin/>
        </div>
    </div>
  )
}
