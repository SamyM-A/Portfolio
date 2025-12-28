import { useRef } from "react";
import './App.css';
import Home from './sections/Home';
import Header from './sections/Header';
import Projets from './sections/ProjectsLists';
import Footer from './sections/Footer';
import Contact from './sections/Contact';
import Technologie from './sections/TechnologieLists';
import Cv from "./sections/Cv";

function App() {

  const homeRef = useRef(null);
  const technoRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const cvRef = useRef(null);

  const scrollTo = (section) => {
    const sections = {
      accueil: homeRef,
      technologie: technoRef,
      projects: projectsRef,
      contact: contactRef,
      cv: cvRef,
    };

    sections[section]?.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <>
      <Header scrollTo={scrollTo} />

      <main>
        <section ref={homeRef}>
          <Home />
        </section>

        <section ref={technoRef}>
          <Technologie />
        </section>

        <section ref={projectsRef}>
          <Projets />
        </section>

        <section ref={cvRef}>
          {/* <Cv/> */}
        </section>

        <section ref={contactRef}>
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
