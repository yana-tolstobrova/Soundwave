import React from 'react'
import { SignupForm } from './Form'

export function MainJoin() {
  return (
    <div className='flex flex-col w-6/6 mt-4 mx-4 px-4 xl:w-4/6 xl:mx-auto xl:my-[9em] xl:flex-row xl:justify-between xl:px-0 xl:items-center'>
    
        <h1 className='text-6xl self-start font-bold text-white w-6/6 z-20 xl:w-3/6 xl:self-center' >Join the <span className='text-accent-text'>fun.</span></h1>
      <SignupForm />
        
    </div>
  )
}
