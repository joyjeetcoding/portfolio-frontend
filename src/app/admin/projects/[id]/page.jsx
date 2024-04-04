"use client";
import { GlobalContext } from "@/context/GlobalContext";
import useUpdateProject from "@/hooks/admin/projects/useUpdateProject";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ImCross } from "react-icons/im";

const updateProject = ({ params }) => {
  const [projectbox, setProjectbox] = useState([]);
  const { navbar } = useContext(GlobalContext);

  const router = useRouter();

  const { id } = params;

  const { updateProject } = useUpdateProject();

  const getProject = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_PROJECT}/${id}`)
      .then((item) => {
        setProjectbox(item.data);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  useEffect(() => {
    getProject();
  }, []);

  const handleInput = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setProjectbox({ ...projectbox, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateProject(
      id,
      projectbox.projectName,
      projectbox.projectDate,
      projectbox.projectDescription,
      projectbox.skillsUsed,
      projectbox.githubLink,
      projectbox.projectLink
    );
  };

  const handleCross = () => {
    router.push("/admin")
  }


  return (
    <div className={`p-2 ${navbar ? "hidden" : "block"}`}>
      <Toaster />
      <div className={`p-2 border border-green-400 relative `}>
        <ImCross size={15} className="absolute right-2 cursor-pointer" onClick={handleCross} />
        <p className="text-center font-semibold text-xl">
          Edit your Projects Page
        </p>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="my-2">
            <input
              type="text"
              placeholder="Project Name"
              className="input input-bordered w-full max-w-xs"
              name="projectName"
              value={projectbox.projectName}
              onChange={handleInput}
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Project Month & Year"
              className="input input-bordered w-full max-w-xs"
              name="projectDate"
              value={projectbox.projectDate}
              onChange={handleInput}
            />
          </div>
          <div className="">
            <textarea
              type="text"
              placeholder="Description"
              className="input input-bordered w-full max-w-xs"
              name="projectDescription"
              value={projectbox.projectDescription}
              onChange={handleInput}
            ></textarea>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Skills Used"
              className="input input-bordered w-full max-w-xs"
              name="skillsUsed"
              value={projectbox.skillsUsed}
              onChange={handleInput}
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="GitHub Link"
              className="input input-bordered w-full max-w-xs"
              name="githubLink"
              value={projectbox.githubLink}
              onChange={handleInput}
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Live Link"
              className="input input-bordered w-full max-w-xs"
              name="projectLink"
              value={projectbox.projectLink}
              onChange={handleInput}
            />
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default updateProject;
