"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import useUpdateAbout from "@/hooks/admin/about/useUpdateAbout";
import { useRouter } from "next/navigation";
import { ImCross } from "react-icons/im";
import { GlobalContext } from "@/context/GlobalContext";

const UpdateAbout = ({ params }) => {
  const [aboutbox, setAboutbox] = useState([]);
  const { id } = params;
  const { navbar } = useContext(GlobalContext);

  const router = useRouter();

  const { updateAbout } = useUpdateAbout();

  const getAboutPage = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_ABOUT}`.concat("/") + id)
      .then((item) => {
        setAboutbox(item.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInput = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    console.log(name, value);

    setAboutbox({ ...aboutbox, [name]: value });
  };

  useEffect(() => {
    getAboutPage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateAbout(id, aboutbox.about);
  };

  const handleCross = () => {
    router.push("/admin");
  };

  return (
    <div className={`p-2 ${navbar ? "hidden" : "block"}`}>
      <div className="p-2 border border-green-400 relative">
        <ImCross
          size={15}
          className="absolute right-2 cursor-pointer"
          onClick={handleCross}
        />
        <p className="text-center font-semibold text-xl">
          Edit your About Page
        </p>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="my-2">
            <textarea
              type="text"
              placeholder="About"
              className="input input-bordered w-full max-w-xs"
              name="about"
              value={aboutbox.about}
              onChange={handleInput}
            />
          </div>

          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateAbout;
