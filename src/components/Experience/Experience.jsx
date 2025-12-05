// import React from "react";
// import { experiences } from "../../constants"; // Your data

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 px-[8vw] font-sans bg-skills-gradient clip-path-custom-2"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A collection of my work experience and roles I have taken.
//         </p>
//       </div>

//       {/* GRID layout */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//         {experiences.map((experience) => (
//           <div
//             key={experience.id}
//             className="p-6 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105"
//           >
//             {/* Top Image */}
//             <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4 border-4 border-[#8245ec]">
//               <img
//                 src={experience.img}
//                 alt={experience.company}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Title */}
//             <h3 className="text-xl font-semibold text-white text-center">
//               {experience.role}
//             </h3>

//             <h4 className="text-md text-gray-300 text-center">
//               {experience.company}
//             </h4>

//             <p className="text-sm text-gray-500 text-center mt-1">
//               {experience.date}
//             </p>

//             <p className="mt-4 text-gray-400 text-center">{experience.desc}</p>

//             {/* Skills */}
//             <div className="mt-4">
//               <h5 className="font-medium text-white text-center">Skills:</h5>
//               <ul className="flex flex-wrap justify-center mt-2">
//                 {experience.skills.map((skill, index) => (
//                   <li
//                     key={index}
//                     className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs rounded-lg mr-2 mb-2 border border-gray-400"
//                   >
//                     {skill}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;
