"use client";
import Image from "next/image";
import Demo from "../assets/Demo.png";
import useGetTiteSummary from "@/hooks/admin/frontpage/useGetTiteSummary";
import AnimatedText from "@/components/animatedText/AnimatedText";

export default function Home() {
  const { loadingforFrontBox, frontbox } = useGetTiteSummary();

  return (
    <main className="bg-base-200">
      {loadingforFrontBox ? (
        <div className="h-screen w-full flex justify-center items-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="w-full h-screen flex flex-col lg:flex-row justify-center lg:hidden">
            <div className="lg:w-full">
              <Image
                src={Demo}
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
          <div className="hero min-h-screen bg-base-200 hidden lg:flex justify-center items-center">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
