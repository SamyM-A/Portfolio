import { useRef } from "react";
import './App.css';
import Home from './sections/Home';
import Header from './sections/Header';
import Projets from './sections/ProjectsLists';
import Footer from './sections/Footer';
import Contact from './sections/Contact';
import Technologie from './sections/TechnologieLists';
import Parcours from "./sections/Parcours";

function App() {

  const homeRef = useRef(null);
  const technoRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const parcoursRef = useRef(null);

  const scrollTo = (section) => {
    const sections = {
      accueil: homeRef,
      technologie: technoRef,
      projects: projectsRef,
      contact: contactRef,
      parcours: parcoursRef,
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

        <section ref={parcoursRef} className="parcours-section" aria-labelledby="parcours-title">
          <Parcours />
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
