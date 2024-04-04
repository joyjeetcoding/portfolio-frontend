"use client";
import Image from "next/image";
import Demo from "../assets/Demo.png";
import useGetTiteSummary from "@/hooks/admin/frontpage/useGetTiteSummary";
import AnimatedText from "@/components/animatedText/AnimatedText";

export default function Home() {
  const { loadingforFrontBox, frontbox } = useGetTiteSummary();

  return (
    <main className="">
      {loadingforFrontBox ? (
        <div className="h-screen w-full flex justify-center items-center">

          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <div className=" w-full lg:flex">
          <div className="lg:w-full">
            <Image
              src={Demo}
              className="mx-auto w-[55%] h-[70%] md:w-[35%] lg:w-[60%] lg:h-[90%]"
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
                <p className="text-sm md:text-2xl lg:text-lg py-4">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
