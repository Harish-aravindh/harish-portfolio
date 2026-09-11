import gasStationImg from "../assets/gas_station_preview.jpg";
import genAiImg from "../assets/genai_education_preview.jpg";
import ragAssistantImg from "../assets/rag_assistant_preview.jpg";

export const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" },
];

export const stats = [
  {
    number: 5,
    suffix: "+",
    label: "Months Experience",
    subtext: "Production-level development",
  },
  {
    number: 10,
    suffix: "+",
    label: "Technologies Mastered",
    subtext: "Across frontend & backend",
  },
  {
    number: 3,
    suffix: "+",
    label: "AI Technologies",
    subtext: "LLMs, RAG & LangChain",
  },
  {
    number: 100,
    suffix: "%",
    label: "Dedication & Passion",
    subtext: "Continuous learner",
  },
];

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "ai", label: "Generative AI" },
  { id: "tools", label: "Databases & Tools" },
];

export const skillsData = {
  frontend: [
    { name: "React.js", level: 88, category: "frontend", highlight: "Components, Hooks, State" },
    { name: "JavaScript (ES6+)", level: 90, category: "frontend", highlight: "Async/Await, DOM, Logic" },
    { name: "HTML5", level: 95, category: "frontend", highlight: "Semantic, Accessible" },
    { name: "CSS3 / Styling", level: 90, category: "frontend", highlight: "Flexbox, Grid, Animations" },
    { name: "TypeScript", level: 75, category: "frontend", highlight: "Static typing, Interfaces" },
    { name: "Tailwind CSS", level: 82, category: "frontend", highlight: "Utility-first Design" },
  ],
  backend: [
    { name: "Python", level: 90, category: "backend", highlight: "Data structures, OOP, Scripts" },
    { name: "Django", level: 88, category: "backend", highlight: "ORM, Auth, MVT architecture" },
    { name: "Node.js", level: 85, category: "backend", highlight: "Event-driven, NPM ecosystems" },
    { name: "Express.js", level: 80, category: "backend", highlight: "Routing, Middleware, APIs" },
    { name: "REST APIs", level: 90, category: "backend", highlight: "Design, Endpoints, Serialization" },
    { name: "FastAPI", level: 72, category: "backend", highlight: "High performance, Pydantic" },
  ],
  ai: [
    { name: "Generative AI", level: 85, category: "ai", highlight: "Core concepts & pipelines" },
    { name: "LLMs & Prompting", level: 86, category: "ai", highlight: "System prompts, Few-shot" },
    { name: "RAG Architecture", level: 88, category: "ai", highlight: "Vector DBs, Embeddings, Context" },
    { name: "LangChain", level: 75, category: "ai", highlight: "Chains, Agents, Retrievers" },
    { name: "AI Integration", level: 82, category: "ai", highlight: "Full-stack AI apps" },
  ],
  tools: [
    { name: "MySQL", level: 88, category: "tools", highlight: "Schema design, Queries, Relations" },
    { name: "MongoDB", level: 74, category: "tools", highlight: "NoSQL, Collections, Mongoose" },
    { name: "Git & GitHub", level: 86, category: "tools", highlight: "Version control, Collaboration" },
    { name: "Postman", level: 85, category: "tools", highlight: "API testing, Collections" },
    { name: "Docker", level: 68, category: "tools", highlight: "Containerization basics" },
  ],
};

export const projects = [
  {
    id: "gas-station-system",
    number: "01",
    category: "Full Stack Development",
    title: "Gas Station Management System",
    tagline: "Comprehensive fuel station automation & operations platform",
    description:
      "A full-stack enterprise management system engineered to streamline fuel station operations, real-time inventory tracking, pump status monitoring, and daily financial analytics through an intuitive digital dashboard.",
    tech: ["Python", "Django", "MySQL", "React.js", "REST APIs", "CSS3"],
    image: gasStationImg,
    gradient: "from-purple-900 to-indigo-950",
    features: [
      "Real-time fuel tank volume and status monitoring",
      "Dynamic daily sales analytics charts and reports",
      "Automated transaction logging and receipt auditing",
      "Multi-role user authentication and shift management",
    ],
    demoUrl: "https://github.com/",
    githubUrl: "https://github.com/",
  },
  {
    id: "genai-higher-ed",
    number: "02",
    category: "Generative AI",
    title: "Generative AI for Higher Education",
    tagline: "LLM-assisted intelligent learning & syllabus companion",
    description:
      "An AI-powered academic platform built to provide personalized tutoring, intelligent syllabus breakdowns, automated code snippet explanations, and interactive concept knowledge graphs for students and researchers.",
    tech: ["Python", "Generative AI", "LLMs", "RAG", "FastAPI", "React.js"],
    image: genAiImg,
    gradient: "from-blue-900 to-violet-950",
    features: [
      "Interactive LLM-powered 24/7 student tutoring chat",
      "Automated concept knowledge graph generation",
      "Smart study syllabus breakdown with progress tracking",
      "Interactive code explanations and debugging tips",
    ],
    demoUrl: "https://github.com/",
    githubUrl: "https://github.com/",
  },
  {
    id: "rag-assistant",
    number: "03",
    category: "RAG Application",
    title: "Knowledge Retrieval Assistant",
    tagline: "Enterprise document semantic search & response synthesis",
    description:
      "A high-precision Retrieval-Augmented Generation system designed to connect large language models with external enterprise knowledge bases, extracting verifiable citations and producing grounded responses.",
    tech: ["Python", "RAG", "LLM", "Vector DB", "REST API", "LangChain"],
    image: ragAssistantImg,
    gradient: "from-cyan-950 to-indigo-950",
    features: [
      "Semantic vector search with similarity confidence scores",
      "Direct citation tracking and document chunk references",
      "Multi-format ingestion (PDFs, Confluence, Cloud storage)",
      "Low-latency response generation with hallucination guardrails",
    ],
    demoUrl: "https://github.com/",
    githubUrl: "https://github.com/",
  },
  {
    id: "bodi-connect",
    number: "04",
    category: "Full-Stack Web Application",
    title: "Bodi Connect",
    tagline: "Business Networking & Digital Growth Platform",
    description:
      "A scalable business networking platform connecting local businesses, entrepreneurs, professionals, and global opportunities through discovery, referrals, requirements, marketplace functionality, member networking, and digital-growth services.",
    role: "Full-Stack Developer",
    tech: ["Python", "Django", "React.js", "Node.js", "MySQL", "HTML", "CSS", "JavaScript"],
    image: null,
    gradient: "from-blue-950 to-cyan-950",
    features: [
      "Business networking and member connections",
      "Requirements, offers, jobs, and partnership opportunities",
      "Digital-growth services, profiles, marketplace, and global connections",
    ],
    demoUrl: "https://bodiconnect.in/?utm_source=portfolio",
    githubUrl: "https://bodiconnect.in/?utm_source=portfolio",
  },
];

