import React from 'react'
import { BOOTCAMP_COURSE_URL, DATA_ANALYTICS_URL, FULL_STACK_COURSE_URL, FULL_STACK_ROLE_URL } from '../utils/constants'

const Graduates = () => {
  return (
    <div className='pt-10' id='offer' >
      {/** first container */}
      <div className='flex justify-center text-[80px] text-customLightGray font-semibold'>
        <p>OUR OFFERINGS</p>
      </div>

      {/** job Bootcamp  */}
      <div className='flex flex-col mt-10 '>
        <div className='flex gap-4 items-center sm:ml-[50px] md:ml-[20px] lg:ml-[150px] xl:ml-[300px]'>
          <div className='font-semibold'>Job Bootcamp</div>
          <div className='font-semibold text-[12px] bg-customBlue rounded-e-3xl px-2 py-1 '>For graduates</div>
        </div>
        <div className='flex justify-center gap-5 mt-10 sm:flex-col items-center lg:flex-row'>
          {/** Full stack development */}
          <a href={FULL_STACK_COURSE_URL} target='_blank' rel="noopener noreferrer">
            <div className='w-[460px] rounded-xl hover:shadow-lg cursor-pointer transition-shadow duration-300'>
              <div className='flex bg-customLightBlue p-5 items-center h-[144px] gap-5 rounded-t-xl'>
                <img className='bg-white w-[70px] p-3 rounded-full' src={FULL_STACK_ROLE_URL} alt='fullStack' />
                <p className='font-semibold text-[20px]'>Full Stack Web Development</p>
              </div>
              <div className='flex items-center justify-between h-10 text-sm text-black shadow-lg gap-4 rounded-b-xl px-5 py-8'>
                <p>140+ Hrs of content</p>
                <p>600+ Problems</p>
                <p>10k+ Leaners</p>
              </div>
            </div>
          </a>
          {/** data analytics */}
          <a href={BOOTCAMP_COURSE_URL} target='_blank' rel="noopener noreferrer" >
            <div className='ml-5 sm:ml-0 w-[460px] rounded-xl hover:shadow-lg cursor-pointer transition-shadow duration-300'>
              <div className='flex bg-customLightBlue p-5  items-center h-[144px] gap-5 rounded-t-xl'>
                <img className='bg-white w-[70px]  p-3 rounded-full' src={DATA_ANALYTICS_URL} alt='dataAnalytics'/>
                <p className='font-semibold text-[20px]'>Data Analytics</p>
              </div>
              <div className='flex items-center justify-between h-10 text-sm text-black shadow-lg rounded-b-xl gap-4 px-5 py-8'>
                <p>100+ Hrs of content</p>
                <p>300+ Problems</p>
                <p>2000+ Learners</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Graduates
