import React from 'react';
import Girl from '../assets/images/landing-page-girl.png'
import { ButtonJoin } from './ButtonJoin';

export function MainHome() {
  return (
      <div className='w-6/6 mt-[9em] mb-[15em] flex md:mb-0 w-4/6 mx-auto justify-between'>
        <img src={Girl} alt='four album coversphoto of a girl in profile' className='hidden md:block w-[25rem] z-10'></img>
  
        <div className='text-white pt-20'>
              <h1 className='text-5xl'>Feel The Music</h1>
              <p className='my-5 text-xl w-[28rem]'>Stream over 20 thousand songs with one click</p>
              <ButtonJoin/>
        </div>
    </div>
  )
}
