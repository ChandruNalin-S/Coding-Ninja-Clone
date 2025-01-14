import React from 'react'
import { careers, community, products, socialMedia } from '../MockData/mockData'

const FooterContainer = () => {


  return (
    <div className='bg-background flex justify-center relative'>
      <img className='z-5 absolute bottom-0 left-[10px] object-fit w-[36%]' src='https://files.codingninjas.com/1111mountain-33077.webp' alt='mountain'/>
      <div className='pt-[100px] pb-[164px] '>
        <div className='flex pb-[36px] gap-[120px] border-b border-b-customBorderGrey bg-transparen '>
          {/** left container */}
          <div className='flex flex-col gap-[32px]'>
            <img className='w-[148px] h-[26px]' src='https://files.codingninjas.com/new-cn-logos-31142.svg' alt='logo'/>
            <div className='flex flex-col gap-[32px]'>
              <div className=''>
                <p className='text-[14px] mb-[16px] text-customWhite font-medium'>Contact us</p>
                <div className='flex gap-4 mb-[12px]'>
                  <img src='https://files.codingninjas.com/phone-31845.svg' alt='phone'/>
                  <span className='text-customLightColorGrey opacity-100 hover:opacity-35 cursor-pointer'>1800-123-3598</span>
                </div>
                <div className='flex gap-4'>
                  <img src='https://files.codingninjas.com/email-fill-31846.svg' alt='email'/>          
                  <span className='text-customLightColorGrey opacity-100 hover:opacity-35 cursor-pointer'>contact@codingninjas.com</span>
                </div>
              </div>
              <div>
                <p className='text-[14px] mb-[16px] text-customWhite font-medium'>Our offerings</p>
                <div className='flex flex-col gap-[20px]'>
                  <a href='https://www.codingninjas.com/job-bootcamp-web-development' target='_blank' rel="noreferrer" >
                    <img className='w-[148px] h-[38px]' src='https://files.codingninjas.in/new-cn-logos-4-31848.svg' alt='newLogo'/>
                  </a>
                  <a href='https://www.naukri.com/code360' target='_blank' rel="noreferrer" >
                    <img className='w-[116px] h-[30px]' src='https://files.codingninjas.com/new_cn_logos_4x-1710497457.webp' alt='newLogo'/>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*** right container */}


          <div className='flex gap-[80px]'>
            <div>
              <div className='text-[14px] text-customWhite mb-[16px] font-medium'>Coding Ninjas</div>
              {careers.map((career)=>{
                  return(
                    <div key={career.id} className='mb-[16px] pr[20px]'>
                      <a href={career.link} target='_blank' rel='noreferrer' className='text-customLightColorGrey text-[12px] font-medium opacity-100 hover:opacity-35'>{career.name}</a>
                    </div>
                  )
                })}
            </div>
            <div>
              <div className='text-[14px] text-customWhite mb-[16px] font-medium'>Products</div>
              {  
                products.map((product)=>{
                  return (
                    <div key={product.id} className='mb-[16px] pr-[20px]'>
                      <a href={product.link} target='_blank' rel='noreferrer' className='text-customLightColorGrey text-[12px] font-medium opacity-100 hover:opacity-35'>{product.name}</a>
                    </div>
                  )
                })
                
              }
            </div>
            <div>
              <div className='text-[14px] text-customWhite mb-[16px] font-medium'>Community</div>
              {
                community.map((communitee)=>{
                  return(
                    <div key={communitee.id} className='mb-[16px] pr-[20px]'>
                      <a href={communitee.link} target='_blank' rel='noreferrer' className='text-customLightColorGrey text-[12px] font-medium opacity-100 hover:opacity-35'>{communitee.name}</a>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center mt-[36px]'>
          <div className='text-[12px] text-customDarkGray'>Copyright © Sunrise Mentors Pvt. Ltd.</div>
          <div className='flex items-center'>
            {socialMedia.map((social)=>{
              return (
                <div key={social.id} className='pr-[12px]'>
                  <a href={social.link} target='_blank' rel='noreferrer' className='text-customLightColorGrey text-[12px] font-medium opacity-100 hover:opacity-35'>
                    <img className='w-[28px] h-[28px]' src={social.imageUrl} alt='socialLogo'/>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterContainer
