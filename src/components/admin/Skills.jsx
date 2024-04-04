"use client";
import useAddSkill from "@/hooks/admin/skills/useAddSkill";
import useGetSkills from "@/hooks/admin/skills/useGetSkills";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsTrash3Fill } from "react-icons/bs";
import { ImCross } from "react-icons/im";

const Skills = ({ navbar }) => {
  const [skill, setSkill] = useState("");
  const [showAddSkill, setShowAddSkill] = useState(false);

  const { skillbox } = useGetSkills();

  const { loading, addSkill } = useAddSkill();

  const handleDelete = async (id) => {
    console.log("Deleted Id: -", id);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SKILL}/${id}`, {
        method: "DELETE",
      });

      if (!res) {
        return;
      }
      toast.success("Succesfully deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleAddSkill = () => {
    setShowAddSkill(!showAddSkill);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addSkill(skill);
  };

  return (
    <div className={`${navbar ? "hidden" : "block"}`}>
      <Toaster />
      <div>
        <div className="p-2">
          <div>
            {skillbox.map((item) => (
              <div
                id={item._id}
                className="p-2 my-2 border sm:w-1/2 border-green-500 relative text-black"
              >
                <BsTrash3Fill
                  size={15}
                  className="absolute right-2 text-red-600 cursor-pointer"
                  onClick={() => handleDelete(item._id)}
                />
                <p>
                  <span className="font-semibold">Skill:</span> {item.skill}
                </p>
              </div>
            ))}
          </div>

          <button
            className={`btn ${showAddSkill ? "hidden" : "block"}`}
            onClick={handleAddSkill}
          >
            Add New Skill
          </button>
          <div
            className={`p-2 border border-green-500  relative ${
              showAddSkill ? "block" : "hidden"
            }`}
          >
            <ImCross
              size={15}
              className="absolute right-2 cursor-pointer"
              onClick={handleAddSkill}
            />
            <div>
              <h1 className="text-center text-xl font-semibold my-2">
                Post to your Skills Page
              </h1>
            </div>
            <form
              className="flex flex-col justify-center items-center"
              onSubmit={handleSubmit}
            >
              <div className="my-2">
                <input
                  type="text"
                  placeholder="Your Skill"
                  className="input input-bordered w-full max-w-xs"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                />
              </div>
              <button className="btn">
                {
                  loading ? <span className="loading loading-ring"></span> : "Submit"
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
