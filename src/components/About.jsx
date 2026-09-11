import { motion } from "framer-motion";
import { Link } from "react-scroll";
import countUpModule from "react-countup";
import {
  FaBriefcase,
  FaCode,
  FaBrain,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { stats } from "../data/portfolioData";

const CountUp = countUpModule.default ?? countUpModule;

const statIcons = [
  <FaBriefcase key="0" />,
  <FaCode key="1" />,
  <FaBrain key="2" />,
  <FaRocket key="3" />,
];

export const About = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container about-grid">
        {/* Left Column: Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="about-content"
        >
          <div className="section-tag">
            <span>01.</span> ABOUT ME
          </div>

          <h2>
            Building technology that <span>solves real problems.</span>
          </h2>

          <p>
            I&apos;m Harish Aravindh, a Full Stack Engineer based in Tamil Nadu,
            India. I bridge the gap between robust backend architectures,
            intuitive frontend interfaces, and cutting-edge artificial
            intelligence.
          </p>

          <p>
            My engineering journey spans developing responsive React.js
            interfaces, creating production-grade REST APIs in Python & Django,
            modeling relational data in MySQL, and deploying Generative AI / RAG
            solutions that augment user workflows.
          </p>

          {/* Quick Highlight Pills */}
          <div className="about-highlights">
            <div className="about-pill-item">
              <FaCheckCircle /> Full-Stack Architecture
            </div>
            <div className="about-pill-item">
              <FaCheckCircle /> Generative AI & RAG
            </div>
            <div className="about-pill-item">
              <FaCheckCircle /> RESTful API Engineering
            </div>
            <div className="about-pill-item">
              <FaCheckCircle /> Modern UI/UX Standards
            </div>
          </div>

          <div>
            <Link
              to="experience"
              smooth={true}
              duration={700}
              offset={-80}
              className="outline-btn"
            >
              <span>Explore My Experience</span>
              <FaArrowRight />
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Animated Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="stats-cards-grid"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -6, scale: 1.02 }}
              className="stat-box"
            >
              <div className="stat-icon-wrap">{statIcons[idx]}</div>
              <div className="stat-number">
                <CountUp
                  end={stat.number}
                  duration={2.2}
                  enableScrollSpy
                  scrollSpyOnce
                />
                <span>{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-subtext">{stat.subtext}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
