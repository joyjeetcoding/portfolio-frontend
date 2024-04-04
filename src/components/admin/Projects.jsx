"use client";
import useAddProject from "@/hooks/admin/projects/useAddProject";
import useGetProjects from "@/hooks/admin/projects/useGetProjects";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsTrash3Fill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Projects = ({ navbar }) => {
  const { projectbox } = useGetProjects();
  const [showAddProject, setShowAddProject] = useState(false);
  const [projectName, setprojectName] = useState("");
  const [projectDate, setprojectDate] = useState("");
  const [projectDescription, setprojectDescription] = useState("");
  const [skillsUsed, setskillsUsed] = useState("");
  const [githubLink, setgithubLink] = useState("");
  const [projectLink, setprojectLink] = useState("");

  const { loading, addProject } = useAddProject();

  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PROJECT}/${id}`, {
        method: "DELETE",
      });

      if (!res) {
        return;
      }

      toast.success("Successfully deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleAddProject = () => {
    setShowAddProject(!showAddProject);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addProject(
      projectName,
      projectDate,
      projectDescription,
      skillsUsed,
      githubLink,
      projectLink
    );
  };

  return (
    <div className={`${navbar ? "hidden" : "block"}`}>
      <Toaster />
      <div>
        <div className="p-2">
          <div>
            {projectbox.map((item) => (
              <div
                id={`${item._id}`}
                className="p-2 my-2 border sm:w-1/2 border-green-500 relative text-black"
              >
                <Link href={`/admin/projects/${item._id}`}>
                  <FaEdit
                    size={15}
                    className="absolute right-8 cursor-pointer"
                  />
                </Link>
                <BsTrash3Fill
                  size={15}
                  className="absolute right-2 text-red-600 cursor-pointer"
                  onClick={() => handleDelete(item._id)}
                />
                <p>
                  <span className="font-semibold">Project Name:</span>{" "}
                  {item.projectName}
                </p>
                <p>
                  <span className="font-semibold">Project Month & Year:</span>{" "}
                  {item.projectDate}
                </p>
                <p>
                  <span className="font-semibold">Description:</span>{" "}
                  {item.projectDescription}
                </p>
                <p>
                  <span className="font-semibold">Skills Used:</span>{" "}
                  {item.skillsUsed}
                </p>
                <p>
                  <span className="font-semibold">GitHub Link:</span>{" "}
                  <a
                    href={`${item.githubLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    {item.githubLink}
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Live Link:</span>{" "}
                  <a
                    href={`${item.projectLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    {item.projectLink}
                  </a>
                </p>
              </div>
            ))}

            <button
              className={`btn ${showAddProject ? "hidden" : "block"}`}
              onClick={handleAddProject}
            >
              Add New Project
            </button>
            <div
              className={`p-2 border border-green-500  relative ${
                showAddProject ? "block" : "hidden"
              }`}
            >
              <ImCross
                size={15}
                className="absolute right-2 cursor-pointer"
                onClick={handleAddProject}
              />
              <div>
                <h1 className="text-center text-xl font-semibold my-2">
                  Post to your Projects Page
                </h1>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                <div className="my-2">
                  <input
                    type="text"
                    placeholder="Project Name"
                    className="input input-bordered w-full max-w-xs"
                    value={projectName}
                    onChange={(e) => setprojectName(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <input
                    className="textarea textarea-bordered text-sm textarea-lg"
                    placeholder="Project Month & Year"
                    value={projectDate}
                    onChange={(e) => setprojectDate(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <textarea
                    className="textarea textarea-bordered text-sm textarea-lg"
                    placeholder="Description"
                    value={projectDescription}
                    onChange={(e) => setprojectDescription(e.target.value)}
                  ></textarea>{" "}
                </div>
                <div className="mb-2">
                  <input
                    className="textarea textarea-bordered text-sm textarea-lg"
                    placeholder="Skills Used"
                    value={skillsUsed}
                    onChange={(e) => setskillsUsed(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <input
                    className="textarea textarea-bordered text-sm textarea-lg"
                    placeholder="GitHub Link"
                    value={githubLink}
                    onChange={(e) => setgithubLink(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <input
                    className="textarea textarea-bordered text-sm textarea-lg"
                    placeholder="Live Link"
                    value={projectLink}
                    onChange={(e) => setprojectLink(e.target.value)}
                  />
                </div>
                <button className="btn">
                  {
                    loading ? <span className="loading loading-dots"></span> : "Submit"
                  }
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
