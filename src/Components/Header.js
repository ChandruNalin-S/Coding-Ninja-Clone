import React, { useState } from 'react';
import LOGO_URL from '../utils/constants';


const Header = () => {
  const [showJobBootcamp, setShowJobBootcamp] = useState(false);
  const [showIITCertificates, setShowIITCertificates] = useState(false);


  
  return (
    <div className='flex items-center justify-evenly fixed left-0 right-0 top-0 z-10 bg-white'>
      <div className='flex h-20 items-center'>
        <div className='mr-12'>
          <img src={LOGO_URL} alt='logo' />
        </div>

        <div 
          className='mr-12 relative' 
          onMouseEnter={() => setShowJobBootcamp(true)}
          onMouseLeave={() => setShowJobBootcamp(false)}
        >
          <button className='text-blue-950 text-[17px] font-semibold'>Job BootCamp</button>
          {showJobBootcamp && (
            <div className='absolute top-full mt-7 w-56 bg-gray-200 shadow-lg rounded-md'>
              <ul className='font-semibold p-4'>
                <li className='hover:bg-gray-300 p-2 rounded'>Full Stack Development</li>
                <li className='hover:bg-gray-300 p-2 rounded'>Data Analytics</li>
              </ul>
            </div>
          )}
        </div>

        <div 
          className='mr-12 relative' 
          onMouseEnter={() => setShowIITCertificates(true)}
          onMouseLeave={() => setShowIITCertificates(false)}
        >
          <button className='text-blue-950 text-[17px] font-semibold'>IIT Certificates</button>
          {showIITCertificates && (
            <div className='absolute top-full mt-7 w-56 bg-gray-200 shadow-lg rounded-md'>
              <ul className='font-semibold p-4'>
                <li className='hover:bg-gray-300 p-2 rounded'>For Graduates</li>
                <li className='hover:bg-gray-300 p-2 rounded'>For College Students</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div>
        <button className='px-4 py-3 m-2 bg-orange-600 hover:bg-customOrange transition rounded-md text-white font-semibold text-sm'>
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
