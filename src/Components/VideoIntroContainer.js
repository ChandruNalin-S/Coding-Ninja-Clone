import React from 'react'
import { VIDEO_INTRO_URL } from '../utils/constants'

const VideoIntroContainer = () => {
  return (
   <div className='flex justify-center mt-24 cursor-pointer'>
    <video className='rounded-lg' width={976} height={1000} autoPlay muted controls loop>
      <source src={VIDEO_INTRO_URL} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  </div> 
  
  )
}

export default VideoIntroContainer
