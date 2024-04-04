"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import useUpdateFront from "@/hooks/admin/frontpage/useUpdateFront";
import { useRouter } from "next/navigation";
import { ImCross } from "react-icons/im";
import { GlobalContext } from "@/context/GlobalContext";

const UpdateFrontPage = ({ params }) => {
  const [frontbox, setFrontbox] = useState([]);
  const { navbar } = useContext(GlobalContext);


  const router = useRouter();
  const { id } = params;

  const { updateFront } = useUpdateFront();

  const getFrontPage = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_FRONTPAGE}`.concat("/") + id)
      .then((item) => {
        setFrontbox(item.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInput = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    console.log(name, value);

    setFrontbox({ ...frontbox, [name]: value });
  };

  useEffect(() => {
    getFrontPage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateFront(id, frontbox.title, frontbox.summary);
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
        <p className="text-center font-semibold text-xl">Edit your frontpage</p>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="my-2">
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full max-w-xs"
              name="title"
              value={frontbox.title}
              onChange={handleInput}
            />
          </div>
          <div className="">
            <textarea
              className="textarea textarea-bordered text-sm textarea-lg"
              placeholder="Summary"
              name="summary"
              value={frontbox.summary}
              onChange={handleInput}
            ></textarea>
          </div>

          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateFrontPage;
