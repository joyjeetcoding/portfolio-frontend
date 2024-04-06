"use client"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const useGetSkills = () => {
    const [skillbox, setSkillbox] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
      const getSkills = async () => {
        setLoading(true)
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_SKILL}`);
  
          const data = await res.json();
  
          if (data.error) {
            toast.error(data.error);
          }
  
          setSkillbox(data);
        } catch (error) {
          toast.error(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      getSkills();
    }, []);
  
    return { loading, skillbox };
}

export default useGetSkills