import React from 'react';
import { useSelector } from 'react-redux';

const FacultyBest = () => {
  const FacultyList = useSelector((store) => store?.student?.FacultyList);

  if (!FacultyList) return null;

  const Teachers = ({ faculty }) => {
    return (
      <div className="py-6 px-10 shadow-xl flex flex-col items-center rounded-xl w-[252px] flex-shrink-0 border border-t-customBorderLightGrey">
        <div className="mb-4">
          <img className="w-[100px] h-[100px] rounded-full" src={faculty.profile_image} alt="profile" />
        </div>
        <div className="text-[16px] font-medium mb-1">{faculty.name}</div>
        <div className="text-[14px] h-[40px] w-[192px] mb-[20px] text-center">{faculty.designation}</div>
        <div className="flex items-center gap-4 justify-center mb-4">
          {faculty.companies.map((company, index) => (
            <img key={index} className="w-[36px] h-[36px]" src={company?.company_image} alt="company" />
          ))}
        </div>
        <div className="text-customDarkGray text-[12px] mt-[20px] mb-[4px] font-medium">Teaches</div>
        <div className="text-center w-[192px] h-[56px] mb-[20px]">
          {faculty.teaches.map((teach, index) => (
            <div key={index} className="text-[12px] text-customLigtherBlack">
              {teach}
            </div>
          ))}
        </div>
        <span>
          <a href={faculty?.linkedin_profile_url} target='_blank' rel="noreferrer">
            <button className="text-blue-500 font-medium underline">LinkedIn profile</button>
          </a>
        </span>
      </div>
    );
  };

  return (
    <div className="pt-[200px] pb-[100px] flex mx-[273.6px]">
      <div className="flex max-w-[1200px] w-full">
        <div>
          <img className='' src="https://files.codingninjas.com/frame-1000003333-7-32274.svg" alt="frame" />
        </div>
        <div className="pl-[20px] pt-[10px]">
          <div>
            <p className="text-[18px] font-medium">{FacultyList.section_title}</p>
          </div>
          <div className="flex gap-5 py-[32px] px-[16px] overflow-x-auto mt-7 scrollbar-custom w-[900px]">
            {FacultyList.faculties.map((faculty, index) => (
              <Teachers key={index} faculty={faculty} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyBest;
