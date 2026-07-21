const elegantSplitDefaults = {
  personalInfo: {
    fullName: "SARAH JENKINS",
    title: "Senior Product Designer",
    summary: "Award-winning Product Designer with over 7 years of experience transforming complex problems into elegant, user-centric solutions. Adept at leading cross-functional design sprints, establishing robust design systems, and elevating product aesthetics. Passionate about accessibility and data-informed design decisions.",
    email: "sarah.jenkins@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/sarahjenkins",
    github: "dribbble.com/sarahjenkins",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },

  experience: [
    {
      title: "Lead Product Designer",
      company: "Innovate Tech",
      location: "San Francisco, CA",
      duration: "2020 – Present",
      achievementsText: "Spearheaded the redesign of the core SaaS platform, increasing user engagement by 45% within the first quarter of launch.\nEstablished and maintained a comprehensive design system, reducing design-to-development handoff time by 30%.\nMentored a team of 4 junior designers, conducting weekly design critiques and 1-on-1 growth sessions.\nCollaborated directly with the VP of Product to shape the annual product roadmap and vision.",
    },
    {
      title: "UX/UI Designer",
      company: "Creative Solutions Agency",
      location: "Austin, TX",
      duration: "2016 – 2020",
      achievementsText: "Delivered end-to-end design solutions for 15+ Fortune 500 clients spanning fintech, healthcare, and e-commerce sectors.\nConducted extensive user research, including 50+ user interviews and usability testing sessions per quarter.\nPrototyped high-fidelity interactive mockups using Figma and Principle.",
    }
  ],

  education: [
    {
      degree: "BFA in Interaction Design",
      school: "California College of the Arts",
      year: "2012 - 2016",
    }
  ],

  skills: [
    { value: "UI/UX Design" },
    { value: "Interaction Design" },
    { value: "Design Systems" },
    { value: "User Research" },
    { value: "Wireframing" },
    { value: "Prototyping" },
    { value: "Agile/Scrum" }
  ],

  technicalSummary: {
    languages: "HTML5, CSS3, Basic JavaScript",
    tools: "Figma, Sketch, Adobe Creative Suite, Principle, Webflow",
    frameworks: "Material Design, Human Interface Guidelines",
    databases: "",
    cloud: "",
    additional: [],
  },

  certifications: [
    { value: "Google UX Design Professional Certificate" },
    { value: "Nielsen Norman Group UX Certification" }
  ],

  projects: [
    {
      title: "Fintech Dashboard Overhaul",
      description: "Led the UX strategy and UI design for a major banking analytics dashboard, resulting in a 20% increase in daily active users and securing a highly commended design award in 2022."
    }
  ],

  sectionHeadings: {
    contact: "CONTACT",
    skills: "SKILLS",
    education: "EDUCATION",
    certifications: "CERTIFICATIONS",
    experience: "EXPERIENCE",
    projects: "PROJECTS",
    technicalSummary: "TECHNICAL EXPERTISE",
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
      { id: 'projects-base', type: 'projects', source: 'base' },
      { id: 'education-base', type: 'education', source: 'base' },
    ],
  },
};

export default elegantSplitDefaults;