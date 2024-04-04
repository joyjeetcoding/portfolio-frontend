import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useSingleFront = () => {
  const [frontbox, setFrontbox] = useState([]);

  const getFrontPage = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/admin/frontpage/${id}`);

      const data = await res.json();


      if (data.error) {
        throw new Error(data.error);
      }

      setFrontbox(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { frontbox, getFrontPage };
};

export default useSingleFront;