export const experiences = [
  {
    year: "Jul 2026 — Present",
    role: "Full Stack Engineer",
    company: "Edunivra Pvt Ltd",
    location: "Bodinayakkanur, Tamil Nadu",
    type: "Full-time",
    description:
      "Developing and maintaining full-stack web applications across frontend, backend, APIs, databases, and application integrations.",
    points: [
      "Architect and maintain scalable full-stack applications using Python, Django, React.js, Node.js, and MySQL.",
      "Design and integrate performant RESTful APIs connecting dynamic client interfaces with backend microservices.",
      "Craft responsive, user-first interfaces adhering to modern UI/UX design standards and accessibility.",
      "Implement robust business logic, security authentication, and database schemas with Django ORM and MySQL.",
      "Incorporate Generative AI workflows and smart automation into production applications.",
    ],
    tech: ["Python", "Django", "React.js", "Node.js", "MySQL", "REST APIs"],
  },
  {
    year: "May 2026 — Jun 2026",
    role: "Generative AI Intern",
    company: "Edunivra Pvt Ltd",
    location: "Bodinayakkanur, Tamil Nadu",
    type: "Internship",
    description:
      "Hands-on immersion in Generative AI architectures, LLM-based application development, and Retrieval-Augmented Generation pipelines.",
    points: [
      "Built and tested Retrieval-Augmented Generation (RAG) pipelines connecting LLMs with external unstructured data.",
      "Engineered optimized prompt strategies and evaluated response synthesis consistency.",
      "Researched vector embeddings, similarity search techniques, and document chunking strategies.",
      "Collaborated on prototyping AI-driven educational and productivity tools.",
    ],
    tech: ["Generative AI", "LLMs", "RAG", "Prompt Engineering", "Python"],
  },
  {
    year: "Jul 2025",
    role: "UI/UX Case Study Researcher",
    company: "Approtech R&D Solutions Pvt Ltd",
    location: "Chennai, Tamil Nadu",
    type: "Project / Research",
    description:
      "Conducted an in-depth UI/UX case study for an electronics shopping platform focusing on cognitive load reduction, navigation, and checkout conversion.",
    points: [
      "Conducted user behavior analysis and synthesized customer shopping journeys.",
      "Identified navigation friction points and developed high-fidelity wireframes.",
      "Applied modern usability heuristics to elevate user engagement and satisfaction.",
    ],
    tech: ["UI/UX Research", "Wireframing", "Interaction Design", "Usability Testing"],
  },
  {
    year: "Feb 2024 — Mar 2024",
    role: "Full Stack Developer Trainee",
    company: "NoviTech R&D Pvt Ltd",
    location: "Coimbatore, Tamil Nadu",
    type: "Training & Project",
    description:
      "Completed an intensive practical Full Stack Development program covering web architecture, backend development, databases, and API engineering.",
    points: [
      "Constructed dynamic full-stack CRUD applications from scratch.",
      "Mastered relational database normalization and relational queries with SQL.",
      "Developed interactive responsive web interfaces using modern JavaScript.",
    ],
    tech: ["Frontend", "Backend", "SQL Databases", "REST APIs"],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Anna University, Chennai",
    duration: "May 2024 — July 2026",
    status: "Completed / Pursued",
    description:
      "Advanced studies in software architecture, distributed systems, database management, and intelligent computing systems.",
    grade: "Distinction Track",
  },
  {
    degree: "Bachelor of Computer Science (B.Sc CS)",
    institution: "Madurai Kamaraj University",
    duration: "April 2021 — April 2024",
    status: "Graduated",
    description:
      "Comprehensive grounding in algorithms, data structures, object-oriented programming, and computer networks.",
    grade: "First Class",
  },
];

export const contactInfo = {
  email: "harish18aravindh@gmail.com",
  location: "Chennai, Tamil Nadu, India",
  availability: "Available for Full-time Roles & Projects",
  socials: {
    github: "https://github.com/Harish-aravindh",
    linkedin: "https://www.linkedin.com/in/harish-aravindh-m-196a71281/",
  },
};
