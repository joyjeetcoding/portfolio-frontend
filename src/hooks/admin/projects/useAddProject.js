import { useState } from "react";
import toast from "react-hot-toast";

const useAddProject = () => {
  const [loading, setLoading] = useState(false);

  const addProject = async (
    projectName,
    projectDate,
    projectDescription,
    skillsUsed,
    githubLink,
    projectLink
  ) => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PROJECT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectName,
          projectDate,
          projectDescription,
          skillsUsed,
          githubLink,
          projectLink,
        }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      toast.success("Project Added Successfully");

      return true;
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, addProject };
};

export default useAddProject;
