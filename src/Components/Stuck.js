import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Stuck = () => {
  
  const [activeIndex, setActiveIndex] = useState(-1);

  const studentStuck = useSelector((store) => store.student.stuckList);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-text');
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const isMiddle =
          rect.top + rect.height / 2 < window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 2;

        if (isMiddle) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!studentStuck?.features) return null;

  return (
    <div className="bg-customLigtherBlack min-h-screen">
      <div className="flex flex-col items-center py-[100px]">

        <div className="flex items-center gap-5 w-[60%]">
          <img
            src="https://files.codingninjas.com/frame-1000003333-1-32217.svg"
            alt="heartIcon"
          />
          <p className="text-[18px] font-medium text-customGreyBlack">
            {studentStuck.section_title}
          </p>
        </div>

        <div className="flex flex-col gap-[60px] w-[60%] pl-[55px] mt-[60px]">
          {studentStuck?.features.map((item, index) => (
            <h2
              key={index}
              className={`scroll-text transition-all duration-600 ease-in-out ${
                activeIndex === index
                  ? 'text-[48px] text-customYellow font-bold opacity-100'
                  : 'text-[36px] text-customLightBlack font-medium opacity-50'
              }`}
            >
              {item}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stuck;
