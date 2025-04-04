import React from "react";
import { Header } from "./Components/Header/headerCompo.jsx";
import "./App.css";
import { About } from "./Components/About/aboutCompo.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
import { Projects } from "./Components/Projects/projectsCompo.jsx";
import { Contact } from "./Components/Contact/contactCompo.jsx";
import { Footer } from "./Components/Footer/footerCompo.jsx";
import { ScrollToTop } from "./Components/ScrollToTop/scrolltotopCompo.jsx"

export default function App() {
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="top" className="dark">
      <section id="#home">
        <Header />
      </section>
      <main>
        <About />
        <section id="#projects">
          <Projects />
        </section>
        <section id="#contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
