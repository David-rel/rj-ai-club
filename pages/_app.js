import '@/styles/globals.css'
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Header from '@/components/header';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from 'react';



export default function App({ Component, pageProps }) {
    useEffect(() => {
      const AOS = require("aos");
      AOS.init({
        duration: 2000,
      });
    }, []);


  return (
    <div>
      <Head>
        <title>RJ AI Engineering Club</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="./icon.png" />
      </Head>
      <Header />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
