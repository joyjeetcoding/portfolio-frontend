"use client";
import { useAuthContext } from "@/context/AuthContext";
import useLogin from "@/hooks/auth/useLogin";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useLogin();
  const { authUser } = useAuthContext();
  const router = useRouter();

  console.log(userName);
  console.log(password);

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(userName, password);
  };

  useEffect(() => {
    if (authUser) {
      router.push("/admin");
    }
  }, [authUser, router]);

  return (
    <div className="relative h-screen w-full">
      <Toaster />
      <form
        onSubmit={handleLogin}
        className="absolute flex top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 justify-center items-center flex-col "
      >
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="btn w-full my-2">
          {loading ? <span className="loading loading-dots"></span> : "Login"}
        </button>
      </form>
    </div>
  );
}
