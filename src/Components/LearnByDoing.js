import React from 'react'
import { useSelector } from 'react-redux'


const LearnByDoing = () => {

  const projects = useSelector((store)=>store.student.Projects);


  if(!projects) return ;


  const ImageContainer = ({image})=>{
    return(
      <div>
        <img className='h-[112px] ' src={image} alt='projectImage'/>
      </div>
    )
  }


  return (
    <div className='pt-[120px]'>
      <div className='flex justify-evenly'>
        <div className='flex items-center gap-[16px]'>
          <div>
            <img src='https://files.codingninjas.com/frame-1000003333-6-32273.svg' alt='frame'/>
          </div>
          <div className='flex flex-col gap-[16px]'>
            <p className='text-[18px] font-semibold'>{projects?.section_title}</p>
            <p className='text-[14px] '>{projects?.section_subtitle}</p>
          </div>
        </div>

        <div className="flex gap-2 w-[308px] max-w-[308px] h-[360px] bg-customLightYellow pl-[52px] rounded-xl overflow-hidden whitespace-nowrap">
      {/* Left Container - Scroll Up */}
        <div className="flex flex-col items-center gap-2 animate-scroll-up">

          <div className='flex flex-col gap-2'>
            {projects.project_images.map((image, index) => (
            <ImageContainer key={index} image={image.image} />
            ))}
          </div>
          
          <div className='flex flex-col gap-2' aria-hidden="true">
            {projects.project_images.map((image, index) => (
            <ImageContainer key={index} image={image.image} />
            ))}
          </div>
            
        </div>

        {/* Right Container - Scroll Down */}
        <div className="flex flex-col items-center animate-scroll-down">
          
          <div className='flex flex-col gap-2' aria-hidden="true">
            {projects.project_images
              .toReversed()
              .map((image, index) => (
                <ImageContainer key={index} image={image.image} />
            ))}
          </div>
          
          <div className='flex flex-col gap-2' >
            {projects.project_images
              .toReversed()
              .map((image, index) => (
                <ImageContainer key={index} image={image.image} />
            ))}
          </div>
         
        </div>
      </div>

      </div>
    </div>
  )
}

export default LearnByDoing
