"use client";
import { useState } from "react";
import toast from "react-hot-toast";

const useFrontPageSubmit = () => {
  const [loading, setLoading] = useState(false);

  const frontPageSubmit = async (title, summary) => {
    try {
      const res = await fetch("/api/admin/frontpage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, summary }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }


      toast.success("Successfully changed")
      return true;
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, frontPageSubmit };
};

export default useFrontPageSubmit;
