// Default form data for the ClassicProfessional template.
// Skills and certifications use { value } objects (react-hook-form field array requirement).
// Experience achievements are stored as newline-separated strings (split on preview).

const classicProfessionalDefaults = {
  personalInfo: {
    fullName: "JOHN DOE",
    title: "SENIOR SOFTWARE DEVELOPER",
    summary:
      "Senior Software Developer with 10+ years of experience designing, building and scaling robust, high-performance web applications and services. Passionate about clean code, agile delivery, and mentoring engineering teams to build great products.",
    email: "john.doe@email.com",
    phone: "+44 7700 900123",
    location: "London, United Kingdom",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
  },

  skills: [
    { value: "JavaScript (ES6+) / TypeScript" },
    { value: "React / Next.js" },
    { value: "Node.js / Express" },
    { value: "Python" },
    { value: "SQL / PostgreSQL / MongoDB" },
    { value: "AWS (EC2, S3, Lambda, RDS)" },
    { value: "Docker / Kubernetes" },
    { value: "Git / GitHub / GitLab CI" },
    { value: "RESTful APIs / GraphQL" },
    { value: "Test-Driven Development" },
    { value: "Agile (Scrum / Kanban)" },
    { value: "System Design" },
    { value: "Performance Optimization" },
    { value: "Mentoring & Code Reviews" },
  ],

  education: [
    {
      degree: "BSc (Hons) in Computer Science",
      school: "University of Manchester",
      year: "2002 - 2005",
    },
  ],

  certifications: [
    { value: "AWS Certified Solutions Architect – Associate" },
    { value: "Certified Kubernetes Administrator (CKA)" },
    { value: "MongoDB Certified Developer – Associate" },
  ],

  experience: [
    {
      title: "Senior Software Developer",
      company: "TechSolutions Ltd.",
      location: "London, UK",
      duration: "Jan 2021 – Present",
      achievementsText:
        "Lead a team of 6 developers to design and deliver scalable SaaS platform serving 100k+ users.\nArchitected and implemented microservices using Node.js, TypeScript and AWS.\nIntroduced automated testing and CI/CD pipelines reducing deployment time by 60%.\nMentor junior developers and conduct code reviews.",
    },
    {
      title: "Software Developer",
      company: "Digital Innovations",
      location: "Manchester, UK",
      duration: "Jun 2016 – Dec 2020",
      achievementsText:
        "Developed and maintained web applications using React, Node.js and PostgreSQL.\nCollaborated with product managers and designers.\nOptimized performance resulting in 40% improvement.\nIntegrated third-party APIs and payment gateways.",
    },
    {
      title: "Software Engineer",
      company: "WebWorks Ltd.",
      location: "Manchester, UK",
      duration: "Jul 2012 – May 2016",
      achievementsText:
        "Built and maintained RESTful APIs.\nWorked on frontend development using HTML, CSS, JavaScript and jQuery.\nFixed bugs and added new features.\nParticipated in agile ceremonies.",
    },
  ],

  projects: [
    {
      title: "TaskFlow (SaaS Platform)",
      description:
        "Architected and led development of a multi-tenant SaaS platform for project management and team collaboration.",
    },
    {
      title: "Data Insights Dashboard",
      description:
        "Real-time analytics dashboard processing large datasets with React, Node.js, GraphQL and MongoDB.",
    },
  ],

  technicalSummary: {
    languages: "TypeScript, JavaScript, Python, SQL, HTML, CSS",
    frameworks: "React, Next.js, Node.js, Express, GraphQL",
    databases: "PostgreSQL, MongoDB, MySQL, Redis",
    cloud: "AWS, Docker, Kubernetes, GitLab CI, Terraform",
    tools: "VS Code, Git, Jira, Confluence, Postman",
  },

  sectionHeadings: {
    contact: "CONTACT",
    skills: "SKILLS",
    education: "EDUCATION",
    certifications: "CERTIFICATIONS",
    experience: "EXPERIENCE",
    projects: "PROJECTS",
    technicalSummary: "TECHNICAL SUMMARY",
  },

  technicalSummaryLabels: {
    languages: "Languages",
    frameworks: "Frameworks",
    databases: "Databases",
    cloud: "Cloud & DevOps",
    tools: "Tools",
  },
}

export default classicProfessionalDefaults
