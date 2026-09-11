import { motion, useScroll } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechMarquee } from "./components/TechMarquee";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BackgroundEffects } from "./components/BackgroundEffects";
import "./App.css";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Ambient Visual Background Effects */}
      <BackgroundEffects />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <TechMarquee />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer & Back to Top */}
      <Footer />
    </>
  );
}

export default App;