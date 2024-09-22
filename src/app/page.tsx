import FourthSection from "./components/FourthSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Secondsection from "./components/Secondsection";
import Shopnow from "./components/Shopnow";
import ThirdSection from "./components/ThirdSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="space-y-4">
        <Shopnow />
        <Hero />
        <Secondsection />
        <ThirdSection />
        <FourthSection />
      </div>
    </>
  );
}
