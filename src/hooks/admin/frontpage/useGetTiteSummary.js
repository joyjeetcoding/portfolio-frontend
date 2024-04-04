import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetTiteSummary = () => {
  const [loadingforFrontBox, setLoading] = useState(false);

  const [frontbox, setFrontbox] = useState([]);


  useEffect(() => {
    const getFrontPage = async () => {
      setLoading(true);

      try {
        // Go to the next.config.mjs and specify the url that is localhost:5000
        const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTPAGE}`);

        const data = await res.json();


        if (data.error) {
          throw new Error(data.error);
        }

        setFrontbox(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getFrontPage();
  }, []);

  return { loadingforFrontBox, frontbox };
};

export default useGetTiteSummary;
