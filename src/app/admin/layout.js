"use client";

import Navbar from "@/components/admin/Navbar/Navbar";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function layout({children}) {
  const { authUser } = useAuthContext();

  const router = useRouter();

  return (
    <main>
      {
        authUser ? <Navbar /> : null
      }
      
      {children}
    </main>
  );
}
