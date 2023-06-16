import React from 'react';
import Twitter from '../assets/images/twitter.svg';
import Facebook from '../assets/images/facebook.svg';
export function Footer() {
  return (
    <div className='text-white font-bold bg-footer-form-icon-bg z-20 relative'>
      <div className='flex w-4/6 mx-auto justify-between py-7'>
            <ul className='flex'>
            <li className='mr-5'>About us</li>
            <li>Contact</li>
          </ul>
          <ul className='flex'>
            <li className='flex items-center mr-5'><img src={Twitter} alt='twitter icon' className='mr-3'/>Twitter</li>
            <li className='flex items-center'><img src={Facebook} alt='facebook icon' className='mr-3'/>Facebook</li>
          </ul>
      </div>
      
    </div>
  )
}
