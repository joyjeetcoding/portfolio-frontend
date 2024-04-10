"use client";

import { FaRegDotCircle } from "react-icons/fa";

const Details = ({ instituteName, insituteYear, degree }) => {
  return (
    <li className="py-4">
      <FaRegDotCircle size={30} className="absolute -left-7 lg:-left-20 md:translate-x-1 md:-left-[4rem]" />
      <div className="card bg-gradient-to-l from-teal-800 to-sky-900 text-white shadow-xl">
        <div className="card-body font-submain">
          <h2 className="card-title text-sm md:text-base lg:text-xl tracking-wide">{instituteName}</h2>
          <p className="text-xs md:text-sm lg:text-lg tracking-wide">{degree}</p>
          <span className="text-xs md:text-sm lg:text-lg tracking-wide">{insituteYear}</span>
        </div>
      </div>
    </li>
  );
};

const Education = () => {

  return (
    <div>
      <div className="py-14">
        <h1 className="text-center text-2xl md:text-4xl  font-main tracking-wider font-extrabold underline text-teal-400">
          ACADEMIC BACKGROUND
        </h1>

        <div className="w-[75%] mx-auto mt-4 relative">
          <div className="absolute -left-4 top-0 w-[4px] h-full bg-white origin-top lg:-left-16 md:-left-12" />

          <ul>
            
              <Details
                instituteName="Asansol Engineering College"
                degree="Bachelor of Technology in Computer Science & Engineering"
                insituteYear="2021 - 2025"
              />
              <Details
                instituteName="India International School"
                degree="All India Senior School Certificate Examination"
                insituteYear="2019 - 2020"
              />
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
