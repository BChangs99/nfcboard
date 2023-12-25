import { useSession, signIn, signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import styles from "../src/styles/Login.module.css";

export default function Login() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className={`${styles.container} ${styles.loadingText}`}>
        Loading...
      </div>
    );
  }

  return (
    <div className={`${styles.container} bg-gray-900`}>
      {!session ? (
        <>
          <div className="mb-8"></div>
          <button
            onClick={() => signIn("github")}
            className={`${styles.button} flex items-center justify-center bg-black hover:bg-gray-700`}
          >
            <FaGithub className="mr-2" /> Sign in with GitHub
          </button>
          <button
            onClick={() => signIn("google")}
            className={`${styles.button} flex items-center justify-center bg-black hover:bg-gray-700`}
          >
            <FcGoogle className="mr-2" /> Sign in with Google
          </button>
        </>
      ) : (
        <>
          <p
            className={`${styles.welcome} ${styles.welcomeMessage} text-white`}
          >
            {" "}
            {}
            Welcome, {session.user?.name ?? session.user?.email}!
          </p>
          <button
            onClick={() => signOut()}
            className={`${styles.button} bg-red-600 hover:bg-red-700 ${styles.signOutButton}`}
          >
            Sign out
          </button>
        </>
      )}
    </div>
  );
}
