import React, { useState, useEffect } from "react";
import { DOWN_ARROW_URL, WHY_US_BACKGROUND_URL } from "../utils/constants";
import WhyUs from "./WhyUs";

const Transforms = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const middleOfScreen = window.innerHeight / 2;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= middleOfScreen && rect.bottom >= middleOfScreen) {
          setActiveIndex(index); // Highlight the current section in the middle
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-customBlack min-h-[200vh] flex flex-col items-center pt-40">
      {/* Sections */}
      <div className="space-y-28" >
        {[
          { text:"9 years of", subText:"Transforming tech careers"},
          { text: "1.5 Lac+ learners", subText: "at top tech companies" },
          { text: "1,400 Alumni in MAANG", subText: "& more in Unicorns" },
          { text: "1 Cr+ highest CTC", subText: "after completing the course" },
          { text: "128% average hike", subText: "via our placement cell" },
        ].map((item, index) => (
          <div
            key={index}
            className={`section text-center transition-all duration-700 ease-in-out ${
              activeIndex === index ? "text-white scale-110" : "text-customLightBlack scale-100"
            }`}
          >
            <div className="text-7xl font-bold">{item.text}</div>
            <div className="text-2xl mt-5">{item.subText}</div>
          </div>
        ))}
      </div>
      {/* Footer Button */}
      <div className="mt-20" >
        <button className="bg-orange-600 text-white px-7 py-4 rounded-lg font-semibold hover:bg-customOrange transition">
          Explore offerings <img className='inline-block -rotate-180' src={DOWN_ARROW_URL} alt='downArrow'/>
        </button>
      </div>
    </div>
  );
};

export default Transforms;
