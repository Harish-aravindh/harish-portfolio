import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { BackgroundEffects } from "./components/BackgroundEffects";
import "./App.css";

const About = lazy(() => import("./components/About").then(({ About }) => ({ default: About })));
const TechMarquee = lazy(() => import("./components/TechMarquee").then(({ TechMarquee }) => ({ default: TechMarquee })));
const Skills = lazy(() => import("./components/Skills").then(({ Skills }) => ({ default: Skills })));
const Experience = lazy(() => import("./components/Experience").then(({ Experience }) => ({ default: Experience })));
const Projects = lazy(() => import("./components/Projects").then(({ Projects }) => ({ default: Projects })));
const Education = lazy(() => import("./components/Education").then(({ Education }) => ({ default: Education })));
const Contact = lazy(() => import("./components/Contact").then(({ Contact }) => ({ default: Contact })));

function DeferredSection({ Component }) {
  const sectionRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={sectionRef} className="deferred-section">
      {shouldLoad ? (
        <Suspense fallback={<div className="section-loading" aria-hidden="true" />}>
          <Component />
        </Suspense>
      ) : (
        <div className="section-loading" aria-hidden="true" />
      )}
    </div>
  );
}

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
        <DeferredSection Component={About} />
        <DeferredSection Component={TechMarquee} />
        <DeferredSection Component={Skills} />
        <DeferredSection Component={Experience} />
        <DeferredSection Component={Projects} />
        <DeferredSection Component={Education} />
        <DeferredSection Component={Contact} />
      </main>

      {/* Footer & Back to Top */}
      <Footer />
    </>
  );
}

export default App;