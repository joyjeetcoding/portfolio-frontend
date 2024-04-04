"use client";
import { useAuthContext } from "@/context/AuthContext";
import useLogout from "@/hooks/auth/useLogout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const { authUser } = useAuthContext();
  const router = useRouter();
  const { logout, loading } = useLogout();

  useEffect(() => {
    if (!authUser) {
      router.push("/admin/login");
    }
  }, [authUser, router]);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="">
      <button className="btn" onClick={handleLogout}>
        {loading ? <span className="loading loading-dots"></span> : "Logout"}
      </button>
    </div>
  );
};

export default page;
