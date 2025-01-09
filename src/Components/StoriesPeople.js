import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DOWN_ARROW_URL } from '../utils/constants';

const StoriesPeople = () => {

  const [studentDetails, setStudentDetails] = useState([]);
  const student_testimonials = useSelector((store) => store.student.student_testimonials);

  const PlacedStudents = ({ image_url, name, position, review, company_logo }) => {
    return (
      <div className="min-w-[300px] w-[300px] bg-customBorderBlack px-4 pb-4 relative rounded-3xl flex-shrink-0">
        <div className="flex justify-center absolute -top-8 left-[62px] right-[62px]">
          <img
            className="w-[64px]"
            src={image_url}
            alt="profile"
          />
        </div>
        <div>
          <img src="https://files.codingninjas.com/vector-1-32224.svg" alt="vector" />
        </div>
        <div className="flex flex-col gap-8 items-center pt-[10px] text-justify">
          <div className="text-customDarkGray">
            <p className="text-[16px] font-bold text-center">{name}</p>
            <p className="text-[12px] font-medium">{position}</p>
          </div>
          <div className="text-customLightGray text-[14px] pb-10 font-medium">
            {review}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-customBlackGrey flex items-center">
            <span className="text-[13px] font-bold">
              Post
              <br />
              Coding Ninjas
            </span>
          </div>
          <div className='flex items-center'>
            <img src="https://files.codingninjas.com/union-1707118075.svg" alt="union" />
          </div>
          <div className='flex items-center'>
            {company_logo ? (
              <img
                className="w-[72px]"
                src={company_logo}
                alt="Company Logo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "inline";
                }}
              />
            ) : null}
            <span
              className="text-white"
              style={{ display: company_logo ? "none" : "inline" }}
            >
              Cogent e Private ltd
            </span>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (student_testimonials && student_testimonials.length > 0) {
      setStudentDetails(student_testimonials[0].testimonials);
    }
  }, [student_testimonials]);

  return (
    <div className="bg-customLigtherBlack flex flex-col items-center pt-[120px] pb-[80px] overflow-hidden">
      <div className="flex items-center justify-between w-[60%] pb-[56px]">
        <div className="flex items-center gap-4">
          <img
            className="bg-white p-3 rounded-lg"
            src="https://files.codingninjas.com/group-32264.svg"
            alt="group"
          />
          <p className="font-semibold text-white text-[18px]">Stories from people like you</p>
        </div>
        <a
          href="https://www.codingninjas.com/review"
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-orange-500 font-semibold text-[16px] underline">
            Read all success stories
          </p>
        </a>
      </div>

      <div className="pb-[10px]">
        <div className="flex gap-6 text-white">
          {student_testimonials.map((member) => (
            <div
              key={member.testimonial_ids[0].testimonial_id}
              className={`text-[12px] font-bold py-2 px-3 rounded-2xl hover:cursor-pointer ${
                studentDetails === member.testimonials
                  ? 'bg-white text-black'
                  : 'bg-customLightBlack text-customAverageGrey'
              }`}
              onClick={() => {
                setStudentDetails(member.testimonials);
              }}
            >
              {member.category_name}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center p-10">
        <div className="flex gap-5 w-[80%] overflow-x-auto scrollbar-hidden pt-10">
          {studentDetails.slice(0, 3).map((student, index) => {
            return (
              <PlacedStudents
                key={index}
                image_url={student.image_url}
                name={student.name}
                position={student.position}
                review={student.review}
                company_logo={student.company_logo}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-[28px]" >
        <button className="bg-orange-600 text-white px-7 py-4 rounded-lg font-semibold hover:bg-customOrange transition">
          Explore offerings <img className='inline-block -rotate-180' src={DOWN_ARROW_URL} alt='downArrow'/>
        </button>
      </div>
    </div>
  );
};

export default StoriesPeople;
