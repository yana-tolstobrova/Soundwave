import React from 'react'
import { Footer } from '../components/Footer'
import { MainDiscover } from '../components/MainDiscover'
import { NavBar } from '../components/NavBar'

export function DiscoverPage(){
  return (
    <div className='bg-general-background'>
          <NavBar />
          <MainDiscover />
          <Footer />
    </div>
    
  )
}
