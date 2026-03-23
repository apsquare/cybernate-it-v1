import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowWePlugIn from "../components/HowWePlugIn";
import Process from "../components/Process";
import Footer from "../components/Footer/Footer";
import HowWeWorkWithYou from "../components/HowWeWorkWithYou";
import Learning from "../components/Learning";
import ScrollReveal from "../components/Scrolling/ScrollReveal";

import Button from "../components/Button";
function Home() {
  return (
    <div>
      <>
        <Hero />
        <HowWeWorkWithYou></HowWeWorkWithYou>
        <Process />
        <HowWePlugIn></HowWePlugIn>
        <Learning></Learning>

        <Footer></Footer>
      </>
    </div>
  );
}

export default Home;
