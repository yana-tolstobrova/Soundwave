import React from 'react';
import iconCharts from '../assets/images/icon-charts.svg';
import Covers from '../assets/images/covers.jpg';
import iconAlbums from '../assets/images/icon-albums.svg';
import iconMore from '../assets/images/icon-more.svg';
export function MainDiscover() {
  return (
    <div className='flex flex-col my-4 w-6/6 mx-4 md:items-center xl:w-4/6 xl:mx-auto xl:my-[10em] xl:flex-row xl:justify-between'>
        <div className='text-white mb-5 md:text-center xl:text-left'>
              <h1 className='text-5xl' >Discover new music</h1>
              <ul className='flex my-5 md:justify-center xl:justify-start'>
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
        <img src={Covers} alt='four album covers' className='w-80 self-center'></img>
    </div>
  )
}
