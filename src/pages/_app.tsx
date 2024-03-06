import React from 'react'
import { unbounded } from "@/fonts/fonts";
import "nprogress/nprogress.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import Router from 'next/router';


export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();
 
    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);
 
    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);
  return <div className={unbounded.className}><Component {...pageProps} /></div>;
}
