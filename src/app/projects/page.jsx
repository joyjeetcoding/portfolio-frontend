"use client";
import useGetSkills from "@/hooks/admin/skills/useGetSkills";
import Image from "next/image";
import Skills from "@/assets/Skills.png";
import useGetSkills from "@/hooks/admin/skills/useGetSkills";
import AnimatedText from "@/components/animatedText/AnimatedText";
import ProjectsPageUserView from "@/components/userView/ProjectsPageUserView";

const ProjectsPage = () => {
  const { loading, skillbox } = useGetSkills();

  return (
    <div className="bg-gradient-to-l from-cyan-900 to-gray-900 text-white  min-h-screen">
      {loading ? (
        <div className="h-screen w-full flex flex-col justify-center items-center">
          <span className="loading loading-dots loading-lg"></span>
          <p className="text-center px-4">
            Fueling creativity... Just a few more seconds for greatness!
          </p>
        </div>
      ) : (
        <>
          <div className="">
            <div className="flex items-center justify-center">
              <h1 className=" text-4xl lg:text-6xl py-4 md:py-14 font-submain font-extrabold">
                <AnimatedText
                  text="Skills Pave the Way, Projects Steal the Show!"
                  className="flex flex-wrap"
                />
              </h1>
            </div>
            <div className="md:flex justify-between flex-row-reverse lg:mx-20">
              <div className="hidden md:block ">
                <Image
                  src={Skills}
                  alt="/"
                  className="p-4 md:max-w-sm lg:max-w-screen-lg"
                />
              </div>
              <div className="flex justify-center items-center flex-wrap md:max-w-xs lg:max-w-md px-4">
                {skillbox.map((item) => (
                  <button className="btn mx-1 my-1 text-sm bg-gradient-to-l from-teal-800 to-sky-900 text-white">
                    {item.skill}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <ProjectsPageUserView />
        </>
      )}
    </div>
  );
};

export default ProjectsPage;
