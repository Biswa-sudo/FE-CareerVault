const timelineProfessionalDefaults = {
  personalInfo: {
    fullName: "ALEX MORGAN",
    title: "Senior Product Manager",
    summary: "Strategic Product Manager with 8+ years of experience leading cross-functional teams to build and scale B2B SaaS platforms. Proven track record of increasing user retention by 40% and driving $5M+ in new revenue streams. Expert in agile methodologies, data-driven decision making, and aligning product strategy with business objectives.",
    email: "alex.morgan@email.com",
    phone: "+44 7700 900123",
    location: "London, UK",
    linkedin: "linkedin.com/in/alexmorgan",
    github: "",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
  },

  experience: [
    {
      title: "Senior Product Manager",
      company: "TechNova Solutions",
      location: "London, UK",
      duration: "Jan 2021 – Present",
      achievementsText: "Spearheaded the launch of a new enterprise analytics module, resulting in a 25% increase in upsell revenue within Q1.\nManaged a cross-functional team of 12 engineers and designers using Agile/Scrum methodologies.\nReduced customer churn by 15% by implementing a user-centric feedback loop and prioritizing critical workflow features.\nCollaborated with executive leadership to define the annual product roadmap and resource allocation.",
    },
    {
      title: "Product Manager",
      company: "Innovate AI",
      location: "Manchester, UK",
      duration: "Mar 2017 – Dec 2020",
      achievementsText: "Led the end-to-end development of a machine learning-driven recommendation engine, boosting user engagement by 40%.\nConducted A/B testing on core user journeys, improving conversion rates by 18%.\nAuthored detailed PRDs, user stories, and acceptance criteria for 3 major product releases.",
    }
  ],

  education: [
    {
      degree: "MSc in Technology Management",
      school: "Imperial College London",
      year: "2015 - 2016",
    },
    {
      degree: "BSc in Computer Science",
      school: "University of Manchester",
      year: "2011 - 2015",
    }
  ],

  skills: [
    { value: "Product Strategy" },
    { value: "Agile/Scrum" },
    { value: "User Research" },
    { value: "Data Analysis" },
    { value: "A/B Testing" },
    { value: "Go-to-Market" },
    { value: "Stakeholder Management" },
    { value: "Wireframing" }
  ],

  technicalSummary: {
    languages: "SQL, Python (Data Analysis), HTML/CSS",
    tools: "Jira, Confluence, Figma, Mixpanel, Tableau, Salesforce",
    frameworks: "Scrum, Kanban, Lean Startup",
    databases: "",
    cloud: "",
    additional: [],
  },

  certifications: [
    { value: "Certified Scrum Product Owner (CSPO)" },
    { value: "Pragmatic Institute Certified (PMC-III)" }
  ],

  projects: [
    {
      title: "Customer Portal Redesign",
      description: "Led a 6-month initiative to overhaul the legacy customer portal. Conducted 30+ user interviews and collaborated with UX to deliver a modern interface that improved CSAT scores by 35%."
    }
  ],

  sectionHeadings: {
    contact: "CONTACT",
    skills: "CORE COMPETENCIES",
    education: "EDUCATION",
    certifications: "CERTIFICATIONS",
    experience: "WORK EXPERIENCE",
    projects: "KEY PROJECTS",
    technicalSummary: "TECHNICAL SKILLS",
  },

  sectionLayout: {
    sidebar: [
      { id: 'skills-base', type: 'skills', source: 'base' },
      { id: 'technicalSummary-base', type: 'technicalSummary', source: 'base' },
      { id: 'certifications-base', type: 'certifications', source: 'base' },
    ],
    main: [
      { id: 'experience-base', type: 'experience', source: 'base' },
      { id: 'education-base', type: 'education', source: 'base' },
      { id: 'projects-base', type: 'projects', source: 'base' },
    ],
  },
};

export default timelineProfessionalDefaults;