import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import {
  FaDownload,
  FaArrowRight,
  FaPython,
  FaReact,
  FaNodeJs,
  FaBrain,
  FaBriefcase,
} from "react-icons/fa";

import { SiDjango, SiMysql, SiJavascript } from "react-icons/si";
import profileImage from "../assets/image.png";

const resumeAssets = import.meta.glob("../assets/resume.pdf", {
  eager: true,
  import: "default",
  query: "?url",
});
const resumeUrl = Object.values(resumeAssets)[0] ?? "#";

export const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-text-col"
        >
          {/* Eyebrow status */}
          <div className="hero-eyebrow">
            <span className="pulse-indicator" />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <p className="hero-greeting">HELLO, I&apos;M</p>

          <h1 className="hero-title">
            Harish <span>Aravindh.</span>
          </h1>

          <h2 className="hero-subtitle">
            I engineer{" "}
            <span className="hero-typewriter">
              <Typewriter
                words={[
                  "full-stack web applications.",
                  "Generative AI & RAG systems.",
                  "intelligent backend architectures.",
                  "seamless modern user experiences.",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={55}
                deleteSpeed={35}
                delaySpeed={1800}
              />
            </span>
          </h2>

          <p className="hero-description">
            Full Stack Developer specializing in building high-performance,
            scalable applications using Python, Django, React.js, Node.js, and
            MySQL. Actively integrating Generative AI and RAG architectures to
            deliver smarter software solutions.
          </p>

          <div className="hero-actions">
            <Link
              to="projects"
              smooth={true}
              duration={700}
              offset={-80}
              className="primary-btn"
            >
              <span>Explore My Work</span>
              <FaArrowRight />
            </Link>

            <a
              href={resumeUrl}
              download="Harish-Aravindh-Resume.pdf"
              className="secondary-btn"
              target="_blank"
              rel="noreferrer"
            >
              <span>Download CV</span>
              <FaDownload />
            </a>
          </div>

          {/* Quick Tech Strip */}
          <div className="hero-tech-strip">
            <p>Core Technologies I Work With</p>
            <div className="tech-icon-pills">
              <span className="tech-pill" title="Python">
                <FaPython /> Python
              </span>
              <span className="tech-pill" title="Django">
                <SiDjango /> Django
              </span>
              <span className="tech-pill" title="React.js">
                <FaReact /> React.js
              </span>
              <span className="tech-pill" title="Node.js">
                <FaNodeJs /> Node.js
              </span>
              <span className="tech-pill" title="MySQL">
                <SiMysql /> MySQL
              </span>
              <span className="tech-pill" title="JavaScript">
                <SiJavascript /> JavaScript
              </span>
              <span className="tech-pill" title="Generative AI">
                <FaBrain /> GenAI & RAG
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Visual Avatar Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hero-visual-wrapper"
        >
          {/* Soft Ambient Glow */}
          <div className="avatar-halo-bg" />

          {/* Outer Square Frame — holds corner brackets & badge (not clipped) */}
          <div className="avatar-outer-frame">

            {/* Corner Bracket Decorations */}
            <span className="corner-bracket corner-tl" />
            <span className="corner-bracket corner-tr" />
            <span className="corner-bracket corner-bl" />
            <span className="corner-bracket corner-br" />

            {/* Perfect Circle Container — dark purple bg + image fills it */}
            <div className="avatar-circle-bg">
              <img
                src={profileImage}
                alt="Harish Aravindh"
                className="avatar-circle-img"
                width="520"
                height="520"
                fetchPriority="high"
                decoding="async"
              />
              <span className="avatar-hover-message" aria-hidden="true">
                Hey Buddy
              </span>
            </div>

            {/* Floating Role Badge */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="floating-badge badge-sq-bottom"
            >
              <div className="floating-badge-icon badge-icon-cyan">
                <FaBriefcase />
              </div>
              <div className="floating-badge-text">
                <small>Current Role</small>
                <strong>Full Stack Engineer</strong>
              </div>
            </motion.div>

          </div>
        </motion.div>


      </div>
    </section>
  );
};
