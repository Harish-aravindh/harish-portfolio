import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { projects } from "../data/portfolioData";

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const current = projects[activeProject];

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading center">
          <div className="section-tag">
            <span>04.</span> FEATURED PROJECTS
          </div>
          <h2>
            Things I&apos;ve been <span>building.</span>
          </h2>
          <p>
            Real-world full-stack architectures and Generative AI applications
            built with an emphasis on performance, scalability, and UX.
          </p>
        </div>

        {/* Dual Layout */}
        <div className="projects-layout">
          {/* Main Display Window */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="project-display-card"
            >
              {/* Browser Window Frame */}
              <div className="browser-chrome">
                <div className="browser-dots">
                  <span className="browser-dot dot-red" />
                  <span className="browser-dot dot-yellow" />
                  <span className="browser-dot dot-green" />
                </div>
                <div className="browser-url-bar">
                  https://harish.dev/projects/{current.id}
                </div>
                <div style={{ width: "36px" }} />
              </div>

              {/* Project Preview Image */}
              <div className="project-image-box">
                {current.image ? (
                  <img
                    src={current.image}
                    alt={`${current.title} Preview`}
                    className="project-preview-img"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-preview-placeholder">
                    <span>BC</span>
                    <strong>{current.title}</strong>
                    <small>Connect. Grow. Go global.</small>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="project-info-body">
                <span className="project-category-badge">
                  {current.category}
                </span>

                <h3 className="project-display-title">{current.title}</h3>
                <div className="project-tagline">{current.tagline}</div>

                {current.role && (
                  <div className="project-role">
                    <span>Role</span>
                    <strong>{current.role}</strong>
                  </div>
                )}

                <p className="project-desc-text">{current.description}</p>

                {/* Key Highlights */}
                <ul className="project-features-list">
                  {current.features.map((feat, idx) => (
                    <li key={idx}>
                      <FaCheckCircle />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="project-tech-badges">
                  {current.tech.map((techItem, idx) => (
                    <span key={idx} className="tech-badge-item">
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-btn-group">
                  <a
                    href={current.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-btn"
                  >
                    <span>Live Preview</span>
                    <FaExternalLinkAlt />
                  </a>

                  <a
                    href={current.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-btn"
                  >
                    <span>Source Code</span>
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Selector Tabs Column */}
          <div className="project-tabs-list">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setActiveProject(idx)}
                className={`project-tab-btn ${activeProject === idx ? "active" : ""}`}
                aria-label={`Select ${proj.title}`}
              >
                <span className="tab-number">{proj.number}</span>
                <div className="tab-content-text">
                  <small>{proj.category}</small>
                  <strong>{proj.title}</strong>
                </div>
                <FaArrowRight className="tab-arrow" />
              </button>
            ))}
          </div>
        </div>

        {/* GitHub Extra Link */}
        <div className="github-more-strip">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="outline-btn"
          >
            <span>Explore More Repositories on GitHub</span>
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};
