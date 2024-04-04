"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useUpdateAbout = () => {
  const router = useRouter();
  const updateAbout = async (id, about) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_ABOUT}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ about }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      router.push("/admin")

      toast.success("Updated Successfully");
      return true;
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { updateAbout };
};

export default useUpdateAbout;
