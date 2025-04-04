import React from "react";
import { Header } from "./components/header/header.jsx";
import "./App.css";
import { About } from "./components/about/aboutCompo.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
import { Projects } from "./components/projects/projectsCompo.jsx";
import { Contact } from "./components/contact/contactCompo.jsx";
import { Footer } from "./components/footer/footerCompo.jsx";
import { ScrollToTop } from "./components/scrolltotop/scrolltotopCompo.jsx"

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
