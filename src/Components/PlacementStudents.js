import React from 'react';
import { NINJA_THEME, PLACEMENT_REPORT_PDF } from '../utils/constants';
import { useSelector } from 'react-redux';
import useStudentData from '../hooks/useStudentData';

const PlacementStudents = () => {
  const students = useSelector((store) => store.student.studentList);

  useStudentData();

  const Card = ({ profile_image, company_image, category }) => (
    <div className="flex flex-col items-center w-[150px] px-10 py-2 shadow-lg rounded-2xl bg-white">
      <div className="flex justify-center">
        <img className="w-[60px] rounded-full" src={profile_image} alt="UserImg" />
      </div>
      <div className="text-center">
        <div>
          <img className="w-[80px]" src={company_image} alt="companyLogo" />
        </div>
        <div className="text-customDarkGray text-[12px] font-bold">{category}</div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center pt-28 overflow-hidden">
      <div className="flex flex-col items-center">
        {/* Header Section */}
        <div className="mb-8 flex items-center justify-between w-full max-w-screen-lg px-5">
          <div className="font-semibold text-[18px]">Our Ninjas at top tech companies</div>
          <div className="font-semibold text-orange-600 flex ml-5 hover:cursor-pointer">
            <a className="flex gap-2" href={PLACEMENT_REPORT_PDF} target="_blank" rel="noreferrer">
              <img src="https://files.codingninjas.com/download-1-31950.svg" alt="downloadIcon" />
              <div>Download Placement report</div>
            </a>
          </div>
        </div>

        {/* Scrolling Section */}
        <div className="relative group w-full max-w-screen-lg overflow-hidden flex gap-5 p-2">
          {/* Scrolling Container */}
          <div className="flex gap-5 animate-loop-scroll group-hover:paused">
            {students.map((student) => (
              <Card key={student.display_order} {...student} />
            ))}
          </div>

          {/* Duplicate for seamless animation */}
          <div className="flex gap-5 animate-loop-scroll group-hover:paused" aria-hidden="true">
            {students.map((student) => (
              <Card key={student.display_order} {...student} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12">
        <img className="h-[140px]" src={NINJA_THEME} alt="ninjaBackground" />
      </div>
    </div>
  );
};

export default PlacementStudents;
