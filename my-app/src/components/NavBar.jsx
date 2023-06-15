import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';
import './NavBar.css'

export function NavBar() {
  return (
    <div>
      <NavLink to={'/'} href='/MainPage'>
        <img src={logo} alt='logo' />
          <span>Soundwave</span> 
          </NavLink>
          
          <ul>
              <li>
                  <NavLink to={'/discover'} href='/discover'>Discover</NavLink>
              </li>
              <li>
                  <NavLink to={'/join'} href='/join'>Join</NavLink>
              </li>
          </ul>

    </div>
  )
}
