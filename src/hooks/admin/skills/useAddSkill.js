"use client"
import { useState } from "react";
import toast from "react-hot-toast";

const useAddSkill = () => {
  const [loading, setLoading] = useState(false);

  const addSkill = async (skill) => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SKILL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ skill }),
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

  return { loading, addSkill };
};

export default useAddSkill;
