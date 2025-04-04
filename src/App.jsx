import React from "react";
import { Header } from "./Components/Header/header.jsx";
import "./App.css";
import { About } from "./Components/About/about.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
import { Projects } from "./Components/Projects/projects.jsx";
import { Contact } from "./Components/Contact/contact.jsx";
import { Footer } from "./Components/Footer/footer.jsx";
import { ScrollToTop } from "./Components/ScrollToTop/scrolltotop.jsx"

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
