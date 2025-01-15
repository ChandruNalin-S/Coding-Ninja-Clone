import React from 'react'
import { useSelector } from 'react-redux'
import LearnByDoing from './LearnByDoing';
import FacultyBest from './FacultyBest';

const MentorShip = () => {

  const mentorShip = useSelector((store)=>store.student.mentorShip);

  if(!mentorShip.features) return;


  const Mentor = ({image,title,first_text,second_text})=>{
    return(
      <div className='shadow-lg rounded-xl w-[292px]'>
        <div className='flex h-[120px]'>
          <img className='w-[292px]' src={image} alt='img'/>
        </div>
        <div className='p-[20px]'>
          <div className='text-[16px] text-customLigtherBlack font-medium mb-[24px]'>{title}</div>
          <div className='text-[14.5px] text-customLightBlack mb-[24px]'>{first_text}</div>
          <div className='text-[14.5px] text-customLightBlack'>{second_text}</div>
        </div>
      </div>
    )
  }



  return (
    <>
    <div className='py-[100px]'>
      <div className='flex gap-[20px] justify-center sm:pr-[190px] md:pr-[100px] lg:pr-[50px] xl:pr-0'>

        <div className=''>
          <img src='https://files.codingninjas.com/frame-1000003333-5-32272.svg' alt='frame'/>
        </div>
        
        
        <div className='flex flex-col '>
          <div className='flex flex-col gap-2'>
            <p className='text-[18px] text-customLigtherBlack font-medium'>{mentorShip.section_title}</p> 
            <p className='text-[14px] text-customDarkGray'>{mentorShip.section_subtitle}</p>
          </div>
          <div className='flex gap-5 mt-[40px] sm:flex-col ml-[180px] md:ml-[10px] flex-row lg:flex-row'>
            {mentorShip?.features.map((mentor,index)=>{
              return <Mentor key={index} {...mentor}/>
            })}
          </div>
        </div>
      </div>
    </div>
    <LearnByDoing/>
    <FacultyBest/>
    </>
  )
}

export default MentorShip
