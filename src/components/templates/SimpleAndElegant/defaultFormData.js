const simpleAndElegantDefaults = {
  personalInfo: {
    fullName: "Firstname Lastname",
    title: "",
    summary: "5th January 1982 in London", // Using summary field to store birthday to match data contract
    email: "firstname@lastname.co.uk",
    phone: "+44 20 1111 1111",
    location: "1 Kennington Rd\nLondon, SE11 6HR",
    linkedin: "",
    github: "",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400", // Generic professional portrait placeholder
  },

  experience: [
    {
      title: "Team assistant",
      company: "Another Challenge Ltd.",
      location: "",
      duration: "seit 11/2016",
      achievementsText: "Overview of key responsibilities\nSkills, experience and achievements",
    },
    {
      title: "Personal assistant",
      company: "Second Step PLC",
      location: "",
      duration: "05/2014 - 10/2016",
      achievementsText: "Overview of key responsibilities",
    },
    {
      title: "Intern in marketing",
      company: "First and One Ltd.",
      location: "",
      duration: "01/2012 - 02/2014",
      achievementsText: "Overview of key responsibilities",
    },
  ],

  education: [
    {
      degree: "BSc Management\n- Emphasis in Marketing and Management",
      school: "London School of Economics",
      year: "10/2007 - 10/2011",
    },
    {
      degree: "Apprenticeship as office clerk\n- Scope of training, experience and achievements",
      school: "Example Company Limited",
      year: "09/2004 - 07/2007",
    },
  ],

  technicalSummary: {
    languages: "English: native speaker\nSpanish: fluent",
    tools: "Working knowledge: MS Office\nBasic knowledge: Adobe Photoshop",
    frameworks: "Reading, Sports (Football) and Running), Travelling",
    databases: "",
    cloud: "",
    additional: [],
  },

  sectionHeadings: {
    contact: "Contact",
    skills: "Skills",
    education: "Education",
    certifications: "Certifications",
    experience: "Career",
    projects: "Projects",
    technicalSummary: "Skills and Interests",
  },

  sectionLayout: {
    sidebar: [],
    main: [
      { id: 'experience-base', type: 'experience', source: 'base' },
      { id: 'education-base', type: 'education', source: 'base' },
      { id: 'technicalSummary-base', type: 'technicalSummary', source: 'base' },
    ],
  },
};

export default simpleAndElegantDefaults;