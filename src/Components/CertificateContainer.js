import React from 'react'
import {COURSE_BANNER_URL, FRAME_LOGO_URL } from '../utils/constants'

const CertificateContainer = ({name,img1,img2,img3,img4}) => {
  return (
    <div className='flex flex-col w-[28%]'>
      <div className='font-semibold text-white bg-customDarkBrown rounded-full mr-96 w-[38%] px-4 py-1  text-[12px] mb-5' >For graduates</div>
      <div className='flex flex-col items-center border border-gray-300 p-5 rounded-3xl bg-white cursor-pointer'>
        {/** first container */}
        <div className='relative'>
          <img src={COURSE_BANNER_URL} alt='courseBanner'/>
          <div className='absolute -bottom-3 left-4 bg-white p-1 border border-b rounded-md'>
            <img className='w-[32px]' src={FRAME_LOGO_URL} alt='FrameLogo' />
          </div>
        </div>
        {/** second container */}
        <div className='mt-5'>
          <div className='text-[20px] font-semibold '>{name}</div>
          <div className='text-[14px] text-customLightGold font-semibold bg-customSeaShell rounded-r-full p-2 mt-4'>E&ICT Academy, IIT Guwahati</div>
          <div className='flex justify-between mt-5 
         border-t border-gray-150 pt-5'>
            <div className='flex'>
              <img className='mr-5 h-6' src={img1} alt='ChatGPT'/>
              <img className='mr-5 h-6' src={img2} alt='META'/>
              <img className='mr-5 h-6' src={img3} alt='GoogleAnalytics'/>
              {img4 && <img className='h-6 mr-5' src={img4} alt='img4'/>}
            </div>
            <div className='text-[14px]'>6 months</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificateContainer
