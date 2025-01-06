import React, { useEffect, useRef } from 'react'
import { DOUBT_SUPPORT, LIVE_CHAT_URL, PLACEMENT_ASSISTANCE_URL, PLACEMENT_SUPPORT, STANDFORD_FACULTY, STANDFORD_IIT_FACULTY, WHY_US_BACKGROUND_URL, WHY_US_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addVideoUrl } from '../utils/videoSlice';

const WhyUs = () => {

  const videoUrl = useSelector((store)=> store?.video?.url); 

  const dispatch = useDispatch();

  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videoUrl; 
      videoRef.current.load();        
    }
  }, [videoUrl]);



  return (
    <div className='flex flex-col items-center' style={{ backgroundImage: `url(${WHY_US_BACKGROUND_URL})`}}>
      <div>
        <img src={WHY_US_URL} alt='WhyUs'/>
      </div>
      <div className='flex justify-evenly items-center gap-20 mt-12 px-2 py-2'>
        <div className='border border-customDarkGray rounded-2xl p-2 bg-customLightBlack'>
          <div className='cursor-pointer'>
            <video ref={videoRef} className='rounded-2xl' width='352' height='352' autoPlay controls>
              <source src={videoUrl} type='video/mp4'></source>
            </video>
          </div>
          <div className='py-4 px-1'>
            <p className='text-gradient text-[20px] font-semibold'>Ankush Singla</p>
            <p className='text-customGainsboro '>Co-Founder of Coding Ninja | Mentor</p>
          </div>            
        </div>
        <div className=' flex flex-col gap-10 font-semibold text-white'>

          <div className='flex gap-5 items-center px-12 py-5  border border-customBorderBlack rounded-xl bg-customLightGray bg-opacity-0 hover:bg-opacity-5 cursor-pointer'  onClick={()=>{dispatch(addVideoUrl(DOUBT_SUPPORT))}}  >
            <img className='w-[40px] h-[40px]' src={LIVE_CHAT_URL} alt='liveChat'/>
            <p className='text-[20px]'>Fastest 1:1 doubt support</p>
          </div>

          <div className='flex gap-5 items-center px-12 py-5 border border-customBorderBlack rounded-xl bg-customLightGray bg-opacity-0 hover:bg-opacity-5 cursor-pointer' onClick={()=>{
            dispatch(addVideoUrl(STANDFORD_IIT_FACULTY))
          }}  >
            <img className='w-[40px] h-[40px]'  src={STANDFORD_FACULTY} alt='liveChat'/>
            <p className='text-[20px]'>Stanford/IIT/MAANG faculty</p>
          </div>

          <div className='flex gap-5 items-center px-12 py-5 border border-customBorderBlack rounded-xl bg-customLightGray bg-opacity-0 hover:bg-opacity-5 cursor-pointer' onClick={()=>{
            dispatch(addVideoUrl(PLACEMENT_SUPPORT))
          }}>
            <img className='w-[40px] h-[40px]'  src={PLACEMENT_ASSISTANCE_URL} alt='liveChat'/>
            <p className='text-[20px]'>Placement assistance</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
