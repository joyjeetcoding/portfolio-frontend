import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useUpdateProject = () => {
  const router = useRouter();

  const updateProject = async (
    id,
    projectName,
    projectDate,
    projectDescription,
    skillsUsed,
    githubLink,
    projectLink
  ) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PROJECT}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectName, projectDate, projectDescription, skillsUsed, githubLink, projectLink }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      router.push("/admin");

      toast.success("Updated Successfully");
      return true;
    } catch (error) {
      toast.error(error.message);
    }
  };
  return { updateProject };
};

export default useUpdateProject;
