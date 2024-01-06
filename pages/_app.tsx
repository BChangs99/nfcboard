// pages/_app.tsx
import "../src/styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const protectedRoutes = ['/dashboard', '/tremor']; 
    if (!pageProps.session && protectedRoutes.includes(router.pathname)) {
      router.push('/login');
    }
  }, [pageProps.session, router]);

  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;