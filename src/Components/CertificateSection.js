import React from 'react'

const CertificateSection = () => {
  return (
    <div className='py-[32px] '>
      <div className='flex gap-[60px] items-center p-[32px]  border border-customBorderLighterGrey rounded-xl sm:flex-col mx-[150px] md:mx-[80px] md:flex-row lg:mx-[271.6px]'>
        <div className=''>
          <img className='w-[600px] h-[220px] rounded-xl' src='https://files.codingninjas.com/10920-sunrise-mentors-private-limited-coding-ninjas-_11zon-1714543245.webp' alt='certificate'/>
        </div>
        <div className='text-[24px] font-normal sm:text-justify'>We are an approved training partner of NSDC under their scheme for market led fee-based services</div>
      </div>
    </div>
  )
}

export default CertificateSection
