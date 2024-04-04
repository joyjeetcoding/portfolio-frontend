"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useUpdateFront = () => {
  const router = useRouter();
  const updateFront = async (id, title, summary) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTPAGE}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, summary }),
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

  return { updateFront };
};

export default useUpdateFront;
