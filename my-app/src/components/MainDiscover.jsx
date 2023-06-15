import React from 'react';
import iconCharts from '../images/icon-charts.svg';
import Covers from '../images/covers.jpg';
import iconAlbums from '../images/icon-albums.svg';
import iconMore from '../images/icon-more.svg';
export function MainDiscover() {
  return (
    <div className='w-4/6 mx-auto mt-[9em] mb-[7em] flex justify-between items-center'>
        <div className='text-white'>
              <h1 className='text-5xl'>Discover new music</h1>
              <ul className='flex my-10'>
                  <li>
                      <img src={iconCharts} alt='icon of microphone with text: charts' className='mr-5'></img>
                  </li>
                  <li>
                      <img src={iconAlbums} alt='icon of discs with text: albums' className='mr-5'></img>
                  </li>
                  <li>
                      <img src={iconMore} alt='icon of arrow with text: more'></img>
                  </li>
              </ul>
              <p>By joining you can benefit by listening to the latest albums released.</p>
        </div>
        <img src={Covers} alt='four album covers' className='w-80'></img>
    </div>
  )
}
