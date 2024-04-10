"use client";
import Image from "next/image";
import AnimatedText from "@/components/animatedText/AnimatedText";
import { useRouter } from "next/navigation";
import Hero2 from "@/assets/Hero2.png";

export default function Home() {
  const router = useRouter();

  return (
    <main className="bg-gradient-to-l from-cyan-900 to-gray-900 text-white">
      <>
        {/* For Mobile devices Tablets */}
        <div className="w-full bg-gradient-to-l from-cyan-900 to-gray-900 text-white h-screen flex flex-col lg:flex-row justify-center lg:hidden">
          <div className="lg:w-full">
            <Image
              src={Hero2}
              className="mx-auto w-[55%] h-full  md:w-[35%] lg:w-[60%] lg:h-[90%]"
            />
          </div>
          <div className="font-main text-center lg:text-left p-4 my-3 lg:relative lg:w-[80%]">
            <div className="lg:absolute top-[20%] lg:flex flex-col items-center">
              <AnimatedText
                text="I am a MERN Stack Developer"
                className=" text-2xl font-bold md:text-5xl lg:text-7xl  flex justify-center items-center flex-wrap lg:justify-normal"
              />
              <p className="text-sm md:text-2xl lg:text-lg py-4 lg:pr-5 px-5 lg:px-0">
                As a skilled MERN Stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my projects,
                showcasing my expertise in React.js, Next.js and much more.
              </p>
              <button
                onClick={() => router.push("/contact")}
                className="btn btn-primary tracking-wide"
              >
                Reach Me Here
              </button>
            </div>
          </div>
        </div>

        {/* For other devices like laptop TV */}
        <div className="hero min-h-screen bg-gradient-to-l from-cyan-900 to-gray-900 text-white hidden lg:flex justify-center items-center">
          <div className="hero-content flex-col lg:flex-row">
            <Image src={Hero2} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <AnimatedText
                text="I am a MERN Stack Developer"
                className=" text-2xl font-bold md:text-5xl lg:text-7xl flex justify-center items-center flex-wrap lg:justify-normal"
              />
              {/* <h1 className="text-5xl font-bold">Box Office News!</h1> */}
              <p className="text-sm tracking-wider md:text-2xl lg:text-lg py-4 lg:pr-5 px-5 lg:px-0">
                As a skilled MERN Stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my projects,
                showcasing my expertise in React.js, Next.js and much more.
              </p>
              <button
                onClick={() => router.push("/contact")}
                className="btn btn-primary tracking-wide"
              >
                Reach Me Here
              </button>
            </div>
          </div>
        </div>
      </>
    </main>
  );
}
