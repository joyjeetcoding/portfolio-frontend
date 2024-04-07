"use client";
import Image from "next/image";
import Demo from "../assets/Demo.png";
import useGetTiteSummary from "@/hooks/admin/frontpage/useGetTiteSummary";
import AnimatedText from "@/components/animatedText/AnimatedText";
import { useRouter } from "next/navigation";
import About from "@/assets/About.png"


export default function Home() {
  const { loadingforFrontBox, frontbox } = useGetTiteSummary();

  const router = useRouter()

  return (
    <main className="bg-gradient-to-l from-cyan-900 to-gray-900 text-white">
      {loadingforFrontBox ? (
        <div className="h-screen w-full flex flex-col justify-center items-center">
          <span className="loading loading-dots loading-lg"></span>
          <p className="text-center p-2">Just a moment! Preparing to welcome you to my digital haven</p>
        </div>
      ) : (
        <>
          {/* For Mobile devices Tablets */}
          <div className="w-full bg-gradient-to-l from-cyan-900 to-gray-900 text-white h-screen flex flex-col lg:flex-row justify-center lg:hidden">
            <div className="lg:w-full">
              <Image
                src={About}
                className="mx-auto w-[55%] h-full  md:w-[35%] lg:w-[60%] lg:h-[90%]"
              />
            </div>
            <div className="font-main text-center lg:text-left p-4 my-3 lg:relative lg:w-[80%]">
              {frontbox.map((item) => (
                <div
                  id={item._id}
                  className="lg:absolute top-[20%] lg:flex flex-col items-center"
                >
                  <AnimatedText
                    text={item.title}
                    className="self-center text-2xl font-bold md:text-5xl lg:text-7xl  flex justify-center items-center flex-wrap lg:justify-normal"
                  />
                  <p className="text-sm md:text-2xl lg:text-lg py-4 lg:pr-5 px-5 lg:px-0">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* For other devices like laptop TV */}
          <div className="hero min-h-screen bg-gradient-to-l from-cyan-900 to-gray-900 text-white hidden lg:flex justify-center items-center">
            <div className="hero-content flex-col lg:flex-row">
              <Image src={About} className="max-w-sm rounded-lg shadow-2xl" />
              {frontbox.map((item) => (
                <div id={item._id}>
                  <AnimatedText
                    text={item.title}
                    className="self-center text-2xl font-bold md:text-5xl lg:text-7xl  flex justify-center items-center flex-wrap lg:justify-normal"
                  />
                  {/* <h1 className="text-5xl font-bold">Box Office News!</h1> */}
                  <p className="text-sm tracking-wider md:text-2xl lg:text-lg py-4 lg:pr-5 px-5 lg:px-0">
                    {item.summary}
                  </p>
                  <button onClick={() => router.push("/contact")} className="btn btn-primary tracking-wide">Reach Me Here</button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
