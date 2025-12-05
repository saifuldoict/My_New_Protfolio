import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[8vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105"
          >
            {/* School Logo */}
            {/* <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4 border-4 border-[#8245ec]">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover"
              />
            </div> */}

            {/* Degree */}
            <h3 className="text-xl font-semibold text-white text-center">
              {edu.degree}
            </h3>

            {/* School name */}
            <h4 className="text-md text-gray-300 text-center">
              {edu.school}
            </h4>

            {/* Date */}
            <p className="text-sm text-gray-500 text-center mt-1">
              {edu.date}
            </p>

            {/* Grade */}
            <p className="mt-4 text-gray-400 text-center">
              <span className="font-bold text-white">Grade:</span> {edu.grade}
            </p>

            {/* Description */}
            <p className="mt-4 text-gray-400 text-center">
              {edu.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
