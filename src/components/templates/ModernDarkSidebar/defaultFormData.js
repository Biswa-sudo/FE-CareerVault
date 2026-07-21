const modernDarkSidebarDefaults = {
  personalInfo: {
    fullName: "James Kavin",
    title: "Software Developer",
    summary: "Highly motivated **Computer Science graduate** with strong foundations in **data structures, algorithms, and full-stack development**. Passionate about coding, problem-solving, and building scalable software solutions. Seeking an entry-level Software Engineer role to apply my technical skills and grow within a dynamic development environment.",
    email: "James.kavin@email.com",
    phone: "(212) 555-0155",
    location: "New York, US",
    linkedin: "linkedin.com/in/james.kavin",
    github: "",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400", // Generic professional portrait placeholder
  },

  experience: [
    {
      title: "Data Scientist",
      company: "WellsFargo",
      location: "",
      duration: "2020-25",
      achievementsText: "Enhanced customer satisfaction score by 25% via improved support processes\nStreamlined onboarding process, cutting response time by 40%\nIncreased cross-selling revenue by 18% through personalized offers\nAutomated reporting workflows, saving 10+ hours per week for the sales team",
    },
    {
      title: "Junior Data Scientist",
      company: "Delta Labs",
      location: "",
      duration: "2015-20",
      achievementsText: "Analyzed large datasets to uncover actionable business insights\nDesigned and implemented predictive models to optimize performance metrics\nBuilt automated data pipelines to streamline data processing and reporting\nConducted feature engineering to improve model accuracy and robustness",
    }
  ],

  education: [
    {
      degree: "Master of Science (M.S.) in Marketing Analytics",
      school: "Boston University, Boston, MA",
      year: "2023 - 2025 (Expected)",
      achievementsText: "Graduated: 2018", // Using achievement line for the extra text shown in image
    }
  ],

  skills: [
    { value: "Python, Java, C++" },
    { value: "HTML, CSS, JavaScript,\nReact.js, Node.js" },
    { value: "MySQL, MongoDB" },
    { value: "Git, GitHub, VS Code,\nPostman, JIRA" }
  ],
  
  technicalSummary: {
    languages: "English: Fluent\nHindi: Native",
    tools: "",
    frameworks: "",
    databases: "",
    cloud: "",
    additional: [],
  },

  certifications: [
    { value: "Google Data Analytics Certificate – Coursera" },
    { value: "Python for Everybody – University of Michigan (Coursera)" }
  ],

  sectionHeadings: {
    contact: "CONTACT",
    skills: "SKILLS",
    education: "EDUCATION",
    certifications: "CERTIFICATES",
    experience: "EXPERIENCE",
    projects: "PROJECTS",
    technicalSummary: "LANGUAGES",
  },

  sectionLayout: {
    sidebar: [
      { id: 'contact-base', type: 'contact', source: 'base' },
      { id: 'skills-base', type: 'skills', source: 'base' },
      { id: 'technicalSummary-base', type: 'technicalSummary', source: 'base' },
      { id: 'certifications-base', type: 'certifications', source: 'base' },
    ],
    main: [
      { id: 'experience-base', type: 'experience', source: 'base' },
      { id: 'education-base', type: 'education', source: 'base' },
    ],
  },
};

export default modernDarkSidebarDefaults;