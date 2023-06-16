import React from 'react'
import { Form } from './Form'

export function MainJoin() {
  return (
    <div className='w-4/6 mx-auto mt-[9em] flex justify-between items-center pb-[23rem]'>
    
        <h1 className='text-6xl font-bold text-white w-3/6'>Join the <span className='text-accent-text'>fun.</span></h1>
        <Form/>
    </div>
  )
}
