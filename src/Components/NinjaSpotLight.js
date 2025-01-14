import React from 'react'
import { useSelector } from 'react-redux'

const NinjaSpotLight = () => {

  const NinjaSpotLight = useSelector((store)=>store?.student?.NinjaSpotLightList);


  if (!NinjaSpotLight || !NinjaSpotLight.article_links) return null;



  return (
    <div className='bg-customLightYellow flex justify-center py-[100px]'>
      <div className=''>
        <div className='flex items-center gap-4'>
          <img src='https://files.codingninjas.com/frame-1000003333-2-32237.svg' alt='frame'/>
          <div className='text-[18px] font-medium'>{NinjaSpotLight?.section_title}</div>
        </div>
        <div className='flex items-center gap-5 pt-[60px] pl-5'>
          <div className='text-center cursor-pointer'>
            <img className='w-[430px]' src={NinjaSpotLight?.video_article?.image_logo} alt='imglogo'/>
          </div>
          <div className='grid grid-cols-3 gap-[8px]'>
            {
    
              NinjaSpotLight?.article_links.map((article,index)=>{
                return (
                  <a key={index} className='w-48 h-[142px] p-3 flex flex-col gap-3 items-start bg-customWhite rounded-xl border hover:shadow-md' href={article.redirection_url} target='_blank' rel="noreferrer">
                    <img className='h-[40px]' src={article.image_logo} alt='img'/>
                    <div className='text-[12px]  text-customLigtherBlack '>{article.article_heading
                    }</div>
                  </a>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NinjaSpotLight
