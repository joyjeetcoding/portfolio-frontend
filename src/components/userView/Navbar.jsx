"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const CustomLinkforMobile = ({ href, title, className = "", nav }) => {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`${className} relative group`}
      onClick={() => nav()}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathName.startsWith(href) && href !== "/" ? "w-full" : "w-0"
        }`}
      ></span>
    </Link>
  );
};

const CustomLinkforOtherDevices = ({ href, title, className = ""}) => {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`${className} relative group`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathName.startsWith(href) && href !== "/" ? "w-full" : "w-0"
        }`}
      ></span>
    </Link>
  );
};


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="font-submain lg:font-main font-semibold lg:font-bold w-full relative px-2 py-4 lg:navbar">
      {/* Other devices view */}
      <div className="hidden lg:flex justify-between w-full relative navbar">
        <div className="absolute left-10">
          <nav className="flex text-xl justify-center items-center">
            <CustomLinkforOtherDevices
              href={"/"}
              title="Home"
              className="mx-8 my-4"
            />
            <CustomLinkforOtherDevices
              href={"/about"}
              title="About"
              className="mx-8 my-4"
            />
            <CustomLinkforOtherDevices
              href={"/projects"}
              title="Projects"
              className="mx-8 my-4"
            />
            <CustomLinkforOtherDevices
              href={"/contact"}
              title="Contact"
              className="mx-8 my-4"
            />
          </nav>
        </div>
        <div className="absolute right-10">
        <nav className="flex flex-row mx-4">
          <motion.a
            whileHover={{ y: -3 }}
            drag="y"
            href={"https://github.com/joyjeetcoding"}
            target={"_blank"}
            className="mx-6"
          >
            <FaGithub size={28} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            drag="y"
            href={"https://www.linkedin.com/in/joyjeet-mukherjee-48b298206/"}
            target={"_blank"}
            className="mx-6"
          >
            <FaLinkedin size={28} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            drag="y"
            href={"https://twitter.com/Mr_Mukherjee_"}
            target={"_blank"}
            className="mx-6"
          >
            <FaSquareXTwitter size={28} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            drag="y"
            href={"https://www.instagram.com/_mr__mukherjee__/"}
            target={"_blank"}
            className="mx-6"
          >
            <FaInstagram size={28} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            drag="y"
            href={"https://www.facebook.com/joyjeet.mukherjee.92"}
            target={"_blank"}
            className="mx-6"
          >
            <FaFacebook size={28} />
          </motion.a>
        </nav>
        </div>
      </div>

      {/* Other devices view Ends here */}

      {/* Mobile View Starts */}
      <button
        className="flex flex-col justify-center items-center lg:hidden"
        onClick={handleNav}
      >
        <span
          className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            nav ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            nav ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            nav ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div
        className={`fixed flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-xl md:w-[50%] border border-black backdrop-blur-md shadow-2xl py-10 lg:hidden ${
          nav ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col  text-xl justify-center items-center">
          <CustomLinkforMobile
            href={"/"}
            title="Home"
            className="mx-4 my-4"
            nav={handleNav}
          />
          <CustomLinkforMobile
            href={"/about"}
            title="About"
            className="mx-4 my-4"
            nav={handleNav}
          />
          <CustomLinkforMobile
            href={"/projects"}
            title="Projects"
            className="mx-4 my-4"
            nav={handleNav}
          />
          <CustomLinkforMobile
            href={"/contact"}
            title="Contact"
            className="mx-4 my-4"
            nav={handleNav}
          />
        </nav>
        <nav className="flex flex-row">
          <motion.a
            whileHover={{ y: -3 }}
            drag="y"
            href={"https://github.com/joyjeetcoding"}
            target={"_blank"}
            className="px-2"
          >
            <FaGithub size={25} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            drag="y"
            href={"https://www.linkedin.com/in/joyjeet-mukherjee-48b298206/"}
            target={"_blank"}
            className="px-2"
          >
            <FaLinkedin size={25} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            drag="y"
            href={"https://twitter.com/Mr_Mukherjee_"}
            target={"_blank"}
            className="px-2"
          >
            <FaSquareXTwitter size={25} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            drag="y"
            href={"https://www.instagram.com/_mr__mukherjee__/"}
            target={"_blank"}
            className="px-2"
          >
            <FaInstagram size={25} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            drag="y"
            href={"https://www.facebook.com/joyjeet.mukherjee.92"}
            target={"_blank"}
            className="px-2"
          >
            <FaFacebook size={25} />
          </motion.a>
        </nav>
      </div>
      {/* ?Mobile View Ends */}
    </header>
  );
};

export default Navbar;
