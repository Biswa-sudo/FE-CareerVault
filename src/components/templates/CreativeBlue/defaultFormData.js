const creativeBlueDefaults = {
  personalInfo: {
    fullName: "Melissa Ware",
    title: "Copywriter",
    summary: "Passionate and creative Copywriter with 5+ years of writing experience, skilled and experienced in SEO content writing, marketing, pitching, and developing a unique brand voice. Increased Company X user engagement on Facebook and Instagram by 34% in 4 months, resulting in an 67% increase in sales.",
    email: "melissa@novoresume.com",
    phone: "123 4444 5555",
    location: "Columbus, Ohio",
    linkedin: "linkedin.com/in/melissa.ware",
    github: "medium.com/@melissa.ware", // Mapping medium to github for standard inputs
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },

  experience: [
    {
      title: "Lead Copywriter",
      company: "Burton Agency",
      location: "",
      duration: "01/2022 - Present",
      achievementsText: "Consistently wrote a minimum of 7 Facebook and Instagram posts per week, which helped to grow the Facebook follower base from 6,000 to 30,000+ and the Instagram follower base from 12,000 to 30,000+ users in 2 months.\nIncreased user engagement on Facebook and Instagram by 34% in 4 months.\nHelped to boost product sales by 67% in 4 months.\nWrote weekly newsletters to an audience of 120,000+ readers.\nDeveloped a unique brand voice for Company X and used it consistently across all platforms, including social media posts, newsletters, and the brand website.",
    },
    {
      title: "Copywriter",
      company: "Think Co.",
      location: "",
      duration: "03/2018 - 12/2021",
      achievementsText: "Rewrote 10+ landing pages, leading to a 28% increase in landing page conversions in 6 months.\nWrote 3 SEO blog articles each week in English and Spanish languages for a total of 100,000+ readers.\nIncreased organic traffic by over 60% in a year.\nEdited all material to ensure it conforms to the company's branding standards.",
    }
  ],

  education: [
    {
      degree: "BA in Journalism (Minor in Marketing)",
      school: "The Ohio State University",
      year: "08/2014 - 06/2018",
    }
  ],

  skills: [
    { value: "Copywriting" },
    { value: "Establishing Tone" },
    { value: "Identifying Audience" },
    { value: "Wordpress" },
    { value: "SEO" },
    { value: "Digital Marketing" },
    { value: "Attention to Detail" },
    { value: "Time-management" },
    { value: "Creative Writing" },
    { value: "Editing" }
  ],

  projects: [
    {
      title: "Freelance Fiction Writer (2017 - Present)",
      description: "Compose fiction or nonfiction prose, such as short stories, novels, articles, descriptive or critical analyses, and essays.\nDevelop story influences such as themes, plots, characterizations, psychological analyses, historical environments, action, and dialogue to create material ensuring efficiency of the creative process to deliver the project on time.\nPrepare draft in the correct, readable format for publication and send them to publishers or producers.\nRevise the written material to satisfy the needs of clients, publishers, directors, or producers.\nConfer with clients, editors, publishers, or producers to discuss changes or revisions to written material."
    }
  ],

  certifications: [
    { value: "Renewable Energy" },
    { value: "Calligraphy" },
    { value: "Gardening" },
    { value: "Astronomy" }
  ],

  technicalSummary: {
    languages: "English|Native or Bilingual Proficiency\nSpanish|Full Professional Proficiency\nGerman|Professional Working Proficiency\nFrench|Professional Working Proficiency",
    tools: "",
    frameworks: "",
    databases: "",
    cloud: "",
    additional: [],
  },

  sectionHeadings: {
    contact: "CONTACT",
    skills: "GENERAL SKILLS",
    education: "EDUCATION",
    certifications: "INTERESTS",
    experience: "WORK EXPERIENCE",
    projects: "PERSONAL PROJECTS",
    technicalSummary: "LANGUAGES",
  },

  sectionLayout: {
    main: [
      { id: 'experience-base', type: 'experience', source: 'base' },
      { id: 'education-base', type: 'education', source: 'base' },
    ],
    sidebar: [
      { id: 'skills-base', type: 'skills', source: 'base' },
      { id: 'projects-base', type: 'projects', source: 'base' },
      { id: 'technicalSummary-base', type: 'technicalSummary', source: 'base' },
      { id: 'certifications-base', type: 'certifications', source: 'base' },
    ],
  },
};

export default creativeBlueDefaults;