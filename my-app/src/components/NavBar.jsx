import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export function NavBar() {
  return (
    <div className='flex justify-between items-center py-8 w-6/6 mx-4 xl:w-4/6 xl:mx-auto'>
      <NavLink to={'/'} href='/MainPage' className='flex items-center z-20'>
        <img src={logo} alt='logo' className='w-55 mr-4'/>
        <span className='text-white font-normal text-2xl'>Soundwave</span> 
          </NavLink>
          
          <ul className='flex'>
              <li>
                  <NavLink to={'/discover'} className='hover:text-nav-hover text-white font-normal text-lg mr-4 xl:mr-10'>Discover</NavLink>
              </li>
              <li>
                  <NavLink to={'/join'} className='text-white hover:text-nav-hover font-normal text-lg'>Join</NavLink>
              </li>
          </ul>

    </div>
  )
}
