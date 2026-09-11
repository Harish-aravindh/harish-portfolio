import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";
import { experiences } from "../data/portfolioData";

export const Experience = () => {
  return (
    <section id="experience" className="experience-section section-padding">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading center">
          <div className="section-tag">
            <span>03.</span> EXPERIENCE &amp; ROLES
          </div>
          <h2>
            My professional <span>journey &amp; milestones.</span>
          </h2>
          <p>
            Hands-on software engineering, full-stack architecture, and
            Generative AI development across production environments.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="timeline-wrapper">
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="timeline-item"
            >
              {/* Timeline Node Dot */}
              <div className="timeline-node">
                <FaBriefcase />
              </div>

              {/* Timeline Card */}
              <div className="timeline-card">
                <div className="experience-header">
                  <div>
                    <h3 className="role-title">{exp.role}</h3>
                    <div className="company-name">{exp.company}</div>
                  </div>

                  <div className="experience-badges">
                    <span className="date-pill">
                      <FaCalendarAlt /> {exp.year}
                    </span>
                    <span className="location-pill">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </div>
                </div>

                <p className="experience-desc">{exp.description}</p>

                <ul className="experience-bullets">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx}>
                      <FaArrowRight />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="experience-tech-tags">
                  {exp.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
