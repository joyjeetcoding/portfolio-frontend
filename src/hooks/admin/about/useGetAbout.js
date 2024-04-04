import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetAbout = () => {
  const [aboutbox, setAboutBox] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAbout = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/about`);

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setAboutBox(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getAbout();
  }, [aboutbox]);

  return { loading, aboutbox };
};

export default useGetAbout;
