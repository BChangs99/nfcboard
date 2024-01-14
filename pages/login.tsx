import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn, signOut } from "next-auth/react";

const Login: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      {!session ? (
        <>
          <h1 className="text-white text-3xl mb-10 font-semibold">Log-in</h1>
          <button
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            className="my-3 px-6 py-5 border border-gray-600 rounded text-white cursor-pointer bg-black hover:bg-gray-700 flex items-center justify-center text-lg"
          >
            <FaGithub className="mr-4" style={{ fontSize: "1.5em" }} /> GitHub
          </button>
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="my-3 px-6 py-5 border border-gray-600 rounded text-white cursor-pointer bg-black hover:bg-gray-700 flex items-center justify-center text-lg"
          >
            <FcGoogle className="mr-4" style={{ fontSize: "1.5em" }} /> Google
          </button>
        </>
      ) : (
        <>
          <p className="text-green-400 italic my-5 text-xl">
            Welcome, {session.user?.name ?? session.user?.email}!
          </p>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="bg-red-600 hover:bg-red-700 my-3 px-10 py-4 rounded text-white cursor-pointer text-lg"
          >
            Sign out
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
