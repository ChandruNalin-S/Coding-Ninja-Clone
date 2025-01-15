import React, { useEffect, useState } from 'react'
import { BACKGROUND_ADVANTAGE_URL, BORDER_LINE, CHECK_ICON, CODING_NINJA_ICON, CODING_NINJA_ICON_WHITE, DOWN_ARROW_URL, THUNDER_ICON } from '../utils/constants'

const Advantage = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const [scrollFiftyPostion ,setscrollFiftyPostion] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      const scrolled = (scrollTop / (fullHeight - windowHeight)) * 100;
      const scrolledFifty = Math.min(scrolled, 60);

      setScrollPosition(scrolled);          
      setscrollFiftyPostion(scrolledFifty); 

    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  return (
    <div
      className='flex flex-col items-center pt-36 min-h-[100vh]'
      style={{ backgroundImage: `url(${BACKGROUND_ADVANTAGE_URL})` }}
    >
      <div className='mb-10'>
        <p className='text-[18px] bg-text-gradient bg-clip-text text-transparent font-semibold'>
          The Coding Ninjas advantage
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-customBorderBlack1">

        <table className='table-auto w-auto'>
          <thead>
            <tr className='text-customGrey'>
              <th></th>
              <th className='text-center align-middle py-10 '>
                <img
                  className='text-center align-middle px-[57px]'
                  src={CODING_NINJA_ICON}
                  alt='codingNinjaIcon'
                />
              </th>
              <th className='py-10 px-5 sm:px-1 '>Free resources</th>
              <th className='py-10 px-5 '>Other courses</th>
            </tr>
          </thead>
          <tbody>
            <tr className='font-semibold bg-customLigtherBlack text-customGainsboro'>
              <td className='py-[24px] pl-[48px] md:pr-[200px] sm:pr-[20px]'>
                Structured + problem solving based
              </td>
              <td className='py-[24px] px-[60px]'>
                <img className='sm:w-[20px] md:w-[25px] lg:w-[20px]' src={CHECK_ICON} alt='check' />
              </td>
              <td className='py-[24px] px-[60px] text-center'>X</td>
              <td className='py-[24px] px-[60px] text-center'>check</td>
            </tr>
            <tr className='font-semibold text-customGainsboro'>
              <td className='py-[24px] pl-[48px] md:pr-[200px] sm:pr-[20px]'>
                Fastest 1:1 doubt support
              </td>
              <td className='py-[24px] px-[60px]'>
                <img className='sm:w-[20px] md:w-[25px] lg:w-[20px]' src={CHECK_ICON} alt='check' />
              </td>
              <td className='py-[24px] px-[60px] text-center'>X</td>
              <td className='py-[24px] px-[60px] text-center'>X</td>
            </tr>
            <tr className='font-semibold bg-customLigtherBlack text-customGainsboro '>
              <td className='py-[24px] pl-[48px] md:pr-[200px] sm:pr-[20px]'>
                Integrated prep platform
              </td>
              <td className='py-[24px] px-[60px]'>
                <img className='sm:w-[20px] md:w-[25px] lg:w-[20px]' src={CHECK_ICON} alt='check' />
              </td>
              <td className='py-[24px] px-[60px] text-center'>X</td>
              <td className='py-[24px] px-[60px] text-center'>X</td>
            </tr>
            <tr className='font-semibold text-customGainsboro '>
              <td className='py-[24px] pl-[48px] md:pr-[200px] sm:pr-[20px]'>
                Profiles highlighted on Naukri
              </td>
              <td className='py-[24px] px-[60px]'>
                <img className='sm:w-[20px] md:w-[25px] lg:w-[20px] ' src={CHECK_ICON} alt='check' />
              </td>
              <td className='py-[24px] px-[60px] text-center'>X</td>
              <td className='py-[24px] px-[60px] text-center'>X</td>
            </tr>
          </tbody>
        </table>

        <div className='flex justify-center  py-[16px]'>
          <img className='h-[8px]' src={BORDER_LINE} alt='BorderLine'/>
        </div>

        <div className='px-[48px] py-[36px]'>
          <div className='flex justify-between pb-4'>
            <div>
              <img src={CODING_NINJA_ICON_WHITE} alt='LogoUrl'/>
            </div>
            <div className='flex items-center gap-2'>
              <p className='bg-text-gradientThunder bg-clip-text text-transparent text-[14px]'>Your dream role, faster and with confidence!</p>
              <span><img src={THUNDER_ICON} alt='thunder'/></span>
            </div>
          </div>
          <div className="w-full h-1">
              <div
                className="h-full transition-all duration-700 ease-in-out rounded-md"
                style={{
                  width: `${scrollPosition}%`,
                  background: 'linear-gradient(90deg, #e500a4, #ff7300)',
                }}
              ></div>
          </div>
        </div>

        <div className='px-[48px] pb-[48px]'>
          <div className='flex justify-between pb-4'>
            <div className='font-semibold text-customGreyBlack'>
              Others
            </div>
            <div className='flex items-center'>
              <p className='text-customAverageGrey text-[14px]'>Average role, under-confident</p>
            </div>
          </div>
          <div className="w-full h-1">
              <div
                className="h-full transition-all duration-1000 ease-in-out rounded-md"
                style={{
                  width: `${scrollFiftyPostion}%`,
                  background: 'rgb(153, 153, 153)',
                }}
              ></div>
          </div>
        </div>
      </div>

      <div className='flex justify-center text-[20px] mt-16 pb-36 '>
        <div>
          <button className='bg-orange-600 text-white font-semibold px-8 py-4 rounded-md hover:bg-customOrange transition'>Explore offerings <img className='inline-block rotate-180' src={DOWN_ARROW_URL} alt='downArrow'/></button>
        </div>
      </div>

    </div>
  )
}

export default Advantage
