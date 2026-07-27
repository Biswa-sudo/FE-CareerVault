const professionalDarkDefaults = {
  personalInfo: {
    fullName: "ROBERT FOX",
    title: "Senior Business Analyst",
    summary: "Dedicated and analytical Senior Business Analyst with over 8 years of experience driving process improvements and strategic initiatives. Adept at bridging the gap between business objectives and technology solutions, optimizing operational workflows, and delivering actionable data insights. Proven track record of reducing operational costs by 15% through meticulous workflow analysis and process re-engineering.",
    email: "robert.fox@example.com",
    phone: "+1 (555) 345-6789",
    location: "Seattle, WA",
    linkedin: "linkedin.com/in/robertfox",
    github: "",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
  },

  experience: [
    {
      title: "Senior Business Analyst",
      company: "Stellar Analytics Co.",
      location: "Seattle, WA",
      duration: "2019 - Present",
      achievementsText: "Led a cross-functional team of 10 to implement a new enterprise CRM system, migrating 50,000+ customer records with zero data loss.\nConducted comprehensive gap analysis identifying inefficiencies that led to a 15% reduction in quarterly operational costs.\nFacilitated requirement gathering workshops with C-level stakeholders to define MVP scope for a new analytics dashboard.\nDesigned and maintained KPIs using Tableau, improving executive decision-making speed by 30%.",
    },
    {
      title: "Business Systems Analyst",
      company: "DataDriven Solutions",
      location: "Portland, OR",
      duration: "2015 - 2019",
      achievementsText: "Authored detailed Business Requirements Documents (BRD) and Functional Requirements Documents (FRD) for 15+ software releases.\nActed as the primary liaison between the business units and IT, translating complex technical jargon into clear business terminology.\nManaged UAT phases, coordinating testing scripts and bug resolution strategies ensuring 98% defect-free deployments.",
    }
  ],

  education: [
    {
      degree: "Master of Business Administration (MBA)",
      school: "University of Washington",
      year: "2013 - 2015",
    },
    {
      degree: "B.S. in Information Systems",
      school: "Oregon State University",
      year: "2009 - 2013",
    }
  ],

  skills: [
    { value: "Requirements Gathering" },
    { value: "Process Mapping" },
    { value: "Data Analysis & Visualization" },
    { value: "Agile & Scrum Methodologies" },
    { value: "Stakeholder Management" },
    { value: "UAT Coordination" }
  ],

  technicalSummary: {
    languages: "SQL, Python (Pandas/NumPy)",
    tools: "Tableau, PowerBI, Jira, Confluence, MS Visio, Advanced Excel",
    frameworks: "Scrum, Lean Six Sigma",
    databases: "MySQL, PostgreSQL",
    cloud: "",
    additional: [],
  },

  certifications: [
    { value: "Certified Business Analysis Professional (CBAP)" },
    { value: "Certified ScrumMaster (CSM)" }
  ],

  projects: [
    {
      title: "ERP Migration Strategy",
      description: "Spearheaded the business analysis phase for a multi-million dollar ERP migration. Delivered an exhaustive workflow assessment that minimized downtime during the transition phase."
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

export default professionalDarkDefaults;