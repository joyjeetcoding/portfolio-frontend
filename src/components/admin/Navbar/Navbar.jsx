"use client"
import { useContext, useState } from "react";
import About from "../About";
import Contact from "../Contact";
import FrontPage from "../FrontPage";
import Institute from "../Institute";
import Projects from "../Projects";
import Skills from "../Skills";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { GlobalContext } from "@/context/GlobalContext";

const Navbar = () => {
  const [currentselectedTab, setSelectedTab] = useState("admin-home");
  // const [navbar, setNavbar] = useState(false);
  const { handleNav, navbar } = useContext(GlobalContext);
  const menuItem = [
    {
      id: "admin-home",
      name: "FrontPage",
      component: <FrontPage navbar={navbar} />,
    },
    {
      id: "admin-about",
      name: "About",
      component: <About navbar={navbar} />,
    },
    {
      id: "admin-institute",
      name: "Institute",
      component: <Institute navbar={navbar} />,
    },
    {
      id: "admin-skills",
      name: "Skills",
      component: <Skills navbar={navbar} />,
    },
    {
      id: "admin-projects",
      name: "Projects",
      component: <Projects navbar={navbar} />,
    },
    {
      id: "admin-contact",
      name: "Contact",
      component: <Contact navbar={navbar} />,
    },
  ];

  // const handleNav = () => {
  //   setNavbar(!navbar);
  // };

  return (
    <div>
      {/* Mobile Navbar */}
      <div className="sm:hidden">
        <div
          className={`bg-black p-2 ${
            navbar
              ? "transition ease-in-out duration-500"
              : "bg-transparent transition ease-in-out duration-500"
          }`}
        >
          {!navbar ? (
            <GiHamburgerMenu
              size={30}
              onClick={handleNav}
              className="cursor-pointer sm:hidden  sm:text-black "
            />
          ) : (
            <ImCross
              size={30}
              onClick={handleNav}
              className="cursor-pointer sm:hidden text-white sm:text-black "
            />
          )}
        </div>
        <div
          className={` sm:bg-transparent absolute sm:w-0 sm:h-0 ${
            navbar
              ? "bg-black w-full h-screen transition ease-in-out duration-500"
              : "bg-transparent static w-0 h-0 transition ease-in-out duration-500"
          }`}
        >
          <ul
            className={`flex flex-col  absolute top-1/2 left-1/2 sm:-translate-x-[100%] -translate-x-1/2 -translate-y-1/2  ${
              navbar
                ? "block transition ease-in-out duration-500"
                : "hidden transition ease-in-out duration-500"
            }`}
          >
            <div className="flex flex-col" onClick={handleNav}>
              {menuItem.map((item) => (
                <li
                  key={item.id}
                  className="mx-auto cursor-pointer btn my-2 sm:text-xl"
                  onClick={() => setSelectedTab(item.id)}
                >
                  {item.name}
                </li>
              ))}
            </div>
          </ul>
        </div>
        <div>
          {/* If the item.id is equal to the currentSelectedTab then we will render the component */}
          {menuItem.map(
            (item) => item.id === currentselectedTab && item.component
          )}
        </div>
      </div>
      {/* Ends here Mobile Navbar */}

      {/* Other Devices other than mobile */}

      <div className="hidden sm:block">
        <div>
          <ul className="flex flex-row">
            {menuItem.map((item) => (
              <li
                key={item.id}
                className="mx-auto cursor-pointer btn my-2 sm:text-xl"
                onClick={() => setSelectedTab(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {menuItem.map(
            (item) => item.id === currentselectedTab && item.component
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
