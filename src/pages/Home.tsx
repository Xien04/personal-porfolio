import Hero from "../components/Hero";
import About from "../components/About";
import EducationPreview from "../components/EducationPreview";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <EducationPreview />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
}
