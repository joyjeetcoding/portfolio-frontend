"use client"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetProjects = () => {
  const [projectbox, setProjectbox] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_PROJECT}`);

        const data = await res.json();

        if (data.error) {
          toast.error(data.error);
        }

        setProjectbox(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    getProjects();
  }, [projectbox]);

  return { projectbox };
};

export default useGetProjects;
