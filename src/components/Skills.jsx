import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaNodeJs,
  FaServer,
  FaBrain,
  FaGitAlt,
  FaJava,
  FaLayerGroup,
  FaBolt,
  FaCloud,
} from "react-icons/fa";
import {
  SiDjango,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiLangchain,
  SiFastapi,
  SiMongodb,
  SiDocker,
} from "react-icons/si";
import { skillCategories, skillsData } from "../data/portfolioData";

const skillIconMap = {
  "React.js": <FaReact />,
  "JavaScript (ES6+)": <SiJavascript />,
  HTML5: <FaHtml5 />,
  "CSS3 / Styling": <FaCss3Alt />,
  TypeScript: <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  Python: <FaPython />,
  Django: <SiDjango />,
  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  "REST APIs": <FaServer />,
  FastAPI: <SiFastapi />,
  "Generative AI": <FaBrain />,
  "LLMs & Prompting": <FaBolt />,
  "RAG Architecture": <FaLayerGroup />,
  LangChain: <SiLangchain />,
  "AI Integration": <FaCloud />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  "Git & GitHub": <FaGitAlt />,
  Postman: <SiPostman />,
  Docker: <SiDocker />,
  Java: <FaJava />,
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const getAllSkills = () => {
    return [
      ...skillsData.frontend,
      ...skillsData.backend,
      ...skillsData.ai,
      ...skillsData.tools,
    ];
  };

  const displayedSkills =
    activeCategory === "all" ? getAllSkills() : skillsData[activeCategory] || [];

  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading center">
          <div className="section-tag">
            <span>02.</span> SKILLS &amp; CAPABILITIES
          </div>
          <h2>
            Technologies I use to <span>craft solutions.</span>
          </h2>
          <p>
            A curated stack spanning modern frontend frameworks, scalable backend
            services, relational databases, and intelligent AI models.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-category-tabs">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`category-tab ${activeCategory === cat.id ? "active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="skills-cards-grid">
          <AnimatePresence>
            {displayedSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="skill-card"
              >
                <div className="skill-header">
                  <div className="skill-title-group">
                    <div className="skill-icon-badge">
                      {skillIconMap[skill.name] || <FaBrain />}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>

                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>

                <div className="skill-highlight-tag">
                  <span>Focus:</span> {skill.highlight}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
