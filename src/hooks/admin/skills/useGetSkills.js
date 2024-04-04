"use client"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const useGetSkills = () => {
    const [skillbox, setSkillbox] = useState([]);

    useEffect(() => {
      const getSkills = async () => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_SKILL}`);
  
          const data = await res.json();
  
          if (data.error) {
            toast.error(data.error);
          }
  
          setSkillbox(data);
        } catch (error) {
          toast.error(error.message);
        }
      };
  
      getSkills();
    }, [skillbox]);
  
    return { skillbox };
}

export default useGetSkills