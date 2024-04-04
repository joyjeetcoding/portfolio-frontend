"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetContact = () => {
  const [contactbox, setContactBox] = useState([]);
  useEffect(() => {
    const getContact = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_CONTACT}`);

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setContactBox(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    getContact();
  }, [contactbox]);

  return { contactbox };
};

export default useGetContact;
