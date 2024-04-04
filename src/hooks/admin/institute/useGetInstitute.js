import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetInstitute = () => {
  const [loadingforinstitutebox, setLoading] = useState(false);

  const [institutebox, setInstitutebox] = useState([]);


  useEffect(() => {
    const getInstitutepage = async () => {
      setLoading(true);

      try {
        // Go to the next.config.mjs and specify the url that is localhost:5000
        const res = await fetch(`${process.env.NEXT_PUBLIC_INSTITUTE}`);

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setInstitutebox(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getInstitutepage();
  }, [institutebox]);

  return {  institutebox };
};

export default useGetInstitute;
