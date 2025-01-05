import React, { useEffect, useState } from "react";

const Transforms = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1); // Track the index of the visible text

  useEffect(() => {
    const handleScroll = () => {
      const lines = document.querySelectorAll(".line");
      lines.forEach((line, index) => {
        const rect = line.getBoundingClientRect();
        const middleOfScreen = window.innerHeight / 2; // Calculate the middle of the screen

        if (rect.top <= middleOfScreen && rect.bottom >= middleOfScreen) {
          setVisibleIndex(index); // Mark the current text in the middle
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black flex justify-center items-center">
      <div className="text-[60px] font-bold text-center space-y-4">
        {["9 years of", "transforming", "tech careers"].map((text, index) => (
          <div
            key={index}
            className={`line transition-all duration-700 ease-in-out ${
              visibleIndex === index
                ? "scale-110 text-white"
                : "scale-100 text-gray-500"
            }`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transforms;
