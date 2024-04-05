"use client"

import useGetInstitute from "@/hooks/admin/institute/useGetInstitute";
import { FaRegDotCircle } from "react-icons/fa";

const Details = ({ instituteName, insituteYear, degree }) => {
  return (
    <li className="py-4">
      <FaRegDotCircle />
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{instituteName}</h2>
          <p>{degree}</p>
          <span>{insituteYear}</span>
        </div>
      </div>
    </li>
  );
};

const Education = () => {

 const {institutebox} = useGetInstitute();


  return (
    <div>
      <div className="py-14">
        <h1 className="text-center text-4xl lg:text-6xl  font-main font-extrabold underline">
          ACADEMIC BACKGROUND
        </h1>

        <div className="w-[75%] mx-auto mt-4 relative">

        <div className="absolute -left-4 top-0 w-[4px] h-full bg-black origin-top lg:-left-16 md:-left-12" />

          <ul>
            {
              institutebox.map((item) => (
                <Details instituteName={item.instituteName} degree={item.degree}  insituteYear={item.insituteYear} />
              ))
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
