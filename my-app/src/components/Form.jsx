import React from 'react'
import { ButtonJoin } from './ButtonJoin'

export function Form() {
  return (
    <div>
      <form className='text-white'>
              <label>Name:</label>
              <input></input>
              <label>Email:</label>
              <input></input>
              <label>Password:</label>
              <input></input>
              <ButtonJoin/>
        </form>
    </div>
  )
}
