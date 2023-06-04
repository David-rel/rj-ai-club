import '@/styles/globals.css'
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Header from '@/components/header';


export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>AI-Engineering-Club</title>
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
