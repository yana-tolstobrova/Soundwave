import React from 'react';
import { Link } from 'react-router-dom';
export function ButtonJoin() {
  return (
      <div className='flex md:justify-center xl:justify-start'> 
          <Link to={'/join'}><button className='bg-button-bg py-3 px-6 rounded-xl hover:bg-button-hover focus:bg-button-focus'>Join Now</button></Link>
      
    </div>
  )
}
