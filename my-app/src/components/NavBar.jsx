import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

export function NavBar() {
  return (
    <div className='flex justify-between items-center w-4/6 mx-auto py-8'>
      <NavLink to={'/'} href='/MainPage' className='flex items-center z-20'>
        <img src={logo} alt='logo' className='w-55 mr-4'/>
        <span className='text-white font-normal text-2xl'>Soundwave</span> 
          </NavLink>
          
          <ul class='flex'>
              <li>
                  <NavLink to={'/discover'} className='hover:text-nav-hover text-white font-normal text-lg mr-10'>Discover</NavLink>
              </li>
              <li>
                  <NavLink to={'/join'} className='text-white hover:text-nav-hover font-normal text-lg'>Join</NavLink>
              </li>
          </ul>

    </div>
  )
}
