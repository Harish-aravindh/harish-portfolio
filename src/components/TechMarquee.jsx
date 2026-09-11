export const TechMarquee = () => {
  const items = [
    "Full Stack Development",
    "React.js",
    "Python",
    "Django",
    "Generative AI",
    "RAG Architecture",
    "RESTful APIs",
    "MySQL Database",
    "Node.js",
    "FastAPI",
    "Prompt Engineering",
    "LangChain",
    "JavaScript ES6+",
    "TypeScript",
  ];

  return (
    <section className="marquee-section" aria-hidden="true">
      <div className="marquee-container">
        <div className="marquee-track">
          {items.concat(items).map((item, index) => (
            <div key={index} className="marquee-item">
              <span className="item-dot">✦</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
