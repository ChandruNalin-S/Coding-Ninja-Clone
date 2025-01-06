import React from 'react'
import VideoIntroContainer from './VideoIntroContainer'
import { DOWN_ARROW_URL } from '../utils/constants'

const TechCareer = () => {
  return (
    <div className='bg-radial-gradient-dots bg-dots-size bg-black text-white mt-20 py-24'>
      <div className=''>
        <div className="flex justify-center font-semibold text-[24px] m-4 text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text animate-gradient bg-[length:200%_200%]">
          <p>Restricted by opportunities?</p>
        </div>

        <div className='flex justify-center text-[64px]'>
          <p className='font-bold w-[40%] leading-[84px]'>Get the tech career you deserve. Faster.</p>
        </div>

        <div className=' flex justify-center  text-[16px] text-customDarkGray'>
          <span>Structured coding courses that get you there faster with confidence.</span>
        </div>

        <div className='flex justify-center text-[20px] mt-16 '>
          <div>
          <button className='bg-orange-600 text-white font-semibold px-5 py-4 rounded-md hover:bg-customOrange transition'>Explore offerings <img className='inline-block' src={DOWN_ARROW_URL} alt='downArrow'/></button>
          </div>
        </div>
      </div>
      <VideoIntroContainer/>
    </div>
  )
}

export default TechCareer
