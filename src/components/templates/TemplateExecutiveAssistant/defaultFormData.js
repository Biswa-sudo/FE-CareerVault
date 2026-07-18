const templateExecutiveAssistantDefaults = {
  personalInfo: {
    fullName: "ELSIE MURRAY",
    title: "Executive Assistant | Time Management | Project Coordination",
    summary: "With over a decade of experience as an executive assistant within environmentally focused companies, I've honed critical skills in project coordination, executive communication, and efficient workflow management. My top achievement includes significantly improving operational efficiency, and I am eager to apply this expertise to continue creating organized, productive environments.",
    email: "name@example.com",
    phone: "+44 20 7123 4567",
    location: "Portsmouth, UK",
    linkedin: "linkedin.com",
    github: "",
    image: "",
  },

  projects: [
    {
      title: "Project Timelines Mastery",
      description: "Successfully managed project timelines, positively impacting over 15 projects at EnviroRenewables Ltd."
    },
    {
      title: "Email System Overhaul",
      description: "Created an efficient email management system at BioEnergy Resources Ltd, improving executive responsiveness by 20%."
    },
    {
      title: "Operational Efficiency Improvement",
      description: "Drove a 15% increase in process efficiency through proactive operational project support at GreenTech Innovations Ltd."
    },
    {
      title: "Digitalization Expert",
      description: "Implemented digital filing system, enhancing document retrieval speeds for executives at GreenTech Innovations Ltd by 30%."
    }
  ],

  skills: [
    { value: "Time Management" },
    { value: "Communication" },
    { value: "Project Coordination" },
    { value: "Strategic Planning" },
    { value: "Calendar Management" },
    { value: "Email Correspondence" }
  ],

  certifications: [
    { value: "Advanced Project Management Certification|Acquired skills in project planning, execution, and leadership with Project Management Institute." },
    { value: "Certified Administrative Professional (CAP)|Enhanced administrative proficiency with the International Association of Administrative Professionals." }
  ],

  experience: [
    {
      title: "Senior Executive Assistant",
      company: "GreenTech Innovations Ltd",
      location: "",
      duration: "01/2019 - 12/2022 | London, UK",
      achievementsText: "Orchestrated the CEO's calendar, reducing scheduling conflicts by 40% through meticulous planning and coordination.\nEnhanced executive productivity by managing email correspondence, strategically prioritising over 100 emails daily.\nInitiated a digital filing system for key documents, improving information retrieval times for the executive team by 30%.\nSupported a company-wide operational project resulting in a 15% increase in process efficiency by tracking milestones and coordinating project updates.\nCurated and distributed executive meeting agendas and minutes, sharpening decision-making processes in over 50 board meetings.\nAdministered travel arrangements, crafting seamless itineraries for 25+ international trips which led to reduction in travel stress for executives."
    },
    {
      title: "Executive Assistant",
      company: "BioEnergy Resources Ltd",
      location: "",
      duration: "06/2015 - 12/2018 | Bristol, UK",
      achievementsText: "Implemented a custom email management system, ensuring urgent matters were addressed promptly, increasing executive responsiveness by 20%.\nFacilitated cross-departmental communication, resulting in improved project completion rates by 25%.\nCoordinated logistics for 40+ internal and external meetings monthly, improving organizational efficiency.\nStreamlined the preparation of board meetings, contributing to a time-saving of 10 hours per month.\nAssisted in preparing comprehensive research briefs for the Executive which influenced key business strategies."
    },
    {
      title: "Project Coordinator",
      company: "EnviroRenewables Ltd",
      location: "",
      duration: "02/2012 - 05/2015 | Southampton, UK",
      achievementsText: "Managed project timelines and coordinated with teams to ensure deliverables were achieved on time, impacting over 15 projects.\nImplemented a streamlined reporting system increasing inter-team transparency and collaboration, influencing project success rates.\nLiaised with stakeholders to gather project requirements, leading to improved project outcomes tailored to client needs.\nAdministered budget tracking for project expenses, maintaining accuracy within a 5% margin for project financials."
    }
  ],

  education: [
    {
      degree: "MSc Environmental Management",
      school: "University of Oxford",
      year: "01/2010 - 01/2012 | Oxford, UK"
    },
    {
      degree: "BA Business Administration",
      school: "University of Portsmouth",
      year: "01/2006 - 01/2010 | Portsmouth, UK"
    }
  ],

  technicalSummary: {
    languages: "English|Native|5\nSpanish|Advanced|3",
    tools: "",
    frameworks: "",
    databases: "",
    cloud: "",
    additional: []
  },

  sectionHeadings: {
    contact: "CONTACT",
    skills: "SKILLS",
    education: "EDUCATION",
    certifications: "COURSES",
    experience: "EXPERIENCE",
    projects: "ACHIEVEMENTS",
    technicalSummary: "LANGUAGES"
  },

  sectionLayout: {
    sidebar: [
      { id: 'projects-base', type: 'projects', source: 'base' },
      { id: 'skills-base', type: 'skills', source: 'base' },
      { id: 'certifications-base', type: 'certifications', source: 'base' }
    ],
    main: [
      { id: 'experience-base', type: 'experience', source: 'base' },
      { id: 'education-base', type: 'education', source: 'base' },
      { id: 'technicalSummary-base', type: 'technicalSummary', source: 'base' }
    ]
  },
};

export default templateExecutiveAssistantDefaults;