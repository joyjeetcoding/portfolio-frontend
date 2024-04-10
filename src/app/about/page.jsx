"use client";
import useGetAbout from "@/hooks/admin/about/useGetAbout";
import Image from "next/image";
import Education from "@/components/userView/Education";
import AnimatedText from "@/components/animatedText/AnimatedText";
import About from "@/assets/About.jpg";

const AboutPage = () => {
  const { loading, aboutbox } = useGetAbout();

  return (
    <div>
      <div className="bg-gradient-to-l from-cyan-900 to-gray-900  text-white min-h-screen">
        <>
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
                src={About}
                alt="/"
                className="max-w-sm rounded-2xl shadow-xl border border-white border-r-8 border-b-8 w-[60%] lg:w-[20%] lg:h-[90%] h-full p-4 md:w-[35%]"
              />
            </figure>

            <div id="item._id" className="font-main">
              <h1 className="text-2xl lg:text-4xl font-extrabold text-center py-5 underline text-teal-400 tracking-wider">
                WHO I AM
              </h1>
              <p className="px-6 text-sm md:text-base font-medium lg:text-lg text-center">
                Hi, My name is Joyjeet Mukherjee, a web developer with a passion
                for creating beautiful, functional, and user-centered digital
                experiences. I am always looking for new and innovative ways to
                bring my clients' visions to life. When I'm working on a
                website, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <Education />
          </>
        </>
      </div>
    </div>
  );
};

export default AboutPage;
