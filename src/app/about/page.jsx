"use client";
import useGetAbout from "@/hooks/admin/about/useGetAbout";
import Demo from "../../assets/Demo.png";
import Image from "next/image";
import Education from "@/components/userView/Education";
import AnimatedText from "@/components/animatedText/AnimatedText";

const AboutPage = () => {
  const { loading, aboutbox } = useGetAbout();

  return (
    <div>
      <div className="bg-base-200">
        <>
          {loading ? (
            <div className="h-screen w-full flex flex-col justify-center items-center">
              <span className="loading loading-dots loading-lg"></span>
              <p className="text-center">
                Almost there! Just a sprinkle of code magic left to unveil my
                story
              </p>
            </div>
          ) : (
            <>
              <div className="flex justify-center items-center">
                <h1 className="text-center text-4xl lg:text-6xl py-4 md:py-14 font-submain font-extrabold ">
                  <AnimatedText
                    className=" flex flex-wrap "
                    text="Code with Purpose, Design with Heart"
                  />
                </h1>
              </div>
              <figure className="flex justify-center items-center ">
                <Image
                  src={Demo}
                  alt="/"
                  className="max-w-sm rounded-2xl shadow-xl border border-black border-r-8 border-b-8 w-[60%] lg:w-[20%] lg:h-[90%] h-full p-4 md:w-[35%]"
                />
              </figure>
              {aboutbox.map((item) => (
                <div id="item._id" className="font-main">
                  <h1 className="text-2xl lg:text-4xl font-extrabold text-center py-5 underline">
                    WHO I AM
                  </h1>
                  <p className="px-6 text-sm md:text-base font-medium lg:text-lg text-center">
                    {item.about}
                  </p>
                </div>
              ))}
              <Education />
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default AboutPage;
