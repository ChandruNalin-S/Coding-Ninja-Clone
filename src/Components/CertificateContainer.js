import React from 'react';
import { COURSE_BANNER_URL, FRAME_LOGO_URL } from '../utils/constants';

const CertificateContainer = ({ name, img1, img2, img3, img4, img5 }) => {
  return (
    <div className="w-[90%] sm:w-[45%] lg:w-[30%] flex-shrink-0">
      {/* Label */}
      <div className="font-semibold text-white bg-customDarkBrown rounded-full px-4 py-1 text-[12px] mb-5 w-max">
        For graduates
      </div>
      <a href={img5} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col items-center border border-gray-300 p-5 rounded-3xl bg-white cursor-pointer">
          {/* Image Section */}
          <div className="relative">
            <img src={COURSE_BANNER_URL} alt="courseBanner" />
            <div className="absolute -bottom-3 left-4 bg-white p-1 border border-b rounded-md">
              <img className="w-[32px]" src={FRAME_LOGO_URL} alt="FrameLogo" />
            </div>
          </div>
          {/* Text Section */}
          <div className="mt-5">
            <div className="text-[20px] font-semibold">{name}</div>
            <div className="text-[14px] text-customLightGold font-semibold bg-customSeaShell rounded-r-full p-2 mt-4">
              E&ICT Academy, IIT Guwahati
            </div>
            <div className="flex justify-between mt-5 border-t border-gray-150 pt-5">
              <div className="flex">
                <img className="mr-5 h-6" src={img1} alt="ChatGPT" />
                <img className="mr-5 h-6" src={img2} alt="META" />
                <img className="mr-5 h-6" src={img3} alt="GoogleAnalytics" />
                {img4 && <img className="h-6 mr-5" src={img4} alt="img4" />}
              </div>
              <div className="text-[14px]">6 months</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CertificateContainer;
