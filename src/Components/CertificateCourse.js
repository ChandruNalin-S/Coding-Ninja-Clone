import React from 'react'
import CertificateContainer from './CertificateContainer'
import { HOME_BACKGROUND_LARGE_URL,certificatedDetails } from '../utils/constants'




const CertificateCourse = () => {


  return (
    <div className='flex flex-col mt-16 pt-20 bg-customSeaShell'>
        <div className='font-semibold ml-[300px]'>IIT Certifications</div>
        <div className='flex justify-center mt-5 ml-32'>
          <div className='flex flex-col'>
            <div className='flex mb-10'>
              <CertificateContainer name={certificatedDetails[0].name} img1={certificatedDetails[0].chatGpt} img2={certificatedDetails[0].meta} img3={certificatedDetails[0].googleAnalytics} img5={certificatedDetails[0].data_analytics} />
            </div>
            <div className='flex gap-8'>
                <CertificateContainer name={certificatedDetails[1].name} img1={certificatedDetails[1].hierarchical} img2={certificatedDetails[1].circle} img3={certificatedDetails[1].database} img4={certificatedDetails[1].cplus} img5={certificatedDetails[1].advancedDSA}/>

                <CertificateContainer name={certificatedDetails[2].name} img1={certificatedDetails[2].excel} img2={certificatedDetails[2].sql} img3={certificatedDetails[2].python} img4={certificatedDetails[2].powerbi} img5={certificatedDetails[2].internship} />
            </div>
          </div>
        </div>
        <div>
          <img src={HOME_BACKGROUND_LARGE_URL} alt='homeLogo'/>
        </div>
    </div>
  )
}

export default CertificateCourse
