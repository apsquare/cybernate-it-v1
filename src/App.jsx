import { Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import Services from "./components/ServiceComp/Services";
import CaseStudy from "./components/CaseStudy";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import ScrollToTop from "./components/Support/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Services" element={<Services></Services>}></Route>
        <Route path="/CaseStudy" element={<CaseStudy></CaseStudy>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/About" element={<About></About>}></Route>
      </Routes>
    </>
  );
}

export default App;
