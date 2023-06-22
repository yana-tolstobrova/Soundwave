import React from 'react';
import Twitter from '../assets/images/twitter.svg';
import Facebook from '../assets/images/facebook.svg';
export function Footer() {
  return (
    <div className='text-white font-semibold bg-footer-form-icon-bg z-20 relative'>
      <div className='flex items-center justify-around py-4 w-6/6 mx-4 md:w-4/6 md:mx-auto md:py-7 md:justify-between'>
            <ul className='flex'>
            <li className='mr-5'>About us</li>
            <li>Contact</li>
          </ul>
          <ul className='flex'>
            <li className='flex flex-col items-center mr-5 xl:flex-row'><img src={Twitter} alt='twitter icon' className='h-[1.2em] w-[1.2em] mb-[0.1em] xl:mr-3 xl:mb-0'/>Twitter</li>
            <li className='flex flex-col items-center xl:flex-row'><img src={Facebook} alt='facebook icon' className=' h-[1.2em] w-[1.2em] mb-[0.15em] xl:mr-3 xl:mb-0'/>Facebook</li>
          </ul>
      </div>
      
    </div>
  )
}
