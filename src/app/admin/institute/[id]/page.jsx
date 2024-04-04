"use client";
import { GlobalContext } from "@/context/GlobalContext";
import useUpdateInstitute from "@/hooks/admin/institute/useUpdateInstitute";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ImCross } from "react-icons/im";

const updateInstitute = ({ params }) => {
  const [institutebox, setInstitutebox] = useState([]);

  const { navbar } = useContext(GlobalContext);

  const router = useRouter();

  const { id } = params;
  const { updateInstitute } = useUpdateInstitute();

  const handleInput = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    console.log(name, value);

    setInstitutebox({ ...institutebox, [name]: value });
  };

  const getInstitutePage = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_INSTITUTE}`.concat("/") + id)
      .then((item) => {
        setInstitutebox(item.data);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  useEffect(() => {
    getInstitutePage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateInstitute(
      id,
      institutebox.instituteName,
      institutebox.insituteYear,
      institutebox.degree
    );
  };
  const handleCross = () => {
    router.push("/admin");
  };

  return (
    <div className={`p-2 ${navbar ? "hidden" : "block"}`}>
      <Toaster />
      <div className="p-2 border border-green-400 relative">
        <ImCross
          size={15}
          className="absolute right-2 cursor-pointer"
          onClick={handleCross}
        />
        <p className="text-center font-semibold text-xl">
          Edit your Institute Page
        </p>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="my-2">
            <input
              type="text"
              placeholder="Institute Name"
              className="input input-bordered w-full max-w-xs"
              name="instituteName"
              value={institutebox.instituteName}
              onChange={handleInput}
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Institute Year"
              className="input input-bordered w-full max-w-xs"
              name="insituteYear"
              value={institutebox.insituteYear}
              onChange={handleInput}
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Degree"
              className="input input-bordered w-full max-w-xs"
              name="degree"
              value={institutebox.degree}
              onChange={handleInput}
            />
          </div>

          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default updateInstitute;
