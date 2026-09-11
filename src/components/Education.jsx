import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { education } from "../data/portfolioData";

export const Education = () => {
  return (
    <section id="education" className="education-section section-padding">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading center">
          <div className="section-tag">
            <span>05.</span> ACADEMIC BACKGROUND
          </div>
          <h2>
            The foundation behind <span>the code.</span>
          </h2>
          <p>
            Formal education in computer applications, distributed systems,
            algorithmic theory, and software development.
          </p>
        </div>

        {/* Education Grid */}
        <div className="education-grid-layout">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="education-card"
            >
              <div className="edu-top-row">
                <div className="edu-icon-wrap">
                  <FaGraduationCap />
                </div>
                <span className="edu-year-badge">{edu.duration}</span>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>

              <div className="edu-institution">
                <FaUniversity style={{ marginRight: "8px", verticalAlign: "middle" }} />
                {edu.institution}
              </div>

              <p className="edu-desc">{edu.description}</p>

              <div className="edu-footer">
                <span>Academic Track</span>
                <span className="edu-grade">{edu.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
