import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../src/styles/Login.module.css";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading</div>;
  }

  return (
    <div className={styles.container}>
      {!session ? (
        <>
          <button className={styles.button} onClick={() => signIn("github")}>
            <FaGithub /> Sign in with GitHub
          </button>
          <button className={styles.button} onClick={() => signIn("google")}>
            <FcGoogle /> Sign in with Google
          </button>
        </>
      ) : (
        <>
          <p className={styles.welcome}>
            Welcome, {session.user?.name ?? session.user?.email}!
          </p>
          <button className={styles.button} onClick={() => signOut()}>
            Sign out
          </button>
        </>
      )}
    </div>
  );
}
