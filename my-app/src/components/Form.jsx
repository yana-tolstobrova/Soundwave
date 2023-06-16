import React from 'react'
import { Link } from 'react-router-dom';

export function Form() {
  return (
    <div className=''>
      <form className='text-white flex-col flex w-[30rem] bg-footer-form-icon-bg px-10 py-7 rounded-xl'>
              <label className='mb-2'>Name:</label>
              <input className='bg-footer-form-icon-bg border border-border-input p-1 rounded-md mb-5 focus:outline-none focus:border-border-input-focus'></input>
              <label className='mb-2'>Email:</label>
              <input className='bg-footer-form-icon-bg border border-border-input p-1 rounded-md mb-5 focus:outline-none focus:border-border-input-focus'></input>
              <label className='mb-2'>Password:</label>
              <input className='bg-footer-form-icon-bg border border-border-input p-1 rounded-md mb-5 focus:outline-none focus:border-border-input-focus'></input>
              <Link to={'/join'}><button className='text-sm bg-button-bg py-2 rounded-xl hover:bg-button-hover focus:bg-button-focus w-full'>Join Now</button></Link>
        </form>
    </div>
  )
}
