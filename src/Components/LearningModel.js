import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const LearningModel = () => {
  const LearningList = useSelector((store) => store?.student?.Learning_model);

  const imageUrl = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const LearnWithExplore = ({ heading, title, desktop_image, index }) => {
    const isActive = activeIndex === index;

    return (
      <div
        className={`group flex w-[300px] gap-5 text-justify cursor-pointer ${
          isActive ? 'text-black' : 'text-customDarkGray'
        }`}
        onMouseEnter={() => {
          imageUrl.current.src = desktop_image;
          setActiveIndex(index);
        }}
      >
        <div
          className={`border-l-4 ${
            isActive ? 'border-black' : 'border-blue-100'
          } transition-all duration-300`}
        ></div>
        <div className="flex flex-col gap-2">
          <div
            className={`text-[16.5px] font-semibold ${
              isActive ? 'text-black' : 'group-hover:text-black'
            } transition-all duration-300`}
          >
            {heading}
          </div>
          <div
            className={`text-[14px] ${
              isActive ? 'text-black' : 'group-hover:text-black'
            } transition-all duration-300`}
          >
            {title}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-customLighterBlue flex justify-center sm:px-10 md:px-10px">
      <div className="flex flex-col pt-[120px] pb-[100px]">
        <div className="flex items-center gap-2 mb-[60px]">
          <div>
            <img
              src="https://files.codingninjas.com/frame-1000003333-1-32928.svg"
              alt="rocket"
            />
          </div>
          <div className="text-[18px] font-semibold">
            A 3-stage learning model to turn you into a Coding Ninja
          </div>
        </div>

        {/* Learning Section */}
        <div className="flex gap-10 items-center">
          <div className="flex flex-col gap-8">
            {LearningList.map((learn, index) => (
              <LearnWithExplore
                key={index}
                index={index}
                {...learn}
              />
            ))}
          </div>
          <div>
            <img
              ref={imageUrl}
              className="w-[608px] transition-all duration-300"
              src={LearningList[0]?.desktop_image || 'https://files.codingninjas.com/web_learn-33056.webp'} 
              alt="webimage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningModel;
