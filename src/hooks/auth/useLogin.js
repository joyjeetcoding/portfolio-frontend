import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

function handleInputErrors(userName, password) {
  if (!userName || !password) {
    toast.error("All fields are necessary");
    return;
  }
  return true;
}

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const router = useRouter();

  const login = async (userName, password) => {
    const success = handleInputErrors(userName, password);

    if (!success) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_LOGIN}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);

      localStorage.setItem("admin-user", JSON.stringify(data));

      setAuthUser(data);
      
      router.push("/admin")
      
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;
