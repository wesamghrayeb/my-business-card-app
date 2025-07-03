import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "bulma/css/bulma.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:800,700,600|Poppins:400,700,900|Inter:400,700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
