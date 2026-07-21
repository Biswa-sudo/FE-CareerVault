const cleanSidebarTimelineDefaults = {
  personalInfo: {
    fullName: "ALICE WATER",
    title: "WEB DESIGNER",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan non mauris iaculis venenatis. Suspendisse non sapien vel leo egestas mollis eget sit amet sem. Ut euismod urna sit amet ligula imperdiet porttitor. Nunc ac risus dui. Vestibulum vulputate aliquet mi, a dictum odio sodales vel.",
    email: "email@example.com",
    phone: "123 456 7890",
    location: "123 Anywhere St., Any City",
    linkedin: "linkedin.com/in/alicewater",
    github: "",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },

  experience: [
    {
      title: "Senior Web Designer",
      company: "Company Name",
      location: "",
      duration: "2020-2022",
      achievementsText: "Led the design team to create modern web interfaces.\nCollaborated with cross-functional teams to define features.\nOptimized components for maximum performance across web-capable devices and browsers.",
    },
    {
      title: "Web Designer",
      company: "Company Name",
      location: "",
      duration: "2018-2020",
      achievementsText: "Designed responsive user interfaces using HTML, CSS, and JS.\nConducted user testing and gathered feedback for improvements.\nCreated wireframes, storyboards, and user flows.",
    },
    {
      title: "Junior Web Designer",
      company: "Company Name",
      location: "",
      duration: "2016-2018",
      achievementsText: "Assisted in the design and maintenance of client websites.\nParticipated in daily stand-ups and agile processes.\nUpdated graphics and visual elements for digital marketing campaigns.",
    }
  ],

  education: [
    {
      degree: "Master's Degree in Design",
      school: "University of Example",
      year: "2014-2016",
    },
    {
      degree: "Bachelor's Degree in Design",
      school: "University of Example",
      year: "2010-2014",
    }
  ],

  skills: [
    { value: "UI/UX Design|90" },
    { value: "Web Design|85" },
    { value: "Graphic Design|75" },
    { value: "HTML/CSS|80" }
  ],

  technicalSummary: {
    languages: "English|5\nSpanish|4\nFrench|3",
    tools: "",
    frameworks: "",
    databases: "",
    cloud: "",
    additional: [],
  },

  certifications: [],
  projects: [],

  sectionHeadings: {
    contact: "Contact",
    skills: "Expertise",
    education: "Education",
    certifications: "Certifications",
    experience: "Work Experience",
    projects: "Projects",
    technicalSummary: "Language",
  },

  sectionLayout: {
    sidebar: [
      { id: 'contact-base', type: 'contact', source: 'base' },
      { id: 'education-base', type: 'education', source: 'base' },
      { id: 'skills-base', type: 'skills', source: 'base' },
      { id: 'technicalSummary-base', type: 'technicalSummary', source: 'base' },
    ],
    main: [
      { id: 'experience-base', type: 'experience', source: 'base' },
    ],
  },
};

export default cleanSidebarTimelineDefaults;