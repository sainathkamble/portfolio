import React from "react";
import { Header } from "./Components/Header/Header.jsx";
import "./App.css";
import { ThemeContext } from "./Context/theme.jsx";
import { About } from "./Components/About/About.jsx";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Techstacks } from "./Components/About/Techstacks";
import { Projects } from "./Components/Projects/Projects.jsx";
import { Contact } from "./Components/Contact/Contact.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop.jsx";

export default function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="top" className={`${themename} app`}>
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
