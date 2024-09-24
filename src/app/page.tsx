import Footer from "./components/Footer";
import FourthSection from "./components/FourthSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Secondsection from "./components/Secondsection";
import Shopnow from "./components/Shopnow";
import ThirdSection from "./components/ThirdSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="space-y-4">
        <Shopnow />
        <Hero />
        <Secondsection />
        <ThirdSection />
        <FourthSection />
        <Footer />
      </div>
    </>
  );
}
