const minimalistTechDefaults = {
  personalInfo: {
    fullName: "DAVID CHEN",
    title: "Full Stack Engineer",
    summary: "Detail-oriented Full Stack Engineer with 6+ years of experience building scalable, high-performance web applications. Proficient in modern JavaScript frameworks, cloud infrastructure, and agile development methodologies. Passionate about writing clean, maintainable code and solving complex technical challenges to deliver exceptional user experiences.",
    email: "david.chen@example.com",
    phone: "+1 (415) 555-0198",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/davidchen",
    github: "github.com/davidchen-dev",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
  },

  experience: [
    {
      title: "Senior Software Engineer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      duration: "2021 - Present",
      achievementsText: "Architected and migrated a monolithic legacy application to a microservices architecture using Node.js and Docker, improving system uptime to 99.99%.\nLed the front-end development team to rebuild the core dashboard in React, reducing load times by 40%.\nImplemented CI/CD pipelines using GitHub Actions, cutting deployment times from 45 minutes to under 10 minutes.\nMentored 3 junior developers and established code review guidelines to ensure high code quality.",
    },
    {
      title: "Software Engineer",
      company: "DataSync Inc.",
      location: "San Jose, CA",
      duration: "2018 - 2021",
      achievementsText: "Developed RESTful APIs using Python and Django to support a rapidly growing mobile application with over 100k active users.\nIntegrated Elasticsearch to enhance the search functionality, resulting in a 300% faster query response time.\nCollaborated with product managers and designers to deliver 5 major feature releases ahead of schedule.",
    }
  ],

  education: [
    {
      degree: "B.S. in Computer Science",
      school: "University of California, Berkeley",
      year: "2014 - 2018",
    }
  ],

  skills: [
    { value: "React / Redux" },
    { value: "Node.js / Express" },
    { value: "Python / Django" },
    { value: "TypeScript" },
    { value: "Docker & Kubernetes" },
    { value: "AWS / GCP" },
    { value: "System Architecture" },
    { value: "Agile Methodologies" }
  ],

  technicalSummary: {
    languages: "JavaScript, TypeScript, Python, SQL, HTML5, CSS3",
    tools: "Git, Webpack, Jest, Postman, Jira",
    frameworks: "React, Next.js, Node.js, Express, Django, Tailwind CSS",
    databases: "PostgreSQL, MongoDB, Redis, Elasticsearch",
    cloud: "AWS (EC2, S3, RDS, Lambda), Docker, GitHub Actions",
    additional: [],
  },

  certifications: [
    { value: "AWS Certified Solutions Architect – Associate" },
    { value: "MongoDB Certified Developer" }
  ],

  projects: [
    {
      title: "Open Source Contributor - React Router",
      description: "Contributed to the core routing library used by millions of React developers. Fixed critical bug related to nested route rendering, improving stability for complex SPA navigations."
    },
    {
      title: "E-commerce Platform (Personal Project)",
      description: "Built a fully functional e-commerce platform using the MERN stack. Features include user authentication, Stripe payment integration, and an admin dashboard for inventory management."
    }
  ],

  sectionHeadings: {
    contact: "CONTACT",
    skills: "CORE SKILLS",
    education: "EDUCATION",
    certifications: "CERTIFICATIONS",
    experience: "EXPERIENCE",
    projects: "PROJECTS",
    technicalSummary: "TECHNICAL PROFICIENCY",
  },

  sectionLayout: {
    sidebar: [
      { id: 'skills-base', type: 'skills', source: 'base' },
      { id: 'technicalSummary-base', type: 'technicalSummary', source: 'base' },
      { id: 'education-base', type: 'education', source: 'base' },
      { id: 'certifications-base', type: 'certifications', source: 'base' },
    ],
    main: [
      { id: 'experience-base', type: 'experience', source: 'base' },
      { id: 'projects-base', type: 'projects', source: 'base' },
    ],
  },
};

export default minimalistTechDefaults;