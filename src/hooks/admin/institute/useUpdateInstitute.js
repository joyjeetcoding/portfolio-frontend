"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useUpdateInstitute = () => {
  const router = useRouter();

  const updateInstitute = async (id, instituteName, insituteYear, degree) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_INSTITUTE}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ instituteName, insituteYear, degree }),
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

  return { updateInstitute };
};

export default useUpdateInstitute;
