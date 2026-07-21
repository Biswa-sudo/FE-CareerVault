const centeredProfileDefaults = {
  personalInfo: {
    fullName: "JACOB PARK",
    title: "",
    summary: "Seasoned Full Stack Web Developer with over 7 years of expertise in seamlessly bridging front- and backend web development. Proven ability to decipher client requirements, develop and test applications, and collaborate effectively within cross-functional teams. Seeking a pivotal role as a Full Stack Web Developer at [Company Name] to continue driving excellence in web development.",
    email: "your.email@email.com",
    phone: "07123 456 789",
    location: "74 Queen Adelaide Road, Gosforth, Newcastle-upon-Tyne, NE99 9ZZ",
    linkedin: "",
    github: "",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400", // Generic professional portrait placeholder
  },

  experience: [
    {
      title: "Full Stack Web Developer",
      company: "Lassin Technologies",
      location: "Newcastle-upon-Tyne",
      duration: "AUG 'XX - CURRENT",
      achievementsText: "Lead website design and development, including client engagement, requirements elicitation, content drafting and editing, platform creation, code writing, system testing, and ticket resolution.\nDeveloped and integrated 120+ modules for cross-browser compatibility, resulting in a 25% increase in efficiency.\nImproved cross-platform, front-end coding leveraging HTML and CSS.\nEnhanced the visual appeal and functionality of 4+ websites through UI and UX programming.\nRolled out 25+ user-friendly interfaces in line with best web development techniques.\nReceived 'Technical Expert of the Year' award for delivering the most client-server solutions.",
    },
    {
      title: "Full Stack Developer",
      company: "Genitech Labs",
      location: "Sheffield",
      duration: "MAY 'XX - JULY 'XX",
      achievementsText: "Developed customer-facing features, such as images, text fields, and banners.\nBuilt mechanics for site information processing and communication with the server in addition to user data collection and storage.\nTested a new system for bugs and compatibility issues while solving technical problems.\nEstablished professional relationships with a 20+ member team of UX designers, data analysts, project managers, and product designers.\nCompleted projects in an Agile environment and conducted 3+ weekly spring plans and retrospectives per month.\nDeveloped 25+ client-server systems (including 3-tier and new-tier architectures) using front-end, object-oriented programming.\nWrote unit tests and attained a 100% bug-free level for all front-end developments.\nImproved the design, structure, and processing of 20+ web pages.",
    }
  ],

  education: [
    {
      degree: "BSc in Computer Science",
      school: "University of Newcastle",
      year: "SEP 'XX - JUN 'XX",
    }
  ],

  skills: [
    { value: "HTML, CSS, JavaScript" },
    { value: "React & Angular" },
    { value: "Node.js & Express" },
    { value: "SQL & MongoDB" },
    { value: "UI/UX Programming" },
    { value: "Agile Development" },
  ],

  technicalSummary: {
    languages: "",
    tools: "",
    frameworks: "",
    databases: "",
    cloud: "",
    additional: [],
  },

  certifications: [],
  projects: [],

  sectionHeadings: {
    contact: "CONTACT",
    skills: "SKILLS",
    education: "EDUCATION",
    certifications: "CERTIFICATIONS",
    experience: "WORK HISTORY",
    projects: "PROJECTS",
    technicalSummary: "TECHNICAL EXPERTISE",
  },

  sectionLayout: {
    sidebar: [],
    main: [
      { id: 'experience-base', type: 'experience', source: 'base' },
    ],
  },
};

export default centeredProfileDefaults;